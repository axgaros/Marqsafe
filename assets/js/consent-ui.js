(function () {
  'use strict';

  var consent = window.MarqSafeConsent;
  if (!consent || !document.body) return;

  var container = document.createElement('div');
  container.className = 'mq-consent-root';
  container.innerHTML = '<section class="mq-consent-banner" aria-label="Preferencias de cookies" hidden>' +
    '<div class="mq-consent-banner-copy"><strong>Tu privacidad importa</strong>' +
    '<p>Usamos herramientas de Google para medir visitas y contactos por WhatsApp solo con tu permiso. Puedes aceptar, rechazar o personalizar la medición. <a href="aviso-de-privacidad.html">Aviso de privacidad</a>.</p></div>' +
    '<div class="mq-consent-actions"><button type="button" data-consent-action="deny">Rechazar</button>' +
    '<button type="button" data-consent-action="settings">Personalizar</button>' +
    '<button class="mq-consent-accept" type="button" data-consent-action="accept">Aceptar todas</button></div></section>' +
    '<div class="mq-consent-backdrop" hidden><section class="mq-consent-dialog" role="dialog" aria-modal="true" aria-labelledby="mq-consent-title" aria-describedby="mq-consent-desc" tabindex="-1">' +
    '<div class="mq-consent-dialog-head"><h2 id="mq-consent-title">Preferencias de cookies</h2>' +
    '<button type="button" class="mq-consent-close" data-consent-action="close" aria-label="Cerrar preferencias">×</button></div>' +
    '<p id="mq-consent-desc">Las cookies necesarias mantienen el sitio operativo. Puedes elegir por separado la medición de visitas y la de anuncios.</p>' +
    '<div class="mq-consent-option"><div><strong>Necesarias</strong><small>Funcionamiento básico y tus preferencias.</small></div><span>Siempre activas</span></div>' +
    '<label class="mq-consent-option"><div><strong>Analítica</strong><small>Google Analytics: visitas, páginas y clics comerciales de WhatsApp.</small></div><input type="checkbox" data-consent-analytics></label>' +
    '<label class="mq-consent-option"><div><strong>Publicidad</strong><small>Google Ads: conversiones atribuidas a anuncios al pulsar WhatsApp.</small></div><input type="checkbox" data-consent-ads></label>' +
    '<div class="mq-consent-dialog-actions"><button type="button" data-consent-action="deny">Rechazar todas</button>' +
    '<button type="button" data-consent-action="save" class="mq-consent-accept">Guardar preferencias</button></div>' +
    '</section></div>';

  document.body.appendChild(container);
  var banner = container.querySelector('.mq-consent-banner');
  var backdrop = container.querySelector('.mq-consent-backdrop');
  var dialog = container.querySelector('.mq-consent-dialog');
  var analyticsCheckbox = container.querySelector('[data-consent-analytics]');
  var adsCheckbox = container.querySelector('[data-consent-ads]');
  var returnFocus = null;

  function syncBanner() { banner.hidden = !!consent.get(); }

  function focusPageWithoutScrolling() {
    var main = document.getElementById('contenido');
    if (!main) return;
    if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
  }

  function closeSettings() {
    if (backdrop.hidden) return;
    backdrop.hidden = true;
    var target = returnFocus;
    returnFocus = null;
    if (target && target.isConnected && !target.closest('[hidden]')) {
      target.focus({ preventScroll: true });
    } else {
      focusPageWithoutScrolling();
    }
  }

  function openSettings(trigger) {
    returnFocus = trigger || document.activeElement;
    var existing = consent.get();
    analyticsCheckbox.checked = !!(existing && existing.analytics);
    adsCheckbox.checked = !!(existing && existing.ads);
    backdrop.hidden = false;
    dialog.focus();
  }

  function choose(analytics, ads) {
    var fromDialog = !backdrop.hidden;
    consent.save({ analytics: analytics, ads: ads });
    if (fromDialog) closeSettings();
    else focusPageWithoutScrolling();
    syncBanner();
  }

  document.addEventListener('click', function (event) {
    var trigger = event.target instanceof Element ? event.target.closest('[data-consent-action]') : null;
    if (!trigger) return;
    var action = trigger.getAttribute('data-consent-action');
    if (action === 'settings') openSettings(trigger);
    if (action === 'close') closeSettings();
    if (action === 'deny') choose(false, false);
    if (action === 'accept') choose(true, true);
    if (action === 'save') choose(analyticsCheckbox.checked, adsCheckbox.checked);
  });

  document.addEventListener('keydown', function (event) {
    if (backdrop.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); closeSettings(); return; }
    if (event.key !== 'Tab') return;
    var focusable = Array.prototype.slice.call(dialog.querySelectorAll('button:not([disabled]), input:not([disabled])'));
    if (!focusable.length) return;
    if (event.shiftKey && document.activeElement === focusable[0]) {
      focusable[focusable.length - 1].focus(); event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === focusable[focusable.length - 1]) {
      focusable[0].focus(); event.preventDefault();
    } else if (document.activeElement === dialog) {
      focusable[0].focus(); event.preventDefault();
    }
  });

  consent.subscribe(syncBanner);
  syncBanner();
}());
