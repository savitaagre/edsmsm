// stardust:replica — interaction parity for wknd.site /us/en.html.
// Only behaviours motion-observe saw fire on the live page are implemented
// (stardust/replica/motion/us-en-html*.json); state class names mirror the live ones.
(() => {
  const body = document.body;

  // Header scroll morph: body.scrolly while scrollTop > 15 (lifted from clientlib-site JS).
  const updateScrolly = () => body.classList.toggle('scrolly', window.scrollY > 15);
  updateScrolly();
  document.addEventListener('scroll', updateScrolly, { capture: false, passive: true });

  // Hero carousel: prev / next / indicator switch the active slide (fadeIn .5s via CSS).
  // No autoplay — it never fired on live (0 idle class mutations).
  const carousel = document.querySelector('.hero-carousel');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('.hero-carousel__slide')];
    const dots = [...carousel.querySelectorAll('.hero-carousel__indicator')];
    let index = slides.findIndex((s) => s.classList.contains('cmp-carousel__item--active'));
    const show = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle('cmp-carousel__item--active', n === index));
      dots.forEach((d, n) => {
        d.classList.toggle('cmp-carousel__indicator--active', n === index);
        d.setAttribute('aria-selected', n === index ? 'true' : 'false');
        d.tabIndex = n === index ? 0 : -1;
      });
    };
    carousel.querySelector('.hero-carousel__action--previous')?.addEventListener('click', () => show(index - 1));
    carousel.querySelector('.hero-carousel__action--next')?.addEventListener('click', () => show(index + 1));
    dots.forEach((d, n) => d.addEventListener('click', () => show(n)));
  }

  // Language menu — the live state machine (clientlib-site JS): a toggle click places the menu at
  // `left = toggle.position().left - 240`, toggles `showMenu` / `open`; any click elsewhere closes it.
  const langToggle = document.querySelector('.lang-toggle');
  const langMenu = document.querySelector('.lang-menu');
  if (langToggle && langMenu) {
    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = langToggle.offsetParent || document.body; // jQuery .position(): fractional, relative to offsetParent
      langMenu.style.left = `${langToggle.getBoundingClientRect().left - parent.getBoundingClientRect().left - 240}px`;
      langMenu.classList.toggle('showMenu');
      langToggle.classList.toggle('open');
      langToggle.setAttribute('aria-expanded', 'true');
    });
    window.addEventListener('click', (e) => {
      if (e.target !== langToggle && langToggle.classList.contains('open')) {
        langMenu.classList.remove('showMenu');
        langToggle.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile navigation (≤1024): body.navPanel-visible slides the panel in (transform .5s via CSS).
  const mobileToggle = document.querySelector('.mobile-toggle__link');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const open = !body.classList.contains('navPanel-visible');
      body.classList.toggle('navPanel-visible', open);
      mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
