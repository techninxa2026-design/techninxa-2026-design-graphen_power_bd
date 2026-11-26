const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const rail=document.querySelector<HTMLElement>('.energy-rail');
const stops=rail?.querySelector<HTMLElement>('.rail-stops');
const count=rail?.querySelector<HTMLElement>('.rail-count');
const sections=Array.from(document.querySelectorAll<HTMLElement>('[data-rail][id]'));
const links:HTMLAnchorElement[]=[];
if(rail&&stops){rail.hidden=false;sections.forEach(s=>{const a=document.createElement('a');a.href='#'+s.id;a.className='rail-stop';a.setAttribute('aria-label',s.dataset.rail||s.id);const label=document.createElement('span');label.textContent=s.dataset.rail||s.id;a.append(label);stops.append(a);links.push(a);});rail.querySelector('button')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduced.matches?'auto':'smooth'}));}
let scheduled=false;
function update(){scheduled=false;const max=document.documentElement.scrollHeight-innerHeight;const progress=max>0?Math.min(1,Math.max(0,scrollY/max)):0;rail?.style.setProperty('--progress',String(progress));let active=0;sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<=innerHeight*.42)active=i;});if(progress>=.995&&sections.length)active=sections.length-1;links.forEach((a,i)=>{if(i===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});if(count)count.textContent=sections.length?String(active+1).padStart(2,'0'):String(Math.round(progress*100))+'%';}
function queue(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});window.addEventListener('load',queue,{once:true});update();
if(!reduced.matches&&'IntersectionObserver' in window){const targets=Array.from(document.querySelectorAll<HTMLElement>('[data-motion],.product-card,.editorial-list article'));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('motion-visible');observer.unobserve(e.target);}}),{threshold:.07});targets.forEach((el,i)=>{el.style.setProperty('--stagger',String(i%4*65)+'ms');observer.observe(el);});}
document.querySelectorAll<HTMLImageElement>('.photo-sculpture img,.photo-inset img,.story-photo img,.editorial-photo img,.mega-feature img').forEach(img=>{function fallback(){img.hidden=true;img.parentElement?.classList.add('asset-error');}img.addEventListener('error',fallback);if(img.complete&&!img.naturalWidth)fallback();});
