# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 28 de octubre de 2026  
**Base vigente:** v49  
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

## Confianza — aprobado v46

La sección usa contenido profesional real para aprovechar el ancho; no adornos agregados para rellenar huecos.

Entrada:

- eyebrow: **CONFIANZA Y ACOMPAÑAMIENTO**
- H2: **Atención legal directa para proteger tu marca**
- frase: **Tu trámite es atendido directamente por un abogado, con seguimiento por WhatsApp durante todo el proceso.**

Desktop usa tres zonas:

1. Foto profesional con marco visual doble fino navy + dorado.
2. Nombre + rol + bio + CTA WhatsApp.
3. Información profesional verificable.

Solicitar al abogado nombre, fotografía, formación/universidad, diplomados o especialización, experiencia relevante, experiencia relacionada con IMPI/marcas, cédula sólo si desea publicarla y perfiles profesionales si desea mostrarlos.

Mientras falten datos usar **Pendiente de información**. Nunca inventar credenciales.

Mobile: intro → foto → nombre/bio/CTA → información profesional → marcas.

No reintroducir sin nueva aprobación: wordmark gigante v44, MQ animado v45, silueta de abogado ni copy inventado para llenar espacio.

## Carrusel de marcas

Conservar patrón v41:

- 13 imágenes fuente una sola vez;
- 5 slots visuales reciclados por JS;
- loop circular 13→1 y 1→13;
- sin autoplay ni numeración;
- swipe/touch y teclado;
- chevrons limpios;
- marca central nítida y vecinas atenuadas.

Título: **Marcas con las que hemos trabajado**.

Antes de producción confirmar autorización pública de cada logo.

## SEO / CRO / WordPress

- un H1 único;
- jerarquía semántica;
- contenido real rastreable;
- WhatsApp como conversión principal;
- no inventar prueba social ni credenciales;
- futuro port a Gutenberg debe mantener contenido editable sin exponer CSS/JS crítico;
- precios repetidos deben tener una sola fuente de verdad.

## Heroes de servicios — desktop v48/v49

Las páginas de servicios deben sentirse cercanas al header y terminar limpiamente antes de la siguiente sección.

### Inicio del hero

- `Búsqueda y viabilidad`, `Oficios y requerimientos`, `Declaración de uso`, `Renovación de marca` y `Aviso comercial`: mantener aprox. **14 px** de separación visual entre el header y el inicio del bloque principal;
- no pegar el rectángulo al header ni dejar una franja vacía grande;
- `Registro de marca` conserva su hero especial y su eyebrow **REGISTRO DE MARCA** debe usar el mismo sistema visual dorado que los demás servicios.

### Final del hero — regla v49

- eliminar la línea divisoria (`border-bottom`) visible al final de todos los heroes de servicio en desktop;
- después de los heroes compartidos, la siguiente sección comienza con **28 px** de separación superior;
- usar la misma transición en Viabilidad, Oficios, Declaración, Renovación y Aviso comercial para evitar que una quede pegada y otra demasiado separada;
- Registro conserva su composición especial, pero la tarjeta principal debe mostrar completo su borde superior: `registration-stage` con **22 px** de aire superior + `reg-main-card` con **8 px** de margen superior;
- después del hero de Registro, la siguiente sección inicia con **32 px**;
- estas reglas aplican sólo en desktop (`min-width:1051px`); móvil y tablet no cambian.

## Performance / accesibilidad

Priorizar SVG/WebP, JS pequeño, focus visible, teclado, contraste, targets táctiles cómodos y `prefers-reduced-motion`. Objetivos: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 y WCAG 2.2 AA donde aplique.

## Gate final

> ¿Ayuda a entender, confiar, decidir o actuar; usa el espacio sin rellenarlo artificialmente; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?
