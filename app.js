if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(()=>{}));
}
const modal=document.getElementById('lead-modal');
const closeBtn=modal?.querySelector('.close');
function openModal(){ if(!localStorage.getItem('leadModalClosed')) modal.hidden=false; }
function closeModal(){ modal.hidden=true; localStorage.setItem('leadModalClosed', String(Date.now())); }
closeBtn?.addEventListener('click', closeModal);
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && modal && !modal.hidden) closeModal(); });
setTimeout(openModal, 60000);
let opened=false;
window.addEventListener('scroll', ()=>{
  if(opened) return;
  const depth=(window.scrollY+window.innerHeight)/document.body.scrollHeight;
  if(depth>.55){ opened=true; openModal(); }
});



const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('#site-menu');
if (menuToggle && siteMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteMenu.classList.toggle('is-open', !isOpen);
  });
}

const cookieBanner = document.querySelector('#cookieBanner');
const cookieModal = document.querySelector('#cookieModal');
const saveCookiePrefs = document.querySelector('#saveCookiePrefs');
const closeCookie = document.querySelector('[data-close-cookie]');
if (!localStorage.getItem('cookieConsent') && cookieBanner) cookieBanner.hidden = false;
document.querySelectorAll('[data-cookie]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.cookie;
    if (action === 'accept') {
      localStorage.setItem('cookieConsent', JSON.stringify({ essential: true, analytics: true, marketing: true }));
      cookieBanner.hidden = true;
    }
    if (action === 'reject') {
      localStorage.setItem('cookieConsent', JSON.stringify({ essential: true, analytics: false, marketing: false }));
      cookieBanner.hidden = true;
    }
    if (action === 'customize' && cookieModal) cookieModal.hidden = false;
  });
});
closeCookie?.addEventListener('click', () => { cookieModal.hidden = true; });
saveCookiePrefs?.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', JSON.stringify({
    essential: true,
    analytics: Boolean(document.querySelector('#analyticsConsent')?.checked),
    marketing: Boolean(document.querySelector('#marketingConsent')?.checked)
  }));
  cookieModal.hidden = true;
  if (cookieBanner) cookieBanner.hidden = true;
});
