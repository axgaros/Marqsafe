# MarqSafe — Propuesta A / DESIGN.md

Fecha: 2026-10-18
Estado: dirección visual aprobada para prototipo

## 1. Idea central

**Seriedad contemporánea.**

MarqSafe debe sentirse formal, profesional, confiable y elegante, sin parecer una firma de lujo, una fintech ni una plantilla SaaS. La identidad debe transmitir orden, precisión y acompañamiento en propiedad industrial.

No debe ser fría, insípida ni burocrática.

## 2. Concepto visual

La propuesta toma como materia prima visual:
- registro;
- clasificación;
- folio;
- delimitación;
- capas de protección;
- anotaciones;
- secuencia de etapas;
- expediente contemporáneo.

No se representa el derecho con clichés como balanzas, mazos, columnas o escudos.

## 3. Personalidad

- Clara
- Sobria
- Precisa
- Cercana sin informalidad
- Contemporánea
- Confiable
- Técnica sin parecer complicada

## 4. Anti-AI-slop

Evitar por defecto:
- hero mitad texto / mitad mockup genérico;
- glow;
- glassmorphism;
- gradientes morado-azules;
- blobs;
- cards para todo;
- tres columnas repetidas como respuesta automática;
- iconos genéricos dentro de círculos;
- estrellas y métricas inventadas;
- textos como “soluciones innovadoras” o “transformamos tu futuro”;
- animaciones de fade/slide repetidas sin función;
- ilustraciones jurídicas cliché.

Toda sección debe justificar su composición por el contenido.

## 5. Paleta provisional

La cotización menciona azul marino y dorado, pero la dirección aprobada para esta propuesta descarta el dorado como recurso dominante.

Tokens propuestos:
- `--ink`: #12202A — texto principal / fondo oscuro
- `--navy`: #17374A — color institucional principal
- `--slate`: #60717B — texto secundario
- `--mist`: #E8EEF1 — superficies suaves
- `--paper`: #F7F8F6 — fondo principal cálido-neutro
- `--white`: #FFFFFF
- `--signal`: #2D657B — acento funcional
- `--line`: #C9D3D8 — divisores

No usar colores para simular lujo. El contraste, la escala y el espacio son los principales recursos de jerarquía.

## 6. Tipografía

Para el prototipo se utilizará una pila local/sistema para mantener carga inmediata y evitar dependencias externas innecesarias.

- Display/títulos: `Georgia`, `Times New Roman`, serif; usada con moderación y tamaño editorial.
- UI/cuerpo: `Inter` si está disponible en el sistema, con fallback `Arial`, `Helvetica`, sans-serif.

La combinación busca formalidad sin teatralidad premium.

En producción se evaluará una familia web específica sólo si justifica su costo de carga.

## 7. Escala tipográfica

- Display: clamp(3rem, 7vw, 6.75rem)
- H1 servicio: clamp(2.5rem, 5.5vw, 5rem)
- H2: clamp(2rem, 4vw, 3.5rem)
- H3: 1.25–1.5rem
- Body large: 1.125–1.25rem
- Body: 1rem
- Small/meta: .8–.9rem

Líneas relativamente cortas para lectura y contraste claro entre títulos y contenido.

## 8. Grid y composición

- Ancho de contenido principal: 1180–1240px.
- Márgenes fluidos mediante `clamp()`.
- Grid base de 12 columnas en desktop, pero no visible como rejilla rígida.
- Mobile first.
- Se permiten composiciones asimétricas controladas.
- Mucho espacio negativo, pero sin sensación de “marca de lujo”.

Regla: si una sección puede resolverse mejor como texto + línea + índice, no convertirla en tarjeta.

## 9. Geometría

- Radios pequeños o nulos.
- Bordes finos.
- Líneas horizontales y verticales como señal de expediente/clasificación.
- Numeración funcional de etapas cuando ayude a entender proceso.
- No usar cápsulas/pills salvo estado o etiqueta realmente útil.

## 10. Imágenes

Durante el prototipo pueden utilizarse fotografías libres de Pexels como placeholders claramente identificados.

Tratamiento:
- arquitectura, textura, oficina o trabajo documental;
- evitar fotografías cliché de “abogado cruzado de brazos”;
- recortes editoriales;
- preferencia por monocromo o baja saturación;
- `object-fit: cover`;
- dimensiones explícitas para evitar CLS.

En producción deben reemplazarse por fotografía real del profesional/equipo cuando exista.

## 11. Movimiento

Principio: **movimiento como confirmación de estructura, no decoración.**

Permitido:
- cambio de línea/indicador al recorrer etapas;
- underline que se extiende en hover;
- desplazamiento leve de flecha;
- revelado de detalles en FAQ;
- navegación móvil;
- aparición inicial muy contenida sólo si no afecta contenido.

No permitido:
- cada bloque entrando con fade;
- parallax gratuito;
- autoplay pesado;
- animaciones que oculten información;
- movimiento esencial para entender la página.

Respetar `prefers-reduced-motion`.

## 12. Botones y enlaces

CTA principal:
- sólido en navy/ink;
- texto específico: “Consultar este trámite”, “Revisar mi caso”, etc.;
- no usar “Enviar” o “Saber más” cuando pueda ser más concreto.

CTA secundario:
- enlace editorial con flecha o borde inferior.

Focus siempre visible.

## 13. Header

- Logo textual temporal “MARQSAFE”.
- Navegación corta.
- Servicios accesibles.
- CTA de contacto visible en desktop.
- En mobile, botón de menú + acceso rápido a WhatsApp/contacto.
- Sticky sólo si no roba espacio ni genera saltos.

## 14. Hero de Home

No usar split hero convencional.

Dirección:
- composición editorial con gran titular;
- marcador de categoría / propiedad industrial;
- CTA inmediato;
- una imagen o textura arquitectónica integrada como campo visual, no como simple columna derecha;
- indicación de ciclo de servicios en el mismo primer bloque o inmediatamente después.

## 15. Orientador por etapa

Componente clave de la propuesta.

Debe representar el ciclo:
1. Evaluar
2. Registrar
3. Resolver
4. Declarar
5. Renovar

En desktop puede funcionar como línea editorial horizontal/vertical con estados y descripciones breves.
En mobile se vuelve lista clara y táctil.

No cinco cards iguales.

## 16. Páginas de servicio

Deben compartir sistema, no plantilla idéntica.

Elementos comunes:
- breadcrumb corto;
- titular claro;
- “cuándo aplica” cerca del inicio;
- CTA visible;
- contenido dividido mediante líneas/índices, no sólo tarjetas;
- proceso;
- alcance;
- honorarios placeholder;
- relación con siguiente etapa;
- FAQ;
- CTA final.

## 17. Placeholders

Cualquier dato no confirmado se marca visualmente como:
`Pendiente de confirmar con MarqSafe`.

Nunca inventar:
- nombre/credenciales del abogado;
- años de experiencia;
- clientes;
- testimonios;
- cifras de éxito;
- honorarios reales;
- derechos oficiales;
- tiempos garantizados;
- ubicación.

## 18. Accesibilidad

Objetivo WCAG 2.2 AA en el prototipo:
- contraste suficiente;
- navegación teclado;
- focus visible;
- skip link;
- headings en orden;
- `<details>` para FAQ cuando funcione;
- `aria` sólo cuando HTML nativo no alcance;
- targets táctiles adecuados;
- reduced motion.

## 19. Rendimiento

- HTML5 semántico.
- CSS compartido.
- JavaScript vanilla compartido.
- Cero frameworks.
- Imágenes comprimidas/locales en el ZIP.
- Sin sliders ni librerías de animación.
- Lazy load sólo para imágenes fuera de viewport.
- El hero no depende de JS.

## 20. Regla de WordPress

Ningún componente será aprobado si no podemos explicar cómo trasladarlo a WordPress.

Mapa esperado:
- layout especial: Custom HTML / pattern propio;
- textos: bloques editables internos cuando convenga;
- blog: WordPress Posts;
- FAQ: HTML semántico/pattern;
- precios: fuente sincronizada a definir;
- CSS: global/tema;
- JS: global mínimo;
- formularios: solución server-side/plugin, nunca Custom HTML puro.

## 21. Criterio de aprobación

Antes de aceptar una sección:
- ¿se entiende sin animación?
- ¿pertenece a MarqSafe?
- ¿reduce incertidumbre?
- ¿tiene una acción clara?
- ¿evita cliché legal?
- ¿evita cliché AI/SaaS?
- ¿funciona en mobile?
- ¿es viable en WordPress?
- ¿el cliente puede editar lo prometido?
