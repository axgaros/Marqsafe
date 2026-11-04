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
2. Los textos jurídicos, artículos, servicios, precios y aviso de privacidad están aprobados. Conservar el aviso tal como se acordó; la analítica/Ads no está todavía instalada.
3. Los trece logotipos de clientes ya cuentan con autorización; no volver a solicitarla.
4. El desarrollador ha validado el funcionamiento visual y funcional vigente. Una optimización futura debe comprobar que no cambia ese comportamiento (pruebas de regresión, no repetición de aprobación).
5. El titular integrará la fuente Agency licenciada únicamente al preparar el ZIP final para subir a Hostinger; nunca incluirla en el repositorio público.
6. Ejecutar/verificar la limpieza de CSS mediante el pipeline reproducible de v109, con comparación visual y registro de métricas; el CSS original permanece intacto hasta demostrar seguridad.
7. Retirar `noindex,nofollow` solamente en el ZIP definitivo y desplegar en Hostinger; verificar que SSL automático y configuración del servidor funcionen al publicarse. Las reglas de redirección ya fueron revisadas. No integrar Search Console.

## Documentación

- `DESIGN.md`: reglas de diseño y animación aprobadas.
- `ARCHITECTURE.md`: rutas, navegación y decisiones de estructura.
- `SOURCES.md`: referencias legales, noticias, fotografías y atribución de glifos.
- `QA-AUDIT.md`: validación estructural y pendientes de pruebas visuales.

Los artículos conservan su autoría institucional sin atribución personal arbitraria. La optimización CSS/JS exige pruebas de regresión antes de declarar resultados; no modificar diseños aprobados.


## Entregables limpios a partir de v109

La documentación de trabajo SIEMPRE permanece en GitHub (README, DESIGN, ARCHITECTURE, QA-AUDIT, SOURCES, docs y scripts). **No se incluye en los ZIP de prototipo.** El archivo \`QA-AUDIT.md\` mantiene secciones acumulativas por versión. El workflow \`.github/workflows/prototype-clean.yml\` crea un ZIP de archivos funcionales y comprueba el resultado visual frente a la versión base antes de publicarlo como artefacto descargable. El código HTML/JS aprobado sigue intacto y la optimización de CSS se realiza en una copia de distribución. El ZIP conserva \`noindex,nofollow\` hasta la entrega definitiva.
