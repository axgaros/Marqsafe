# MarqSafe — arquitectura de trabajo v108

## Sitio y despliegue

- Sitio estático con HTML, CSS y JavaScript, sin WordPress ni backend.
- Alojamiento Hostinger, publicación mediante `public_html`.
- Dominio canónico: `https://marqsafe.com/` sin `www`, con HTTPS.
- Archivo `.htaccess`: redirección de `www` a raíz, HTTP a HTTPS, `/index.html` a `/`, `/recursos.html` a `/blog.html`, y la ruta sin extensión `/aviso-de-privacidad`. Define respuesta 404 propia.
- `robots.txt` y `sitemap.xml` se entregan sin cambios funcionales respecto a v107 salvo los nuevos destinos editoriales.

## Navegación

- Inicio (`index.html`), Registro de marca (`registro.html`), menú Servicios con seis enlaces directos, Blog (`blog.html`), MarqSafe (`marqsafe.html`), Contacto (`contacto.html`).
- En escritorio, Servicios es un desplegable; en móvil, un acordeón. El servicio actual se indica visualmente y con `aria-current`.
- La ruta `servicios.html` no existe: no crear una página-hub intermedia.

## Artículos y recursos

- `blog.html` muestra seis noticias/casos, cada uno con URL interna propia.
- `bloque-1.html`: American Eagle / OVERSLEPT.
- `bloque-2.html`: Nike / 7-Eleven.
- `bloque-3.html`: Michelob Ultra / Amstel Ultra.
- `bloque-4.html`: New Balance / Decathlon.
- `bloque-5.html`: IKEA / parodia.
- `bloque-6.html`: Jack Daniel’s / Bad Spaniels.
- Los nombres de archivo `bloque-N.html` son técnicos. Ninguna tarjeta ni artículo lleva un número de bloque visible.
- Fotografías estáticas locales: `assets/img/blog/`; los nombres descriptivos de las imágenes no se renombran.
- Los seis artículos tienen canonical, metadescripción, JSON-LD `BlogPosting`, citas a fuentes públicas y autoría institucional MarqSafe pendiente de aprobación.

## Decisiones y límites

- CTA por WhatsApp, sin formularios que persistan datos.
- GA4 / Ads / etiqueta de Google aún no están integrados; dependerán de campañas futuras.
- Los `noindex,nofollow` del prototipo se retirarán para las páginas indexables solo al publicar.
- El CSS conserva su estructura histórica; su auditoría y refactor quedan para la siguiente etapa.
- Solo añadir credenciales, reseñas o declaraciones legales verificadas y aprobadas por el cliente.
- Ajustar avisos legales y autorización de logos antes del lanzamiento.
