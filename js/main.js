// Contact modal
document.querySelectorAll('.contact-trigger').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('contactModal').classList.add('open');
  });
});

const cModal = document.getElementById('contactModal');
if (cModal) {
  cModal.addEventListener('click', e => {
    if (e.target === cModal) cModal.classList.remove('open');
  });
  document.getElementById('contactClose')?.addEventListener('click', () => cModal.classList.remove('open'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cModal.classList.remove('open');
  });
}

// Active nav link
const page = document.body.dataset.page;
if (page) {
  document.querySelectorAll('a[data-page-link]').forEach(a => {
    if (a.dataset.pageLink === page) a.classList.add('active');
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Particle background
(function initParticles() {
  const c = document.getElementById('bg');
  if (!c) return;

  const ctx = c.getContext('2d');
  const N = 70;
  let w, h, pts = [];
  let raf;

  function resize() {
    w = c.width = innerWidth;
    h = c.height = innerHeight;
    pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));
  }

  resize();
  addEventListener('resize', resize);

  const mouse = { x: -9999, y: -9999 };
  addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener('mouseleave', () => { mouse.x = mouse.y = -9999; });

  // Pause when tab is hidden to save battery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(step);
    }
  });

  function step() {
    ctx.clearRect(0, 0, w, h);

    const brand = getComputedStyle(document.documentElement).getPropertyValue('--brand');
    const brand2 = getComputedStyle(document.documentElement).getPropertyValue('--brand-2');

    for (const p of pts) {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const d2 = dx * dx + dy * dy;
      const r = 120 * 120;

      if (d2 < r) {
        const f = (r - d2) / r;
        p.vx += (dx / Math.sqrt(d2 + 0.001)) * f * 0.4;
        p.vy += (dy / Math.sqrt(d2 + 0.001)) * f * 0.4;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.98;
      p.vy *= 0.98;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    // Draw dots
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = brand;
    for (const p of pts) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw connecting lines
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = brand2;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = pts[i], b = pts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130) {
          ctx.lineWidth = 1 - (d2 / (130 * 130));
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    raf = requestAnimationFrame(step);
  }

  raf = requestAnimationFrame(step);
})();
