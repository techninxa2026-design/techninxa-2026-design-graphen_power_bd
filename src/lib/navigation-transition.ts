// Preserve real document navigation. No client router or DOM replacement.
const root=document.documentElement;
const curtain=document.querySelector<HTMLElement>('#navigation-curtain');
const title=curtain?.querySelector<HTMLElement>('[data-navigation-title]');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const key='graphene-navigation-v1';
let pending:URL|null=null;
let timer=0;
let unlockTimer=0;
const cleanPath=(p:string)=>p.replace(/\/+$/,'')||'/';
const isDocument=(path:string)=>/^\/(?:about|services|solutions|resources|contact|products(?:\/[a-z0-9-]+)?|404)?\/?$/.test(path);
function labelFor(a:HTMLAnchorElement,url:URL){
  const p=cleanPath(url.pathname);
  if(p==='/')return 'Home.';
  if(p==='/products')return 'Equipment.';
  if(p==='/products/gallery')return 'Product gallery.';
  if(p.startsWith('/products/'))return (a.querySelector('h3,strong,h4')?.textContent?.trim()||p.split('/').pop()!.replace(/-/g,' ')).slice(0,60);
  return ({'/about':'Company.','/services':'Engineering.','/solutions':'Solutions.','/resources':'Resources.','/contact':'Project inquiry.'} as Record<string,string>)[p]||'Explore.';
}
function reset(){if(timer)clearTimeout(timer);if(unlockTimer)clearTimeout(unlockTimer);timer=unlockTimer=0;pending=null;delete root.dataset.navigationPhase;delete root.dataset.navigationLabel;}
function go(){const url=pending;if(!url)return;pending=null;if(timer)clearTimeout(timer);timer=0;location.assign(url.href);unlockTimer=window.setTimeout(reset,1800);}
if(root.dataset.navigationPhase==='enter'){
  if(title)title.textContent=root.dataset.navigationLabel||'Explore.';
  unlockTimer=window.setTimeout(reset,1000);
}
document.addEventListener('click',event=>{
  if(!curtain||root.dataset.navigationMode!=='curtain'||reduced.matches||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||!(event.target instanceof Element))return;
  const a=event.target.closest<HTMLAnchorElement>('a[href]');
  if(!a||a.hasAttribute('download')||(a.target&&a.target.toLowerCase()!=='_self')||a.hasAttribute('data-no-transition')||a.relList.contains('external'))return;
  let url:URL;try{url=new URL(a.href,location.href);}catch{return;}
  if(url.origin!==location.origin||!/^https?:$/.test(url.protocol)||!isDocument(url.pathname))return;
  if(cleanPath(url.pathname)===cleanPath(location.pathname)&&url.search===location.search)return;
  if(pending||root.dataset.navigationPhase==='exit'){event.preventDefault();return;}
  const label=labelFor(a,url);
  // Without a reliable cross-document marker, use normal navigation instead.
  try{sessionStorage.setItem(key,JSON.stringify({to:url.pathname+url.search,at:Date.now(),label}));}catch{return;}
  event.preventDefault();
  if(unlockTimer)clearTimeout(unlockTimer);
  if(title)title.textContent=label;
  pending=url;root.dataset.navigationPhase='exit';
  timer=window.setTimeout(go,390);
});
reduced.addEventListener('change',()=>{if(reduced.matches){if(pending)go();else reset();}});
window.addEventListener('pageshow',event=>{if(event.persisted)reset();});
window.addEventListener('pagehide',()=>{if(timer)clearTimeout(timer);if(unlockTimer)clearTimeout(unlockTimer);timer=unlockTimer=0;pending=null;});
