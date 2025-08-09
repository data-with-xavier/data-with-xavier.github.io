const toggle=document.getElementById('themeToggle');
const root=document.documentElement;
const saved=localStorage.getItem('theme');
if(saved==='punk'){root.setAttribute('data-theme','punk'); if(toggle) toggle.checked=true;}
if(toggle) toggle.addEventListener('change',()=>{
  const mode=toggle.checked?'punk':'';
  if(mode) root.setAttribute('data-theme',mode); else root.removeAttribute('data-theme');
  localStorage.setItem('theme',mode);
});
const page=document.body.dataset.page;
if(page){document.querySelectorAll('a[data-page-link]').forEach(a=>{if(a.dataset.pageLink===page)a.classList.add('active');});}
const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
(function initParticles(){
  const c=document.getElementById('bg'); if(!c) return;
  const ctx=c.getContext('2d'); let w,h; const N=70; let pts=[];
  function resize(){w=c.width=innerWidth;h=c.height=innerHeight;pts=Array.from({length:N},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}));}
  resize(); addEventListener('resize',resize);
  const mouse={x:-9999,y:-9999}; addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY}); addEventListener('mouseleave',()=>{mouse.x=mouse.y=-9999});
  function step(){
    ctx.clearRect(0,0,w,h);
    for(const p of pts){
      const dx=p.x-mouse.x, dy=p.y-mouse.y, d2=dx*dx+dy*dy, r=120*120;
      if(d2<r){const f=(r-d2)/r; p.vx+=(dx/Math.sqrt(d2+0.001))*f*0.4; p.vy+=(dy/Math.sqrt(d2+0.001))*f*0.4;}
      p.x+=p.vx; p.y+=p.vy; p.vx*=0.98; p.vy*=0.98;
      if(p.x<0||p.x>w) p.vx*=-1; if(p.y<0||p.y>h) p.vy*=-1;
    }
    ctx.globalAlpha=0.8; ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--brand');
    for(const p of pts){ctx.beginPath();ctx.arc(p.x,p.y,1.7,0,Math.PI*2);ctx.fill();}
    ctx.globalAlpha=0.35; ctx.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--brand-2');
    for(let i=0;i<N;i++){for(let j=i+1;j<N;j++){const a=pts[i],b=pts[j];const dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;if(d2<130*130){ctx.lineWidth=1-(d2/(130*130));ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}}
    requestAnimationFrame(step);
  }
  step();
})();
