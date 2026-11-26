/**
 * Scroll is the playhead. No wheel interception, no autoplay reveal, no scroll-jacking.
 * Every visual value is derived from current geometry and is reversible.
 */
const home=document.querySelector<HTMLElement>('.home-v3');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const large=matchMedia('(min-width: 1100px) and (min-height: 820px)');
const clamp=(v:number)=>Math.max(0,Math.min(1,v));
const range=(p:number,a:number,b:number)=>clamp((p-a)/(b-a));
const ease=(p:number)=>p*p*(3-2*p);
const mix=(a:number,b:number,p:number)=>a+(b-a)*p;
const hero=home?.querySelector<HTMLElement>('.motion-hero');
const track=home?.querySelector<HTMLElement>('.hero-scroll-track');
const sceneEls=Array.from(home?.querySelectorAll<HTMLElement>('[data-scroll-scene]')||[]);
const heroCounter=hero?.querySelector<HTMLElement>('[data-hero-percent]');
const matrix=Array.from(hero?.querySelectorAll<HTMLElement>('.sequence-matrix i')||[]);
const wave=hero?.querySelector<SVGPathElement>('.sequence-wave');
const originalWave=wave?.getAttribute('d')||'';
const circuit=Array.from(hero?.querySelectorAll<SVGPathElement>('[data-circuit]')||[]);
const circuitLengths=circuit.map(p=>p.getTotalLength());
const storyPath=home?.querySelector<SVGPathElement>('[data-scroll-circuit]');
const storyLength=storyPath?.getTotalLength()||0;
const records=sceneEls.map(el=>({el,kind:el.dataset.scrollScene||'',items:Array.from(el.querySelectorAll<HTMLElement>(el.dataset.scrollScene==='systems'?'.system-tile':el.dataset.scrollScene==='equipment'?'.editorial-photo':el.dataset.scrollScene==='engineering'?'.story-list>span':'.never-match'))}));
let frame=0;
let enabled=false;
function set(el:HTMLElement|undefined|null,key:string,v:number|string){el?.style.setProperty(key,String(v));}
function update(){
 frame=0;if(!enabled||!home||document.hidden)return;
 const vh=innerHeight;
 // Read geometry once, then write styles; no per-item layout reads during animation.
 const bounds=records.map(r=>({r,b:r.el.getBoundingClientRect()}));
 const hb=track?.getBoundingClientRect();
 const heroHeight=hero?.offsetHeight||vh;
 const pinned=large.matches&&track?.classList.contains('hero-pinned');
 const hp=hb?clamp((pinned?-hb.top:Math.max(0,-hb.top))/Math.max(1,pinned?hb.height-heroHeight:hb.height*.78)):0;
 const exit=ease(range(hp,.28,.94));
 if(hero&&hb&&hb.bottom>=-80&&hb.top<=vh){
  set(hero,'--hero-progress',hp);set(hero,'--hero-exit',exit);
  set(hero,'--hero-open',ease(range(hp,0,.72)));
  set(hero,'--hero-copy-y',mix(0,-115,exit)+'px');
  set(hero,'--hero-photo-scale',mix(1,1.24,ease(range(hp,.04,.85))));
  set(hero,'--hero-photo-rotate',mix(-6,2,ease(range(hp,.02,.85)))+'deg');
  if(heroCounter)heroCounter.textContent=String(Math.round(hp*100)).padStart(2,'0')+'%';
  if(wave){const w=ease(range(hp,.08,.95));wave.setAttribute('d','M0 '+mix(94,18,w)+' C230 '+mix(160,115,w)+' 445 '+mix(6,135,w)+' 690 '+mix(52,102,w)+' S1120 '+mix(166,15,w)+' 1440 '+mix(22,122,w)+' V140 H0Z');}
  circuit.forEach((el,i)=>{const p=ease(range(hp,i*.11,.38+i*.15));el.style.strokeDasharray=String(circuitLengths[i]);el.style.strokeDashoffset=String(circuitLengths[i]*(1-p));});
  matrix.forEach((el,i)=>{const d=Math.hypot(i%8-3.5,Math.floor(i/8)-2.5)/4.4;const p=ease(range(hp,d*.34,d*.34+.48));set(el,'--dot-wave',p);});
 }
 for(const {r,b} of bounds){
  if(r.kind==='hero')continue;
  // Enter at the bottom of the viewport, finish near the top. The value moves backward on upward scroll.
  const progress=clamp((vh-b.top)/(vh+Math.min(b.height,vh)*.22));
  const intro=ease(range(progress,.06,.7));
  set(r.el,'--scene-progress',progress);set(r.el,'--scene-intro',intro);
  if(b.bottom<0||b.top>vh)continue;
  r.items.forEach((el,i)=>{const t=ease(range(progress,.10+i*.10,.52+i*.10));set(el,'--item-progress',t);});
  if(r.kind==='equipment'){const travel=clamp((vh-b.top)/(b.height+vh));set(r.el,'--equipment-travel',travel);}
  if(r.kind==='engineering'&&storyPath){const t=ease(range(progress,.12,.88));storyPath.style.strokeDasharray=String(storyLength);storyPath.style.strokeDashoffset=String(storyLength*(1-t));}
 }
}
function queue(){if(enabled&&!frame)frame=requestAnimationFrame(update);}
function reset(){
 if(frame)cancelAnimationFrame(frame);frame=0;enabled=false;
 home?.classList.remove('scroll-story-active');track?.classList.remove('hero-pinned');
 if(hero)for(const k of ['--hero-progress','--hero-exit','--hero-open','--hero-copy-y','--hero-photo-scale','--hero-photo-rotate'])hero.style.removeProperty(k);
 if(wave&&originalWave)wave.setAttribute('d',originalWave);
 for(const el of [...circuit,...(storyPath?[storyPath]:[])]){el.style.removeProperty('stroke-dasharray');el.style.removeProperty('stroke-dashoffset');}
 matrix.forEach(el=>el.style.removeProperty('--dot-wave'));
 records.forEach(({el,items})=>{for(const k of ['--scene-progress','--scene-intro','--equipment-travel'])el.style.removeProperty(k);items.forEach(i=>i.style.removeProperty('--item-progress'));});
}
function sync(){
 if(!home||!hero||!track||reduced.matches){reset();return;}
 enabled=true;home.classList.add('scroll-story-active');track.classList.toggle('hero-pinned',large.matches);queue();
}
if(home){
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});window.addEventListener('load',queue,{once:true});
 reduced.addEventListener('change',sync);large.addEventListener('change',sync);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)queue();});
 window.addEventListener('pageshow',sync);
 sync();
}
