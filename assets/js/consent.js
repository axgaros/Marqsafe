(function () {
  'use strict';

  var KEY = 'marqsafe-consent-v1';
  var ANALYTICS = 'G-43GTZJT6RM';
  var ADS = 'AW-18569645801';
  var listeners = [];
  var configured = { analytics: false, ads: false };
  var googleLoaded = false;
  var sessionChoice = null;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  function validChoice(value) {
    return value && value.version === 1 &&
      typeof value.analytics === 'boolean' && typeof value.ads === 'boolean';
  }

  function readChoice() {
    if (sessionChoice !== null) return sessionChoice;
    try {
      var saved = JSON.parse(window.localStorage.getItem(KEY));
      return validChoice(saved) ? { analytics: saved.analytics, ads: saved.ads } : null;
    } catch (_) {
      return null;
    }
  }

  function currentConsent(choice) {
    return {
      analytics_storage: choice && choice.analytics ? 'granted' : 'denied',
      ad_storage: choice && choice.ads ? 'granted' : 'denied',
      ad_user_data: choice && choice.ads ? 'granted' : 'denied',
      ad_personalization: 'denied'
    };
  }

  function startGoogle() {
    var choice = readChoice();
    if (!choice || (!choice.analytics && !choice.ads)) return;

    window.gtag('consent', 'update', currentConsent(choice));

    if (!googleLoaded) {
      googleLoaded = true;
      window.gtag('js', new Date());
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + (choice.analytics ? ANALYTICS : ADS);
      document.head.appendChild(script);
    }

    if (choice.analytics && !configured.analytics) {
      configured.analytics = true;
      window.gtag('config', ANALYTICS, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    }
    if (choice.ads && !configured.ads) {
      configured.ads = true;
      window.gtag('config', ADS, { allow_ad_personalization_signals: false });
    }
  }

  function notify() {
    var choice = readChoice();
    listeners.slice().forEach(function (listener) { listener(choice); });
  }

  function saveChoice(input) {
    if (!input || typeof input.analytics !== 'boolean' || typeof input.ads !== 'boolean') return false;
    var previous = readChoice();
    var next = { analytics: input.analytics, ads: input.ads };
    sessionChoice = next;
    try {
      window.localStorage.setItem(KEY, JSON.stringify({
        version: 1, analytics: next.analytics, ads: next.ads
      }));
    } catch (_) {
    }

    var revoked = !!previous && ((previous.analytics && !next.analytics) || (previous.ads && !next.ads));
    if (revoked && googleLoaded) {
      window.gtag('consent', 'update', currentConsent(next));
      window.location.reload();
      return true;
    }

    startGoogle();
    notify();
    return true;
  }

  window.MarqSafeConsent = Object.freeze({
    get: readChoice,
    save: saveChoice,
    canAnalytics: function () { var choice = readChoice(); return !!choice && choice.analytics; },
    canAds: function () { var choice = readChoice(); return !!choice && choice.ads; },
    subscribe: function (listener) {
      if (typeof listener !== 'function') return function () {};
      listeners.push(listener);
      return function () { listeners = listeners.filter(function (item) { return item !== listener; }); };
    }
  });

  startGoogle();
}());
