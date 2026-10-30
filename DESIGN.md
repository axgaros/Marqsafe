# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 30 de octubre de 2026  
**Base vigente:** v60  
**Regla:** consultar este archivo antes de modificar HTML, CSS, JS, SVG, Gutenberg, Patterns, responsive o motion.

## Arquitectura Home

1. Hero.
2. Confianza: abogado + marcas.
3. Paquetes + otros servicios.
4. ¿Por qué registrar? + ¿Por qué MarqSafe?
5. Oficio/requerimiento IMPI.
6. FAQ compacta + CTA final.

`Cómo funciona el registro` vive en `registro.html`, no en Home.

## Hero Home

Desktop permanece congelado. Mobile conserva el expediente como recurso visual de fondo, precio visible y CTA principal.

## Confianza

La sección usa contenido profesional real para aprovechar el ancho; no adornos de relleno.

- eyebrow: **CONFIANZA Y ACOMPAÑAMIENTO**
- H2: **Atención legal directa para proteger tu marca**
- frase: **Tu trámite es atendido directamente por un abogado, con seguimiento por WhatsApp durante todo el proceso.**
- desktop: foto profesional con marco fino navy+dorado; nombre/rol/bio/CTA; información profesional verificable.
- mientras falten datos usar **Pendiente de información**. Nunca inventar credenciales.
- no reintroducir sin nueva aprobación: wordmark gigante v44, MQ animado v45, silueta de abogado ni copy inventado para llenar espacio.

## Carrusel de marcas

Conservar patrón aprobado:

- 13 imágenes fuente una sola vez;
- 5 slots visuales reciclados por JS;
- loop circular 13→1 y 1→13;
- sin autoplay ni numeración;
- swipe/touch y teclado;
- chevrons limpios;
- marca central nítida y vecinas atenuadas.

Título: **Marcas con las que hemos trabajado**. Antes de producción confirmar autorización pública de cada logo.

## Heroes de servicios

Desktop:

- Viabilidad, Oficios, Declaración, Renovación y Aviso comercial mantienen aproximadamente **14 px** entre header y bloque principal;
- eliminar línea divisoria al final del hero;
- la siguiente sección empieza con espacio corto y consistente;
- Registro conserva su hero especial y debe mostrar completo el borde superior;
- eyebrow de Registro: **REGISTRO DE MARCA**, con el mismo sistema dorado de los demás servicios;
- Declaración de uso conserva la compactación que permite mostrar completos ambos CTA sin agrandar innecesariamente el hero.

Mobile v60:

- la Home móvil es la referencia visual de las seis páginas de servicio;
- usar superficies editoriales grandes con radios de 26–30 px, blanco/gris suave/beige cálido, divisores finos y botones pill;
- evitar que los heroes se sientan como tarjetas desktop apiladas: el capítulo vive dentro de una superficie redondeada y el SVG se integra como fondo tenue;
- Registro adapta además pricing, requisitos, proceso y ciclo de vida al mismo lenguaje móvil.

## Rutas de requisitos — sistema vigente v60

La ruta **no representa pasos administrativos inventados**. Representa la información/documentos que MarqSafe necesita del cliente para realizar o revisar cada servicio.

### Cantidad y contenido por servicio

- **Registro de marca — 5 estaciones:** Producto o servicio; Nombre de la marca; Titular; Domicilio; Establecimiento.
- **Búsqueda y viabilidad — 2 estaciones:** Nombre exacto de la marca; Productos o servicios.
- **Oficios y requerimientos — 4 estaciones:** Oficio/PDF completo; Expediente u oficio; Fecha de notificación; Anexos o antecedentes.
- **Declaración de uso — 3 estaciones:** Número de registro; Productos o servicios en uso; Datos actuales del titular.
- **Renovación de marca — 3 estaciones:** Número de registro; Productos o servicios en uso; Datos del titular.
- **Aviso comercial — 3 estaciones:** Frase o eslogan exacto; Qué anuncia; Datos del titular.

### Geometría aprobada

Referencia conceptual aprobada el 29-oct-2026: un **camino periódico, simétrico y armónico**, similar a una onda/S continua con curvas limpias y radios consistentes.

- abandonar serpientes libres, curvas irregulares y cambios de dirección improvisados;
- **mobile es la geometría maestra aprobada**;
- **desktop no se diseña por separado:** es exactamente la geometría móvil rotada 90° en sentido antihorario y escalada horizontalmente;
- se conservan el mismo ritmo Bézier, periodicidad, separación relativa de estaciones y orden del recorrido;
- desktop entra por la izquierda a media altura, sube a la primera estación y después alterna cresta/valle de forma regular;
- mobile mantiene el recorrido vertical alternando derecha/izquierda;
- la misma periodicidad se adapta a 2, 3, 4 o 5 estaciones sin forzar una cantidad fija;
- el camino usa una pista exterior clara y gruesa, una guía central discontinua tenue y un trazo navy sólido;
- estaciones marcadas sobre la propia ruta;
- en desktop, los textos se colocan por fuera de la onda, arriba en crestas y abajo en valles;
- números 01, 02, etc. indican orden de lectura, no necesariamente etapas legales.

### Legibilidad móvil — v60

La geometría, marcadores y animación aprobados quedan **congelados**.

- el ajuste visual aplica sólo al layout/copy en <=720px;
- los textos dejan la máscara tipo sticker de v59;
- cada estación usa una **burbuja intencional** con radio de 18 px, alternando blanco y beige suave, integrada al sistema visual de Home;
- mantener separación suficiente entre burbuja y estación para que el camino nunca atraviese las letras;
- no modificar paths SVG, `viewBox`, posiciones de estaciones, grosor ni timing para resolver colisiones de texto;
- desktop no cambia.

### Motion aprobado

El relleno **no depende de recorrer toda la sección con scroll**.

- cuando la sección entra aproximadamente 18% al viewport, el camino comienza a llenarse automáticamente;
- el progreso continúa por tiempo aunque el usuario deje de hacer scroll;
- duración aproximada según cantidad de requisitos: 2 puntos = 1.7s; 3 = 2.2s; 4 = 2.7s; 5 = 3.2s;
- easing suave `easeInOutSine`;
- cada estación se activa cuando el trazo la alcanza;
- `prefers-reduced-motion`: camino completo y estaciones visibles inmediatamente;
- implementación: SVG + JS vanilla + IntersectionObserver; sin GSAP, canvas, WebGL ni librerías de motion.

### Semántica

Kicker aprobado: **QUÉ NECESITAMOS DE TI**.

## Fuente Agency — integración local

- La fuente comercial no se distribuye dentro del ZIP.
- Slot preparado: `assets/fonts/Agency.woff`.
- `styles.css` carga ese WOFF mediante `@font-face` y mantiene fallbacks si falta el archivo.
- No subir la fuente licenciada a repositorios públicos.

## Medición / marketing — decisión en pausa

No implementar todavía en el prototipo. La opción preferida a retomar es: **Google tag directa (`gtag.js`) + GA4 + Google Ads conversion tracking + Consent Mode + banner ligero propio**, sin Google Tag Manager inicialmente. Search Console queda separado como herramienta SEO sin JavaScript ni cookies en el visitante.

## SEO / CRO / WordPress

- un H1 único;
- jerarquía semántica;
- contenido real rastreable;
- WhatsApp como conversión principal;
- no inventar prueba social ni credenciales;
- futuro port a Gutenberg debe mantener contenido editable sin exponer CSS/JS crítico;
- datos repetidos como precios deben tener una sola fuente de verdad.

## Performance / accesibilidad

Priorizar SVG/WebP, JS pequeño, focus visible, teclado, contraste, targets táctiles cómodos y `prefers-reduced-motion`. Objetivos: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 y WCAG 2.2 AA donde aplique.

## Gate final

> ¿Ayuda a entender, confiar, decidir o actuar; usa el espacio sin rellenarlo artificialmente; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible?
