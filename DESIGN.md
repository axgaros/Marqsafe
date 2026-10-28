# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 28 de octubre de 2026  
**Base vigente:** v55  
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

Desktop usa tres zonas: foto profesional con marco fino navy+dorado; nombre/rol/bio/CTA; información profesional verificable.

Mientras falten datos usar **Pendiente de información**. Nunca inventar universidad, diplomados, años de experiencia, cédula, especialidad ni credenciales.

No reintroducir sin nueva aprobación: wordmark gigante v44, MQ animado v45, silueta de abogado ni copy inventado para llenar espacio.

## Carrusel de marcas

Conservar patrón aprobado:

- 13 imágenes fuente una sola vez;
- 5 slots visuales reciclados por JS;
- loop circular 13→1 y 1→13;
- sin autoplay ni numeración;
- swipe/touch y teclado;
- chevrons limpios;
- marca central nítida y vecinas atenuadas.

Título: **Marcas con las que hemos trabajado**.

Antes de producción confirmar autorización para exhibir públicamente cada logo.

## Heroes de servicios

Desktop:

- Viabilidad, Oficios, Declaración, Renovación y Aviso comercial mantienen aproximadamente **14 px** entre header y bloque principal;
- eliminar línea divisoria al final del hero;
- la siguiente sección empieza con espacio corto y consistente, no pegada ni con hueco grande;
- Registro conserva su hero especial y debe mostrar completo el borde superior;
- eyebrow de Registro: **REGISTRO DE MARCA**, con el mismo sistema dorado de los demás servicios;
- Declaración de uso conserva la compactación que permite mostrar completos ambos CTA sin agrandar innecesariamente el hero.

## Rutas adaptativas de requisitos — v55

Esta sección **sustituye las reglas de contenido y cantidad de estaciones de v52–v54**.

La ruta no representa pasos administrativos inventados. Representa **la información/documentos que MarqSafe necesita del cliente para realizar o revisar cada servicio**.

### Cantidad y contenido por servicio

- **Registro de marca — 5 estaciones:** Producto o servicio; Nombre de la marca; Titular; Domicilio; Establecimiento.
- **Búsqueda y viabilidad — 2 estaciones:** Nombre exacto de la marca; Productos o servicios.
- **Oficios y requerimientos — 4 estaciones:** Oficio/PDF completo; Expediente u oficio; Fecha de notificación; Anexos o antecedentes.
- **Declaración de uso — 3 estaciones:** Número de registro; Productos o servicios en uso; Datos actuales del titular.
- **Renovación de marca — 3 estaciones:** Número de registro; Productos o servicios en uso; Datos del titular.
- **Aviso comercial — 3 estaciones:** Frase o eslogan exacto; Qué anuncia; Datos del titular.

### Geometría

- base visual aprobada: **opción A**, S limpia, armónica y simétrica;
- cada estación alterna izquierda/derecha;
- curvas Bézier amplias con tangentes verticales suaves;
- la misma gramática se adapta a 2, 3, 4 o 5 estaciones; nunca forzar un número fijo por estética;
- 2 puntos = curva simple; 3 = S clásica; 4 = S extendida; 5 = doble S vertical;
- mobile usa la misma gramática pero más vertical y compacta;
- el camino es el recurso gráfico principal: sin cards ni iconos genéricos;
- pista base clara y trazo navy más grueso;
- el trazo se rellena progresivamente conforme el usuario hace scroll;
- cada estación se activa en dorado al llegar el recorrido;
- SVG + JS vanilla; sin GSAP, canvas, WebGL ni librerías de motion;
- `prefers-reduced-motion`: ruta completa y estaciones visibles sin animación.

### Semántica

El kicker aprobado es **QUÉ NECESITAMOS DE TI**. Los números 01, 02, etc. indican orden de lectura, no necesariamente etapas legales del trámite.

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

> ¿Ayuda a entender, confiar, decidir o actuar; usa el espacio sin rellenarlo artificialmente; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?
