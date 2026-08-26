const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const toast = document.querySelector('.toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

document.querySelector('#contactForm').addEventListener('submit', async event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = `Olá! Meu nome é ${data.get('name')}. Tenho interesse em um projeto de ${data.get('type')}.\n\nSobre a ideia: ${data.get('message')}`;
  const whatsappUrl = `https://wa.me/5551984384312?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener');
  showToast('Abrindo a conversa com Alessandro no WhatsApp.');
});
