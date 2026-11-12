# MarqSafe v126 — Integración Google tag / GA4 / Ads

**Estado:** CANDIDATO; NO PUBLICAR EN HOSTINGER HASTA QA Y VALIDACIÓN DE CUENTAS.  
**Base:** ZIP v125 aprobado, SHA-256 `bef6da8db5b9b76094a1df81783e2fb63202d184b6b7867a7396d0efa1d518fe`.

## Arquitectura

- Google tag directo mediante gtag.js, sin Google Tag Manager.
- `assets/js/consent.js`: preferencias separadas por Analytics/Ads, estado predeterminado denegado y carga condicional de Google tag (Consent Mode v2 básico).
- `assets/js/consent-ui.js` y `assets/css/consent.css`: banner y diálogo de preferencias, sin modificaciones al CSS original.
- `assets/js/measurement.js`: delegación de un clic, `whatsapp_click` hacia GA4 `G-43GTZJT6RM` y `conversion` hacia Ads `AW-18569645801/1mvzCJCewbYdEOmd2ZZF`.
- Solo clics de WhatsApp comerciales: 28 de los 29 enlaces directos del HTML, excluyendo la gestión administrativa de privacidad. No registrar cargas de página ni clicks internos a `contacto.html` como conversiones.
- No enviar contenido de mensajes predefinidos como parámetros personalizados.
- `assets/js/main.js` y `assets/css/styles.css` conservados byte por byte de v125.
- Mensajes, URLs WhatsApp, SEO, diseño y texto jurídico aprobado conservados.

## Pendientes fuera del código

1. GA4: en Administrar > Flujos de datos > Web > Medición mejorada > opciones, desactivar solo **Clics salientes**. Mantener vistas y demás métricas acordadas.
2. GA4: revisar ocultación del parámetro `text` en URL de enlaces, y evitar envío inadvertido de datos personales.
3. Tag Assistant y GA4 DebugView: consentimientos nulo/denegado, parcial y total; detectar un único `whatsapp_click` por clic comercial y ausencia de `whatsapp_click` en el enlace administrativo.
4. Ads: comprobar la acción `Contacto por WhatsApp` (conteo recomendado Una, principal/secundaria según estrategia y ausencia de duplicados).
5. Navegador/HTTPS: pruebas visuales y funcionales completas (banner, accesibilidad, escritorio/móvil, scripts bloqueados), así como prueba real del envío de eventos a Google.
6. Revisar la legalidad/adecuación del consentimiento y tratamiento de cookies antes de publicar.

**Limitación de QA:** los tests estáticos y simulados pasaron en la preparación del ZIP, pero Chromium local bloqueó la navegación; no se declara ninguna validación visual automatizada ni recepción real por Google. El usuario realizó revisión visual manual inicial en local y confirmó que los enlaces WhatsApp abren con sus mensajes. GitHub no sustituye estas pruebas.
