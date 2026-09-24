// ============================================================
// Año dinámico en el footer
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// Menú móvil
// ============================================================
const toggle   = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

// ============================================================
// Link activo según la sección visible
// rootMargin asimétrico: ignora el header y el área inferior
// para que el resaltado no "salte" antes de tiempo.
// ============================================================
const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-35% 0px -60% 0px' }
);
document.querySelectorAll('main section[id]').forEach(s => navObserver.observe(s));

// ============================================================
// Scroll reveal genérico
// Cualquier elemento con clase .reveal aparece con fade+slide
// la primera vez que entra en pantalla. unobserve evita seguir
// escuchando elementos que ya mostraron su animación.
// ============================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => {
  if (prefersReducedMotion) {
    el.classList.add('in-view'); // sin animación, pero visible de inmediato
  } else {
    revealObserver.observe(el);
  }
});

// ============================================================
// Barras de habilidades
// El ancho final viene del atributo data-width en el HTML, así
// que para cambiar un porcentaje solo hay que editar el HTML,
// nunca este archivo.
// ============================================================
const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const fill = entry.target.querySelector('.skill-bar__fill');
      if (fill) fill.style.width = `${fill.dataset.width}%`;
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll('.skill-bar').forEach(bar => skillObserver.observe(bar));

// ============================================================
// Partículas del hero (canvas)
// Efecto puramente decorativo: puntos que flotan despacio y se
// conectan con líneas finas cuando están cerca. Se desactiva
// por completo si el usuario prefiere menos movimiento, y se
// reduce la cantidad de partículas en pantallas pequeñas para
// no gastar batería/CPU de más en celulares.
// ============================================================
const canvas = document.getElementById('hero-canvas');

if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let width, height;

  function resize() {
    const hero = canvas.parentElement;
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
    // Menos partículas en pantallas angostas: el efecto se nota igual sin saturar
    const count = width < 640 ? 28 : 55;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      // Si sale del lienzo, reaparece por el lado opuesto en vez de "rebotar"
      if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 138, 61, 0.5)';
      ctx.fill();
    });

    // Líneas entre partículas cercanas: O(n²) es aceptable porque n es pequeño (≤55)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(94, 234, 212, ${0.12 * (1 - dist / 110)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  resize();
  step();
  window.addEventListener('resize', resize);
}
