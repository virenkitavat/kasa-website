// Behaviour shared by every page: menu, sticky header, mobile action bar, heading reveals.

const header = document.querySelector<HTMLElement>('[data-header]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const drawer = document.querySelector<HTMLElement>('[data-drawer]');
const menuLabel = document.querySelector<HTMLElement>('[data-menu-label]');
const actionbar = document.querySelector<HTMLElement>('[data-actionbar]');

function setMenu(open: boolean) {
  drawer?.classList.toggle('is-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  if (menuLabel) menuLabel.textContent = open ? 'Close' : 'Menu';
  document.body.style.overflow = open ? 'hidden' : '';
}
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
drawer?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

function onScroll() {
  const y = window.scrollY;
  header?.classList.toggle('is-stuck', y > 8);
  actionbar?.classList.toggle('is-shown', y > window.innerHeight * 0.6);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Headings rise out of a mask once, when they come into view.
const rises = document.querySelectorAll<HTMLElement>('.rise');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  rises.forEach((el) => io.observe(el));
} else {
  rises.forEach((el) => el.classList.add('is-in'));
}

// The Book button leans toward the pointer on desktop.
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (fine && !still) {
  document.querySelectorAll<HTMLElement>('[data-magnet]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}
