/* Theme management */
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const header = document.querySelector('.site-header');
const themeMeta = document.getElementById('theme-color-meta');

function applyTheme(theme){
  const isDark = theme === 'dark';
  root.setAttribute('data-theme', theme);
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  // Update theme color for mobile address bar
  themeMeta?.setAttribute('content', isDark ? '#0b0b0f' : '#ffffff');
  try{ localStorage.setItem('theme', theme); }catch(e){}
}

function initTheme(){
  let theme = 'dark';
  try{
    const saved = localStorage.getItem('theme');
    if(saved) theme = saved;
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light';
  }catch(e){}
  applyTheme(theme);
}

initTheme();

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* Mobile nav */
navToggle?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close nav when a link is clicked (mobile)
document.getElementById('site-nav')?.addEventListener('click', (e) => {
  const t = e.target;
  if(t instanceof HTMLAnchorElement){
    header.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

/* Smooth scrolling for same-page anchors */
document.addEventListener('click', (e) => {
  const t = e.target;
  if(!(t instanceof Element)) return;
  const a = t.closest('a');
  if(a && a.getAttribute('href')?.startsWith('#')){
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', `#${id}`);
    }
  }
});

/* Reveal on scroll */
const observer = new IntersectionObserver((entries) => {
  for(const entry of entries){
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Year in footer */
const yearEl = document.getElementById('year');
if(yearEl){ yearEl.textContent = String(new Date().getFullYear()); }
