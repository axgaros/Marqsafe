# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 3 de noviembre de 2026  
**Base vigente:** v108 (sitio completo, previo a limpieza de CSS/JS)  
**Regla:** consultar este archivo antes de modificar HTML, CSS, JS, SVG, responsive o motion.

## Arquitectura Home

1. Hero.
2. Confianza: abogado + marcas.
3. Paquetes + otros servicios.
4. ¿Por qué registrar? + ¿Por qué MarqSafe?
5. Oficio/requerimiento IMPI.
6. FAQ compacta.

`Cómo funciona el registro` vive en `registro.html`, no en Home.

## Hero Home

Desktop permanece congelado. Mobile conserva el expediente como recurso visual de fondo, precio visible y CTA principal.

## Confianza

La sección usa contenido profesional real para aprovechar el ancho; no adornos de relleno.

- eyebrow: **CONFIANZA Y ACOMPAÑAMIENTO**
- H2: **Atención legal directa para proteger tu marca**
- frase: **Tu trámite es atendido directamente por un abogado, con seguimiento por WhatsApp durante todo el proceso.**
- desktop: foto profesional con marco fino navy+dorado; nombre/rol/copy/CTA; bloque “Formación y experiencia”.
- datos públicos aprobados: Licenciatura en Derecho por la Universidad Autónoma de Guadalajara; 8 años de experiencia en propiedad intelectual; práctica en registro de marcas, oficios, declaraciones de uso y renovaciones ante el IMPI.
- no inventar credenciales adicionales a las proporcionadas por el cliente.
- no reintroducir sin nueva aprobación: wordmark gigante v44, MQ animado v45, silueta de abogado ni copy inventado para llenar espacio.


## Blog v82

- URL definitiva del listado: `blog.html`; la ruta histórica `recursos.html` redirige por 301 a `blog.html`.
- Seis tarjetas iniciales, todas enlazadas a artículos propios.
- Las tarjetas conservan su composición editorial aprobada, con fotografías contextuales reales de Unsplash integradas desde v84 y guardadas localmente en WebP desde v107.
- Cada artículo usa la plantilla editorial existente (`article-page`, `article-header`, `article-body`, `prose`) para evitar añadir CSS antes de la limpieza final.
- Artículos iniciales: American Eagle/OVERSLEPT; Nike/7-Eleven; Michelob Ultra/Amstel Ultra; New Balance/Decathlon; IKEA/parodia política; Jack Daniel’s/Bad Spaniels.

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

Mobile v63:

- la Home móvil es la referencia visual de las seis páginas de servicio;
- usar superficies editoriales grandes con radios de 26–30 px, blanco/gris suave/beige cálido, divisores finos y botones pill;
- evitar que los heroes se sientan como tarjetas desktop apiladas: el capítulo vive dentro de una superficie redondeada y el SVG se integra como fondo tenue;
- el hero de Inicio conserva el expediente como recurso visual, pero en móvil debe verse grande y presente, no relegado a una esquina;
- Registro usa un visual distinto al expediente de Inicio: composición abstracta de marca/clasificación/protección, con presencia equivalente; el escudo debe ser compacto verticalmente, no alargado;
- Registro adapta además pricing, requisitos, proceso y ciclo de vida al mismo lenguaje móvil.

## Rutas de requisitos — sistema vigente v63

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

### Legibilidad móvil — v63

La geometría, marcadores y animación aprobados quedan **congelados**.

- el ajuste visual aplica sólo al layout/copy en <=720px;
- en móvil, cada estación muestra **número dorado + título del requisito**; se oculta la descripción para evitar saturación;
- el número es pequeño, dorado y funciona como apoyo de lectura, sin caja propia;
- se elimina por completo el look de sticker/burbuja: sin fondo, borde ni sombra;
- los títulos se colocan hacia el exterior del marcador con una separación fija para que nunca toquen el punto ni el trazo;
- esta regla se aplica a las seis páginas de servicio, adaptándose automáticamente a rutas de 2, 3, 4 o 5 estaciones;
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

No implementar todavía en el prototipo. La opción preferida a retomar es: **Google tag directa (`gtag.js`) + GA4 + Google Ads conversion tracking + Consent Mode + banner ligero propio**, sin Google Tag Manager inicialmente. Google Search Console queda descartado por decisión del cliente/desarrollador; no proponer su implementación.

## SEO / CRO / arquitectura

- un H1 único;
- jerarquía semántica;
- contenido real rastreable;
- WhatsApp como conversión principal;
- no inventar prueba social ni credenciales;
- producción: frontend estático HTML/CSS/JS desplegado directamente en hosting; no usar WordPress/Gutenberg;
- datos repetidos como precios deben tener una sola fuente de verdad.

## Performance / accesibilidad

Priorizar SVG/WebP, JS pequeño, focus visible, teclado, contraste, targets táctiles cómodos y `prefers-reduced-motion`. Objetivos: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 y WCAG 2.2 AA donde aplique.

## Gate final

> ¿Ayuda a entender, confiar, decidir o actuar; usa el espacio sin rellenarlo artificialmente; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible?


## Propuesta MarqSafe v64 — pendiente de aprobación

La página `marqsafe.html` se propone como una extensión editorial de la Home: hero fuerte de marca, explicación de enfoque, atención legal directa, servicios por etapa y atención remota. Esta sección no queda congelada hasta aprobación explícita del cliente/desarrollador.

## Propuesta MarqSafe v66 — pendiente de aprobación

- `marqsafe.html` conserva la estructura compacta de v65.
- Hero: copy a la izquierda y recurso editorial vectorial a la derecha.
- El recurso usa `MARQ / SAFE` sobredimensionado con el slot local `Agency`, navy/dorado, órbitas finas y escudo/check lineal.
- Implementación inline SVG (~1.2 KB de markup), sin PNG/JPG, filtros, canvas ni librerías.
- No congelar esta propuesta como contrato visual hasta aprobación del cliente/desarrollador.


## Propuesta v68 — recurso México en hero MarqSafe
- La silueta de México del hero se trazó directamente desde la referencia visual aportada por el usuario.
- Se ignora todo texto de la imagen de referencia.
- El contorno se simplifica a un único path SVG ligero (~1.1 KB) manteniendo Baja California, Golfo de México y Yucatán.
- Sigue detrás de MARQ/SAFE como watermark; no compite con el arte principal.
- No congelar en GitHub hasta aprobación visual.


## Propuesta v68 — silueta México en hero MarqSafe

- Sustituye únicamente la silueta incorrecta de v67.
- El contorno se traza directamente desde la referencia visual proporcionada por el cliente; se ignora todo texto de la imagen.
- Se conserva la relación de aspecto original del mapa y se simplifica a 145 vértices para reducir peso sin perder la forma reconocible.
- MARQ/SAFE, órbitas, nodos, escudo y layout de v66 permanecen intactos.
- Pendiente de aprobación antes de congelar esta decisión en el DESIGN.md del repositorio.


## Cierre de páginas — v69

- Se eliminan las secciones finales tipo `final-cta` de todas las páginas donde existían.
- No sustituirlas por otro bloque promocional al final.
- La página debe terminar en su último contenido útil y pasar directamente al footer.
- Se mantienen intactos footer, WhatsApp flotante y CTAs contextuales dentro del contenido.


## Propuesta v70 — Blog y MarqSafe móvil

- `blog.html` y `marqsafe.html` heredan en <=720px el lenguaje móvil aprobado de Home/servicios.
- Desktop de ambas páginas permanece intacto.
- Blog: hero como superficie redondeada; primer artículo destacado; resto como lista editorial compacta dentro de una superficie gris suave.
- MarqSafe: hero aprobado se conserva; Confianza/Marcas se agrupan en una superficie editorial gris; Servicios en una superficie beige cálida con filas y divisores, evitando card soup.
- Márgenes móviles: 12 px exteriores; radios principales 28–30 px; CTAs pill existentes se conservan.
- Pendiente de aprobación visual antes de congelar en el DESIGN.md del repositorio.


## Candidato v71 — correcciones móviles solicitadas (pendiente de aprobación)

- **Blog/`blog.html`:** la adaptación móvil de v70 queda aprobada y no se modifica.
- **MarqSafe/`marqsafe.html`:** se corrige únicamente el hero móvil; el recurso MARQ/SAFE + México vuelve a funcionar como fondo tenue detrás del contenido, siguiendo el patrón aprobado de los heroes móviles de servicios. Desktop permanece intacto.
- **Contacto/`contacto.html`:** la página se conserva. En móvil se compacta a hero editorial + bloque principal de WhatsApp + lista breve de accesos por servicio; se elimina la sensación de grid desktop apilado y el espacio muerto. El toast de oficios se oculta sólo en Contacto móvil por ser redundante. Desktop permanece intacto.
- La base vigente sigue marcada como **v69** hasta que este candidato sea revisado/aprobado.


## v103 — Artículos editoriales internos
- Seis tarjetas del Blog conservan íntegros el layout, las fotos y los títulos, pero ahora abren seis rutas internas.
- Diseño de página propio, editorial blanco y ligero, con jerarquía tipográfica y una columna de lectura cómoda.
- Móvil: artículo de una columna, imagen contextual compacta y sin navegación lateral sticky.
- No usar artículos copiados, imágenes de noticias sin licencia, ni atribuir los artículos a Diego sin aprobación.
- Bibliografía en cada artículo y en `SOURCES.md`. La capa SEO existente mantiene `noindex,nofollow` hasta la publicación.

## Blog y edición — v108

- Las seis páginas conservan exactamente sus titulares, diseños de escritorio y móvil, cuerpos y fuentes aprobadas en v104–v107.
- Solo sus nombres técnicos cambian a `bloque-1.html` ... `bloque-6.html`, siguiendo el orden de tarjetas en `blog.html`.
- No mostrar el índice del bloque en las páginas, menús ni tarjetas.
- Imágenes locales WebP y texto visible se mantienen, sin alteraciones estéticas.
- Se eliminan comentarios de desarrollo de HTML, CSS, JavaScript y `.htaccess` sin consolidar ni minificar reglas.
- No realizar optimización integral ni rediseño antes de una etapa posterior de auditoría visual/técnica.


## Confirmaciones del 3 de noviembre de 2026 — prevalecen sobre pendientes anteriores

- Diseño y funcionalidad de la versión v108 aprobados por el desarrollador; no reabrir pruebas previamente aceptadas como si fueran tareas pendientes de contenido.
- Los textos jurídicos, precios y contenido comercial están aprobados; el aviso de privacidad se conserva tal como está a petición expresa del cliente/desarrollador, incluso si describe herramientas que se integrarán más adelante.
- Los 13 logotipos y los seis artículos editoriales fueron aprobados/autorizados. No volver a solicitarlos sin un cambio real.
- El correo `diego@marqsafe.com` sigue pendiente de confirmar.
- La fuente Agency se integrará por el titular al preparar la entrega definitiva; nunca subir sus archivos a un repositorio público.
- Search Console NO se instalará. Tampoco integrar analítica/Ads hasta que el cliente lo solicite.
- No volver a tratar las redirecciones como una implementación pendiente: fueron revisadas previamente. La comprobación del servidor de producción y SSL automático se hará durante el despliegue, sin suponer que el certificado esté operativo antes de publicar.
- La retirada de `noindex,nofollow` solo se hará en el ZIP definitivo de publicación, no en los prototipos.
- Los ZIP de prototipo contienen únicamente archivos de sitio imprescindibles y avisos de terceros exigibles. La documentación, auditorías, fuentes de referencia y scripts permanecen en GitHub.
- `QA-AUDIT.md` debe seguir como registro histórico **acumulativo**, agregando una sección por versión.
- Optimización de CSS/JS: cualquier regla retirada exige justificación y verificación de no regresión visual/funcional. No aplicar un purgador agresivo por ausencia de un selector en el HTML.
