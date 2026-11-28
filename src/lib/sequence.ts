import { animate, createTimeline, stagger, svg, onScroll } from 'animejs';

/** Progressive enhancement. Static content is never hidden until an animation actually starts. */
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
type Playback = {pause:()=>unknown;resume:()=>unknown;revert:()=>unknown};
const active = new Set<Playback>();
const looped = new Set<Playback>();
let observer: IntersectionObserver | undefined;
const scrollObservers=new Set<{revert:()=>unknown}>();
let heroObserver: IntersectionObserver | undefined;
const select = (s:string, within:ParentNode=document) => Array.from(within.querySelectorAll<HTMLElement>(s));
const cleanup = (p:Playback) => {p.revert();active.delete(p);looped.delete(p);};
function track(p:Playback, loop=false){active.add(p);if(loop)looped.add(p);return p;}
function groupReveal(nodes:HTMLElement[], distance=20){
  const list=nodes.filter(n=>!n.hidden&&n.getClientRects().length);
  if(!list.length||reduced.matches)return;
  list.forEach(n=>n.classList.remove('filter-enter','motion-visible','arrived'));
  const a=animate(list,{opacity:[0,1],y:[distance*1.75,0],scale:[.965,1],duration:850,delay:(_el,i)=>Math.min(i,8)*75,ease:'outExpo',onComplete:self=>{queueMicrotask(()=>{if(active.has(self))cleanup(self);});}});
  track(a);
}
function startHero(){
  const hero=document.querySelector<HTMLElement>('.motion-hero');if(!hero)return;
  const words=select('.sequence-word',hero);
  const copy=select('.motion-label,.motion-description,.motion-actions',hero);
  const photo=hero.querySelector<HTMLElement>('.photo-sculpture');
  const ornament=select('.photo-outline,.orb-link,.hero-index',hero);
  const tl=createTimeline({autoplay:false,defaults:{ease:'outExpo'},onComplete:self=>{queueMicrotask(()=>{if(active.has(self))cleanup(self);});}});
  if(copy[0])tl.add(copy[0],{opacity:[0,1],y:[16,0],duration:430},0);
  if(words.length)tl.add(words,{y:['115%','0%'],opacity:[0,1],duration:1050,delay:stagger(170)},100);
  if(photo)tl.add(photo,{opacity:[0,1],scale:[.79,1],rotate:[-15,-6],duration:1300},220);
  if(copy.length>1)tl.add(copy.slice(1),{opacity:[0,1],y:[23,0],duration:580,delay:stagger(95)},440);
  if(ornament.length)tl.add(ornament,{opacity:[0,1],scale:[.95,1],duration:650,delay:stagger(65)},520);
  const lines=hero.querySelectorAll<SVGPathElement>('[data-circuit]');
  if(lines.length)tl.add(svg.createDrawable(lines),{draw:['0 0','0 1'],duration:850,delay:stagger(95),ease:'inOutQuad'},350);
  const nodes=select('.circuit-node',hero);
  if(nodes.length)tl.add(nodes,{opacity:[0,1],scale:[.2,1],duration:440,delay:stagger(55)},780);
  track(tl);tl.play();
  const wave=hero.querySelector<SVGPathElement>('.sequence-wave'),shape=hero.querySelector<SVGPathElement>('.sequence-wave-target');
  const dots=select('.sequence-matrix i',hero);
  const localLoops:Playback[]=[];
  if(wave&&shape){const a=animate(wave,{d:svg.morphTo(shape,0),duration:4800,ease:'inOutSine',alternate:true,loop:true});localLoops.push(track(a,true));}
  if(dots.length){const a=animate(dots,{scale:[.45,1],opacity:[.18,.8],delay:stagger(55,{grid:[8,6],from:'center'}),duration:850,ease:'inOutSine',alternate:true,loop:true,loopDelay:750});localLoops.push(track(a,true));}
  if('IntersectionObserver' in window){heroObserver=new IntersectionObserver(entries=>{for(const e of entries)for(const a of localLoops){if(e.isIntersecting&&!document.hidden)a.resume();else a.pause();}},{threshold:.01});heroObserver.observe(hero);}
}
function startScrollScene(){
  const story=document.querySelector<HTMLElement>('.engineering-story');
  const path=story?.querySelector<SVGPathElement>('[data-scroll-circuit]');
  if(!story||!path)return;
  const scroll=onScroll({target:story,enter:'bottom top',leave:'top bottom',sync:true});
  scrollObservers.add(scroll);
  track(animate(svg.createDrawable(path),{draw:['0 0','0 1'],ease:'linear',duration:1000,autoplay:scroll}));
}
function startSections(){
  if(!('IntersectionObserver' in window))return;
  const groups=[...document.querySelectorAll<HTMLElement>('.home-about,.system-ribbon,.stage-heading,.photo-editorial,.directory-shell,.story-content,.story-visual,.motion-cta-inner,.reference-panel,.detail-body,.reference-download,.section-heading,.editorial-list,.brochure-grid,.contact-grid,.page-head .wrap,.detail-head .detail-grid')];
  observer=new IntersectionObserver(entries=>{
    const cards:HTMLElement[]=[];
    for(const e of entries){if(!e.isIntersecting)continue;const el=e.target as HTMLElement;observer?.unobserve(el);
      if(el.matches('.equipment-tile,.product-card')){cards.push(el);continue;}
      if(el.matches('.story-visual'))groupReveal([el],16);
      else if(el.matches('.directory-shell'))groupReveal(select('.directory-side,.directory-grid>a',el).slice(0,7),17);
      else if(el.matches('.reference-panel'))groupReveal(select('.section-kicker,h2,.ref-intro,.fact-grid article,.ref-table,.ref-note',el).slice(0,12),17);
      else if(el.matches('.brochure-grid,.editorial-list'))groupReveal(Array.from(el.children).filter((x):x is HTMLElement=>x instanceof HTMLElement).slice(0,8));
      else groupReveal(Array.from(el.children).filter((x):x is HTMLElement=>x instanceof HTMLElement&&!x.matches('.story-orbit,.story-photo,.story-stamp')).slice(0,8));
    }
    if(cards.length)groupReveal(cards,16);
  },{threshold:.07,rootMargin:'0px 0px -15px 0px'});
  groups.forEach(g=>observer?.observe(g));
  select('.equipment-tile,.product-card').forEach(c=>observer?.observe(c));
  // Existing catalogue filters retain their native CSS transitions and search behavior.
}
function stop(){observer?.disconnect();heroObserver?.disconnect();for(const s of scrollObservers)s.revert();scrollObservers.clear();for(const a of [...active])cleanup(a);root.classList.remove('sequence-active');}
function start(){if(reduced.matches||root.classList.contains('sequence-active'))return;root.classList.add('sequence-active');try{startHero();startSections();startScrollScene();}catch(error){stop();console.warn('Graphene motion enhancement unavailable',error);}}
reduced.addEventListener('change',()=>{if(reduced.matches)stop();else start();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){for(const a of looped)a.pause();}else{const hero=document.querySelector('.motion-hero');if(hero){const b=hero.getBoundingClientRect();if(b.bottom>0&&b.top<innerHeight)for(const a of looped)a.resume();}}});
window.addEventListener('pagehide',()=>{for(const a of looped)a.pause();});
window.addEventListener('pageshow',e=>{if(e.persisted&&!reduced.matches){const hero=document.querySelector('.motion-hero');if(hero){const b=hero.getBoundingClientRect();if(b.bottom>0&&b.top<innerHeight)for(const a of looped)a.resume();}}});
start();
