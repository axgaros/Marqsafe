# DESIGN.md — MarqSafe

**Estado:** contrato visual activo  
**Última actualización:** 27 de octubre de 2026  
**Base vigente:** v44  
**Regla:** consultar este archivo antes de modificar HTML, CSS, JS, SVG, Gutenberg, Patterns, responsive o motion.  
**Desktop:** hero congelado; las secciones posteriores sí siguen la arquitectura aprobada.

## 1. Principios permanentes

MarqSafe debe sentirse clara, profesional, cercana, ordenada, ligera y confiable. No debe parecer SaaS genérico, plantilla de IA, despacho antiguo ni una web hecha de cards repetidas.

“Más aire” = mejor agrupación, menos competencia visual y padding útil; **no** secciones gigantes ni `100vh`.

SEO, CRO, rendimiento, accesibilidad y futura editabilidad en WordPress se consideran durante el diseño, no al final.

## 2. Referencia visual

EasyLex móvil es referencia para ritmo, densidad, jerarquía, cards, pricing, CTA y uso de recursos visuales. No copiar assets, textos, testimonios, estadísticas, colores, curvas ni layout pixel por pixel.

## 3. Firma visual

El recurso propio de MarqSafe es el **expediente/documento de marca**, preferentemente SVG ligero. Puede mostrar MARCA, CLASE, ESTADO, folio, solicitud, sello/check y requerimiento sin reproducir un documento oficial del IMPI.

En hero móvil debe verse realmente como fondo del costado derecho, con fade hacia el copy. No esconderlo en una esquina ni dejar que compita con H1, precio y CTA.

## 4. Arquitectura Home

1. Hero.
2. Confianza: abogado + marcas.
3. Paquetes + otros servicios.
4. ¿Por qué registrar? + ¿Por qué MarqSafe?
5. Oficio/requerimiento IMPI.
6. FAQ compacta + CTA final.

`Cómo funciona el registro` vive en `registro.html`, no en Home.

## 5. Hero

Mantener:

- **TU MARCA, EN BUENAS MANOS**
- **Registra tu marca ante el IMPI**
- descripción actual
- **Registro desde $6,500 MXN por clase y marca · derechos del IMPI incluidos**
- CTA principal **Quiero registrar mi marca**
- CTA secundario **Ver paquetes**

Mobile: expediente visible de fondo y hero compacto.  
Desktop: hero actual congelado.

## 6. Confianza — estructura aprobada v43

Esta macrosección debe contar una sola historia: **quién está detrás → qué aporta → persona real → prueba social**.

Orden obligatorio:

1. eyebrow pequeño: **QUIÉN ESTÁ DETRÁS DE MARQSAFE**
2. H2: **Atención legal directa para proteger tu marca**
3. frase única: **Tu trámite es atendido directamente por un abogado, con seguimiento por WhatsApp durante todo el proceso.**
4. foto + identidad profesional
5. CTA **Hablar por WhatsApp**
6. **Marcas con las que hemos trabajado** + carrusel

Eliminar y no reintroducir:

- `CONFIANZA Y ACOMPAÑAMIENTO`
- `PERFIL PROFESIONAL`
- `Atención directa, sin intermediarios`
- `EXPERIENCIA APLICADA`
- frases adicionales que vuelvan a repetir “te atiende un abogado”.

### Perfil del abogado

Cuando el cliente entregue información real, mostrar:

- foto
- nombre
- cargo/especialidad autorizada
- bio de 2–3 líneas
- 2–3 datos profesionales reales sólo si aportan confianza
- CTA WhatsApp

Mientras falten datos: placeholder explícito de foto + **Nombre del abogado** + **Información profesional pendiente**. Nunca stock lawyer ni credenciales inventadas.

### Desktop

No convertir Confianza en un segundo hero. Entrada lineal, compacta y alineada a la izquierda: eyebrow → H2 moderado → frase → perfil. Evitar el layout v42 con título aislado a la izquierda y copy lejano a la derecha si genera huecos. Foto aprox. 220–260 px.

### Mobile

Conservar lectura vertical: entrada → foto → identidad/bio → CTA → marcas.

### Recurso tipográfico de fondo — aprobado v44

Usar **MARQ / SAFE** en tipografía gigante como watermark editorial dentro de la macrosección de Confianza.

Reglas:

- no cambia el layout aprobado; vive en una capa `aria-hidden` detrás del contenido;
- no sustituye al logo ni funciona como texto informativo;
- desktop: ocupar el tercio derecho como presencia visual tenue;
- mobile: aparecer detrás de la composición actual sin mover foto, copy, CTA ni carrusel;
- opacidad muy baja para no reducir legibilidad;
- puede incluir una sola línea diagonal dorada como acento;
- desktop: entrada suave al aparecer la sección y drift de reposo de sólo unos pocos píxeles;
- no autoplay llamativo, rotaciones, rebotes ni movimiento continuo perceptible;
- `prefers-reduced-motion`: sin animación;
- este recurso reemplaza la necesidad de llenar el hueco con más copy o repetir el expediente.

## 7. Carrusel de marcas — aprobado v41

Conservar sin cambios funcionales:

- 13 imágenes reales una sola vez como fuente
- 5 slots visuales reciclados por JS
- anterior 2 / anterior / actual / siguiente / siguiente 2
- loop circular 13→1 y 1→13 sin clones masivos ni salto de scroll
- marca central nítida
- vecinas con menor opacidad, escala y blur suave
- sin autoplay
- sin numeración
- swipe/touch
- teclado
- chevrons limpios sin círculo
- target táctil mínimo 44×44 px
- focus visible

Título: **Marcas con las que hemos trabajado**. Sin kicker adicional.

Logos WebP 1:1 desde `assets/marcas-clientes/`. Confirmar autorización pública antes de producción.

### WordPress

Las imágenes podrán venir de Media Library/Gallery. CSS global controla el aspecto y JS global el loop. No repetir scripts por página; cargar JS desde theme/plugin (`wp_enqueue_script()` o equivalente).

## 8. Paquetes + otros servicios

Paquetes principales: Búsqueda, Registro, Protección Total. Aquí sí se justifican cards por comparación comercial. Registro debe destacar como **Más elegido**.

Otros servicios deben vivir dentro de la misma macrosección como filas compactas, no otra gran sección.

## 9. Por qué registrar + por qué MarqSafe

Una macrosección con dos capítulos distintos visualmente.

**Por qué registrar:** uso exclusivo, identidad defendible, activo del negocio. No tres cards independientes.

**Por qué MarqSafe:** abogado por WhatsApp, precios claros, derechos IMPI incluidos, atención en todo México. No cuatro cards idénticas.

## 10. Oficio

Mantener como callout independiente y compacto por intención distinta: documento/requerimiento SVG + texto corto + CTA contextual.

## 11. FAQ + CTA

Home: máximo 3–4 preguntas, accordion con divisores, sin card por pregunta. CTA final dentro del mismo bloque de cierre.

## 12. Sistema visual

- blanco/off-white dominante
- navy/deep blue + muted gold como acentos
- superficies grandes 24–28 px de radio
- cards 20–24 px
- mobile padding lateral ~20 px
- evitar masas oscuras grandes sin razón
- Agency sólo si existe licencia web/comercial válida; no redistribuir fuente

## 13. Motion

CSS → SVG → JS vanilla pequeño → librería sólo si se demuestra necesaria. Preferir `transform` y `opacity`. `prefers-reduced-motion` obligatorio. Sin scroll-jacking, parallax fuerte, 3D, WebGL ni video pesado.

## 14. SEO / CRO

Preservar H1 único, jerarquía H2/H3, contenido rastreable, enlaces descriptivos, intención de búsqueda, alt text y arquitectura multipágina.

WhatsApp es conversión principal. Precios y “Derechos del IMPI incluidos” deben seguir visibles. No inventar métricas, clientes, testimonios, garantías ni urgencia.

## 15. WordPress / Gutenberg

Priorizar core blocks, Patterns, Synced Patterns cuando convenga, content-only editing, locking, `theme.json`, Global Styles, CSS global y SVG propios. Custom HTML sólo para estructuras especiales. El cliente debe editar contenido habitual sin tocar CSS/JS/layout crítico.

Precio repetido = una sola fuente de verdad; evaluar Block Bindings, custom fields, Synced Patterns o custom block ligero.

## 16. Performance / accesibilidad

Objetivos: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 y WCAG 2.2 AA donde aplique. Priorizar SVG/WebP, JS pequeño, focus visible, teclado, contraste, touch targets cómodos y reduced motion.

## 17. Anti AI-slop

Evitar hero SaaS genérico, cards para todo, pills everywhere, glow, glassmorphism gratuito, blobs, fake stats, iconos genéricos repetidos y fade-up idéntico en todas partes.

Pregunta obligatoria: **¿Por qué esta decisión pertenece específicamente a MarqSafe?**

## 18. Gate final

Antes de aprobar una sección:

> ¿Ayuda a entender, confiar, decidir o actuar; respira sin desperdiciar pantalla; pertenece a MarqSafe; funciona en móvil y desktop; conserva SEO/CRO; es ligera, accesible y mantenible en WordPress?

Si alguna respuesta es no, todavía no está lista.
