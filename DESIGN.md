# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 28 de octubre de 2026  
**Base vigente:** v53  
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

## Performance / accesibilidad

Priorizar SVG/WebP, JS pequeño, focus visible, teclado, contraste, targets táctiles cómodos y `prefers-reduced-motion`. Objetivos: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 y WCAG 2.2 AA donde aplique.

## Gate final

> ¿Ayuda a entender, confiar, decidir o actuar; usa el espacio sin rellenarlo artificialmente; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?

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

## Declaración de uso — compactación v51

Desktop únicamente:

- no agrandar más el hero para hacer caber contenido;
- eliminar los mini-bloques laterales `Cumplimiento a tiempo` y `Marca vigente`;
- mantener en el hero sólo tres beneficios compactos: `Revisión del registro`, `Fecha aplicable` y `Presentación`;
- no repetir las descripciones largas porque la sección siguiente ya desarrolla esos pasos;
- subir los CTA dentro de la tarjeta y garantizar que ambos botones queden completos;
- los demás servicios permanecen sin cambios.

## Sistema de rutas para servicios — v52

La segunda sección de las seis páginas de servicio deja de usar el patrón repetido de **título grande + tres cards** y pasa a una ruta visual continua.

### Gramática visual

- tres estaciones por página;
- un solo camino continuo de izquierda → derecha → izquierda en desktop;
- curvas amplias y suaves, no codos rígidos;
- pista base clara de 12px y trazo activo navy de 9px;
- el trazo activo se rellena progresivamente conforme el usuario hace scroll;
- cada estación se activa en dorado cuando el recorrido la alcanza;
- sin GSAP, WebGL, canvas ni librerías de motion: SVG + JS vanilla pequeño;
- `prefers-reduced-motion`: ruta completa y estaciones visibles sin animación;
- en móvil, la misma lógica se vuelve más vertical manteniendo alternancia izquierda → derecha → izquierda;
- cada servicio usa una trayectoria ligeramente distinta, pero conserva la misma gramática.

### Contenido por servicio

- Registro: **Búsqueda previa → Clasificación → Seguimiento**.
- Viabilidad: **Nombre de la marca → Productos o servicios → Dictamen de viabilidad**.
- Oficios: **Oficio recibido → Contexto del expediente → Contestación**.
- Declaración: **Identifica el registro → Revisa la fecha → Presentación**.
- Renovación: **Ubica tu registro → Revisa la ventana → Renovación**.
- Aviso comercial: **Define el aviso → Relaciona el uso → Presentación**.

### Ritmo

- no convertir estas rutas en secciones gigantes;
- el camino es el recurso gráfico principal, por lo que no se añaden cards ni iconos genéricos;
- en servicios con hero compartido, conservar aproximadamente 28px entre el final del hero y el inicio de la ruta;
- textos breves y trazables a la información ya existente en cada página.

## Ruta de servicios — v53

La segunda sección de las páginas de servicio usa un recorrido de tres estaciones con geometría simétrica y más vertical.

- 01 arriba a la izquierda; 02 al centro a la derecha; 03 abajo a la izquierda.
- El descenso y curva 01→02 debe ser visualmente espejo del tramo 02→03.
- Curvas amplias y redondeadas; evitar formas libres o ambiguas.
- Línea base gruesa y tenue; progreso navy encima ligado al scroll.
- Los puntos se activan en dorado conforme llega el recorrido.
- Sin cards; el propio camino organiza la información.
- Desktop y mobile conservan la misma lógica de alternancia y simetría, con mobile más vertical.
- Mantener SVG + JS vanilla y `prefers-reduced-motion`; sin librerías de animación.
