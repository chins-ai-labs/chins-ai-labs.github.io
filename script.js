const header = document.getElementById('siteHeader');
const progress = document.getElementById('scrollProgress');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

function onScroll(){
  header.classList.toggle('scrolled', window.scrollY > 20);
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progress.style.width = (max ? (window.scrollY / max) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

menuToggle?.addEventListener('click', ()=>{
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
