/* Elon Musk — Resume: scene transitions, parallax, progress, reveals. No dependencies. */
(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wideScreen = window.matchMedia('(min-width: 900px)');

  const scenes = Array.from(document.querySelectorAll('.scene'));
  const sections = Array.from(document.querySelectorAll('[data-scene]'));
  const navLinks = Array.from(document.querySelectorAll('.nav__list a'));
  const bar = document.querySelector('.progress__bar');

  /* ---------- Image fallback: reveal CSS fallback if a file is missing ---------- */
  scenes.forEach((scene) => {
    const img = scene.querySelector('img');
    if (!img) return;
    const fail = () => scene.classList.add('no-image');
    img.addEventListener('error', fail);
    // Error may have fired before this script ran
    if (img.complete && img.naturalWidth === 0) fail();
  });

  /* ---------- Scene switching ---------- */
  let currentScene = 'hero';

  function setScene(id) {
    if (!id || id === currentScene) return;
    currentScene = id;
    scenes.forEach((s) => s.classList.toggle('is-active', s.dataset.sceneId === id));
  }

  function setNav(id) {
    navLinks.forEach((a) => {
      const active = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-current', active);
      if (active) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window) {
    // A thin band across the middle of the viewport decides the active section,
    // so scrolling up and down both resolve to the correct scene.
    const sceneObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setScene(entry.target.dataset.scene);
        setNav(entry.target.id);
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
    sections.forEach((s) => sceneObserver.observe(s));

    // Footer / references keep the closing scene
    const footer = document.querySelector('.footer');
    if (footer) {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setScene('closing'); setNav('references'); }
        });
      }, { rootMargin: '-50% 0px -50% 0px' }).observe(footer);
    }

    // Gentle one-time text reveals
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Scroll progress + parallax (one rAF-throttled handler) ---------- */
  let ticking = false;

  function update() {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const y = window.scrollY;
    const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    if (bar) bar.style.transform = 'scaleX(' + progress.toFixed(4) + ')';

    const parallaxOn = wideScreen.matches && !reduceMotion.matches;
    // Small, bounded drift (max ~ ±4% of viewport) keeps the effect subtle
    const offset = parallaxOn ? (-progress * window.innerHeight * 0.08 + window.innerHeight * 0.04) : 0;
    root.style.setProperty('--py', offset.toFixed(1) + 'px');
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  reduceMotion.addEventListener && reduceMotion.addEventListener('change', onScroll);
  update();
})();
