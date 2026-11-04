(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion) {
    requestAnimationFrame(() => document.body.classList.add('motion-ready'));
  }

  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.classList.toggle('is-open', !isOpen);
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.querySelectorAll('details[open]').forEach((details) => details.removeAttribute('open'));
      });
    });
  }

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = '<span></span>';
  document.body.prepend(progress);

  const updateScrollUI = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0;
    progress.style.setProperty('--progress', `${percentage}%`);
  };

  updateScrollUI();
  window.addEventListener('scroll', updateScrollUI, { passive: true });

  if (window.matchMedia('(max-width: 720px)').matches) {
    const heroCopy = document.querySelector('.home-page .hero-copy-v20.reveal');
    if (heroCopy) requestAnimationFrame(() => requestAnimationFrame(() => heroCopy.classList.add('is-visible')));
  }

  const revealElements = document.querySelectorAll('.reveal');

  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  if (!reducedMotion) {
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      let frame;

      element.addEventListener('pointermove', (event) => {
        if (window.innerWidth < 900) return;

        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          element.style.transform = `perspective(900px) rotateX(${(-y * 2.8).toFixed(2)}deg) rotateY(${(x * 3.2).toFixed(2)}deg)`;
        });
      });

      element.addEventListener('pointerleave', () => {
        element.style.transform = '';
      });
    });

    document.querySelectorAll('.magnetic').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        if (window.innerWidth < 900) return;

        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });

      element.addEventListener('pointerleave', () => {
        element.style.transform = '';
      });
    });
  }

  const officeToast = document.querySelector('[data-office-toast]');
  let toastWasClosed = false;
  try {
    toastWasClosed = window.sessionStorage.getItem('marqsafe-office-toast') === '1';
  } catch (_) {
    toastWasClosed = false;
  }

  if (officeToast && !toastWasClosed) {
    window.setTimeout(() => officeToast.classList.add('is-visible'), 5500);
  }

  const closeToastButton = document.querySelector('[data-toast-close]');
  if (closeToastButton) {
    closeToastButton.addEventListener('click', () => {
      if (officeToast) officeToast.classList.remove('is-visible');
      try {
        window.sessionStorage.setItem('marqsafe-office-toast', '1');
      } catch (_) {
      }
    });
  }



  const contactPrimary = document.querySelector('[data-whatsapp-primary]');
  const contactHeading = document.querySelector('[data-contact-heading]');
  const contactCopy = document.querySelector('[data-contact-copy]');
  const serviceFromURL = new URLSearchParams(window.location.search).get('servicio');
  const whatsappNumber = '523327139450';
  const whatsappMessages = {
    registro: {
      heading: 'Quiero registrar mi marca.',
      copy: 'Abrimos WhatsApp con un mensaje listo para iniciar la consulta sobre registro de marca.',
      text: 'Hola, quiero registrar mi marca. ¿Me pueden apoyar con el proceso y los requisitos?'
    },
    viabilidad: {
      heading: 'Quiero revisar la viabilidad de un nombre.',
      copy: 'Abrimos WhatsApp con un mensaje listo para consultar la búsqueda y el dictamen de viabilidad.',
      text: 'Hola, quiero revisar la viabilidad de un nombre para marca.'
    },
    oficios: {
      heading: 'Recibí un oficio o requerimiento del IMPI.',
      copy: 'Abrimos WhatsApp con un mensaje listo para revisar el oficio y entender qué respuesta requiere.',
      text: 'Hola, recibí un oficio o requerimiento del IMPI y quiero revisarlo.'
    },
    declaracion: {
      heading: 'Necesito una declaración de uso.',
      copy: 'Abrimos WhatsApp con un mensaje listo para iniciar la consulta de declaración de uso.',
      text: 'Hola, quiero apoyo con una declaración de uso.'
    },
    renovacion: {
      heading: 'Quiero renovar mi marca.',
      copy: 'Abrimos WhatsApp con un mensaje listo para revisar la renovación de la marca.',
      text: 'Hola, quiero apoyo con la renovación de mi marca.'
    },
    aviso: {
      heading: 'Quiero registrar un aviso comercial.',
      copy: 'Abrimos WhatsApp con un mensaje listo para consultar el trámite de aviso comercial.',
      text: 'Hola, quiero información sobre el registro de un aviso comercial.'
    },
    general: {
      heading: 'Cuéntanos qué necesitas revisar.',
      copy: 'Si ya sabes qué servicio necesitas, abre WhatsApp con un mensaje listo para enviar.',
      text: 'Hola, quiero información sobre los servicios de MarqSafe.'
    }
  };

  if (contactPrimary) {
    const serviceKey = whatsappMessages[serviceFromURL] ? serviceFromURL : 'general';
    const current = whatsappMessages[serviceKey];
    const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(current.text)}`;
    contactPrimary.setAttribute('href', href);
    if (contactHeading) contactHeading.textContent = current.heading;
    if (contactCopy) contactCopy.textContent = current.copy;
  }


  document.querySelectorAll('[data-client-brands]').forEach((section) => {
    const carousel = section.querySelector('[data-client-carousel]');
    const stage = section.querySelector('[data-client-stage]');
    const source = section.querySelector('[data-client-source]');
    const prevButton = section.querySelector('[data-client-prev]');
    const nextButton = section.querySelector('[data-client-next]');
    const status = section.querySelector('[data-client-status]');
    if (!carousel || !stage || !source) return;

    const sourceCards = Array.from(source.querySelectorAll('[data-brand-source]'));
    const brands = sourceCards.map((figure) => {
      const img = figure.querySelector('img');
      return {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') : '',
        label: figure.getAttribute('aria-label') || (img ? img.getAttribute('alt') : '')
      };
    }).filter((brand) => brand.src);

    if (!brands.length) return;

    const roles = ['is-far', 'is-near', 'is-active', 'is-near', 'is-far'];
    let current = 0;
    let animating = false;
    let pointerStartX = null;
    let pointerStartY = null;

    const wrap = (index) => ((index % brands.length) + brands.length) % brands.length;

    const escapeHtml = (value) => String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    const render = () => {
      const indexes = [
        wrap(current - 2),
        wrap(current - 1),
        current,
        wrap(current + 1),
        wrap(current + 2)
      ];

      stage.innerHTML = indexes.map((index, position) => {
        const brand = brands[index];
        const currentAttr = position === 2 ? ' aria-current="true"' : '';
        return `<figure class="client-logo-slot-v41 ${roles[position]}" aria-label="${escapeHtml(brand.label)}"${currentAttr}><img src="${escapeHtml(brand.src)}" alt="${escapeHtml(brand.alt)}" width="800" height="800" decoding="async"></figure>`;
      }).join('');
      if (status) status.textContent = `Marca ${current + 1} de ${brands.length}: ${brands[current].label}`;
    };

    const settleFrom = (direction) => {
      const enteringClass = direction > 0 ? 'is-entering-next' : 'is-entering-prev';
      stage.classList.add(enteringClass);
      render();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          stage.classList.remove(enteringClass);
          window.setTimeout(() => { animating = false; }, reducedMotion ? 0 : 190);
        });
      });
    };

    const move = (delta) => {
      if (animating || brands.length < 2) return;
      if (reducedMotion) {
        current = wrap(current + delta);
        render();
        return;
      }

      animating = true;
      const shiftingClass = delta > 0 ? 'is-shifting-next' : 'is-shifting-prev';
      stage.classList.add(shiftingClass);

      window.setTimeout(() => {
        current = wrap(current + delta);
        stage.classList.remove(shiftingClass);
        settleFrom(delta);
      }, 125);
    };

    section.classList.add('is-carousel-enhanced');
    source.setAttribute('aria-hidden', 'true');
    if (prevButton) prevButton.hidden = false;
    if (nextButton) nextButton.hidden = false;
    render();

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        move(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        move(-1);
      }
    });

    if (prevButton) prevButton.addEventListener('click', () => move(-1));
    if (nextButton) nextButton.addEventListener('click', () => move(1));

    carousel.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
    }, { passive: true });

    carousel.addEventListener('pointerup', (event) => {
      if (pointerStartX === null || pointerStartY === null) return;
      const dx = event.clientX - pointerStartX;
      const dy = event.clientY - pointerStartY;
      pointerStartX = null;
      pointerStartY = null;

      if (Math.abs(dx) < 34 || Math.abs(dx) <= Math.abs(dy)) return;
      move(dx < 0 ? 1 : -1);
    }, { passive: true });

    carousel.addEventListener('pointercancel', () => {
      pointerStartX = null;
      pointerStartY = null;
    }, { passive: true });
  });

})();

(() => {
  const routes = Array.from(document.querySelectorAll('[data-service-route]'));
  if (!routes.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

  const prepareRoute = (section) => {
    const paths = Array.from(section.querySelectorAll('[data-route-path]'));
    const stops = Array.from(section.querySelectorAll('[data-route-stop]'));
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.dataset.routeLength = String(length);
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = reduced ? '0' : `${length}`;
    });
    if (reduced) stops.forEach((stop) => stop.classList.add('is-active'));
  };

  const renderProgress = (section, progress) => {
    section.querySelectorAll('[data-route-path]').forEach((path) => {
      const length = Number(path.dataset.routeLength || 0);
      if (!length) return;
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    });
    section.querySelectorAll('[data-route-stop]').forEach((stop) => {
      const threshold = Number(stop.dataset.routeThreshold || 0);
      stop.classList.toggle('is-active', progress >= threshold);
    });
  };

  routes.forEach(prepareRoute);
  if (reduced) return;

  const animateRoute = (section) => {
    if (section.dataset.routeAnimated === 'true') return;
    section.dataset.routeAnimated = 'true';
    const duration = Number(section.dataset.routeDuration || 2200);
    const start = performance.now();

    const tick = (now) => {
      const raw = Math.min(1, (now - start) / duration);
      renderProgress(section, easeInOutSine(raw));
      if (raw < 1) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    routes.forEach(animateRoute);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateRoute(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  });

  routes.forEach((route) => observer.observe(route));
})();
