import {readdir,readFile,writeFile,mkdir,copyFile,stat} from 'node:fs/promises';
import {resolve,relative,sep,join} from 'node:path';
import {deflateRawSync,crc32} from 'node:zlib';

const dist=resolve('dist'), output=resolve('releases','graphene-power-bd-cpanel.zip');
const origin='https://graphenepowerbd.com';
const fail=message=>{throw new Error(message);};
const exists=async p=>{try{return (await stat(p)).isFile();}catch{return false;}};
async function walk(dir){
 const files=[];
 for(const item of await readdir(dir,{withFileTypes:true})){
  const p=join(dir,item.name);
  if(item.isSymbolicLink())fail('Unexpected symlink: '+p);
  if(item.isDirectory())files.push(...await walk(p));
  else if(item.isFile())files.push(p);
 }
 return files;
}
if(!await exists(join(dist,'index.html')))fail('Production build missing: run npm run build.');
// Astro may omit dotfiles during asset copying. Explicitly copy Apache configuration.
await copyFile('public/.htaccess',join(dist,'.htaccess'));
const paths=(await walk(dist)).sort();
const rel=p=>relative(dist,p).split(sep).join('/');
const names=new Set(paths.map(rel));
const required=['index.html','404.html','.htaccess','robots.txt','sitemap.xml','theme.js','navigation-bootstrap.js','favicon.ico','about/index.html','contact/index.html','services/index.html','solutions/index.html','resources/index.html','products/index.html','products/gallery/index.html'];
for(const p of required)if(!names.has(p))fail('Missing required file: '+p);
const sitemap=await readFile(join(dist,'sitemap.xml'),'utf8');
const routes=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>new URL(x[1]));
const routeFile=u=>decodeURIComponent(u.pathname).replace(/^\//,'')+(u.pathname.endsWith('/')?'index.html':'');
const publicPages=paths.filter(p=>rel(p).endsWith('index.html')).map(rel);
const indexedPages=new Set(routes.map(routeFile));
if(routes.length!==publicPages.length||routes.length!==indexedPages.size||publicPages.some(p=>!indexedPages.has(p)))fail('Sitemap must list each public page exactly once.');
for(const u of routes){if(u.origin!==origin||!names.has(routeFile(u)))fail('Invalid sitemap route: '+u.href);}
const pdfs=paths.filter(p=>rel(p).startsWith('catalogues/')&&p.endsWith('.pdf'));
if(pdfs.length!==13)fail('Expected 13 catalogues, got '+pdfs.length);
for(const p of pdfs){const b=await readFile(p);if(!b.subarray(0,5).equals(Buffer.from('%PDF-'))||!b.subarray(-64).includes(Buffer.from('%%EOF')))fail('Invalid PDF: '+rel(p));}
if(!paths.some(p=>rel(p).startsWith('_astro/')&&p.endsWith('.js')))fail('Bundled JavaScript missing.');
const issues=new Set();let links=0;const externalImages=new Set();
for(const p of paths.filter(p=>p.endsWith('.html'))){
 const html=await readFile(p,'utf8');
 // Check ordinary quoted local href/src references, excluding inline protocol links.
 for(const m of html.matchAll(/\b(href|src)\s*=\s*["']([^"']+)["']/gi)){
  const raw=m[2].replaceAll('&amp;','&');
  if(raw.startsWith('#')||/^(?:data:|tel:|mailto:|blob:|javascript:)/i.test(raw))continue;
  let u;try{u=new URL(raw,origin+'/'+rel(p).replace(/index\.html$/,''));}catch{continue;}
  if(u.origin!==origin){if(m[1].toLowerCase()==='src'&&/^https?:$/.test(u.protocol))externalImages.add(u.href);continue;}
  const n=decodeURIComponent(u.pathname).replace(/^\//,'');
  if(!names.has(n)&&!names.has(n.replace(/\/$/,'')+'/index.html')&&!names.has(n+'index.html')&&!(n===''&&names.has('index.html')))issues.add(rel(p)+' -> '+raw);
  links++;
 }
 for(const m of html.matchAll(/\bsrcset\s*=\s*["']([^"']+)["']/gi)){
  for(const image of m[1].split(',')){
   const src=image.trim().split(/\s+/)[0];
   if(src.startsWith('/')&&!names.has(decodeURIComponent(src.slice(1))))issues.add(rel(p)+' -> '+src);
  }
 }
 if(!html.includes('Graphene Power Engineering'))issues.add(rel(p)+' -> company identity missing');
}
if(issues.size)fail('Invalid local references:\n'+[...issues].slice(0,30).join('\n'));
for(const n of names){if(/(^|\/)(?:node_modules|\.git|\.env(?:\.|$)|src|docs)(?:\/|$)/.test(n))fail('Non-public source or secret path: '+n);}
// Standard ZIP (deflate, UTF-8 names, CRC32). Root entries are public_html contents.
const chunks=[],central=[];let offset=0;
for(const p of paths){
 const data=await readFile(p), name=Buffer.from(rel(p)), compressed=deflateRawSync(data,{level:9}), crc=crc32(data);
 if(data.length>0xffffffff||compressed.length>0xffffffff||offset>0xffffffff)fail('ZIP64 is not supported');
 const local=Buffer.alloc(30);local.writeUInt32LE(0x04034b50,0);local.writeUInt16LE(20,4);local.writeUInt16LE(0x800,6);local.writeUInt16LE(8,8);local.writeUInt16LE(33,12);local.writeUInt32LE(crc,14);local.writeUInt32LE(compressed.length,18);local.writeUInt32LE(data.length,22);local.writeUInt16LE(name.length,26);
 const entry=Buffer.alloc(46);entry.writeUInt32LE(0x02014b50,0);entry.writeUInt16LE(20,4);entry.writeUInt16LE(20,6);entry.writeUInt16LE(0x800,8);entry.writeUInt16LE(8,10);entry.writeUInt16LE(33,14);entry.writeUInt32LE(crc,16);entry.writeUInt32LE(compressed.length,20);entry.writeUInt32LE(data.length,24);entry.writeUInt16LE(name.length,28);entry.writeUInt32LE(offset,42);
 chunks.push(local,name,compressed);central.push(entry,name);offset+=local.length+name.length+compressed.length;
}
const directory=Buffer.concat(central),end=Buffer.alloc(22);if(paths.length>65535)fail('Too many ZIP entries');
end.writeUInt32LE(0x06054b50,0);end.writeUInt16LE(paths.length,8);end.writeUInt16LE(paths.length,10);end.writeUInt32LE(directory.length,12);end.writeUInt32LE(offset,16);
await mkdir(resolve('releases'),{recursive:true});await writeFile(output,Buffer.concat([...chunks,directory,end]));
console.log('Verified '+routes.length+' public routes, '+pdfs.length+' PDFs, '+links+' local references and '+paths.length+' files.');
console.log('External image URLs: '+externalImages.size+' (availability and publication permission not verified).');
console.log('Upload-ready ZIP: '+output);
