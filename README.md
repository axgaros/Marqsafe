# MarqSafe — sitio web estático

**Versión de trabajo:** v108 · 3 de noviembre de 2026.  
**Estado:** prototipo previo a publicación. No desplegar sin completar los pendientes.

## Cómo usar

El directorio contiene el sitio completo. `index.html` es la portada; puede abrirse en un servidor local para revisar estilos y navegación. En producción se sube el contenido de este directorio a `public_html` del alojamiento Hostinger que controla el titular. El proyecto utiliza HTML, CSS y JavaScript; no requiere WordPress, backend ni base de datos.

Para revisar localmente rutas y navegación con un servidor HTTP, desde la carpeta raíz:

```bash
python -m http.server 8000
```

La configuración `.htaccess` se aplica únicamente en un servidor compatible con Apache; el servidor Python no interpreta sus reglas.

## Estructura funcional

- `index.html`: inicio comercial.
- `registro.html`, `viabilidad.html`, `oficios.html`, `declaracion.html`, `renovacion.html`, `aviso-comercial.html`: servicios.
- `marqsafe.html`: perfil y confianza.
- `blog.html`: listado editorial.
- `bloque-1.html` a `bloque-6.html`: seis artículos internos, en el mismo orden que sus tarjetas en el Blog. Los números corresponden exclusivamente a nombres técnicos; los titulares visibles son editoriales y no están enumerados.
- `contacto.html`: opciones de contacto y aviso simplificado.
- `aviso-de-privacidad.html`: aviso integral, accesible en producción mediante `/aviso-de-privacidad`.
- `404.html`, `.htaccess`, `robots.txt`, `sitemap.xml`: configuración SEO y respuesta de errores.
- `assets/css/styles.css`, `assets/js/main.js`: estilos y comportamiento.
- `assets/img/blog/`: seis fotografías WebP locales de 1200 × 750 px.
- `assets/img/`, `assets/marcas-clientes/`: imágenes reales y favicon.
- `assets/fonts/README.txt`: instrucciones para incorporar el archivo de tipografía autorizado, **no incluido** en el prototipo.

## SEO y contenidos

El dominio canónico definido es `https://marqsafe.com/`. Las páginas editoriales cuentan con título, descripción, canonical, marcado `BlogPosting` y enlaces a sus fuentes. El sitemap enumera las 15 URLs actualmente consideradas para indexación; la página de contacto y el aviso de privacidad no se incluyeron en ese listado.

**`noindex,nofollow` es intencional mientras no se publique.** Retirarlo solamente de las páginas indexables en la compilación final. La ruta de privacidad y las redirecciones deben validarse con el dominio real una vez publicado.

**No se han instalado etiquetas de Google Analytics o Ads.** La referencia a esas herramientas en el aviso integral procede del texto facilitado por el titular y debe confirmarse antes de publicar.

## Pendientes antes de publicación

1. Confirmar que `diego@marqsafe.com` envía y recibe correo.
2. Confirmar con Diego el texto legal sobre cookies, publicidad y terceros; aprobar textos jurídicos, artículos, servicios y precios.
3. Confirmar autorización para mostrar públicamente los logotipos de clientes.
4. Probar menú, carrusel, CTA WhatsApp, artículos y rutas animadas en dispositivos reales; revisar expresamente Viabilidad en escritorio y móvil.
5. Incorporar la fuente Agency **solo si el titular aporta la versión web licenciada adecuada**. Nunca incluir el archivo de fuente en un repositorio público sin verificar el permiso de distribución.
6. Ejecutar el trabajo separado de limpieza/optimización de CSS/JS, junto con pruebas de regresión. CSS actual permanece sin minificar.
7. Retirar `noindex,nofollow` y desplegar; confirmar SSL, respuestas HTTP, redirecciones, favicon, sitemap y robots en Hostinger.

## Documentación

- `DESIGN.md`: reglas de diseño y animación aprobadas.
- `ARCHITECTURE.md`: rutas, navegación y decisiones de estructura.
- `SOURCES.md`: referencias legales, noticias, fotografías y atribución de glifos.
- `QA-AUDIT.md`: validación estructural y pendientes de pruebas visuales.

Las páginas y fuentes de información no se deben atribuir personalmente a Diego sin su aprobación. La optimización y auditoría final de CSS/JS son una etapa posterior.
