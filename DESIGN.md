# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 28 de octubre de 2026  
**Base vigente:** v50  
**Regla:** consultar este archivo antes de modificar HTML, CSS, JS, SVG, Gutenberg, Patterns, responsive o motion.  

## Arquitectura Home

1. Hero.
2. Confianza: abogado + marcas.
3. Paquetes + otros servicios.
4. ¿Por qué registrar? + ¿Por qué MarqSafe?
5. Oficio/requerimiento IMPI.
6. FAQ compacta + CTA final.

`Cómo funciona el registro` vive en `registro.html`, no en Home.

## Hero

Desktop permanece congelado. Mobile conserva el expediente como recurso visual de fondo, precio visible y CTA principal.

## Confianza — aprobado v46

La sección usa contenido real/profesional para aprovechar el ancho; no añadir adornos para rellenar huecos.

Entrada:

- eyebrow: **CONFIANZA Y ACOMPAÑAMIENTO**
- H2: **Atención legal directa para proteger tu marca**
- frase: **Tu trámite es atendido directamente por un abogado, con seguimiento por WhatsApp durante todo el proceso.**

### Perfil

Desktop usa tres zonas:

1. **Foto profesional** con marco visual doble muy fino (navy + dorado), sin card pesada.
2. **Nombre + rol + bio + CTA WhatsApp**.
3. **Información profesional verificable**.

Información a solicitar al abogado:

- nombre completo como desea aparecer públicamente;
- fotografía profesional;
- formación académica y universidad;
- diplomados, especialización, cursos o certificaciones relevantes;
- experiencia profesional relevante;
- experiencia relacionada con IMPI / marcas, sólo como él autorice expresarla;
- cédula profesional, únicamente si desea publicarla;
- perfiles profesionales/enlaces, si desea mostrarlos.

Mientras falten datos, usar placeholders explícitos **Pendiente de información**. Nunca inventar universidad, diplomados, años de experiencia, cédula, especialidad ni credenciales.

### Mobile

Mantener lectura vertical: intro → foto → nombre/bio/CTA → información profesional en filas compactas → marcas.

### Recursos descartados

No reintroducir en esta sección sin nueva aprobación:

- wordmark gigante MARQ/SAFE de v44;
- MQ animado de v45;
- silueta de abogado;
- copy adicional inventado sólo para llenar espacio.

## Carrusel de marcas

Conservar patrón v41:

- 13 imágenes fuente una sola vez;
- 5 slots visuales reciclados por JS;
- loop circular 13→1 y 1→13;
- sin autoplay;
- sin numeración;
- swipe/touch;
- teclado;
- chevrons limpios;
- marca central nítida y vecinas atenuadas.

Título: **Marcas con las que hemos trabajado**.

Antes de producción confirmar autorización para exhibir públicamente cada logo.

## SEO / CRO / WordPress

- un H1 único;
- jerarquía semántica;
- contenido real rastreable;
- WhatsApp como conversión principal;
- no inventar prueba social ni credenciales;
- futuro port a Gutenberg debe mantener contenido editable sin exponer CSS/JS crítico;
- datos repetidos (como precios) deben tener una sola fuente de verdad.

## Heroes de servicios — corrección desktop v47

En escritorio, las páginas de servicio deben dejar una separación segura entre el header sticky y la tarjeta principal del hero.

- no permitir que el borde superior, eyebrow o título parezcan ocultos bajo la navegación;
- aplicar el ajuste sólo desde 1051px;
- móvil conserva su reflow actual;
- los nombres visibles de servicio deben ser consistentes: Registro de marca, Búsqueda y viabilidad, Oficios y requerimientos, Declaración de uso, Renovación de marca y Aviso comercial;
- en Registro, el eyebrow aprobado es **REGISTRO DE MARCA**, no “TU MARCA, EN BUENAS MANOS”.

## Heroes de servicios — desktop v48

En escritorio:

- `viabilidad`, `oficios`, `declaración`, `renovación` y `aviso comercial` inician su rectángulo principal con **14 px de separación visual** después del header;
- no dejar una franja vacía grande como en v47;
- tampoco pegar el rectángulo al header;
- móvil y tablet conservan su comportamiento actual;
- `Registro de marca` mantiene su hero especial, pero la etiqueta dorada **REGISTRO DE MARCA** usa exactamente el mismo sistema tipográfico de los demás servicios: tamaño, peso, tracking, color y líneas laterales.

## Final de heroes de servicios — desktop v49

- eliminar el `border-bottom` / línea divisoria visible al final de los heroes de servicios;
- después de los heroes compartidos, la siguiente sección debe comenzar con un espacio corto y consistente (28px), no pegada ni con un hueco grande;
- mantener esta regla igual en Viabilidad, Oficios, Declaración, Renovación y Aviso comercial;
- Registro conserva su hero especial, pero su tarjeta principal debe mostrar claramente todo el borde superior: stage con 22px de aire + 8px de margen superior en la tarjeta;
- después del hero de Registro, la siguiente sección inicia a 32px;
- estas reglas son sólo desktop (>=1051px); móvil/tablet no cambian.

## Corrección de clipping — v50

Desktop únicamente:

- `Registro de marca`: la tarjeta principal ocupa filas `1 / 6` y se alinea desde arriba; así su borde superior completo permanece visible sin mover el resto del hero.
- `Declaración de uso`: la tarjeta principal ocupa filas `1 / 6` y se alinea desde arriba; así los dos CTA quedan completos y no se recortan al final del hero.
- No modificar los otros servicios, ya aprobados en v49.
- Móvil/tablet no cambian.

## Performance / accesibilidad

Priorizar SVG/WebP, JS pequeño, focus visible, teclado, contraste, targets táctiles cómodos y `prefers-reduced-motion`. Objetivos: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 y WCAG 2.2 AA donde aplique.

## Gate final

> ¿Ayuda a entender, confiar, decidir o actuar; usa el espacio sin rellenarlo artificialmente; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?
