# QA-AUDIT — MarqSafe · registro acumulativo

**Estado:** validación estática del paquete; queda pendiente validación real en navegadores, servidores y móviles.  
**Alcance:** base v107, cambio de seis nombres de página, consolidación de documentación y retirada de comentarios de desarrollo.

## Comprobaciones estáticas

- Archivos HTML válidos para análisis estructural, un H1 por página, sin identificadores duplicados ni referencias locales faltantes.
- Seis tarjetas enlazadas a `bloque-1.html` ... `bloque-6.html`, sin números visibles agregados.
- En los seis artículos: canonical autorreferencial, `mainEntityOfPage.@id` del JSON-LD, imágenes `BlogPosting.image` locales y enlaces `Continuar leyendo` actualizados.
- `sitemap.xml`: URLs de los seis artículos actualizadas y XML legible.
- `assets/img/blog/`: seis WebP optimizados locales; `assets/marcas-clientes/`: trece logotipos.
- Comentarios de desarrollo retirados del CSS, JS, HTML y `.htaccess`; las reglas, declaraciones, contenido y comportamiento permanecen sin optimización deliberada.
- Se preservan la licencia/atribución de iconos en `SOURCES.md` y la documentación de fuentes/fotografías.
- CSS **no** está minificado, consolidado ni depurado; no afirmar mejoras de performance solo por borrar comentarios.

## Pendientes reales

- Verificar render responsive y animaciones en navegador real, incluida ruta Viabilidad.
- Confirmar recepción de correo `diego@marqsafe.com`.
- Aprobación jurídica/editorial de Diego sobre artículos, servicios, precios y textos de cookies/ads.
- Confirmar autorización de uso público de los trece logos.
- Incorporación de fuente licenciada solo cuando corresponda; no compartir fuentes propietarias.
- Auditoría futura de CSS/JS, regresión visual y optimización posterior.
- Antes de subir a Hostinger, retirar noindex de URLs indexables; verificar servidor, 301, HTTPS, 404 y rutas limpias.


---

## v109 — Auditoría conservadora de CSS/JS y ZIP limpio (4 noviembre 2026)

**Alcance:** se añade un proceso reproducible de optimización sin modificar el HTML aprobado ni el JavaScript original de v108. Se conserva en GitHub el CSS fuente para auditoría y se genera un CSS depurado/minificado exclusivamente para el ZIP del prototipo.

**Método:** PostCSS identifica reglas que dependen exclusivamente de clases que no aparecen en ninguna de las 18 páginas HTML ni en el JavaScript (y mantiene intactas las clases dinámicas y los selectores con pseudoclases ambiguas); Lightning CSS reduce la salida y preserva el orden seguro de la cascada. No se borran rutas SVG, estilos de animación con clases dinámicas, media queries vigentes ni reglas sin certeza de ausencia.

**Control de regresiones:** el workflow compara automáticamente capturas completas del sitio original contra el optimizado, en 360, 390, 720, 768, 1050 y 1440 px para cada una de las 18 páginas. Comprueba menú móvil, carrusel, presencia de rutas de los seis servicios y errores JS. Si falla una comparación, **no se entrega el ZIP como aprobado**. Los resultados cuantitativos están en el artefacto \`reporte-v109.json\` generado por GitHub Actions; el código por sí solo no acredita que la ejecución haya pasado.

**Entrega:** el ZIP excluye todos los Markdown de desarrollo, la carpeta docs, README auxiliares, manifiestos de desarrollo y herramientas de compilación; conserva HTML, CSS optimizado, JS intacto, imágenes, .htaccess, robots y sitemap. Incluye solamente un aviso de licencias de terceros para el uso de iconos e imágenes. El repositorio conserva íntegra su documentación acumulativa.

**Decisiones del usuario confirmadas:** funcionamiento visual y funcional actual aprobado; contenido jurídico y comercial, aviso de privacidad, blog y uso de logotipos autorizados. Search Console descartado. HTTPS/SSL y redirecciones revisados previamente; no reabrir como nueva tarea de implementación. Correo \`diego@marqsafe.com\` sigue sin confirmarse. Fuente Agency se incorporará al ZIP definitivo por el titular; \`noindex,nofollow\` se retirará solamente en la entrega final para publicación. El despliegue en Hostinger sigue pendiente.

**Estado de v109:** la optimización propuesta solo se considerará validada cuando el workflow marque PASS. No declarar métricas de ahorro o equivalencia visual antes de contar con el reporte.

### Resultado ejecutado y verificado — v109

GitHub Actions completó correctamente el workflow `Auditar y empaquetar prototipo limpio`:
https://github.com/axgaros/Marqsafe/actions/runs/41758798511

- Resultado del job: **SUCCESS**.
- CSS fuente v108: **258,146 bytes**.
- CSS tras la eliminación conservadora de reglas: **187,384 bytes**.
- CSS optimizado de distribución (Lightning CSS): **164,022 bytes**.
- Reducción neta: **94,124 bytes (36.46%)** respecto al original.
- Reglas eliminadas mediante análisis estático: **739**.
- JS: fuente original **sin cambios**, con verificación de sintaxis y ausencia de errores durante la prueba.
- Comparación visual: **18 páginas × 6 anchos de pantalla × 2 versiones = 216 capturas**.
- Resoluciones comprobadas: **360, 390, 720, 768, 1050 y 1440 px**.
- Resultado de comparación de capturas: **0 fallos fuera de tolerancia**.
- Errores JavaScript observados: **0**.
- Comprobaciones adicionales: menú móvil abre/cierra; carrusel avanza; existen las seis rutas SVG de requisitos; vínculos a archivos locales presentes; un H1 por página.
- Imágenes incluidas en ZIP: **22**.
- Entregables del workflow: `MarqSafe-v109-prototipo-limpio` y `MarqSafe-v109-auditoria` (este último contiene `reporte-v109.json` con selectores retirados).
- El código fuente original continúa en GitHub; `dist/` y los ZIP son generados automáticamente, no se conservan dentro del árbol fuente.

**Alcance de la afirmación:** PASS confirma equivalencia visual dentro de la tolerancia y pruebas automatizadas sobre los estados medidos. No demuestra todos los estados posibles en todos los navegadores o dispositivos. No equivale a una prueba de rendimiento Core Web Vitals de producción. No se modificaron los archivos HTML ni JS aprobados.

**Estado posterior:** queda pendiente confirmar `diego@marqsafe.com`, integrar Agency en el paquete definitivo por el titular, retirar `noindex,nofollow` únicamente en el ZIP final y desplegar en Hostinger. No usar Google Search Console.

---

## v110 — Terminología, comentarios y auditoría de rendimiento (4 noviembre 2026)

**Cambios autorizados:** `contacto.html` cambia “Aviso de privacidad simplificado” y “aviso integral” por “Aviso de privacidad”; `aviso-de-privacidad.html` elimina “integral” del encabezado y la metadescripción. La redacción legal de fondo permanece intacta. `index.html` y `marqsafe.html` añaden las dimensiones intrínsecas 1122×1402 a la fotografía de Diego Ortega, conservando los estilos aprobados.

**Paquete:** no generar `AVISOS-DE-TERCEROS.txt`. Permanecen en el repositorio público los créditos y condiciones documentados en `SOURCES.md`; respetar las licencias de terceros en el uso del sitio. El ZIP v110 no contiene documentación de desarrollo, archivos de fuente comercial o recursos temporales.

**Comentarios:** un examen estático de los 18 HTML, el CSS distribuible y `main.js` no detectó comentarios `<!-- -->`, `/* */` o líneas de comentario JavaScript. No se realizan cambios arbitrarios al JS probado.

**Peso medido del ZIP v110 local:** 1,038,273 bytes en 45 archivos descomprimidos; 726,559 bytes del ZIP de distribución. WebP (21 archivos) suma aproximadamente 614 KB; CSS distribuible 164,022 bytes; JS 13,732 bytes; 18 páginas HTML suman cerca de 240 KB. La cifra total es el proyecto completo, **no los bytes por visita**.

**Aclaración de metodología:** la regresión de v109 fue positiva (216 capturas, PASS). La v110 añade terminología y dimensiones intrínsecas. El workflow valida otra vez todo el sitio y ejecuta Lighthouse sobre una muestra representativa de páginas en móvil y escritorio. Los informes se publican como artefactos del workflow; **no afirmar métricas Lighthouse definitivas hasta consultar el resultado real**. Las condiciones de GitHub Actions no representan el rendimiento real del sitio hasta publicarlo en Hostinger.

**Próximos pasos de producción:** comprobar correo `diego@marqsafe.com`; integrar Agency licenciada por el titular en la entrega definitiva; retirar `noindex,nofollow` de páginas indexables solamente al publicar; desplegar en Hostinger. Search Console descartado. No reabrir el texto legal, blog ni autorizaciones ya aprobadas.


### Verificación ejecutada de v110 — GitHub Actions

Ejecución: https://github.com/axgaros/Marqsafe/actions/runs/41763456437 — resultado **SUCCESS**.

- **Regresión:** PASS; 216 capturas comparadas en 18 páginas y 6 anchuras (360, 390, 720, 768, 1050, 1440 px); 0 diferencias fuera de tolerancia, 0 errores JavaScript.
- **CSS:** 258,146 bytes originales; 164,022 bytes de distribución optimizada; eliminación conservadora de 739 reglas. JavaScript sin modificaciones.
- **Lighthouse sintético:** 12 páginas móviles (rendimiento 99–100/100, mediana 100) y 3 escritorio (100/100). LCP mediano móvil 0.96 s y rango desktop 0.25–0.67 s; TBT 0 ms y CLS 0 en las 15 ejecuciones.
- **Accesibilidad:** 95–100/100. Hay textos dorados de contraste insuficiente en MarqSafe, Blog, Contacto y numeración del aviso. No se cambia visual aprobado sin autorización.
- **Buenas prácticas:** 96/100 por solicitud 404 del archivo `assets/fonts/Agency.woff`, deliberadamente ausente hasta la entrega final con fuente licenciada.
- **SEO:** 69/100 por `noindex,nofollow` intencional del prototipo. No confundir con SEO final publicado.
- **CSS sin uso en vista de cada página:** Lighthouse estima 19–26 KiB, aunque el CSS es global y sirve múltiples páginas. No dividir estilos por ruta sin demostrar beneficio neto y ausencia de regresiones.
- **ZIP validado:** 45 archivos funcionales, 1,038,273 bytes descomprimidos; ZIP directo de entrega 726,559 bytes. Sin `AVISOS-DE-TERCEROS.txt`, Markdown o herramientas de desarrollo. Créditos y condiciones permanecen en `SOURCES.md` del repositorio.
- **Integridad:** las cuatro páginas modificadas localmente (`contacto.html`, `aviso-de-privacidad.html`, `index.html`, `marqsafe.html`) coinciden byte por byte con el ZIP generado en GitHub. No se detectaron comentarios de desarrollo en HTML/CSS/JS del prototipo.
- **Límite:** Lighthouse se ejecutó contra servidor local en GitHub Actions con gzip y caché simulada; no mide latencia de Hostinger, Core Web Vitals de usuarios, ni comportamiento de la futura fuente Agency.


---

## v111 — Restitución de la foto de Diego Ortega al HTML v109 (4 noviembre 2026)

- Se revierten **únicamente** los atributos `width="1122" height="1402"` añadidos al `<img>` del abogado en `index.html` y `marqsafe.html` durante v110; la etiqueta completa vuelve a coincidir con la de v109.
- El WebP de Diego es **idéntico** (SHA-256 `be604834c094f2bbb2dde810d3dc9da2454576a40a6012609ae51fc51490fe8b`); no se ha retocado ni sustituido la fotografía.
- Sin modificaciones en CSS, JavaScript, estructura del sitio, textos legales o imágenes. El ZIP v111 entregado en ChatGPT es igual al ZIP v110 a excepción de estas dos etiquetas HTML; contiene 45 archivos y ocupa 726,538 bytes.
- Se conserva `noindex,nofollow` hasta la entrega definitiva, por lo que el diagnóstico SEO sintético de Lighthouse (~69/100) no indica que la arquitectura SEO sea deficiente; responde principalmente a la orden explícita de no indexar.
- **Detalles de contraste según Lighthouse v110:** Home escritorio: encabezado dorado “TU MARCA, EN BUENAS MANOS” y palabra “IMPI”; Registro escritorio: palabra “IMPI” y precio “$6,500 MXN”; MarqSafe móvil: “CONFIANZA Y ACOMPAÑAMIENTO”; Blog: categorías/fechas de las tarjetas (clase `.resource-card-copy-v81 small`); Contacto móvil: “CONTACTO DIRECTO”; Aviso de privacidad móvil: números “01” a “08”. Lighthouse también marcó el texto del botón flotante de WhatsApp en algunas pruebas de escritorio; ese texto no es dorado y debe revisarse por separado si se aborda accesibilidad. No se alteraron los colores porque el usuario solo solicitó identificar las zonas.
- Los resultados y la metodología de rendimiento de v110 siguen siendo la última auditoría sintética aprobada. La automatización de v111 repetirá el control visual y Lighthouse, sin atribuir valores numéricos a la ejecución antes de completarla.


---

## v112 — ZIP definitivo indexable para Hostinger (4 noviembre 2026)

**Cambios:** en las quince páginas listadas en `sitemap.xml` se eliminó la metaetiqueta `noindex,nofollow`. En `contacto.html` y `aviso-de-privacidad.html` se sustituyó por `noindex,follow`, y `404.html` conservó `noindex,follow`. Se preservaron íntegramente textos, rutas, imágenes, CSS y JS de v111; en especial la fotografía de Diego restaurada a los atributos HTML de v109.

**ZIP entregado al usuario en ChatGPT:** `MarqSafe_v112_DEFINITIVO_publicacion.zip`; 726,344 bytes comprimidos; 1,037,495 bytes descomprimidos; 45 archivos de contenido + directorio vacío `assets/fonts/`; SHA-256 `48f8926cf89ee15132f852bf255bf26b3af34bed1940d1a81f33490c96dcfad5`.

**Validación estática del ZIP:** prueba de integridad ZIP, 18 HTML, 15 URLs de sitemap, 15 páginas sin `noindex` ni `nofollow`, Contacto, Privacidad y 404 con `noindex,follow`, CSS/JS originales de v111, sin comentarios en archivos HTML/CSS/JS y sin fuentes propietarias. No se ha validado este ZIP en el servidor de producción.

**Instrucciones:** insertar el fichero de fuente licenciada con nombre/archivo real `assets/fonts/Agency.woff` cuando se cumpla la licencia; al recomprimir, seleccionar los archivos de la raíz y evitar una carpeta envolvente. Extraer en `public_html` del Hostinger del cliente. Confirmar HTTPS y rutas en producción. Correo `diego@marqsafe.com` pendiente de prueba. Search Console descartado. El SEO técnico se encuentra implementado, sin promesa de indexación o posicionamiento inmediato.


---

## v113 — Corrección de superposición del hero móvil y flechas SVG (4 noviembre 2026)

- **Motivo y diagnóstico:** en móviles reales, el SVG decorativo del hero de Inicio se veía por encima del título y párrafo, aparentando transparencia. CSS tenía `.home-page .hero-copy-v20{display:contents}` en un breakpoint y la regla v38 definía `z-index:2` para ese mismo contenedor. Al no generar caja propia, `display:contents` anulaba el efecto de apilamiento del contenedor. Se recupera `display:block`, `position:relative`, `z-index:2` y `opacity:1`, con el SVG decorativo en `z-index:0`. Solo breakpoint de hasta 720 px; escritorio permanece sin modificaciones de diseño.
- **Flechas:** se sustituyeron los caracteres tipográficos direccionales (`↗`, `→`, `←`) en los HTML por iconos SVG de línea, basados en el trazo del botón principal del hero, evitando glifos renderizados como emoji. Se mantiene el sentido de retorno de los enlaces del blog. Sin dependencias externas.
- **Alcance:** solo archivos HTML con flechas, CSS y documentación/código de compilación. JavaScript, logo, imágenes y SEO indexable permanecen intactos.
- **Validación:** se realizará análisis estructural del ZIP y pruebas automatizadas del entorno de GitHub Actions. Esta versión incorpora cambios visuales deliberados, por lo que la regresión permite diferencias explícitamente acotadas en flechas y hero móvil, verificando en lugar de exigir identidad absoluta en dichos elementos. No atribuir la validación a un teléfono físico hasta comprobarla tras desplegar.
- **Publicación y fuente:** el ZIP completo excluye `Agency.woff` por licencia; al actualizar Hostinger, conservar la fuente ya instalada o añadir el archivo comprado al ZIP antes de subir. No eliminar la carpeta de fuentes de producción.


### Resultados verificados de v113

GitHub Actions **SUCCESS**: https://github.com/axgaros/Marqsafe/actions/runs/41769595361

- Compilación CSS: 258,512 bytes fuente; 187,750 bytes tras poda conservadora; 164,385 bytes CSS final minificado. 739 reglas eliminadas mediante análisis estático.
- Regresión visual automatizada: **PASS**, 18 páginas, 6 anchos de pantalla, 216 capturas, **0 fallos fuera de tolerancias**, 0 errores JS. La prueba comprueba el apilamiento del hero móvil y permite diferencias intencionales de v113.
- Lighthouse sintético en GitHub Actions: **100/100 en rendimiento y SEO para Inicio móvil**, LCP ~1.0 s, TBT 0 ms, CLS 0. No son datos de usuarios reales ni medidos en Hostinger.
- Los artefactos v113 de prototipo, auditoría y Lighthouse están disponibles en el workflow.
- Las pruebas simuladas no sustituyen comprobar en el dispositivo físico donde apareció el síntoma.


---

## v114 — Reversión de v113 y corrección mínima basada en v112

- **Base exacta:** árbol de archivos de publicación v112 (`b32126fd03a14f329f78ab54c94441a43df0904d`). Se descartan por completo los nuevos SVG, estilos y modificaciones HTML de v113.
- **Flechas:** únicamente se sustituyen 68 símbolos `↗` por el símbolo simple `→` ya usado en el CTA original del hero. No se añade ningún SVG o biblioteca ni se altera otro texto.
- **Hero en móvil:** se añaden reglas CSS limitadas a `width<=720px` para mantener opacidad completa del texto y elevar en z-index los seis hijos directos del contenedor `hero-copy-v20`. Se preserva `display:contents` y toda la geometría y transparencia de la ilustración del hero v112.
- **Cambios reales de distribución:** los 18 archivos HTML se modificaron solo en caracteres de flecha (los que no tenían no se modificaron) y `assets/css/styles.css` suma un bloque acotado. El resto de los archivos del ZIP son idénticos byte por byte a v112 (27 entradas sin modificaciones).
- **ZIP entregado:** `MarqSafe_v114_SOLO_HERO_Y_FLECHAS.zip` generado desde el ZIP v112 de publicación; 726,835 bytes. Conserva sin cambios el SEO de publicación (15 páginas indexables).
- **Límite de prueba:** la integridad del ZIP y la comparación binaria de los archivos no modificados fueron verificadas; la inspección visual local con Chromium estuvo bloqueada por la política de la herramienta. La comprobación definitiva de la transparencia debe realizarse en el celular físico.
- **Fuentes:** el ZIP no distribuye `Agency.woff` por licencia; mantener el archivo ya instalado en Hostinger al actualizar.


---

## v115 — Restauración de la flecha ↗ como texto y texto del hero móvil opaco (4 de noviembre de 2026)

- **Base de publicación:** v112 (commit `b32126fd03a14f329f78ab54c94441a43df0904d`); se descartan completamente las intervenciones de v113 y v114 en HTML/CSS.
- **Flechas:** conservar `↗` y adjuntar selector Unicode `U+FE0E` de presentación textual (↗︎) a las 68 ocurrencias de los 18 HTML. Los 62 iconos envueltos en spans reciben clase `arrow-text` y tipografía de símbolos sin emoji. Se corrigen también ambos pseudo-elementos CSS móviles (`service-compact:after` y `contact-service-card span:after`) que generaban caracteres sin selector de texto.
- **Hero móvil:** solo a anchuras <=720 px, elevar hijos directos del contenedor `hero-copy-v20` con `z-index:5`, forzar `opacity:1` y `mix-blend-mode:normal`, mantener la ilustración en `z-index:0` y forzar el texto del contenedor `reveal` a opacidad completa. Conservar el original `display:contents` y todas las dimensiones, posiciones e imagen de fondo del hero v112.
- **Entrega ChatGPT:** `MarqSafe_v115_FLECHA_TEXTO_HERO_OPACO.zip`, tamaño 726,905 bytes, SHA-256 `498117b8e99a7a9b3f50ac5f4254e5608432d4838d71b052ac830e2f38632c2c`; 45 archivos; 26 sin cambio byte a byte; solo 18 HTML y CSS alterados.
- **Pruebas:** integridad del ZIP, equivalencia exacta de archivos no afectados, 18 HTML y flechas tipográficas correctas. No se pudo ejecutar Chromium local por bloqueo de la plataforma; NO afirmar todavía comprobación en teléfono físico. Validar en el móvil después de reemplazar el CSS y limpiar caché. El sitio sigue indexable y la fuente Agency comprada se mantiene fuera del ZIP.


---

## v118 — Corregido desde v112: observación del hero móvil y flechas horizontales

- Base del **sitio web**: commit v112 `b32126fd03a14f329f78ab54c94441a43df0904d`. Se abandonan todas las modificaciones del código de v113–v115.
- **Causa verificada en Chromium móvil:** `.hero-copy-v20` usa `display:contents`; su clase `reveal` nunca recibe `is-visible` desde IntersectionObserver porque no genera caja observable. Con `motion-ready`, la opacidad calculada caía a 0. Se agrega solo una activación `requestAnimationFrame` doble en móvil para poner la clase `is-visible`, conservando las transiciones y animaciones originales, incluido el SVG.
- **Flechas:** las 62 marcas `↗` de spans existentes mantienen la diagonal en escritorio y muestran `→` únicamente a <=720px. Pseudoelementos móviles de tarjetas de servicios y de Contacto muestran `→` en ese breakpoint. El resto del diseño permanece igual.
- CSS y JS con query `?v=118` en los HTML correspondientes para invalidar caché de móviles tras sustituir archivos. Todos los textos, SEO y 25 archivos de recursos no afectados son idénticos a v112.
- **Validación:** integridad ZIP, comparación SHA256 por archivo con base v112; prueba de Chromium con HTML y recursos inyectados: contenedor del hero en móvil permanece en opacidad `1`, animación `v20-paper-in` sigue activa y flecha móvil `→` visible, diagonal oculta, sin errores JS.
- Artefacto entregado en conversación: `MarqSafe_v118_HERO_Y_FLECHAS_MOVIL.zip`; checksum SHA-256 `72fa075fbefc891ec95762885c1a6261070ec19bd6fca82ecf902c47f88ca2a6`. Fuente Agency licenciada no incluida; preservarla al actualizar Hostinger.


---

## Observaciones de Diego — edición preliminar posterior a v118 (4 noviembre 2026)

**Estado:** trabajo preparado en rama aislada `work/diego-observaciones-pendientes-imagenes`; **no fusionado ni publicado**. El sitio v118 en `main` permanece intacto hasta recibir las tres imágenes nuevas y aprobar la entrega completa.

- Se reemplaza «con cerca de 8 años de experiencia» por «con 8 años de experiencia» en Inicio y MarqSafe.
- «Áreas de práctica» queda descrita como: «Propiedad intelectual, con especialidad en registro, defensa y mantenimiento de marcas ante el IMPI.» en ambas secciones del abogado.
- Doormex y Lunya dejan de ser referencias visibles en los dos carruseles; su registro se retira del manifiesto activo. Los archivos WebP originales se conservan provisionalmente en la rama hasta integrar los tres nuevos logotipos. Objetivo final: 14 logotipos (13 originales − 2 + 3).
- Paquete Protección total de la Home: se añade la contestación de oficios en caso de requerimiento del IMPI, en descripción y beneficios. El precio no cambia.
- FAQ de la Home: respuesta sobre duración del registro reemplazada literalmente por los tres párrafos aprobados por Diego.
- Avisos de privacidad: se sustituye la mención del nombre completo del titular por «MarqSafe» en el aviso de Contacto y el aviso integral. Validar con el titular que esta identificación es jurídicamente correcta, dado que un nombre comercial puede no coincidir con el responsable legal del tratamiento.
- Búsqueda y viabilidad: se elimina «incluye derechos del IMPI» del precio sin cambiar el importe de $1,000.
- Queda pendiente recibir tres imágenes, optimizarlas a WebP, incorporarlas y revisar el carrusel/estructura en todas las vistas. No se modificaron CSS, JavaScript, fotografía de Diego ni páginas ajenas a las observaciones.
- Antes de fusionar: contrastar copia HTML/manifest, verificar 14 logotipos, navegación, y empaquetar ZIP limpio preservando la fuente Agency ya instalada en Hostinger.
