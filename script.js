// Edite este bloco para trocar o WhatsApp e as mensagens principais do portfólio.
const PORTFOLIO_CONFIG = {
  whatsapp: '5551984384312',
  defaultMessage: 'Olá, vi seu portfólio e gostaria de solicitar um orçamento.',
  rotatingWords: ['automações', 'dashboards', 'soluções digitais']
};

const header = document.querySelector('#siteHeader');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainNav');
const toast = document.querySelector('.toast');

function whatsappUrl(message = PORTFOLIO_CONFIG.defaultMessage) {
  return `https://wa.me/${PORTFOLIO_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = whatsappUrl(link.dataset.message);
  link.target = '_blank';
  link.rel = 'noopener';
});

function closeMenu() {
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

const revealElements = document.querySelectorAll('.reveal:not(.visible)');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.11, rootMargin: '0px 0px -35px' });
  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}

const counters = document.querySelectorAll('[data-counter]');
function animateCounter(element) {
  const target = Number(element.dataset.counter);
  const start = performance.now();
  const duration = 900;
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .8 });
  counters.forEach(counter => counterObserver.observe(counter));
} else {
  counters.forEach(counter => counter.textContent = counter.dataset.counter);
}

const rotatingWord = document.querySelector('#rotatingWord');
if (rotatingWord && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let wordIndex = 0;
  window.setInterval(() => {
    rotatingWord.classList.add('swap');
    window.setTimeout(() => {
      wordIndex = (wordIndex + 1) % PORTFOLIO_CONFIG.rotatingWords.length;
      rotatingWord.textContent = PORTFOLIO_CONFIG.rotatingWords[wordIndex];
      rotatingWord.classList.remove('swap');
    }, 240);
  }, 2800);
}

document.querySelectorAll('[data-project]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.querySelector('#contactForm [name="type"]');
    const option = [...select.options].find(item => item.textContent === link.dataset.project);
    if (option) select.value = option.value;
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.portfolioToastTimer);
  window.portfolioToastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const data = new FormData(event.currentTarget);
  const company = data.get('company')?.trim();
  const message = [
    `Olá, Alessandro! Meu nome é ${data.get('name')}${company ? ` e falo pela empresa ${company}` : ''}.`,
    `Tenho interesse em: ${data.get('type')}.`,
    '',
    `O que preciso: ${data.get('message')}`
  ].join('\n');
  window.open(whatsappUrl(message), '_blank', 'noopener');
  showToast('Mensagem preparada. Abrindo o WhatsApp.');
});

