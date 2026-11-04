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
