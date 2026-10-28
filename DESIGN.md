# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 27 de octubre de 2026  
**Fuente de verdad:** consultar este archivo antes de cualquier cambio visual o de frontend.  
**Base de trabajo vigente:** v42.  
**Desktop:** arquitectura de Home sincronizada con móvil; **hero desktop congelado** y no debe rediseñarse sin aprobación explícita.  
**Foco actual:** refinamiento visual y responsive de Home.  
**Referencia principal:** EasyLex móvil para estudiar ritmo, jerarquía, respiración, cards, pricing, CTA y recursos visuales. No copiar assets, textos, estadísticas, testimonios, colores, curvas ni layout pixel por pixel.

---

# 1. Regla de trabajo obligatoria

Antes de crear o modificar HTML, CSS, JavaScript, SVG, Gutenberg, Patterns, bloques personalizados, responsive o motion, consultar este archivo y verificar que la propuesta no contradiga sus reglas.

SEO, CRO, rendimiento, accesibilidad y futura editabilidad en WordPress son restricciones del diseño desde el principio, no auditorías posteriores.

---

# 2. Tesis de diseño

MarqSafe debe sentirse como una consultoría especializada en propiedad intelectual:

- clara;
- profesional;
- cercana;
- ordenada;
- confiable;
- ligera;
- transparente;
- humana.

Debe hacer que un trámite complejo parezca comprensible y acompañado.

No debe sentirse como:

- despacho jurídico antiguo;
- SaaS genérico;
- plantilla de IA;
- landing con cards para todo;
- lujo artificial;
- documento legal interminable;
- clon de EasyLex.

---

# 3. Principio visual central: expediente de marca

El recurso visual propio de MarqSafe será el **expediente/documento de marca**.

Inspiración funcional: el documento del hero móvil de EasyLex, porque esa dirección fue validada por el cliente.

La ejecución debe ser original y ligera, preferentemente SVG.

Puede representar:

- MARCA;
- CLASE;
- ESTADO;
- folio;
- búsqueda;
- solicitud;
- sello/check;
- requerimiento;
- seguimiento.

No debe reproducir documentos oficiales del IMPI ni confundirse con uno real.

## Hero móvil — regla v39

El expediente del hero debe funcionar como recurso visual de fondo realmente perceptible.

Reglas:

- no limitarlo a una esquina inferior;
- ocupar una zona amplia del costado derecho;
- usar fade/máscara hacia el copy;
- suficiente contraste para reconocer documento y sello;
- no competir con H1, precio ni CTA;
- motion mínimo mediante `transform` y `opacity`;
- respetar `prefers-reduced-motion`.

---

# 4. “Más aire” — definición oficial

Más aire NO significa hacer secciones más altas.

Significa:

- menos elementos compitiendo;
- mejor agrupación;
- padding interno suficiente;
- jerarquía más clara;
- menos card soup;
- alternar superficies;
- reducir texto simultáneo;
- dejar que la siguiente sección asome.

Evitar `100vh`, padding gigante y espacio muerto sin función.

En móvil, cada viewport debe tener una idea dominante, no necesariamente una sección completa.

---

# 5. Arquitectura aprobada de Home

La Home se organiza en 6 macrosecciones:

1. Hero.
2. Confianza: abogado + marcas.
3. Paquetes + otros servicios.
4. ¿Por qué registrar? + ¿Por qué MarqSafe?
5. Oficio/requerimiento IMPI.
6. FAQ compacta + CTA final.

`Cómo funciona el registro` NO vive en Home; se mantiene en `registro.html`.

---

# 6. Hero

Contenido principal:

**TU MARCA, EN BUENAS MANOS**

# Registra tu marca ante el IMPI

Con búsqueda previa, presentación del trámite y seguimiento hasta la resolución.

Precio visible:

**Desde $6,500 MXN**  
**por clase y marca · derechos del IMPI incluidos**

No usar “desde $1,000” en hero porque puede confundirse con el registro completo.

CTA principal: **Quiero registrar mi marca**  
CTA secundario: **Ver paquetes**

El hero móvil debe ser compacto, no `100vh`, y tener el expediente visible como fondo.

El hero desktop queda congelado: no rediseñarlo durante el refinamiento actual.

---

# 7. Confianza — abogado + marcas

El abogado y las marcas forman una sola macrosección.

Entrada aprobada:

**CONFIANZA Y ACOMPAÑAMIENTO**

**Tu marca, acompañada directamente por un abogado**

Mantener:

**Te atiende un abogado por WhatsApp de principio a fin.**

No usar abogado stock.

Cuando exista información real, usar foto, nombre, cargo, bio y credenciales autorizadas.

Mientras no exista foto real, usar placeholder explícito de foto, no isotipo ambiguo.

## Carrusel de marcas — patrón aprobado v41

El carrusel debe ser circular **sin clonar conjuntos completos de logos**.

Fuente:

- 13 imágenes reales una sola vez en el HTML;
- 5 slots visuales reciclados mediante JS;
- anterior 2 / anterior / ACTUAL / siguiente / siguiente 2.

Comportamiento:

- después de la última marca continúa la primera;
- al retroceder desde la primera continúa la última;
- sin reset visible de scroll;
- sin logos duplicados simultáneamente por clones;
- sin numeración visible;
- sin autoplay;
- swipe/touch;
- teclado;
- marca central nítida;
- laterales con opacidad menor, escala ligera y blur muy suave;
- transición corta;
- chevrons/flechas sin círculo;
- target táctil mínimo 44×44 CSS px;
- focus visible;
- no librería salvo necesidad demostrada.

Los logos se sirven como WebP normalizados 1:1 desde `assets/marcas-clientes/`.

Antes de producción, confirmar autorización pública para cada logo.

---

# 8. Paquetes + otros servicios

Paquetes principales:

- Búsqueda;
- Registro;
- Protección Total.

Aquí sí se justifican cards porque existe comparación comercial.

Registro debe destacar como **Más elegido**.

Otros servicios deben vivir dentro de la misma macrosección como filas compactas, no otra pantalla completa.

---

# 9. Por qué registrar + por qué MarqSafe

Una sola macrosección con dos capítulos.

## ¿Por qué registrar mi marca?

- Uso exclusivo en México.
- Una identidad que puedes defender.
- Un activo para tu negocio.

No usar tres cards independientes.

## ¿Por qué hacerlo con MarqSafe?

- Te atiende un abogado por WhatsApp.
- Precios claros desde el inicio.
- Derechos del IMPI incluidos.
- Atención en todo México.

Debe usar una composición relacionada pero distinta del capítulo anterior.

---

# 10. Oficio/requerimiento IMPI

Se mantiene independiente porque responde a una intención distinta.

Base:

**¿Te llegó un oficio o requerimiento del IMPI?**

Callout compacto + documento/requerimiento SVG + CTA contextual de WhatsApp.

---

# 11. FAQ + CTA final

FAQ Home:

- máximo 3–4 preguntas;
- accordion;
- divisores;
- sin card individual;
- respuestas breves.

CTA final forma parte del mismo bloque de cierre.

---

# 12. Sistema visual

## Spacing móvil inicial

- padding lateral: ~20px;
- sección compacta: 40–48px;
- sección normal: 56–64px;
- sección protagonista: 72–88px sólo si se justifica;
- gaps internos: 12–32px según jerarquía.

## Radios

- superficie grande: 24–28px;
- card: 20–24px;
- secundaria: 16–20px.

## Paleta

- blanco/off-white dominante;
- navy/deep blue;
- muted gold/beige;
- neutrales claros.

No volver a grandes masas oscuras sin razón.

## Tipografía

Agency/AgencyRegular sigue como primera referencia si se obtiene licencia web/comercial válida. No redistribuir archivos de fuente.

---

# 13. Motion

Jerarquía técnica:

1. CSS;
2. SVG;
3. JS vanilla pequeño;
4. librería sólo si existe razón real.

Preferir `transform` y `opacity`.

Evitar scroll-jacking, parallax fuerte, rebotes, WebGL, 3D, video pesado y efectos continuos.

---

# 14. SEO

Preservar:

- un H1 único;
- H2/H3 coherentes;
- contenido rastreable;
- enlaces internos descriptivos;
- intención de búsqueda;
- arquitectura multipágina;
- alt text;
- URLs de servicio.

No esconder contenido esencial dentro de imágenes.

---

# 15. CRO

Cada macrosección debe ayudar a entender, confiar, conocer precio, reducir incertidumbre o avanzar a WhatsApp.

Mantener:

- WhatsApp como conversión principal;
- precios visibles;
- “Derechos del IMPI incluidos” visible;
- sin urgencia falsa;
- sin dark patterns;
- sin métricas/testimonios inventados.

---

# 16. WordPress / Gutenberg

Principio: máxima libertad visual donde la necesita el diseño + máxima facilidad de edición donde la necesita el cliente.

Priorizar:

- core blocks;
- Patterns;
- Synced Patterns cuando convenga;
- content-only editing;
- locking;
- theme.json / Global Styles;
- CSS global;
- SVG propios.

Custom HTML sólo para estructuras especiales. No convertir toda la web a Custom HTML.

Cliente debe poder editar textos, imágenes, precios, FAQ y blog sin tocar CSS/JS/layout crítico.

## Carrusel en WordPress

Implementación recomendada:

- imágenes editables desde Media Library/Gallery;
- CSS global para presentación;
- JS global para comportamiento circular;
- no repetir `<script>` por página;
- usar `wp_enqueue_script()` o equivalente del tema/plugin para frontend.

---

# 17. Precios sincronizados

Un precio repetido debe tener una sola fuente de verdad.

Evaluar Block Bindings, Custom Fields, Synced Patterns o custom block ligero.

---

# 18. Performance y accesibilidad

Objetivos:

- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1;
- WCAG 2.2 AA donde aplique.

Priorizar SVG/WebP, JS pequeño, imágenes responsive, focus visible, teclado, contraste, touch targets cómodos y reduced motion.

---

# 19. Anti AI-slop

Evitar:

- hero SaaS genérico;
- titular gigante + 3 cards como fórmula;
- cards para todo;
- pills everywhere;
- glow;
- glassmorphism gratuito;
- blobs;
- fake stats;
- iconos genéricos repetidos;
- labels decorativos;
- fade-up idéntico en todas las secciones.

Pregunta obligatoria:

**¿Por qué esta decisión pertenece específicamente a MarqSafe?**

---

# 20. Desktop

La arquitectura de Home desktop ya está sincronizada con móvil, pero el **hero desktop permanece congelado**.

La macrosección de Confianza sí puede adaptarse al ancho de escritorio.

## Decisión v42 — Confianza en desktop

En escritorio, la macrosección de confianza debe usar el ancho disponible y no comportarse como un hero secundario.

Reglas:

- evitar título gigante centrado;
- evitar 60+ px para el H2;
- reducir padding vertical;
- usar cabecera editorial horizontal;
- eyebrow pequeño;
- H2 moderado (~34–43 px según viewport);
- texto introductorio en columna paralela;
- perfil del abogado entra inmediatamente después;
- reducir espacio antes del carrusel de marcas;
- móvil conserva su composición vertical aprobada.

El objetivo es ganar densidad sin perder jerarquía.

---

# 21. Gate final

Antes de aprobar una sección:

> ¿Ayuda a entender, confiar, decidir o actuar; respira sin desperdiciar pantalla; pertenece visualmente a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?

Si alguna respuesta es no, todavía no está lista.
