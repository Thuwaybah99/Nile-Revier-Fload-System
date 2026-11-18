const menu=document.querySelector('#menu'),links=document.querySelector('#navlinks');menu?.addEventListener('click',()=>{const open=links.classList.toggle('show');menu.setAttribute('aria-expanded',String(open));});document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('show');menu?.setAttribute('aria-expanded','false')}));if('IntersectionObserver' in window){const o=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}})},{threshold:.07});document.querySelectorAll('.reveal').forEach(e=>o.observe(e))}else{document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visible'))}

// Image fallback: primary URLs use files stored next to index.html on GitHub Pages.
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', () => {
    if (!img.dataset.fallbackAttempted) {
      img.dataset.fallbackAttempted = 'true';
      img.src = img.dataset.fallback;
    }
  });
});
// Also recover the opening image if the local background file isn't accessible.
const hero = document.querySelector('.hero');
if (hero) {
  const probe = new Image();
  probe.onerror = () => {
    hero.style.backgroundImage = "linear-gradient(90deg,rgba(19,40,31,.88) 0%,rgba(26,45,35,.53) 55%,rgba(25,41,30,.23) 100%), url('https://raw.githubusercontent.com/Thuwaybah99/nile_revier_fload_system/main/River-nile-4.jpg')";
  };
  probe.src = 'River-nile-4.jpg?v=2';
}
