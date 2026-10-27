# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Fecha de consolidación:** 27 de octubre de 2026  
**Alcance actual:** Home móvil de MarqSafe  
**Base de implementación visual:** `MarqSafe_Propuesta_A_v34`  
**Desktop:** CONGELADO temporalmente. No rediseñar salvo corrección puntual o decisión explícita posterior.  
**v35:** DESCARTADA. No usar como base visual ni técnica.  
**Regla de trabajo:** Antes de escribir o modificar HTML, CSS, JavaScript, Gutenberg/Patterns, SVG o cualquier componente visual de MarqSafe, consultar este archivo y verificar que la propuesta no contradiga sus reglas.  
**Referencia principal:** EasyLex móvil. El cliente ha validado explícitamente su dirección visual como referencia principal para ritmo, jerarquía, densidad, respiración, hero, uso de recursos visuales, cards, pricing, CTA y narrativa vertical. MarqSafe puede inspirarse de manera cercana en esas decisiones visuales, especialmente en el hero y en el concepto de expediente/documento, pero debe producir recursos propios y no copiar literalmente ilustraciones, curvas, textos, testimonios, estadísticas, colores, estructura completa ni activos protegidos.

---

# 1. Propósito de este documento

Este archivo es el contrato de diseño de MarqSafe y la **fuente de verdad obligatoria de diseño**. Debe consultarse antes de generar, editar o revisar código que afecte la interfaz, aunque el cambio parezca pequeño. Debe servir como referencia permanente para humanos y agentes de IA antes de:

- rediseñar una sección;
- generar HTML/CSS/JS;
- adaptar el prototipo a WordPress/Gutenberg;
- crear Patterns;
- definir motion;
- revisar responsive;
- decidir si un elemento debe ser card, superficie libre, Pattern, SVG o bloque personalizado.

La función de este documento no es describir una estética de forma vaga. Debe evitar interpretaciones como:

- “hazlo más limpio”;
- “dale más aire”;
- “hazlo más premium”;
- “hazlo más moderno”.

Esas expresiones deben traducirse siempre a decisiones medibles de jerarquía, spacing, densidad, superficie, tipografía, motion y composición.

---

# 2. Tesis de diseño

**MarqSafe debe sentirse como una consultoría de propiedad intelectual clara, profesional y cercana, donde un trámite complejo se vuelve entendible, ordenado y acompañable.**

La web debe transmitir:

- claridad;
- confianza;
- criterio profesional;
- acompañamiento;
- transparencia;
- orden;
- ligereza;
- atención humana.

No debe sentirse como:

- despacho jurídico antiguo;
- SaaS genérico;
- plantilla de IA;
- landing de “startup” con gradientes y cards por todas partes;
- lujo artificial;
- web corporativa rígida;
- documento legal lleno de texto;
- clon de EasyLex.

---

# 3. Principio visual central

## 3.1 El “expediente de marca” como firma visual

El recurso visual propio de MarqSafe será el **expediente/documento de marca**.

La referencia conceptual y compositiva principal será el recurso de documento/expediente que funciona bien en el hero móvil de EasyLex, porque esa dirección fue una de las que más gustaron al cliente. La ejecución de MarqSafe debe reinterpretarlo con identidad propia: no reutilizar ni calcar el asset original, pero sí aprender de su escala, protagonismo, lectura inmediata y relación con el contenido del hero.

Puede representar visualmente:

- nombre de marca;
- clase;
- búsqueda;
- viabilidad;
- solicitud;
- sello;
- folio;
- estado;
- requerimiento;
- seguimiento;
- resolución.

No debe reproducir documentos oficiales del IMPI ni generar confusión sobre documentos reales.

Este recurso puede aparecer de distintas formas a lo largo del sitio, pero siempre debe sentirse parte del mismo sistema.

Ejemplos de evolución:

- Hero: expediente incompleto que se arma.
- Proceso: el expediente va recibiendo estados.
- Oficio: aparece una hoja/requerimiento sobre el expediente.
- Pricing: pequeños indicadores documentales, no ilustraciones completas.
- CTA final: marca/sello abstracto o fragmento muy tenue del expediente.

El expediente debe ser el equivalente visual propio de MarqSafe; **no usar la serpentina/curva de EasyLex**.

---

# 4. Regla permanente sobre “más aire”

**“Más aire” NO significa aumentar artificialmente la altura de las secciones.**

Significa:

- reducir competencia visual;
- agrupar mejor;
- dejar espacio interno suficiente;
- evitar exceso de cards;
- utilizar jerarquía clara;
- reducir texto simultáneo;
- alternar superficies y composiciones;
- permitir que la siguiente sección asome naturalmente;
- evitar que todo tenga el mismo peso.

## Prohibido

- `min-height: 100vh` como solución por defecto;
- secciones de una pantalla completa para 2–3 frases;
- padding vertical enorme sin función;
- separar ideas que deberían vivir juntas;
- usar “aire” para ocultar falta de jerarquía.

## Objetivo

En móvil, cada viewport debe tener una **idea dominante**, no necesariamente una sección completa.

---

# 5. Densidad y ritmo vertical

La Home móvil debe sentirse:

**compacta + respirable + progresiva.**

No:

**vacía + gigante + fragmentada.**

## Presupuesto inicial de spacing

Estos valores son una base de diseño, no dogmas. Deben verificarse visualmente.

| Token | Uso | Valor inicial |
|---|---|---:|
| `--space-page-x` | padding lateral global móvil | 20px |
| `--space-section-xs` | transición corta | 32px |
| `--space-section-sm` | sección compacta | 40–48px |
| `--space-section-md` | separación normal | 56–64px |
| `--space-section-lg` | sección protagonista | 72–88px |
| `--space-group-sm` | elementos relacionados | 12–16px |
| `--space-group-md` | grupos internos | 20–24px |
| `--space-group-lg` | bloques dentro de sección | 28–32px |
| `--card-padding-sm` | card compacta | 18–22px |
| `--card-padding-md` | card normal | 22–28px |
| `--card-padding-lg` | card protagonista | 28–32px |

### Restricción

Una sección no debe utilizar `--space-section-lg` simplemente porque “se ve elegante”.

Debe justificarlo por:

- recurso visual protagonista;
- cambio narrativo importante;
- CTA principal;
- cierre de página;
- composición editorial especial.

---

# 6. Sistema de superficies

No todo debe ser card.

La Home debe alternar al menos estos tipos de composición:

### A. Superficie editorial libre
Texto + visual sin contenedor cerrado.

### B. Superficie grande agrupadora
Una gran caja redondeada que contiene varias ideas relacionadas.

### C. Card comercial
Para pricing, servicios o unidades que necesitan comparación.

### D. Lista/divisores
Para FAQ, beneficios o información escaneable.

### E. Composición gráfica
SVG, expediente, documento, sello, estados o proceso.

### F. Sección humana
Foto real + texto + CTA.

## Regla anti “card soup”

Dos secciones consecutivas NO deberían utilizar exactamente la misma composición de cards salvo que exista una razón funcional.

## Cards

Usarlas únicamente cuando exista:

- agrupación semántica;
- comparación;
- acción;
- contenido autónomo;
- diferenciación comercial.

No usar una card solamente para “hacer bonito”.

---

# 7. Radios y formas

La interfaz debe sentirse suave pero profesional.

## Radios iniciales

| Tipo | Valor |
|---|---:|
| superficie grande | 24–28px |
| card normal | 20–24px |
| card secundaria | 16–20px |
| botón pill/CTA | 999px cuando el lenguaje actual lo justifique |
| elemento pequeño | 12–16px |

Evitar:

- tarjetas cuadradas;
- radios inconsistentes;
- todo convertido en píldora;
- formas infantiles.

---

# 8. Paleta

**Fuente de verdad actual:** colores existentes de v34.

Dirección confirmada:

- blanco / off-white dominante;
- navy/deep blue;
- muted gold/beige;
- tonos neutrales muy claros para separar superficies.

## Regla

El blanco domina.

Navy y dorado se usan para:

- CTA;
- estados;
- líneas;
- iconografía;
- énfasis;
- pequeñas superficies;
- detalles de marca.

No usar grandes masas navy por defecto.

## Pendiente

Extraer y documentar en este archivo los **HEX exactos de v34** cuando tengamos acceso directo al CSS fuente o al port final.

No inventar nuevos HEX hasta entonces.

---

# 9. Tipografía

## Estado

La referencia EasyLex utiliza Agency/AgencyRegular y al cliente le gusta esa dirección tipográfica. Por tanto, **Agency es la primera opción visual a evaluar para MarqSafe**, siempre que exista una licencia comercial/web válida para producción.

- no redistribuir archivos de fuente;
- no incrustar una copia no licenciada;
- mientras la licencia no esté resuelta, el prototipo puede usar `local('Agency')` con fallback;
- si finalmente no se licencia Agency, elegir un sustituto con carácter similar sin romper la jerarquía definida aquí.

## Dirección tipográfica

Debe sentirse:

- distintiva;
- profesional;
- moderna;
- legible;
- menos rígida que un despacho legal tradicional.

## Escala móvil inicial

| Rol | Rango inicial |
|---|---:|
| H1 | 36–42px |
| H2 | 28–34px |
| H3 | 21–25px |
| body destacado | 18–20px |
| body | 16–18px |
| microcopy | 14–15px |

### Line-height

- headings: aprox. `1.05–1.18`;
- body: aprox. `1.45–1.60`.

### Reglas

- no H1 que ocupe media pantalla;
- no headings con descenders recortados;
- no utilizar el peso bold en casi todo;
- negritas sólo para crear jerarquía;
- no llenar cada sección de labels/eyebrows.

---

# 10. Copy visual

El copy debe ser:

- directo;
- humano;
- claro;
- concreto;
- profesional;
- comprensible para alguien que no conoce propiedad industrial.

Evitar:

- “soluciones innovadoras”;
- “servicio principal”;
- “para comenzar”;
- “flujo de trabajo”;
- “alcance” usado como decoración;
- microcopy técnico que no aporta;
- etiquetas de estilo IA;
- frases grandilocuentes sin evidencia.

No inventar:

- años de experiencia;
- número de clientes;
- porcentaje de éxito;
- reseñas;
- marcas registradas;
- certificaciones;
- estadísticas;
- garantías.

---

# 11. Hero móvil

## Objetivo

Resolver en pocos segundos:

1. qué hace MarqSafe;
2. para quién es;
3. qué incluye;
4. qué acción debe realizar;
5. generar una primera impresión visual memorable.

## Contenido vigente

Eyebrow aprobado:

**TU MARCA, EN BUENAS MANOS**

H1:

**Registra tu marca ante el IMPI**

Texto:

**Con búsqueda previa, presentación del trámite y seguimiento hasta la resolución.**

Beneficios:

- Atención en todo México.
- Derechos del IMPI incluidos.
- Acompañamiento en cada paso.

CTA principal:

**Quiero registrar mi marca.**

CTA secundario:

**Ver paquetes.**

## Composición

Orden recomendado móvil:

1. headline;
2. apoyo corto;
3. beneficios compactos;
4. CTA principal;
5. CTA secundario si no compite;
6. expediente visual grande;
7. inicio visible de la siguiente sección.

## Reglas

- el expediente debe verse completo;
- no esconderlo muy abajo;
- no recortarlo;
- no poner cinco elementos flotantes alrededor;
- una sola idea visual fuerte;
- hero compacto;
- no ocupar 100vh;
- la siguiente sección puede asomar.

---

# 12. Home móvil — arquitectura visual propuesta

La información existente de v34 se conserva.

## Orden de secciones

**Mantener el orden actual de la Home v34.** El rediseño móvil debe cambiar composición, ritmo, agrupación y recursos visuales, no reordenar la arquitectura de contenido salvo que exista una razón SEO/CRO demostrable y se apruebe explícitamente.

El orden vigente es:

1. Hero.
2. ¿Por qué registrar mi marca?
3. ¿Por qué hacerlo con MarqSafe?
4. Paquetes y precios.
5. Otros servicios.
6. Cómo funciona el registro.
7. Oficio/requerimiento.
8. Abogado.
9. FAQ.
10. CTA final.

## 12.1 Hero
**Tipo:** superficie protagonista + expediente.

Debe ser la sección visual más memorable del primer scroll.

---

## 12.2 ¿Por qué registrar mi marca?
Contenido:

1. Uso exclusivo en México.
2. Una identidad que puedes defender.
3. Un activo para tu negocio.

**Dirección:** una sola gran superficie o lista editorial, no tres cards independientes.

Puede usar:

- iconos lineales;
- divisores;
- numeración;
- microdetalle dorado;
- un pequeño recurso gráfico del expediente.

Objetivo: escaneable y compacto.

---

## 12.3 ¿Por qué hacerlo con MarqSafe?
Contenido:

1. Te atiende un abogado por WhatsApp.
2. Precios claros desde el inicio.
3. Derechos del IMPI incluidos.
4. Atención en todo México.

**Dirección:** composición editorial distinta a la sección anterior.

Evitar cuatro cajas idénticas.

Posibles soluciones:

- 2x2 muy liviano sin card completa;
- lista con iconografía;
- una superficie con cuatro puntos;
- composición con un dato visual central y cuatro razones alrededor, siempre que no se vuelva compleja.

---

## 12.4 Paquetes y precios
Contenido:

- Búsqueda.
- Registro.
- Protección Total.

Aquí SÍ se justifican cards.

### Reglas

- cards grandes;
- radius suave;
- jerarquía de precio;
- Registro debe destacar como “Más elegido”;
- CTA claro;
- evitar sombras pesadas;
- no hacer las tres exactamente iguales visualmente si una es prioritaria.

---

## 12.5 Otros servicios
Servicios:

- Viabilidad.
- Oficios.
- Declaración.
- Renovación.
- Aviso comercial.

**No usar cinco cards gigantes.**

Opciones preferidas:

- lista compacta;
- rows con icono + nombre + breve descriptor + flecha;
- carrusel sólo si aporta realmente;
- grid compacto de pequeñas superficies si se mantiene legible.

---

## 12.6 Cómo funciona el registro
Pasos:

1. Cuéntanos qué vendes.
2. Revisamos el nombre.
3. Definimos la clase.
4. Presentamos la solicitud.
5. Damos seguimiento.

**Firma visual:** expediente progresivo.

No serpiente.

El expediente puede ir completándose conforme avanza el scroll:

- nombre;
- búsqueda;
- clase;
- solicitud;
- seguimiento.

Debe funcionar aunque JavaScript falle.

---

## 12.7 Oficio o requerimiento
Pregunta:

**¿Te llegó un oficio o requerimiento del IMPI?**

Dirección:

- una composición gráfica fuerte;
- documento/requerimiento;
- un mensaje corto;
- CTA WhatsApp contextual.

Debe diferenciarse visualmente del proceso sin introducir otra metáfora completamente distinta.

---

## 12.8 Abogado
Contenido actual:

**Tu caso, acompañado por un abogado.**

**Te atiende un abogado por WhatsApp de principio a fin.**

Dirección:

- foto real cuando exista;
- contenido breve;
- credenciales reales;
- CTA;
- composición humana.

No stock lawyer.

Mientras no exista foto/información real:

- mantener placeholder claramente interno;
- no publicar datos ficticios.

---

## 12.9 FAQ
Dirección:

- accordion;
- divisores;
- mucho menos encapsulamiento;
- sin card por pregunta.

Touch targets cómodos.

---

## 12.10 CTA final
Objetivo:

- cierre simple;
- WhatsApp;
- una frase;
- pequeño recurso gráfico/isotipo;
- espacio suficiente.

Aquí sí puede haber más respiración que en una sección informativa, porque cumple una función de cierre.

---

# 13. Motion

## Tesis

El movimiento debe reforzar la idea de que **el expediente avanza**.

No usar motion como decoración aleatoria.

## Jerarquía técnica

1. CSS.
2. SVG.
3. JavaScript vanilla pequeño.
4. GSAP u otra librería sólo si existe una razón demostrable.

## Propiedades preferidas

- `transform`;
- `opacity`.

Evitar animar:

- width;
- height;
- top/left;
- layout complejo;
- filtros pesados;
- blur grande constante.

## Patrones permitidos

### Hero
- entrada suave del expediente;
- sello/check aparece;
- pequeña actualización de estado.

### Beneficios
- reveal suave;
- stagger corto únicamente si no retrasa lectura.

### Proceso
- estados del expediente se completan;
- línea/progreso discreto;
- transición de iconos.

### Oficio
- hoja/requerimiento aparece sobre expediente.

### CTA
- mínimo movimiento.

## Prohibido

- scroll jacking;
- parallax fuerte;
- smooth scroll obligatorio;
- animaciones largas;
- rebotes;
- elementos persiguiendo cursor;
- 3D/WebGL;
- vídeo pesado;
- movimiento continuo en todo.

## Accesibilidad

`prefers-reduced-motion` obligatorio.

El sitio debe seguir siendo completamente comprensible sin animación.

---

# 14. Responsive

## Prioridad actual

**Mobile first para la nueva iteración de Home.**

Desktop permanece como v34.

## Principio

Mobile NO es desktop encogido.

Cada composición debe evaluarse específicamente para:

- teléfono pequeño;
- teléfono grande;
- tablet;
- desktop.

## WordPress

WordPress 7.1 permite responsive styles por bloque para:

- móvil;
- tablet;
- base/desktop.

La futura implementación debe aprovechar esas capacidades cuando sea posible en vez de duplicar CSS arbitrariamente.

### Breakpoints

No fijar nuevos breakpoints definitivos todavía.

Primero:

- conservar los que v34 use correctamente;
- documentar los actuales;
- decidir si conviene alinearlos con WordPress/theme.json.

---

# 15. Accesibilidad

Objetivo:

**WCAG 2.2 AA donde aplique.**

Requisitos:

- HTML semántico;
- un H1 por página;
- jerarquía correcta;
- contraste suficiente;
- focus visible;
- navegación teclado;
- targets táctiles cómodos;
- labels reales;
- alt text útil;
- no depender sólo del color;
- zoom funcional;
- reduced motion;
- `details/summary` o controles accesibles en FAQ cuando convenga;
- ARIA únicamente cuando HTML nativo no sea suficiente.

---

# 16. Performance

Objetivos:

- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1.

Prioridades:

- HTML/CSS ligero;
- JS pequeño;
- SVG optimizado;
- imágenes responsive;
- WebP/AVIF cuando proceda;
- `width`/`height` explícitos;
- no lazy-load del LCP;
- lazy-load de recursos inferiores;
- fonts limitadas;
- pocas dependencias;
- no librerías por un solo efecto.

No sacrificar UX real por una puntuación Lighthouse perfecta, pero cada coste debe justificarse.

## Recursos visuales

Preferir:

- SVG propio y optimizado;
- iconos vectoriales;
- formas CSS;
- ilustraciones vectoriales simples;
- imágenes raster únicamente cuando aporten valor real, como la futura fotografía del abogado.

Los recursos visuales deben ser ligeros y reutilizables. Evitar introducir una imagen pesada cuando el mismo concepto pueda resolverse con SVG/CSS sin perder calidad.

---

# 17. WordPress / Gutenberg

## Principio

**Máxima libertad donde la necesita el diseño + máxima facilidad de edición donde la necesita el cliente.**

Clasificar cada componente como:

A. Gutenberg nativo  
B. Pattern  
C. Synced Pattern  
D. Pattern/bloque con locking o content-only editing  
E. Custom HTML  
F. Custom/dynamic block

## Preferencia actual

Usar primero:

- core blocks;
- Group;
- Columns/Grid cuando aplique;
- Patterns;
- content-only editing;
- locking;
- theme.json;
- Global Styles;
- responsive styles de WordPress 7.1;
- CSS global;
- SVG propios.

Custom HTML sólo para estructuras especiales.

Custom block sólo cuando la experiencia de edición o lógica lo justifique.

## Cliente debe poder editar

- textos;
- imágenes;
- precios;
- FAQ;
- artículos;
- categorías;
- contenido habitual.

## Cliente no debería tocar

- CSS;
- JS;
- estructura crítica;
- SVG complejo;
- layout del hero;
- sistema visual;
- schema;
- configuraciones técnicas.

---

# 18. Mapeo preliminar Home → Gutenberg

| Sección | Solución probable |
|---|---|
| Hero | Pattern bloqueado/content-only + SVG |
| Por qué registrar | Pattern + core blocks |
| Por qué MarqSafe | Pattern + core blocks |
| Pricing | Pattern; datos/precios con fuente sincronizada |
| Otros servicios | Pattern/lista de enlaces |
| Proceso | Pattern + SVG; custom block sólo si motion/edición lo exige |
| Oficio | Pattern + SVG |
| Abogado | Pattern content-only |
| FAQ | core Details / Pattern |
| CTA final | Pattern |

Este mapeo es provisional hasta hacer la prueba real en WordPress.

---

# 19. Precios sincronizados

Requisito:

**un precio repetido en varias páginas debe tener una única fuente de verdad.**

Opciones a validar:

- Block Bindings;
- Custom Fields;
- Synced Patterns;
- custom block;
- solución nativa ligera.

No decidir por comodidad.

Criterios:

- editable por cliente;
- difícil de romper;
- poco mantenimiento;
- ligero;
- no duplicación;
- usable en varias páginas.

---

# 20A. SEO y CRO como restricciones permanentes

SEO y CRO no son una revisión al final del diseño. Son requisitos que deben evaluarse **durante cada decisión visual y cada implementación**.

## SEO

Antes de aprobar una sección, verificar:

- jerarquía semántica correcta;
- un H1 único;
- H2/H3 coherentes;
- contenido real rastreable en HTML;
- no esconder contenido esencial dentro de imágenes;
- enlaces internos descriptivos;
- alt text cuando corresponda;
- no sacrificar contenido útil sólo para “hacerlo más limpio”;
- evitar recursos visuales que empeoren LCP/CLS;
- mantener intacta la intención de búsqueda de cada página;
- preservar la arquitectura multipágina de servicios;
- metadata, canonical, sitemap y schema se resolverán en WordPress, no dentro de bloques visuales arbitrarios.

## CRO

Cada sección debe justificar cómo ayuda a una de estas etapas:

1. entender qué ofrece MarqSafe;
2. identificar si el servicio aplica al visitante;
3. comprender qué incluye;
4. entender precio y condiciones;
5. generar confianza;
6. reducir incertidumbre;
7. facilitar la acción hacia WhatsApp.

### Reglas CRO

- CTA principal reconocible;
- WhatsApp accesible durante el recorrido;
- precios visibles y comprensibles;
- “Derechos del IMPI incluidos” debe conservar visibilidad;
- no esconder información comercial importante para ganar espacio;
- no introducir fricción mediante navegación innecesaria;
- no usar dark patterns;
- no usar urgencia falsa;
- no fabricar confianza con métricas o testimonios inexistentes;
- la claridad tiene prioridad sobre un recurso visual decorativo.

## Regla de conflicto

Si una decisión estética empeora significativamente:

- claridad;
- intención SEO;
- legibilidad;
- velocidad;
- confianza;
- o conversión;

la decisión estética debe modificarse o descartarse.

# 20. Anti AI-slop

Prohibir por defecto:

- hero texto izquierda + imagen derecha como fórmula automática;
- enorme titular centrado + 3 cards;
- 3-column grids repetidos;
- cards para todo;
- pills everywhere;
- glow gratuito;
- glassmorphism;
- blobs;
- gradientes azul/morado sin relación con marca;
- iconos genéricos en círculos repetidos;
- estadísticas ficticias;
- estrellas falsas;
- labels decorativos;
- micro-eyebrows innecesarios;
- fade-up idéntico en todas las secciones;
- layouts que parezcan SaaS aunque el negocio no sea SaaS.

Pregunta obligatoria:

> **¿Por qué esta decisión pertenece específicamente a MarqSafe?**

Si la respuesta podría aplicarse igual a 500 sitios de SaaS, despachos o startups, falta especificidad.

---

# 21. Qué aprendemos de EasyLex

## Sí adoptar

- ritmo vertical;
- densidad controlada;
- jerarquía;
- superficies amplias;
- cards redondeadas;
- pricing claramente escaneable;
- recursos visuales frecuentes;
- CTA claro;
- sección siguiente visible;
- variedad de composiciones;
- información compleja presentada visualmente;
- mobile diseñado específicamente.

## No copiar

- logo;
- turquesa;
- tipografía exacta sin decisión de licencia;
- curvas/serpentina;
- ilustraciones;
- copy;
- estadísticas;
- reviews;
- mapa;
- garantías;
- pricing;
- estructura exacta;
- layout pixel por pixel.

---

# 22. Desktop

## Estado actual

**CONGELADO.**

Razón:

- el diseño desktop v34 no genera rechazo actual;
- el usuario lo considera bastante bueno;
- el problema prioritario es móvil;
- cambiar desktop simultáneamente aumentaría el riesgo de perder decisiones ya validadas.

## Regla

No realizar rediseño global de desktop durante la iteración móvil.

Sólo tocar desktop si:

- un cambio compartido rompe algo;
- existe un bug;
- una decisión móvil necesita un token global;
- el usuario aprueba posteriormente una fase específica de refinamiento desktop.

Después de aprobar Home móvil se puede hacer una auditoría separada de desktop.

---

# 23. Control de versiones

Base:

**v34**

Flujo obligatorio:

1. identificar v34;
2. crear copia;
3. modificar únicamente Home móvil;
4. no reintroducir cambios de v35;
5. QA;
6. comparar side-by-side;
7. probar varios anchos;
8. documentar cambios;
9. generar nueva versión;
10. no declarar aprobada hasta feedback del usuario.

---

# 24. Gates antes de aprobar la siguiente Home móvil

La versión NO se considera lista si falla cualquiera:

## Contenido
- se conserva la información confirmada;
- no hay claims inventados;
- precios correctos;
- CTA correctos.

## Diseño
- hero visual visible;
- no section 100vh injustificada;
- no card soup;
- no serpentina;
- spacing consistente;
- cards suaves;
- diferentes composiciones;
- jerarquía clara.

## UX
- acción principal evidente;
- texto escaneable;
- FAQ usable;
- pricing entendible;
- WhatsApp accesible.

## Responsive
- 320–360px;
- 375–390px;
- 414–430px;
- tablet.

## Accesibilidad
- contraste;
- focus;
- targets;
- reduced motion;
- lectura sin JS.

## Performance
- no dependencia pesada nueva;
- no recursos gigantes;
- no layout shift evitable.

---

# 25. Decisiones cerradas

- WordPress + Gutenberg.
- Hostinger Premium.
- WhatsApp como conversión principal.
- Sin formulario actualmente.
- Blog se llama Blog.
- Servicios es dropdown.
- Blanco dominante.
- Navy/dorado como acentos.
- Mucho motion, pero ligero.
- Mobile prioritario.
- EasyLex es referencia, no plantilla.
- No testimonios/estadísticas ficticias.
- No stock lawyer.
- v34 es base.
- v35 está descartada.
- Desktop queda congelado durante esta fase.
- El expediente/documento será la firma visual prioritaria a desarrollar.
- El hero móvil puede inspirarse de forma cercana en la jerarquía y protagonismo visual de EasyLex, usando contenido y assets propios.
- Mantener el orden actual de las secciones de v34.
- Priorizar vectores/SVG y recursos visuales ligeros.
- SEO y CRO son restricciones permanentes durante diseño e implementación, no tareas posteriores.

---

# 26. Lo que todavía falta definir

## P0 — Antes de diseñar la siguiente versión móvil

### 1. Diseño definitivo del expediente
La dirección ya está definida: inspirarse en el protagonismo y claridad del documento/expediente del hero de EasyLex, pero construir un recurso original de MarqSafe.

Falta decidir:

- forma exacta;
- estilo de línea;
- qué elementos muestra;
- cuántas variantes existen;
- cómo se anima;
- cómo funciona en tamaños pequeños;
- qué elementos se reutilizan en Hero, Proceso y Oficio.

Debe diseñarse como un sistema, no como un SVG aislado.

### 2. Composición exacta de las dos primeras secciones
Falta elegir visualmente:

- ¿Por qué registrar? → lista / superficie / composición gráfica.
- ¿Por qué MarqSafe? → lista / 2x2 / superficie única / composición editorial.

No decidir ambas con el mismo patrón.

### 3. Proceso
Tenemos concepto “expediente progresivo”, pero falta convertirlo en composición real.

### 4. Densidad final
Los tokens de spacing de este documento son presupuestos iniciales. Hay que comprobarlos sobre render real.

---

## P1 — Antes del port final a WordPress

### 5. HEX exactos
Extraer tokens de v34.

### 6. Tipografía de producción
Decidir:

- comprar licencia válida de Agency;
- o elegir sustituto.

### 7. Arquitectura de precios sincronizados
Hacer prueba técnica.

### 8. Tema WordPress
Aún no está cerrado.

### 9. Mapping definitivo de Patterns
Probar en editor real.

### 10. Breakpoints definitivos
Documentar v34 + WordPress 7.1 y decidir.

---

## P1 — Contenido

### 11. Abogado
Falta:

- foto;
- nombre público;
- bio;
- formación;
- experiencia;
- cédula si decide mostrarla;
- certificaciones;
- casos autorizados.

### 12. Aviso de privacidad
Contenido final pendiente.

### 13. Correo público
Pendiente.

### 14. Casos/testimonios
Sólo si existen y están autorizados.

---

## P2 — Refinamiento posterior

### 15. Auditoría desktop
Después de aprobar móvil:

- revisar spacing;
- coherencia con nuevo sistema;
- recursos visuales;
- pequeños ajustes.

No rediseñarlo automáticamente.

### 16. Motion detallado
Definir timing/easing después del layout.

### 17. Sistema de iconos
Unificar:

- grosor;
- tamaño;
- esquinas;
- stroke;
- estilo.

### 18. Estados interactivos
Documentar:

- hover;
- focus;
- active;
- disabled;
- open/closed.

---

# 27. Qué NO conceptualizar todavía

No dedicar tiempo aún a:

- animaciones avanzadas;
- GSAP;
- desktop nuevo;
- testimonios ficticios;
- mapas;
- efectos de scroll complejos;
- nuevos servicios;
- componentes WordPress custom antes de validar layout;
- microinteracciones secundarias.

Primero aprobar:

**arquitectura visual móvil + expediente + ritmo + densidad + cards + composición de secciones.**

---

# 28. Orden recomendado de trabajo a partir de este documento

1. Diseñar sistema visual del expediente.
2. Crear greybox de Home móvil usando contenido real de v34.
3. Aplicar tokens de spacing/radius.
4. Resolver Hero.
5. Resolver “Por qué registrar”.
6. Resolver “Por qué MarqSafe”.
7. Resolver pricing.
8. Resolver otros servicios.
9. Resolver proceso con expediente.
10. Resolver oficio.
11. Mantener abogado provisional.
12. Resolver FAQ.
13. Resolver CTA final.
14. Revisar card soup.
15. Revisar densidad.
16. Revisar visual rhythm.
17. Agregar motion mínimo.
18. QA responsive.
19. Comparar con v34.
20. Sólo después portar a Gutenberg.

---

# 29. Regla de decisión

Ante cualquier duda visual:

1. preservar contenido real;
2. preservar claridad;
3. preservar conversión;
4. preservar editabilidad futura;
5. preservar rendimiento;
6. preservar accesibilidad;
7. elegir la solución visual más simple que siga siendo distintiva.

No añadir complejidad únicamente para demostrar creatividad.

---

# 30. Frase de control

Antes de aprobar cualquier sección nueva, responder:

> **¿Esta sección ayuda a entender, decidir o actuar; respira sin desperdiciar pantalla; pertenece visualmente a MarqSafe; funciona en móvil; y puede sobrevivir a WordPress sin convertirse en una pesadilla de mantenimiento?**

Si alguna respuesta es no, todavía no está lista.
