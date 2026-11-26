import { animate } from 'animejs';
const root=document.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const desktop=matchMedia('(min-width: 900px) and (min-height: 740px)');
const fine=matchMedia('(hover:hover) and (pointer:fine)');
const clamp=(n:number,min=0,max=1)=>Math.min(max,Math.max(min,n));
const journey=document.querySelector<HTMLElement>('[data-journey]');
const pin=journey?.querySelector<HTMLElement>('.journey-pin');
const scenes=Array.from(document.querySelectorAll<HTMLElement>('[data-journey-image]'));
const chapters=Array.from(document.querySelectorAll<HTMLElement>('[data-journey-chapter]'));
let scrollFrame=0;
function update(){
  scrollFrame=0;
  if(!journey||!pin||reduced.matches||!desktop.matches||document.hidden)return;
  const b=journey.getBoundingClientRect(), offset=112, span=Math.max(1,journey.offsetHeight-pin.offsetHeight);
  const p=clamp((offset-b.top)/span);
  const phase=p*(scenes.length-1);
  journey.style.setProperty('--journey-progress',String(p));
  scenes.forEach((el,i)=>{
    const distance=Math.abs(phase-i), visibility=clamp(1-distance);
    el.style.setProperty('--scene-alpha',String(visibility));
    el.style.setProperty('--scene-offset',String((i-phase)*45)+'px');
    el.style.setProperty('--scene-scale',String(1+distance*.12));
  });
  chapters.forEach((el,i)=>{const distance=Math.abs(phase-i);el.classList.toggle('chapter-current',i===Math.round(phase));el.style.setProperty('--chapter-progress',String(clamp(1-distance)));});
}
function queue(){if(!scrollFrame)scrollFrame=requestAnimationFrame(update);}
function sync(){
  const enable=!reduced.matches&&desktop.matches&&!!journey&&!!pin;
  journey?.classList.toggle('journey-enhanced',enable);
  if(!enable){journey?.style.removeProperty('--journey-progress');scenes.forEach(el=>{el.style.removeProperty('--scene-alpha');el.style.removeProperty('--scene-offset');el.style.removeProperty('--scene-scale');});chapters.forEach(el=>{el.classList.remove('chapter-current');el.style.removeProperty('--chapter-progress');});}
  queue();
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)queue();});window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});window.addEventListener('load',queue,{once:true});desktop.addEventListener('change',sync);reduced.addEventListener('change',sync);sync();
const hero=document.querySelector<HTMLElement>('[data-energy-pointer]');
let pointerFrame=0,px=50,py=50;
function resetPointer(){if(pointerFrame)cancelAnimationFrame(pointerFrame);pointerFrame=0;hero?.style.setProperty('--pointer-x','50%');hero?.style.setProperty('--pointer-y','50%');hero?.style.setProperty('--parallax-x','0px');hero?.style.setProperty('--parallax-y','0px');}
hero?.addEventListener('pointermove',event=>{
  if(reduced.matches||!fine.matches||event.pointerType!=='mouse')return;
  const b=hero.getBoundingClientRect();px=clamp((event.clientX-b.left)/Math.max(1,b.width))*100;py=clamp((event.clientY-b.top)/Math.max(1,b.height))*100;
  if(!pointerFrame)pointerFrame=requestAnimationFrame(()=>{pointerFrame=0;hero.style.setProperty('--pointer-x',px+'%');hero.style.setProperty('--pointer-y',py+'%');hero.style.setProperty('--parallax-x',(px-50)*.22+'px');hero.style.setProperty('--parallax-y',(py-50)*.22+'px');});
},{passive:true});hero?.addEventListener('pointerleave',resetPointer);reduced.addEventListener('change',resetPointer);fine.addEventListener('change',resetPointer);
const imageAnimations=new Set<ReturnType<typeof animate>>();
let mediaObserver:IntersectionObserver|undefined;
function stopImages(){mediaObserver?.disconnect();for(const a of [...imageAnimations])a.revert();imageAnimations.clear();}
function observeImages(){
  stopImages();if(document.querySelector('.home-v3')||reduced.matches||!('IntersectionObserver' in window))return;
  mediaObserver=new IntersectionObserver(entries=>{
    const list=entries.filter(e=>e.isIntersecting).map(e=>e.target as HTMLElement);
    for(const el of list)mediaObserver?.unobserve(el);
    if(!list.length)return;
    const a=animate(list,{clipPath:['inset(12% 14% 12% 14% round 32px)','inset(0% 0% 0% 0% round 0px)'],duration:1000,delay:(_el,i)=>Math.min(i,6)*65,ease:'outExpo',onComplete:self=>queueMicrotask(()=>{if(imageAnimations.has(self)){self.revert();imageAnimations.delete(self);}})});
    imageAnimations.add(a);
  },{threshold:.22});
  document.querySelectorAll('.editorial-photo img,.tile-photo img,.product-card .equipment-photo img,.story-photo img').forEach(el=>mediaObserver?.observe(el));
}
reduced.addEventListener('change',observeImages);observeImages();
// A short, non-blocking impulse moves through the selected control on interaction.
document.addEventListener('pointerdown',event=>{
  if(reduced.matches||event.button!==0||!(event.target instanceof Element))return;
  const el=event.target.closest<HTMLElement>('.action-primary,.nav-cta,.button,.tile-actions a,.system-tile,.orb-link,.cta-orb');
  if(!el)return;
  const b=el.getBoundingClientRect();const spark=document.createElement('span');spark.className='kinetic-spark';spark.setAttribute('aria-hidden','true');spark.style.left=(event.clientX-b.left)+'px';spark.style.top=(event.clientY-b.top)+'px';el.append(spark);
  spark.addEventListener('animationend',()=>spark.remove(),{once:true});setTimeout(()=>spark.remove(),800);
});
window.addEventListener('pagehide',()=>{stopImages();resetPointer();});window.addEventListener('pageshow',e=>{if(e.persisted){sync();observeImages();}});
