// ── Burger menu ──
(function () {
  const burger = document.getElementById('burger');
  const nav    = document.getElementById('nav');
  if (!burger || !nav) return;
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('open');
    nav.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });
  // Close on nav link click (mobile)
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ── Emergency modal ──
(function () {
  const btn      = document.getElementById('emergencyBtn');
  const modal    = document.getElementById('emergencyModal');
  const closeBtn = document.getElementById('closeEmergency');
  if (!btn || !modal) return;
  btn.addEventListener('click', e => { e.preventDefault(); modal.removeAttribute('hidden'); });
  if (closeBtn) closeBtn.addEventListener('click', () => modal.setAttribute('hidden', ''));
  modal.addEventListener('click', e => { if (e.target === modal) modal.setAttribute('hidden', ''); });
})();

// ── Filter tags (catalog page) ──
(function () {
  const filterBtns = document.querySelectorAll('.filter-tag');
  const cards      = document.querySelectorAll('.psych-card');
  if (!filterBtns.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const tags = (card.dataset.tags || '').split(' ');
        if (filter === 'all' || tags.includes(filter)) {
          card.classList.remove('card-hidden', 'card-fade');
        } else {
          card.classList.add('card-fade');
          setTimeout(() => card.classList.add('card-hidden'), 280);
        }
      });
    });
  });
})();

// ── Scroll reveal ──
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => observer.observe(el));
})();
