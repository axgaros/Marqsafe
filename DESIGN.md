# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 27 de octubre de 2026  
**Fuente de verdad:** este archivo debe consultarse antes de cualquier cambio visual o de frontend.  
**Base de contenido/código:** MarqSafe v34, con decisiones posteriores documentadas aquí.  
**Desktop:** congelado temporalmente; sólo corregir bugs o regresiones.  
**Foco actual:** Home móvil.  
**Referencia principal:** EasyLex móvil para ritmo, jerarquía, aire, cards, pricing, CTA, recursos visuales y narrativa vertical. No copiar assets, textos, estadísticas, testimonios, colores, curvas ni layout pixel por pixel.

---

# 1. Regla de trabajo obligatoria

Antes de crear o modificar:

- HTML;
- CSS;
- JavaScript;
- SVG;
- Gutenberg;
- Patterns;
- bloques personalizados;
- responsive;
- motion;

consultar este archivo y comprobar que la propuesta no contradiga sus reglas.

SEO, CRO, rendimiento, accesibilidad y editabilidad en WordPress son restricciones del diseño desde el principio, no auditorías posteriores.

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

## Uso

- Hero: expediente protagonista integrado en el fondo/composición.
- Oficio: variante con requerimiento/documento.
- Detalles secundarios: sellos, líneas, campos o pequeñas piezas derivadas.

No usar la serpentina/curva de EasyLex.

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

## Prohibido

- `min-height: 100vh` por defecto;
- una pantalla completa para 2–3 frases;
- padding enorme sin función;
- separar artificialmente ideas relacionadas;
- espacio muerto usado para fingir elegancia.

En móvil, cada viewport debe tener una idea dominante, no necesariamente una sección completa.

---

# 5. Sistema móvil inicial

## Spacing

| Token | Valor inicial |
|---|---:|
| padding lateral | 20px |
| transición corta | 32px |
| sección compacta | 40–48px |
| sección normal | 56–64px |
| sección protagonista | 72–88px |
| gap pequeño | 12–16px |
| gap medio | 20–24px |
| gap grande | 28–32px |
| card padding | 22–28px |

Los valores son presupuestos iniciales y deben validarse en render real.

## Radios

| Elemento | Valor |
|---|---:|
| superficie grande | 24–28px |
| card | 20–24px |
| superficie secundaria | 16–20px |
| elemento pequeño | 12–16px |

Evitar cards cuadradas y el uso indiscriminado de pills.

---

# 6. Paleta

Mantener la paleta existente validada:

- blanco/off-white dominante;
- navy/deep blue;
- muted gold/beige;
- neutrales muy claros.

El blanco domina.

Navy/dorado se usan como:

- CTA;
- énfasis;
- líneas;
- iconos;
- estados;
- pequeños detalles.

No volver a grandes masas oscuras sin necesidad.

---

# 7. Tipografía

EasyLex utiliza Agency/AgencyRegular y al cliente le gusta esa dirección.

Agency es la primera opción a evaluar para producción **sólo con licencia web/comercial válida**.

Mientras tanto:

- no redistribuir archivos de fuente;
- prototipo puede usar `local('Agency')` + fallback;
- si no se licencia, sustituir por una fuente con carácter similar.

## Escala móvil inicial

| Rol | Rango |
|---|---:|
| H1 | 36–42px |
| H2 | 28–34px |
| H3 | 21–25px |
| body destacado | 18–20px |
| body | 16–18px |
| microcopy | 14–15px |

No usar títulos que ocupen media pantalla.

---

# 8. Copy

Debe ser:

- directo;
- humano;
- claro;
- profesional;
- comprensible para alguien que no conoce propiedad industrial.

Evitar:

- “soluciones innovadoras”;
- etiquetas decorativas;
- microcopy de IA;
- frases genéricas;
- claims grandilocuentes.

Nunca inventar:

- años de experiencia;
- clientes;
- testimonios;
- marcas atendidas;
- estadísticas;
- porcentajes de éxito;
- garantías;
- certificaciones.

---

# 9. Arquitectura aprobada de Home móvil

La Home queda organizada en **6 macrosecciones**.

## 1. Hero

Debe resolver:

- qué hace MarqSafe;
- servicio principal;
- precio;
- qué incluye;
- CTA;
- primera impresión visual.

Contenido principal:

**TU MARCA, EN BUENAS MANOS**

# Registra tu marca ante el IMPI

Con búsqueda previa, presentación del trámite y seguimiento hasta la resolución.

### Precio

**Desde $6,500 MXN**

**por clase y marca · derechos del IMPI incluidos**

No usar “desde $1,000” en hero porque puede confundirse con el precio del registro completo.

CTA principal:

**Quiero registrar mi marca**

CTA secundario:

**Ver paquetes**

### Recurso visual

El hero NO puede ser sólo texto.

Debe incorporar:

- expediente/documento SVG grande;
- parcialmente desplazado o recortado;
- segunda hoja si ayuda;
- MARCA / CLASE / ESTADO;
- líneas de formulario;
- sello/check;
- pequeño acento muted gold.

Debe ser visible pero no competir con lectura.

Motion mínimo:

- entrada suave;
- pequeño desplazamiento;
- aparición del sello/check;
- `transform` + `opacity`;
- `prefers-reduced-motion`.

No `100vh`.

---

## 2. Confianza — abogado + marcas

Agrupa:

- quién está detrás;
- prueba social real.

### Abogado

Dirección de título:

**Tu marca, acompañada directamente por un abogado**

o equivalente final.

Cuando exista información real:

- foto;
- nombre;
- cargo;
- bio breve;
- formación/experiencia autorizada.

Mantener mensaje:

**Te atiende un abogado por WhatsApp de principio a fin.**

No stock lawyer.

### Marcas con las que han trabajado

El cliente enviará logos reales.

Mientras no existan:

- `MARCA 01`;
- `MARCA 02`;
- `MARCA 03`;
- placeholders visualmente neutros.

Nunca crear clientes ficticios que parezcan reales.

Cuando lleguen:

- usar los logos reales normalizados;
- respetar proporciones;
- sólo marcas autorizadas.

### Patrón aprobado de carrusel móvil

En móvil, las marcas se presentan mediante un carrusel horizontal ligero:

- scroll lateral nativo;
- `scroll-snap-type: x mandatory`;
- una marca central nítida;
- marca anterior y siguiente parcialmente visibles;
- laterales con opacidad menor, escala ligera y blur muy suave;
- sin autoplay;
- swipe/touch nativo;
- botones anterior/siguiente de al menos 44×44 CSS px;
- navegación por teclado;
- `overscroll-behavior-x: contain`;
- WebP 1:1 optimizados;
- no librería de carrusel salvo necesidad demostrada.

En desktop el carrusel puede ocultarse temporalmente durante la fase de congelamiento de desktop; su adaptación final se decidirá en la auditoría posterior.

Abogado + marcas forman una sola macrosección, no dos pantallas.

---

## 3. Paquetes + otros servicios

Responde:

**¿Qué puedo contratar y cuánto cuesta?**

### Paquetes

- Búsqueda;
- Registro;
- Protección Total.

Aquí sí se justifican cards.

Registro:

- destacar como **Más elegido**;
- precio muy visible;
- CTA claro;
- radius suave;
- poca sombra.

### Otros servicios

- Oficios/requerimientos;
- Declaración de uso;
- Renovación;
- Aviso comercial;
- otros servicios confirmados.

No crear otra macrosección.

Usar:

- filas compactas;
- icono;
- nombre;
- descriptor corto;
- flecha/enlace.

---

## 4. Por qué registrar + por qué MarqSafe

Una macrosección con dos capítulos.

### A. ¿Por qué registrar mi marca?

- Uso exclusivo en México.
- Una identidad que puedes defender.
- Un activo para tu negocio.

No usar tres cards independientes.

Preferir:

- lista editorial;
- divisores;
- iconografía ligera;
- una superficie agrupadora.

### B. ¿Por qué hacerlo con MarqSafe?

- Te atiende un abogado por WhatsApp.
- Precios claros desde el inicio.
- Derechos del IMPI incluidos.
- Atención en todo México.

Debe usar una composición relacionada pero distinta de la parte A.

No cuatro cards idénticas.

Secuencia CRO:

**entiendo por qué proteger → entiendo por qué hacerlo con MarqSafe**

Mantener esta macrosección compacta.

---

## 5. Oficio/requerimiento IMPI

Se mantiene independiente porque responde a una intención distinta y recurrente.

Pregunta base:

**¿Te llegó un oficio o requerimiento del IMPI?**

Debe ser un callout compacto:

- documento/requerimiento SVG;
- texto corto;
- CTA WhatsApp contextual;
- sin repetir toda la página de Oficios.

---

## 6. FAQ compacta + CTA final

FAQ Home:

- máximo 3–4 preguntas;
- accordion;
- divisores;
- sin card individual;
- respuestas breves;
- cerradas por defecto.

Temas candidatos:

- clasificación;
- qué incluye el precio;
- derechos del IMPI;
- requerimientos;
- costos/plazos sólo cuando estén jurídicamente validados.

El resto va a páginas de servicio/blog.

CTA final forma parte del mismo cierre:

- frase breve;
- WhatsApp;
- pequeño recurso gráfico;
- aire suficiente;
- no otra sección gigante.

---

# 10. Cambio estructural: proceso de registro

**“Cómo funciona el registro” se elimina de la Home.**

Los 5 pasos:

1. Cuéntanos qué vendes.
2. Revisamos el nombre.
3. Definimos la clase.
4. Presentamos la solicitud.
5. Damos seguimiento.

se trasladan a la página específica de **Registro de marca**.

Razón:

- reduce scroll;
- evita sobreexplicar en Home;
- responde mejor a la intención de esa página;
- mejora arquitectura de información.

No volver a introducir este bloque como macrosección de Home sin nueva decisión explícita.

---

# 11. Sistema de superficies

La Home debe alternar:

- superficie editorial libre;
- superficie grande agrupadora;
- cards comerciales;
- listas/divisores;
- composición gráfica SVG;
- sección humana.

## Anti card-soup

Dos macrosecciones consecutivas no deberían tener exactamente el mismo patrón de cards.

Usar cards únicamente cuando exista:

- comparación;
- agrupación semántica;
- contenido autónomo;
- acción;
- diferenciación comercial.

---

# 12. Motion

Jerarquía técnica:

1. CSS;
2. SVG;
3. JS vanilla pequeño;
4. librería sólo si existe una razón real.

Preferir:

- `transform`;
- `opacity`.

Evitar:

- scroll jacking;
- parallax fuerte;
- smooth scroll obligatorio;
- rebotes;
- efectos cursor;
- 3D;
- WebGL;
- video pesado;
- blur continuo.

El sitio debe funcionar perfectamente sin animación.

`prefers-reduced-motion` obligatorio.

---

# 13. Recursos visuales

Preferir:

- SVG propio;
- iconos vectoriales;
- CSS;
- ilustraciones simples;
- foto real del abogado cuando exista.

Evitar PNG/JPG pesados cuando SVG pueda resolverlo.

El recurso visual debe ayudar a comprender o reforzar identidad; no decorar por decorar.

---

# 14. SEO permanente

Cada cambio debe preservar:

- un H1 único;
- H2/H3 coherentes;
- contenido rastreable en HTML;
- enlaces internos descriptivos;
- intención de búsqueda;
- arquitectura multipágina;
- alt text;
- URLs de servicio;
- contenido útil.

No esconder contenido esencial dentro de imágenes.

No eliminar información SEO útil sólo para “hacerlo más limpio”.

Metadata, canonical, sitemap y schema se resuelven en WordPress, no en Custom HTML arbitrario.

---

# 15. CRO permanente

Cada macrosección debe ayudar al menos a una función:

1. entender;
2. identificar si aplica;
3. conocer precio;
4. conocer qué incluye;
5. generar confianza;
6. reducir incertidumbre;
7. llevar a WhatsApp.

Reglas:

- WhatsApp principal;
- CTA reconocible;
- precios visibles;
- “Derechos del IMPI incluidos” visible;
- no esconder información comercial;
- no urgencia falsa;
- no dark patterns;
- no métricas/testimonios inventados.

Si una decisión estética empeora claridad, confianza o conversión, se cambia la estética.

---

# 16. WordPress / Gutenberg

Principio:

**máxima libertad donde la necesita el diseño + máxima facilidad de edición donde la necesita el cliente.**

Clasificar componentes como:

A. Gutenberg nativo  
B. Pattern  
C. Synced Pattern  
D. Pattern/bloque con locking/content-only  
E. Custom HTML  
F. custom/dynamic block

Priorizar:

- core blocks;
- Patterns;
- content-only editing;
- locking;
- theme.json;
- Global Styles;
- CSS global;
- SVG propios.

Custom HTML sólo cuando realmente haga falta.

No meter toda la web en Custom HTML.

Cliente debe poder editar:

- textos;
- imágenes;
- precios;
- FAQ;
- blog;
- categorías;
- contenido habitual.

Cliente no debería tocar:

- CSS;
- JS;
- estructura crítica;
- SVG complejo;
- layout del hero;
- schema.

---

# 17. Precios sincronizados

Precio repetido = una sola fuente de verdad.

Opciones a probar:

- Block Bindings;
- Custom Fields;
- Synced Patterns;
- custom block;
- solución nativa ligera.

Criterios:

- editable;
- difícil de romper;
- ligero;
- reutilizable;
- poco mantenimiento.

No hay solución final elegida todavía.

---

# 18. Performance

Objetivos:

- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1.

Priorizar:

- HTML/CSS ligero;
- JS pequeño;
- SVG optimizado;
- imágenes responsive;
- WebP/AVIF;
- width/height;
- fuentes limitadas;
- pocas dependencias.

No lazy-load del recurso LCP.

---

# 19. Accesibilidad

Objetivo: WCAG 2.2 AA donde aplique.

Requisitos:

- HTML semántico;
- focus visible;
- teclado;
- contraste;
- targets táctiles cómodos;
- alt útil;
- no depender sólo de color;
- zoom;
- reduced motion;
- ARIA sólo cuando HTML nativo no alcance.

---

# 20. Anti AI-slop

Evitar:

- hero SaaS genérico;
- titular enorme + 3 cards;
- grids de 3 columnas repetidos;
- cards para todo;
- pills everywhere;
- glow;
- glassmorphism;
- blobs;
- gradientes genéricos;
- fake stats;
- iconos genéricos repetidos;
- labels decorativos;
- fade-up en cada sección.

Pregunta obligatoria:

**¿Por qué esta decisión pertenece específicamente a MarqSafe?**

Si puede aplicarse igual a cientos de startups, falta especificidad.

---

# 21. Desktop

Desktop queda congelado durante esta fase.

No hacer rediseño global.

Sólo tocar si:

- hay bug;
- hay regresión;
- un token global lo exige;
- se aprueba una fase específica posteriormente.

Después de aprobar móvil se puede auditar desktop.

---

# 22. Decisiones cerradas

- WordPress + Gutenberg.
- Hostinger Premium.
- WhatsApp como conversión principal.
- Sin formulario actualmente.
- Blog se llama Blog.
- Servicios es dropdown.
- Blanco dominante.
- Navy/dorado como acento.
- Mobile prioritario.
- Desktop congelado.
- EasyLex es referencia funcional, no plantilla.
- Agency es primera opción tipográfica si se licencia.
- SVG/vectores primero.
- Expediente/documento como firma visual.
- Hero con recurso visual obligatorio.
- Hero muestra **Desde $6,500 MXN por clase y marca · derechos del IMPI incluidos**.
- Home tiene 6 macrosecciones.
- Abogado + marcas unidos.
- Paquetes + otros servicios unidos.
- Por qué registrar + por qué MarqSafe unidos.
- Oficio queda independiente.
- FAQ máximo 3–4 preguntas.
- CTA final unido al cierre.
- Cómo funciona el registro se mueve a Registro.
- Placeholders de logos: `MARCA 01`, `MARCA 02`, etc.
- No clientes ficticios.
- SEO/CRO presentes durante todo el diseño.

---

# 23. Pendientes reales

## P0 — durante la siguiente maqueta

### Expediente hero

Definir en render real:

- geometría;
- hojas;
- campos;
- sello/check;
- contraste;
- posición;
- adaptación 320–430px;
- motion.

### Confianza

Definir:

- proporción abogado/logos;
- placeholders;
- sustitución futura por logos reales.

### Macro “Por qué”

Definir dos patrones distintos pero relacionados.

### Densidad

Validar spacing real en 320, 360, 390 y 430px.

## P1 — contenido

Pendiente del cliente:

- foto abogado;
- nombre/cargo;
- bio;
- formación;
- experiencia;
- marcas/logos;
- testimonios si existen y se autorizan;
- aviso de privacidad;
- correo.

## P1 — producción

- licencia Agency o sustituto;
- tema WordPress;
- precios sincronizados;
- Patterns definitivos;
- breakpoints;
- HEX exactos;
- auditoría Hostinger;
- SEO producción.

---

# 24. Orden de trabajo actual

1. Consultar este archivo.
2. Partir de la base vigente.
3. Mantener desktop congelado.
4. Reestructurar Home a 6 macrosecciones.
5. Hero: precio + expediente.
6. Confianza: abogado + marcas placeholder.
7. Paquetes + otros servicios.
8. Por qué registrar + por qué MarqSafe.
9. Oficio.
10. FAQ + CTA.
11. Mover proceso a Registro.
12. Revisar longitud total.
13. Revisar card soup.
14. Revisar SEO/CRO.
15. Añadir motion mínimo.
16. QA 320/360/390/430.
17. Verificar desktop sin regresiones.
18. Después mapear a Gutenberg.

---

# 25. Gate final

Antes de aprobar una sección preguntar:

> ¿Ayuda a entender, confiar, decidir o actuar; respira sin desperdiciar pantalla; pertenece visualmente a MarqSafe; funciona en móvil; conserva SEO/CRO; es ligera; accesible; y puede sobrevivir a WordPress sin convertirse en una pesadilla de mantenimiento?

Si alguna respuesta es no, todavía no está lista.
