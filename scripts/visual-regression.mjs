import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const dist = path.join(process.cwd(), 'dist');
const roots = [path.join(dist, 'baseline'), path.join(dist, 'site')];
const pages = (await fs.readdir(roots[0])).filter((name) => name.endsWith('.html')).sort();
const widths = [360, 390, 720, 768, 1050, 1440];
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.txt': 'text/plain' };

async function startServer(root) {
  const server = http.createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost/').pathname);
      const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
      const file = path.resolve(root, relative);
      if (!file.startsWith(root + path.sep) && file !== path.join(root, 'index.html')) { res.writeHead(403); res.end(); return; }
      const data = await fs.readFile(file);
      res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    } catch { res.writeHead(404); res.end('Not found'); }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  return { server, base: 'http://127.0.0.1:' + server.address().port + '/' };
}

const servers = await Promise.all(roots.map(startServer));
const browser = await chromium.launch({ headless: true });
const contexts = await Promise.all(servers.map(async () => browser.newContext({ viewport: { width: 390, height: 850 }, reducedMotion: 'reduce', deviceScaleFactor: 1 })));
const tabs = await Promise.all(contexts.map((c) => c.newPage()));
const failures = [];
const jsErrors = [];
tabs[1].on('pageerror', (e) => jsErrors.push(e.message));
let screenshots = 0;
try {
  for (const name of pages) {
    for (const width of widths) {
      const height = width <= 720 ? 850 : 900;
      await Promise.all(tabs.map((page) => page.setViewportSize({ width, height })));
      for (let i = 0; i < 2; i++) {
        await tabs[i].goto(servers[i].base + name, { waitUntil: 'networkidle' });
        await tabs[i].evaluate(async () => {
          document.querySelectorAll('img[loading="lazy"]').forEach((el) => { el.loading = 'eager'; });
          await Promise.all([...document.images].map((el) => el.decode().catch(() => {})));
        });
        await tabs[i].addStyleTag({ content: '*{animation:none!important;transition:none!important;scroll-behavior:auto!important} .office-toast{display:none!important}' });
      }
      const [first, second] = await Promise.all(tabs.map((p) => p.screenshot({ fullPage: true, animations: 'disabled' })));
      const a = PNG.sync.read(first);
      const b = PNG.sync.read(second);
      screenshots += 2;
      if (a.width !== b.width || a.height !== b.height) {
        failures.push(name + ' @' + width + ': diferentes dimensiones ' + a.width + 'x' + a.height + ' y ' + b.width + 'x' + b.height);
        continue;
      }
      const differentPixels = pixelmatch(a.data, b.data, null, a.width, a.height, { threshold: 0.1 });
      const tolerance = Math.max(50, Math.round(a.width * a.height * 0.0001));
      if (differentPixels > tolerance) failures.push(name + ' @' + width + ': ' + differentPixels + ' pixels distintos; tolerancia ' + tolerance);
    }
  }
  const candidate = tabs[1];
  await candidate.setViewportSize({ width: 390, height: 850 });
  await candidate.goto(servers[1].base + 'index.html', { waitUntil: 'networkidle' });
  await candidate.locator('[data-menu-button]').click();
  if (await candidate.locator('[data-menu-button]').getAttribute('aria-expanded') !== 'true') failures.push('menu movil no abre');
  await candidate.locator('[data-menu-button]').click();
  if (await candidate.locator('[data-menu-button]').getAttribute('aria-expanded') !== 'false') failures.push('menu movil no cierra');
  const carousel = candidate.locator('[data-client-stage]');
  if (await carousel.count()) {
    const before = await carousel.locator('[aria-current="true"]').getAttribute('aria-label');
    await candidate.locator('[data-client-next]').click();
    await candidate.waitForTimeout(450);
    const after = await carousel.locator('[aria-current="true"]').getAttribute('aria-label');
    if (before === after) failures.push('carrusel no avanza');
  }
  for (const pageName of ['registro.html', 'viabilidad.html', 'oficios.html', 'declaracion.html', 'renovacion.html', 'aviso-comercial.html']) {
    await candidate.goto(servers[1].base + pageName, { waitUntil: 'networkidle' });
    const paths = candidate.locator('[data-route-path]');
    if (!(await paths.count())) failures.push(pageName + ': ruta SVG ausente');
  }
} finally {
  await Promise.all(contexts.map((c) => c.close()));
  await browser.close();
  await Promise.all(servers.map(({ server }) => new Promise((resolve) => server.close(resolve))));
}
const reportFile = path.join(dist, 'reporte-v114.json');
const report = JSON.parse(await fs.readFile(reportFile, 'utf8'));
report.visualRegression = { pagesChecked: pages.length, widths, screenshots, failures, jsErrors, status: failures.length || jsErrors.length ? 'FAILED' : 'PASS' };
await fs.writeFile(reportFile, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.visualRegression, null, 2));
if (failures.length || jsErrors.length) process.exit(1);
