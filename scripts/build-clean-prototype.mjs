import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';
import { transform } from 'lightningcss';
import archiver from 'archiver';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const BASE = path.join(DIST, 'baseline');
const SITE = path.join(DIST, 'site');
const ORIGINAL_CSS = path.join(ROOT, 'assets/css/styles.css');
const ORIGINAL_JS = path.join(ROOT, 'assets/js/main.js');
const htmlNames = (await fs.readdir(ROOT)).filter((name) => name.endsWith('.html')).sort();
const sourceCss = await fs.readFile(ORIGINAL_CSS, 'utf8');
const sourceJs = await fs.readFile(ORIGINAL_JS, 'utf8');
for (const [file, content] of [[ORIGINAL_JS, sourceJs], [ORIGINAL_CSS, sourceCss]]) {
  if (/\/\*[\s\S]*?\*\//.test(content) || /(^|\n)\s*\/\/[^\n]*/.test(content)) throw new Error('Comentarios de desarrollo encontrados en '+file);
}
for (const name of htmlNames) {
  const html=await fs.readFile(path.join(ROOT,name),'utf8');
  if (/<!--[\s\S]*?-->/.test(html)) throw new Error('Comentario HTML encontrado en '+name);
}
const sourceHtml = (await Promise.all(htmlNames.map((name) => fs.readFile(path.join(ROOT, name), 'utf8')))).join('\n');

await fs.rm(DIST, { recursive: true, force: true });
await fs.mkdir(BASE, { recursive: true });
await fs.mkdir(SITE, { recursive: true });

const root = postcss.parse(sourceCss, { from: ORIGINAL_CSS });
const dropped = [];
const NEVER_DROP_PREFIXES = ['is-', 'has-', 'js-', 'motion-', 'client-logo-', 'route-', 'office-', 'data-', 'aria-'];
const isKnownClass = (name) => sourceHtml.includes(name) || sourceJs.includes(name) || NEVER_DROP_PREFIXES.some((prefix) => name.startsWith(prefix));

root.walkRules((rule) => {
  if (!rule.selector) return;
  let parent = rule.parent;
  while (parent) {
    if (parent.type === 'atrule' && /keyframes/i.test(parent.name)) return;
    parent = parent.parent;
  }
  let ast;
  try { ast = selectorParser().astSync(rule.selector); } catch { return; }
  const allBranchesUnreachable = ast.nodes.length > 0 && ast.nodes.every((selector) => {
    const positivelyRequiredClasses = selector.nodes.filter((node) => node.type === 'class').map((node) => node.value);
    return positivelyRequiredClasses.some((name) => !isKnownClass(name));
  });
  if (allBranchesUnreachable) {
    dropped.push(rule.selector);
    rule.remove();
  }
});

const prunedCss = root.toString();
const transformed = transform({
  filename: 'styles.css',
  code: Buffer.from(prunedCss, 'utf8'),
  minify: true,
  sourceMap: false,
  errorRecovery: false
});
const optimizedCss = transformed.code.toString('utf8');

const copyFile = async (src, dst) => {
  await fs.mkdir(path.dirname(dst), { recursive: true });
  await fs.copyFile(src, dst);
};

const rootFiles = [...htmlNames, '.htaccess', 'robots.txt', 'sitemap.xml'];
for (const file of rootFiles) {
  await copyFile(path.join(ROOT, file), path.join(BASE, file));
  await copyFile(path.join(ROOT, file), path.join(SITE, file));
}
await copyFile(ORIGINAL_JS, path.join(BASE, 'assets/js/main.js'));
await copyFile(ORIGINAL_JS, path.join(SITE, 'assets/js/main.js'));
await copyFile(ORIGINAL_CSS, path.join(BASE, 'assets/css/styles.css'));
await fs.mkdir(path.join(SITE, 'assets/css'), { recursive: true });
await fs.writeFile(path.join(SITE, 'assets/css/styles.css'), optimizedCss, 'utf8');

const allowedImages = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico', '.avif', '.gif']);
let imagesIncluded = 0;
const copyImages = async (dir, relative) => {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(relative, entry.name);
    if (entry.isDirectory()) {
      await copyImages(full, rel);
    } else if (allowedImages.has(path.extname(entry.name).toLowerCase())) {
      await copyFile(full, path.join(BASE, rel));
      await copyFile(full, path.join(SITE, rel));
      imagesIncluded += 1;
    }
  }
};
await copyImages(path.join(ROOT, 'assets/img'), 'assets/img');
await copyImages(path.join(ROOT, 'assets/marcas-clientes'), 'assets/marcas-clientes');

execFileSync('node', ['--check', ORIGINAL_JS], { stdio: 'pipe' });
const localMissing = [];
let h1Problems = [];
for (const file of htmlNames) {
  const content = await fs.readFile(path.join(SITE, file), 'utf8');
  if ((content.match(/<h1\b/gi) || []).length !== 1) h1Problems.push(file);
  for (const match of content.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const link = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|#|\/\/)/i.test(link)) continue;
    const local = link.split(/[?#]/)[0];
    if (!local || local === '/aviso-de-privacidad') continue;
    if (!fssync.existsSync(path.join(SITE, local.replace(/^\/+/, '')))) localMissing.push(file + ' -> ' + link);
  }
}
if (localMissing.length || h1Problems.length) {
  throw new Error(JSON.stringify({ localMissing, h1Problems }, null, 2));
}

const report = {
  version: 'v110',
  base: 'v108 commit 54c1c0a',
  approach: 'Eliminacion conservadora de reglas solo cuando todas sus alternativas exigen clases ausentes de todo el HTML y JS; minificacion de Lightning CSS sin reordenar manualmente la cascada.',
  cssOriginalBytes: Buffer.byteLength(sourceCss),
  cssAfterSafePruningBytes: Buffer.byteLength(prunedCss),
  cssOptimizedBytes: Buffer.byteLength(optimizedCss),
  cssRemovedRules: dropped.length,
  removedSelectors: dropped,
  jsOriginalBytes: Buffer.byteLength(sourceJs),
  jsChanged: false,
  htmlPages: htmlNames.length,
  imagesIncluded,
  docsExcludedFromZip: ['README.md', 'DESIGN.md', 'QA-AUDIT.md', 'ARCHITECTURE.md', 'SOURCES.md', 'docs/', 'assets/fonts/README.txt', 'assets/marcas-clientes/manifest.json'],
  legalNoticeIncluded: false,
  staticLinksValidated: true,
  javascriptSyntaxValidated: true,
  commentsRemovedFromWebCode: true
};
await fs.writeFile(path.join(DIST, 'reporte-v110.json'), JSON.stringify(report, null, 2));

const zipPath = path.join(DIST, 'MarqSafe_v110_prototipo_limpio.zip');
await new Promise((resolve, reject) => {
  const output = fssync.createWriteStream(zipPath);
  const zip = archiver('zip', { zlib: { level: 9 } });
  output.on('close', resolve);
  output.on('error', reject);
  zip.on('error', reject);
  zip.pipe(output);
  zip.directory(SITE, false);
  zip.finalize().catch(reject);
});
console.log(JSON.stringify({ originalCSS: report.cssOriginalBytes, prunedCSS: report.cssAfterSafePruningBytes, optimizedCSS: report.cssOptimizedBytes, removedRules: report.cssRemovedRules, pages: htmlNames.length, images: imagesIncluded, zip: zipPath }));
