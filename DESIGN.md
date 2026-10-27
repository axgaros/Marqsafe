# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 27 de octubre de 2026  
**Fuente de verdad:** consultar este archivo antes de cualquier cambio visual o de frontend.  
**Desktop:** congelado temporalmente.  
**Foco actual:** Home móvil.  

## 1. Principios permanentes

MarqSafe debe sentirse como una consultoría especializada en propiedad intelectual clara, profesional, cercana, ordenada, ligera y confiable.

No debe sentirse como un despacho antiguo, un SaaS genérico, una plantilla de IA ni una web con cards para absolutamente todo.

SEO, CRO, rendimiento, accesibilidad y futura editabilidad en WordPress son restricciones del diseño desde el principio.

### Más aire

Más aire NO significa aumentar artificialmente la altura de las secciones.

Significa:
- menos elementos compitiendo;
- mejor agrupación;
- padding interno suficiente;
- jerarquía clara;
- menos card soup;
- alternar superficies;
- reducir texto simultáneo;
- dejar que la siguiente sección asome.

Evitar `100vh`, padding gigante y espacio muerto sin función.

## 2. Referencia visual

EasyLex móvil es la referencia principal para estudiar ritmo, jerarquía, respiración, cards, pricing, CTA y recursos visuales.

No copiar literalmente:
- assets;
- textos;
- estadísticas;
- testimonios;
- colores;
- curvas/serpentina;
- estructura pixel por pixel.

## 3. Firma visual: expediente de marca

El recurso propio de MarqSafe es el expediente/documento de marca.

Puede mostrar de manera abstracta:
- MARCA;
- CLASE;
- ESTADO;
- folio;
- búsqueda;
- solicitud;
- sello/check;
- requerimiento;
- seguimiento.

Debe ser SVG ligero y no reproducir documentos oficiales del IMPI.

### Hero móvil — regla v39

El expediente del hero debe funcionar como **recurso visual de fondo realmente perceptible**.

Reglas:
- no limitarlo a una esquina inferior;
- ocupar una zona amplia del costado derecho;
- usar fade/máscara hacia el copy;
- suficiente contraste para reconocer documento y sello;
- no competir con H1, precio ni CTA;
- motion mínimo mediante `transform` y `opacity`;
- respetar `prefers-reduced-motion`.

## 4. Arquitectura aprobada de Home móvil

La Home se organiza en 6 macrosecciones:

1. Hero.
2. Confianza: abogado + marcas.
3. Paquetes + otros servicios.
4. ¿Por qué registrar? + ¿Por qué MarqSafe?
5. Oficio/requerimiento IMPI.
6. FAQ compacta + CTA final.

`Cómo funciona el registro` NO vive en Home; se mantiene en la página `registro.html`.

## 5. Hero

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

El hero debe ser compacto, no `100vh`, y tener el expediente visible como fondo.

## 6. Confianza — abogado + marcas

El abogado y las marcas forman una sola macrosección.

Dirección de título:

**Tu marca, acompañada directamente por un abogado**

Mantener:

**Te atiende un abogado por WhatsApp de principio a fin.**

No usar abogado stock.

Cuando exista información real, usar foto, nombre, cargo, bio y credenciales autorizadas.

### Carrusel de marcas — patrón aprobado v39

El carrusel móvil es continuo e infinito en percepción:

- después de la última marca continúa la primera;
- al retroceder desde la primera continúa la última;
- sin numeración visible tipo `2 de 13`;
- sin autoplay;
- scroll/swipe horizontal nativo;
- `scroll-snap-type: x mandatory`;
- marca central nítida;
- laterales parcialmente visibles;
- laterales con opacidad menor, escala ligera y blur muy suave;
- transición breve;
- `overscroll-behavior-x: contain`;
- navegación por teclado;
- controles anterior/siguiente mediante **chevrons/flechas limpias sin círculo**;
- aunque visualmente sólo aparezca la flecha, conservar target táctil mínimo 44×44 CSS px;
- focus visible;
- no librería de carrusel salvo necesidad demostrada.

El loop puede usar clones en runtime. Los clones deben estar ocultos para tecnologías de asistencia (`aria-hidden=true`) y la normalización del scroll debe ser silenciosa.

Los logos se sirven como WebP normalizados 1:1 desde `assets/marcas-clientes/`.

Antes de producción, confirmar autorización de exhibición pública de cada marca.

## 7. Paquetes + otros servicios

Paquetes principales:
- Búsqueda;
- Registro;
- Protección Total.

Aquí sí se justifican cards porque existe comparación comercial.

Registro debe destacar como **Más elegido**.

Otros servicios deben vivir dentro de la misma macrosección como filas compactas, no otra pantalla completa.

## 8. Por qué registrar + por qué MarqSafe

Una sola macrosección con dos capítulos.

### ¿Por qué registrar mi marca?
- Uso exclusivo en México.
- Una identidad que puedes defender.
- Un activo para tu negocio.

No usar tres cards independientes.

### ¿Por qué hacerlo con MarqSafe?
- Te atiende un abogado por WhatsApp.
- Precios claros desde el inicio.
- Derechos del IMPI incluidos.
- Atención en todo México.

Debe usar una composición relacionada pero distinta del capítulo anterior.

## 9. Oficio/requerimiento IMPI

Se mantiene independiente porque responde a una intención distinta.

Base:

**¿Te llegó un oficio o requerimiento del IMPI?**

Callout compacto + documento/requerimiento SVG + CTA contextual de WhatsApp.

## 10. FAQ + CTA final

FAQ Home:
- máximo 3–4 preguntas;
- accordion;
- divisores;
- sin card individual;
- respuestas breves.

CTA final forma parte del mismo bloque de cierre.

## 11. Sistema visual

### Spacing inicial móvil
- padding lateral: ~20px;
- sección compacta: 40–48px;
- sección normal: 56–64px;
- sección protagonista: 72–88px sólo si se justifica;
- gaps internos: 12–32px según jerarquía.

### Radios
- superficie grande: 24–28px;
- card: 20–24px;
- secundaria: 16–20px.

### Paleta
- blanco/off-white dominante;
- navy/deep blue;
- muted gold/beige;
- neutrales claros.

No volver a grandes masas oscuras sin razón.

### Tipografía
Agency/AgencyRegular sigue como primera referencia si se obtiene licencia web/comercial válida. No redistribuir archivos de fuente.

## 12. Motion

Jerarquía técnica:
1. CSS;
2. SVG;
3. JS vanilla pequeño;
4. librería sólo si existe razón real.

Preferir `transform` y `opacity`.

Evitar scroll-jacking, parallax fuerte, rebotes, WebGL, 3D, video pesado y efectos continuos.

## 13. SEO

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

## 14. CRO

Cada macrosección debe ayudar a entender, confiar, conocer precio, reducir incertidumbre o avanzar a WhatsApp.

Mantener:
- WhatsApp como conversión principal;
- precios visibles;
- “Derechos del IMPI incluidos” visible;
- sin urgencia falsa;
- sin dark patterns;
- sin métricas/testimonios inventados.

## 15. WordPress / Gutenberg

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

## 16. Precios sincronizados

Un precio repetido debe tener una sola fuente de verdad.

Evaluar Block Bindings, Custom Fields, Synced Patterns o custom block ligero.

## 17. Performance y accesibilidad

Objetivos:
- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1;
- WCAG 2.2 AA donde aplique.

Priorizar SVG/WebP, JS pequeño, imágenes responsive, focus visible, teclado, contraste, touch targets cómodos y reduced motion.

## 18. Anti AI-slop

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

## 19. Desktop

Desktop permanece congelado durante esta fase.

No hacer rediseño global salvo bug, regresión o decisión explícita posterior.

## 20. Gate final

Antes de aprobar una sección:

> ¿Ayuda a entender, confiar, decidir o actuar; respira sin desperdiciar pantalla; pertenece visualmente a MarqSafe; funciona en móvil; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?

Si alguna respuesta es no, todavía no está lista.
