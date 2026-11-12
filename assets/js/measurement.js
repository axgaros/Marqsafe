(function () {
  'use strict';

  if (window.__marqsafeMeasurementReady) return;
  window.__marqsafeMeasurementReady = true;

  var ADS_CONVERSION = 'AW-18569645801/1mvzCJCewbYdEOmd2ZZF';
  var ANALYTICS = 'G-43GTZJT6RM';
  var WHATSAPP_NUMBER = '523327139450';
  var SERVICES = ['registro', 'viabilidad', 'oficios', 'declaracion', 'renovacion', 'aviso'];

  function pageFile() {
    var file = window.location.pathname.split('/').pop() || 'index.html';
    return file.indexOf('.') === -1 ? file + '.html' : file;
  }

  function pageType(file) {
    if (file === 'index.html') return 'inicio';
    if (file === 'marqsafe.html') return 'marqsafe';
    if (file === 'contacto.html') return 'contacto';
    if (file === 'blog.html') return 'blog';
    if (/^bloque-[1-6]\.html$/.test(file)) return 'articulo';
    if (file === 'aviso-de-privacidad.html') return 'privacidad';
    if (file === '404.html') return 'error404';
    return 'servicio';
  }

  function safeService(anchor, file) {
    var manual = anchor.getAttribute('data-track-service');
    if (manual && SERVICES.indexOf(manual) !== -1) return manual;
    if (file === 'contacto.html' && anchor.hasAttribute('data-whatsapp-primary')) {
      var query = new URLSearchParams(window.location.search).get('servicio');
      return SERVICES.indexOf(query) !== -1 ? query : 'registro';
    }
    var fromPage = file.replace(/\.html$/, '');
    return SERVICES.indexOf(fromPage) !== -1 ? fromPage : '';
  }

  function placement(anchor) {
    if (anchor.classList.contains('floating-whatsapp-v28')) return 'flotante';
    if (anchor.hasAttribute('data-whatsapp-primary')) return 'contacto_principal';
    if (anchor.classList.contains('contact-service-card')) return 'tarjeta_contacto';
    if (anchor.closest('.hero, [class*="hero-"]')) return 'hero';
    return 'contenido';
  }

  function commercialWhatsApp(anchor) {
    var url;
    try { url = new URL(anchor.href); } catch (_) { return false; }
    if (url.protocol !== 'https:' || url.hostname !== 'wa.me' ||
        url.pathname.replace(/\/$/, '') !== '/' + WHATSAPP_NUMBER) return false;
    return !(pageFile() === 'aviso-de-privacidad.html' &&
      anchor.closest('section[aria-labelledby="privacy-heading-1"]') &&
      !url.searchParams.has('text'));
  }

  document.addEventListener('click', function (event) {
    var anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!anchor || !commercialWhatsApp(anchor)) return;
    var consent = window.MarqSafeConsent;
    if (!consent || typeof window.gtag !== 'function') return;
    if (!consent.canAnalytics() && !consent.canAds()) return;

    if (consent.canAnalytics()) {
      var file = pageFile();
      var params = {
        send_to: ANALYTICS,
        page_type: pageType(file),
        placement: placement(anchor)
      };
      var service = safeService(anchor, file);
      if (service) params.service = service;
      window.gtag('event', 'whatsapp_click', params);
    }

    if (consent.canAds()) {
      window.gtag('event', 'conversion', { send_to: ADS_CONVERSION });
    }
  }, false);
}());
