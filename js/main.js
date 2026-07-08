/* ============================================================
   GALLERY DATA
   Replace `image: null` with the relative path to your WebP file,
   e.g.  image: 'images/geometric-planter.webp'
   ============================================================ */
const galleryData = [
  {
    id: 1,
    title: "Tuna — Palm-Sized Fish",
    category: "artistic",
    image: "images/AustinFish.webp",
    alt: "A bright orange PLA tuna fish figure held in a palm, showing clean fin and body detail",
    material: "PLA",
    printer: "Bambu Lab H2D",
    settings: "0.2mm layer height · 15% infill · 3 perimeters",
    description: "A compact palm-sized tuna silhouette printed in vivid orange PLA. A quick but satisfying print — the layering on the fins and the circular eye cutout came out crisp with no post-processing needed. Great proof-of-concept for single-color decorative pieces.",
    gradient: "linear-gradient(135deg, #7C2D12 0%, #EA580C 50%, #FED7AA 100%)",
  },
  {
    id: 2,
    title: "Jolteon — Multi-Color",
    category: "artistic",
    image: "images/AustinJolteon.webp",
    alt: "A multi-color Jolteon Pokémon print on the build plate showing yellow body, white accents, and blue eyes",
    material: "PLA (multi-color via AMS)",
    printer: "Bambu Lab H2D",
    settings: "0.12mm layer height · 10% infill · 2 perimeters · AMS 3-filament swap",
    description: "A flat multi-color Jolteon using the H2D's AMS to switch between yellow, white, and blue PLA in a single print. The spiky silhouette and sharp color boundaries were the main challenge — dialing in the purge volumes to get clean transitions without color bleed took a few test runs.",
    gradient: "linear-gradient(135deg, #713F12 0%, #CA8A04 50%, #FEF08A 100%)",
  },
  {
    id: 3,
    title: "Shuriken Spinner",
    category: "artistic",
    image: "images/AustinShuriken.webp",
    alt: "A dual-color black and silver six-point shuriken fidget spinner with a bearing center, held in a palm",
    material: "PLA (dual-color via AMS)",
    printer: "Bambu Lab H2D",
    settings: "0.15mm layer height · 20% infill · 4 perimeters · 608 bearing press-fit",
    description: "A six-point shuriken spinner with a press-fit 608 bearing at the center. Dual-color PLA printed in one go using the AMS — black body with a silver-white outline that gives it a genuine two-tone blade look. The bearing seat was tuned to 0.1mm clearance for a snug press fit with no adhesive.",
    gradient: "linear-gradient(135deg, #0F172A 0%, #475569 50%, #CBD5E1 100%)",
  },
  {
    id: 4,
    title: "Clip",
    category: "artistic",
    image: "images/sarclip.webp",
    alt: "An artistic bag clip",
    material: "PLA (Blue)",
    printer: "Bambu Lab H2D",
    settings: "0.15mm layer height · 10% infill · 2 perimeters",
    description: "A bright teal, 3D-printed vertical stand or bracket featuring a stylized geometric design with the cutout letters HR integrated into the top frame. It is resting on a black desk in front of a computer monitor or 3D printer enclosure.",
    gradient: "linear-gradient(135deg, #78350F 0%, #D97706 50%, #FDE68A 100%)",
  },
  {
    id: 5,
    title: "Beyblade Deck Box",
    category: "functional",
    image: "images/sardeckbox.webp",
    alt: "A minimal weighted phone stand printed in matte black PETG with a 15-degree viewing angle",
    material: "PETG (Matte Black)",
    printer: "Bambu Lab H2D",
    settings: "0.15mm layer height · 30% infill · 4 perimeters",
    description: "A minimal desk phone stand optimized for a 15° eye-level viewing angle during video calls. The wide weighted base prevents tipping even with the heaviest cased phones. PETG was chosen for its slight flex-resistance and clean surface finish straight off the H2D.A rugged, 3D-printed storage case or deck box styled in black and teal. The top lid features the prominent raised text BEYBLADE X alongside Japanese katakana, sitting right in front of a mechanical gaming keyboard with purple and black keycaps.",
    gradient: "linear-gradient(135deg, #164E63 0%, #0891B2 50%, #67E8F9 100%)",
  },
  {
    id: 6,
    title: "Mask",
    category: "cosplay",
    image: "images/sarmask.webp",
    alt: "A translucent Voronoi lattice vase in Silk Rose Gold PLA that diffuses light",
    material: "PLA",
    printer: "Bambu Lab H2D",
    settings: "0.12mm layer height · Vase mode · 0.6mm nozzle",
    description: "A clean, white 3D-printed costume mask being held up by a hand. The mask features an otherworldly or fantasy-inspired aesthetic, complete with four eye cutouts, pointed ears, small fangs on the lower jaw line, and a molded septum ring.",
    gradient: "linear-gradient(135deg, #831843 0%, #DB2777 50%, #F9A8D4 100%)",
  },
  {
    id: 7,
    title: "Trophy",
    category: "award",
    image: "images/sartrophy.webp",
    alt: "A custom trophy for a Beyblade Tournament",
    material: "PLA",
    printer: "Bambu Lab H2D",
    settings: "0.2mm layer height · 60% infill · 5 perimeters · 0.6mm nozzle",
    description: "A 3D-printed circular award trophy featuring a black face with a white logo that reads NCBC, cleverly stylized to look like a Beyblade ripcord and launcher spin graphic. The base is silver/gray and features a small label that reads Trailside Tumble.",
    gradient: "linear-gradient(135deg, #292524 0%, #78716C 50%, #D6D3D1 100%)",
  },
];

/* ============================================================
   HELPERS
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  const header  = $('#siteHeader');
  const toggle  = $('#navToggle');
  const menu    = $('#navMenu');
  const navLinks = $$('.nav__link, .btn--nav', menu);

  // Sticky header style on scroll
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
    menu.classList.toggle('is-open', !expanded);
  });

  // Close menu when a link is tapped
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      menu.classList.remove('is-open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!header.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    }
  });
}

/* ============================================================
   GALLERY — RENDER & FILTER
   ============================================================ */
const CATEGORY_ICON_SVG = `
  <svg class="gallery-card__placeholder-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

function createCard(print) {
  const li = document.createElement('li');
  li.className = 'gallery-card';
  li.dataset.category = print.category;
  li.dataset.id = print.id;

  const mediaContent = print.image
    ? `<img class="gallery-card__img" src="${print.image}" alt="${print.alt}" loading="lazy" />`
    : `<div class="gallery-card__placeholder" style="background:${print.gradient}">${CATEGORY_ICON_SVG}</div>`;

  li.innerHTML = `
    <button class="gallery-card__btn" aria-label="View details: ${print.title}">
      <div class="gallery-card__media">
        ${mediaContent}
        <div class="gallery-card__overlay" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          View Details
        </div>
      </div>
      <div class="gallery-card__info">
        <div>
          <h3 class="gallery-card__title">${print.title}</h3>
          <span class="gallery-card__material">${print.material}</span>
        </div>
        <span class="badge badge--${print.category}">${capitalise(print.category)}</span>
      </div>
    </button>`;

  li.querySelector('.gallery-card__btn').addEventListener('click', () => openModal(print));
  return li;
}

function renderGallery() {
  const grid = $('#galleryGrid');
  const fragment = document.createDocumentFragment();
  galleryData.forEach(p => fragment.appendChild(createCard(p)));
  grid.appendChild(fragment);
}

function initFilters() {
  const btns  = $$('.filter-btn');
  const cards = () => $$('.gallery-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      cards().forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ============================================================
   MODAL
   ============================================================ */
let lastFocusedCard = null;

function openModal(print) {
  const overlay     = $('#modalOverlay');
  const modal       = overlay.querySelector('.modal');
  const closeBtn    = $('#modalClose');
  const imgEl       = $('#modalImage');
  const placeholder = $('#modalPlaceholder');

  // Populate
  $('#modalCategory').textContent  = capitalise(print.category);
  $('#modalCategory').className    = `modal__badge badge badge--${print.category}`;
  $('#modalTitle').textContent     = print.title;
  $('#modalMaterial').textContent  = print.material;
  $('#modalPrinter').textContent   = print.printer;
  $('#modalSettings').textContent  = print.settings;
  $('#modalDescription').textContent = print.description;

  if (print.image) {
    imgEl.src  = print.image;
    imgEl.alt  = print.alt;
    imgEl.style.display = '';
    placeholder.style.display = 'none';
  } else {
    imgEl.style.display = 'none';
    placeholder.style.display = '';
    placeholder.style.cssText = `background:${print.gradient}; position:absolute; inset:0;`;
  }

  // Show
  overlay.removeAttribute('aria-hidden');
  overlay.setAttribute('aria-hidden', 'false');
  overlay.style.display = 'flex';

  // Trigger CSS transition on next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => overlay.classList.add('is-open'));
  });

  document.body.style.overflow = 'hidden';
  lastFocusedCard = document.activeElement;

  // Focus close button
  closeBtn.focus();

  // Trap focus
  modal.addEventListener('keydown', trapFocus);
}

function closeModal() {
  const overlay = $('#modalOverlay');
  const modal   = overlay.querySelector('.modal');

  overlay.classList.remove('is-open');
  document.body.style.overflow = '';

  modal.removeEventListener('keydown', trapFocus);

  // Wait for CSS transition before hiding
  overlay.addEventListener('transitionend', function handler() {
    overlay.removeEventListener('transitionend', handler);
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.display = 'none';
  }, { once: true });

  if (lastFocusedCard) lastFocusedCard.focus();
}

function trapFocus(e) {
  const modal = $('#modalOverlay .modal');
  const focusable = $$('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])', modal)
    .filter(el => !el.disabled);
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (e.key === 'Escape') closeModal();
}

function initModal() {
  $('#modalClose').addEventListener('click', closeModal);

  // Close on backdrop click (not on the modal panel itself)
  $('#modalOverlay').addEventListener('click', e => {
    if (e.target === $('#modalOverlay')) closeModal();
  });
}

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   ============================================================ */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$('.reveal').forEach(el => io.observe(el));
}

/* ============================================================
   COUNTER ANIMATION — for bio teaser stats
   ============================================================ */
function animateCounter(el, target, duration = 1400) {
  const start = performance.now();
  const step  = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counterEls = $$('[data-target]');
  if (!counterEls.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target, 10));
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => io.observe(el));
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form       = $('#contactForm');
  const statusEl   = $('#formStatus');

  const fields = [
    { input: $('#contactName'),    error: $('#nameError'),    validate: v => v.trim().length >= 2 ? '' : 'Please enter your name.' },
    { input: $('#contactEmail'),   error: $('#emailError'),   validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.' },
    { input: $('#contactSubject'), error: $('#subjectError'), validate: v => v.trim().length >= 2 ? '' : 'Please enter a subject.' },
    { input: $('#contactMessage'), error: $('#messageError'), validate: v => v.trim().length >= 10 ? '' : 'Please enter a message (at least 10 characters).' },
  ];

  // Real-time validation on blur
  fields.forEach(({ input, error, validate }) => {
    input.addEventListener('blur', () => {
      const msg = validate(input.value);
      error.textContent = msg;
      input.classList.toggle('has-error', !!msg);
    });
    input.addEventListener('input', () => {
      if (input.classList.contains('has-error')) {
        const msg = validate(input.value);
        error.textContent = msg;
        input.classList.toggle('has-error', !!msg);
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Honeypot check
    const honeypot = form.querySelector('input[name="_honeypot"]');
    if (honeypot && honeypot.value) return;

    // Validate all fields
    let valid = true;
    fields.forEach(({ input, error, validate }) => {
      const msg = validate(input.value);
      error.textContent = msg;
      input.classList.toggle('has-error', !!msg);
      if (msg) valid = false;
    });

    if (!valid) {
      // Focus first invalid field
      const firstInvalid = fields.find(f => f.input.classList.contains('has-error'));
      if (firstInvalid) firstInvalid.input.focus();
      return;
    }

    // Simulate submission — wire up to Formspree, Netlify Forms, etc.
    // To use Formspree: change the form action to your endpoint and remove this handler.
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending…';
    statusEl.textContent = '';
    statusEl.className   = 'form-status';

    setTimeout(() => {
      form.reset();
      fields.forEach(({ input, error }) => {
        input.classList.remove('has-error');
        error.textContent = '';
      });
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
      statusEl.textContent = "Message sent! I'll get back to you soon.";
      statusEl.className   = 'form-status is-success';
    }, 1200);
  });
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function initScrollTop() {
  const btn = $('#scrollTop');

  window.addEventListener('scroll', () => {
    btn.hidden = window.scrollY < 400;
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
function setFooterYear() {
  const el = $('#footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initNav();
  renderGallery();
  initFilters();
  initModal();
  initReveal();
  initCounters();
  initContactForm();
  initScrollTop();
});
