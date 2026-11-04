import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import zlib from 'node:zlib';
import {spawn} from 'node:child_process';
import {chromium} from 'playwright';

const ROOT=process.cwd();
const SITE=path.join(ROOT,'dist','site');
const DEST=path.join(ROOT,'dist','lighthouse');
await fs.mkdir(DEST,{recursive:true});
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.jpg':'image/jpeg','.ico':'image/x-icon','.xml':'application/xml','.txt':'text/plain'};
const server=http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost');
  let rel=decodeURIComponent(url.pathname).replace(/^\/+/, '')||'index.html';
  if(rel.includes('..')){res.writeHead(403);res.end();return;}
  const filename=path.resolve(SITE,rel);
  if(!filename.startsWith(SITE+path.sep)){res.writeHead(403);res.end();return;}
  const data=await fs.readFile(filename);
  const headers={'Content-Type':types[path.extname(filename)]||'application/octet-stream','Cache-Control':'public, max-age=3600'};
  if(/\.(html|css|js|xml|txt)$/.test(filename)&&String(req.headers['accept-encoding']||'').includes('gzip')){
   headers['Content-Encoding']='gzip'; headers['Vary']='Accept-Encoding';
   const bytes=zlib.gzipSync(data,{level:9});headers['Content-Length']=String(bytes.length);
   res.writeHead(200,headers);res.end(bytes);
  }else{headers['Content-Length']=String(data.length);res.writeHead(200,headers);res.end(data);}
 }catch(e){res.writeHead(404);res.end('Not found');}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const base='http://127.0.0.1:'+server.address().port+'/';
const targets=[
 ['index.html','mobile'],['registro.html','mobile'],['viabilidad.html','mobile'],
 ['oficios.html','mobile'],['declaracion.html','mobile'],['renovacion.html','mobile'],
 ['aviso-comercial.html','mobile'],['marqsafe.html','mobile'],['blog.html','mobile'],
 ['bloque-1.html','mobile'],['contacto.html','mobile'],['aviso-de-privacidad.html','mobile'],
 ['index.html','desktop'],['registro.html','desktop'],['blog.html','desktop']
];
const summaries=[];
function exec(file,args,opts){
 return new Promise((resolve,reject)=>{
  const p=spawn(file,args,opts);
  let stdout='',stderr='';
  p.stdout.on('data',b=>{stdout+=String(b)});
  p.stderr.on('data',b=>{stderr+=String(b)});
  p.on('close',code=>code===0?resolve({stdout,stderr}):reject(new Error(file+' exit '+code+'\n'+stderr.slice(-4000)+'\n'+stdout.slice(-3000))));
  p.on('error',reject);
 });
}
try{
 for(const [page,profile] of targets){
  const output=path.join(DEST,page.replace('.html','')+'-'+profile+'.json');
  const cli=path.join(ROOT,'node_modules','.bin','lighthouse');
  const args=[base+page,'--quiet','--output=json','--output-path='+output,'--only-categories=performance,accessibility,best-practices,seo','--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage','--max-wait-for-load=45000'];
  if(profile==='desktop')args.push('--preset=desktop');
  await exec(cli,args,{cwd:ROOT,env:{...process.env,CHROME_PATH:chromium.executablePath()}});
  const lhr=JSON.parse(await fs.readFile(output,'utf8'));
  const a=lhr.audits;
  const metric=(key)=>({numeric:a[key]?.numericValue??null,display:a[key]?.displayValue??null});
  const problems=Object.values(a).filter(x=>x.score!==null&&x.score!==undefined&&x.score<1&&x.details?.type!=='opportunity').sort((a,b)=>(a.score??1)-(b.score??1)).slice(0,14).map(x=>({id:x.id,title:x.title,score:x.score,display:x.displayValue}));
  const row={page,profile,scores:Object.fromEntries(Object.entries(lhr.categories).map(([k,v])=>[k,Math.round((v.score||0)*100)])),fcp:metric('first-contentful-paint'),lcp:metric('largest-contentful-paint'),cls:metric('cumulative-layout-shift'),tbt:metric('total-blocking-time'),speedIndex:metric('speed-index'),ttfb:metric('server-response-time'),requests:a['network-requests']?.details?.items?.length??null,resourceSummary:a['resource-summary']?.details?.items??[],problems};
  summaries.push(row);
  console.log(JSON.stringify({page,profile,scores:row.scores,LCP:row.lcp.display,TBT:row.tbt.display,CLS:row.cls.display}));
 }
}finally{server.close()}
await fs.writeFile(path.join(DEST,'summary.json'),JSON.stringify({purpose:'Pruebas sintéticas en GitHub Actions contra servidor local con gzip y cache de 1 hora; NO son resultados de Hostinger ni usuarios reales',generatedAt:new Date().toISOString(),runs:summaries},null,2));
console.log('LIGHTHOUSE_SUMMARY '+JSON.stringify(summaries.map(x=>({page:x.page,profile:x.profile,scores:x.scores,LCP:x.lcp.numeric,TBT:x.tbt.numeric,CLS:x.cls.numeric}))));
