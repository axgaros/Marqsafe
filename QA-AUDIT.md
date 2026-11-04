# QA-AUDIT — MarqSafe v108

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
