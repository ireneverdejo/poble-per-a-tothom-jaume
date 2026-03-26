// Canvi de tema clar/fosc
const body = document.body;
const toggle = document.getElementById('themeToggle');

// carrega tema guardat
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  if (toggle) toggle.textContent = '☀️';
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Formulari contacte
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Missatge enviat! Gràcies per contactar-nos. 😊');
    form.reset();
  });
}
// propostes
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const toggleBtns = document.querySelectorAll('.toggle-btn');
const tabViews = document.querySelectorAll('.tab-view');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.dataset.tab;
    
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetView = btn.dataset.view;
    
    // Canviar vista (text/image)
    toggleBtns.forEach(b => b.classList.remove('active'));
    tabViews.forEach(view => view.classList.remove('active'));
    btn.classList.add('active');
    
    document.querySelectorAll('.tab-panel.active .tab-view').forEach(view => {
      if (view.dataset.view === targetView) {
        view.classList.add('active');
      }
    });
  });
});
//navegador
const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.section, .card, .stat-card, .team-card, .phase-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  el.classList.add('reveal-hidden');
  revealObserver.observe(el);
});
