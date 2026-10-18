// Menu
const nv=document.getElementById('nv');
document.getElementById('mb').onclick=()=>nv.classList.toggle('open');
nv.querySelectorAll('a').forEach(a=>a.onclick=()=>nv.classList.remove('open'));
// Sliders (work automatically for any new item added)
document.querySelectorAll('.sl').forEach(s=>{
 const t=s.querySelector('.tr');
 s.querySelector('.pv').onclick=()=>t.scrollBy({left:-t.clientWidth*.7,behavior:'smooth'});
 s.querySelector('.nx').onclick=()=>t.scrollBy({left:t.clientWidth*.7,behavior:'smooth'});
 if(s.dataset.auto){let p=0;s.onmouseenter=()=>p=1;s.onmouseleave=()=>p=0;
  setInterval(()=>{if(p)return;
   if(t.scrollLeft+t.clientWidth>=t.scrollWidth-5)t.scrollTo({left:0,behavior:'smooth'});
   else t.scrollBy({left:t.clientWidth*.5,behavior:'smooth'})},3500)}
});
// Lightbox
const lb=document.getElementById('lb');
document.querySelectorAll('.gal img').forEach(i=>i.onclick=()=>{lb.firstElementChild.src=i.src;lb.style.display='grid'});
lb.onclick=()=>lb.style.display='none';
// Reveal on scroll
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on')}),{threshold:.12});
document.querySelectorAll('.rj').forEach(r=>io.observe(r));
// Free trial form -> WhatsApp
document.getElementById('bf').onsubmit=e=>{
 e.preventDefault();
 const n=fn.value.trim(),p=fp.value.trim(),c=fc.value.trim();
 if(!/^[0-9]{10}$/.test(p)){alert('Please enter a valid 10-digit phone number');return}
 const m=`Hello Pace Cricket Academy, I want to book a FREE trial.%0AName: ${encodeURIComponent(n)}%0APhone: ${p}%0AFrom: ${encodeURIComponent(c)}`;
 document.getElementById('ok').style.display='block';
 setTimeout(()=>window.open('https://wa.me/919931100398?text='+m,'_blank'),600);
 e.target.reset();
};