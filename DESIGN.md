# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 27 de octubre de 2026  
**Base vigente:** v46  
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

La sección debe aprovechar el ancho con **información profesional real**, no con decoración agregada sólo para rellenar espacio.

Entrada:

- eyebrow: **CONFIANZA Y ACOMPAÑAMIENTO**
- H2: **Atención legal directa para proteger tu marca**
- frase: **Tu trámite es atendido directamente por un abogado, con seguimiento por WhatsApp durante todo el proceso.**

### Perfil del abogado

En desktop usar tres zonas:

1. **Foto profesional** con marco visual doble fino navy + dorado.
2. **Nombre + rol + bio + CTA WhatsApp**.
3. **Información profesional verificable**.

Solicitar al abogado:

- nombre completo como desea aparecer públicamente;
- fotografía profesional;
- formación académica y universidad;
- diplomados, especialización, cursos o certificaciones relevantes;
- experiencia profesional relevante;
- experiencia relacionada con IMPI / marcas, únicamente como él autorice expresarla;
- cédula profesional, sólo si desea publicarla;
- perfiles profesionales/enlaces, si desea mostrarlos.

Mientras falten datos, usar placeholders explícitos **Pendiente de información**. Nunca inventar universidad, diplomados, años de experiencia, cédula, especialidad ni credenciales.

### Mobile

Orden vertical:

intro → foto → nombre/bio/CTA → información profesional en filas compactas → marcas.

### Recursos descartados

No reintroducir en esta sección sin nueva aprobación:

- wordmark gigante MARQ/SAFE de v44;
- MQ animado de v45;
- silueta de abogado;
- copy inventado únicamente para llenar espacio.

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
- datos repetidos como precios deben tener una sola fuente de verdad.

## Performance / accesibilidad

Priorizar SVG/WebP, JS pequeño, focus visible, teclado, contraste, targets táctiles cómodos y `prefers-reduced-motion`. Objetivos: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 y WCAG 2.2 AA donde aplique.

## Gate final

> ¿Ayuda a entender, confiar, decidir o actuar; usa el espacio sin rellenarlo artificialmente; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?
