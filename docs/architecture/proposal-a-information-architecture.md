# Propuesta A — Arquitectura de información y recorrido comercial

Fecha: 2026-10-18
Estado: hipótesis de arquitectura previa a diseño visual

## 1. Supuestos permitidos

Con base en la información disponible actualmente:
- MarqSafe ofrece servicios relacionados con protección y mantenimiento de marcas en México.
- Probablemente opera como firma/agencia pequeña y puede ser una práctica individual, pero esto NO está confirmado.
- Es razonable contemplar atención remota/videollamada en México, pero NO debe publicarse como hecho hasta confirmación del cliente.
- No existe todavía logo, fotografía, semblanza, credenciales, testimonios ni diferenciadores confirmados.
- No se inventará ninguno de esos elementos.

## 2. Problema de arquitectura detectado en EasyLex

EasyLex es útil para estudiar contenido y conversión, pero su estructura mezcla servicios, paquetes y distintas landings con intenciones solapadas.

MarqSafe puede construir una arquitectura más clara alrededor del ciclo de vida de una marca:

1. Revisar / evaluar viabilidad
2. Registrar
3. Atender incidencias u oficios
4. Declarar uso
5. Renovar

Esta lógica ayuda a que una persona no experta identifique en qué etapa se encuentra antes de contactar.

## 3. Principio rector

La web no debe comportarse como un catálogo genérico de cinco tarjetas de servicios.

Debe ayudar a responder:
- ¿En qué etapa está mi marca?
- ¿Qué servicio necesito?
- ¿Qué incluye?
- ¿Qué tengo que proporcionar?
- ¿Qué puede costar?
- ¿Qué ocurre después?
- ¿Cómo contacto a MarqSafe ahora?

## 4. Contacto y conversión

El contacto NO se reserva al final de la página.

### Decisión provisional
- CTA principal visible desde el primer viewport.
- WhatsApp permanente, de acuerdo con la cotización.
- Mensaje contextual según la página o etapa.
- CTA secundario de exploración para quien todavía no está listo para contactar.

Ejemplos conceptuales, NO copy final:
- Consultar mi caso
- Revisar mi marca
- Preguntar por este trámite
- Ver el proceso

No usar “Comprar ahora” ni checkout de e-commerce salvo que el cliente confirme un flujo real de compra en línea.

## 5. Qué tomamos del e-commerce y qué NO

### Sí tomar
- claridad de oferta;
- precio/alcance visible cuando exista;
- reducción de incertidumbre;
- comparación simple;
- CTA accesible;
- respuesta rápida a objeciones;
- siguiente paso evidente.

### No asumir
- carrito;
- checkout;
- pago en línea;
- compra sin evaluación;
- paquetes estandarizados si el cliente no los maneja así.

MarqSafe vende un servicio profesional; la web debe tomar la claridad del e-commerce sin fingir que un trámite jurídico es un producto idéntico para todos.

## 6. Sitemap de producción recomendado

/
├── /servicios/
├── /registro-de-marca/
├── /busqueda-de-viabilidad/
├── /contestacion-de-oficios/
├── /declaracion-de-uso/
├── /renovacion-de-marca/
├── /firma/                    [nombre provisional]
├── /blog/
│   └── /articulo/
├── /contacto/
└── /aviso-de-privacidad/

### Observación
`/servicios/` sí debe tener función propia: orientar al visitante por situación/etapa y distribuir autoridad/enlaces hacia las páginas individuales. No debe ser sólo una cuadrícula duplicada del menú.

## 7. Navegación propuesta

### Desktop
- Logo / MarqSafe
- Servicios
- Cómo funciona / Proceso [evaluar después]
- Firma [cuando exista información]
- Blog
- CTA principal de contacto

### Dropdown o megamenú ligero de Servicios
Ordenado por etapa, no alfabéticamente:
- ¿Quiero saber si puedo registrar? → Búsqueda de viabilidad
- Quiero registrar → Registro de marca
- Recibí un requerimiento → Contestación de oficios
- Mi registro requiere declaración → Declaración de uso
- Tengo que mantener mi marca vigente → Renovación

### Mobile
- Navegación breve.
- CTA principal accesible sin recorrer el menú completo.
- WhatsApp permanente sin tapar contenido ni controles.

## 8. Arquitectura propuesta de Home

La Home NO debe intentar explicar absolutamente todo.

### 1. Hero
Objetivo:
- explicar con rapidez qué problema resuelve MarqSafe;
- dejar claro que se trata de propiedad industrial/marcas;
- ofrecer contacto inmediato;
- ofrecer un camino para quien todavía necesita entender.

Contenido pendiente:
- propuesta de valor real;
- alcance geográfico;
- credenciales;
- fotografía/logo.

### 2. Orientador: “¿En qué etapa está tu marca?”
En vez de cinco cards equivalentes, presentar el ciclo:
- Evaluar
- Registrar
- Resolver
- Mantener
- Renovar

Cada punto lleva al servicio correcto.

Esta sección debe funcionar como herramienta de decisión, no decoración.

### 3. Qué hace MarqSafe
Resumen de alcance real, cuando el cliente lo confirme.

Debe responder qué obtiene una persona al trabajar con MarqSafe, sin copy genérico de “soluciones integrales”.

### 4. Proceso general
Secuencia sencilla desde la consulta hasta el acompañamiento del trámite.

La cotización exige proceso explicado por etapas.

### 5. Honorarios / transparencia
No mostrar cifras inventadas.

Cuando existan:
- honorarios profesionales;
- derechos oficiales separados;
- variables que cambian el precio;
- CTA relacionado.

### 6. Confianza verificable
Sólo cuando exista evidencia:
- nombre del profesional;
- semblanza;
- fotografía;
- experiencia;
- asociaciones;
- estudios;
- testimonios.

Si no hay evidencia, NO sustituir con números falsos o logos genéricos.

### 7. FAQ orientada a decisión
Preguntas de alto impacto comercial, no relleno SEO.

### 8. CTA final
Contacto contextual y recordatorio de siguiente paso.

## 9. Plantilla conceptual de página de servicio

Cada servicio tendrá identidad propia de contenido aunque comparta sistema visual.

### A. Encabezado/hero de servicio
Debe responder:
- qué es;
- cuándo aplica;
- acción principal.

Contacto visible en primer viewport.

### B. Respuesta corta
Resumen de la situación en lenguaje no técnico.

### C. ¿Esto aplica para mí?
Señales o situaciones concretas.

Ejemplo conceptual:
“Este servicio suele ser relevante si…”

### D. Qué incluye
Alcance preciso.

### E. Qué no incluye / variables
Cuando sea útil para reducir ambigüedad.

### F. Proceso
Etapas específicas del servicio.

### G. Qué necesita el cliente
Documentos/datos, una vez confirmados por el profesional.

### H. Honorarios y derechos oficiales
Separados visualmente cuando corresponda.

### I. Relación con la siguiente etapa
Enlazado contextual con otros servicios.

Ejemplo:
Viabilidad → Registro
Registro → Oficios / Declaración
Declaración → Renovación

### J. FAQ
Preguntas reales del servicio.

### K. CTA final
Mensaje de WhatsApp/contexto específico.

## 10. Seis páginas para el primer prototipo navegable

Para mantener el prototipo dentro de un alcance útil sin construir el sitio final completo, se propone:

1. **Inicio**
2. **Búsqueda de viabilidad**
3. **Registro de marca**
4. **Contestación de oficios**
5. **Declaración de uso**
6. **Renovación de marca**

### Por qué estas seis
- Son exactamente el núcleo comercial contratado.
- Permiten demostrar navegación real entre etapas.
- Obligan a probar una Home y una familia completa de páginas de servicio.
- Permiten validar variaciones de contenido sin esconder todo detrás de una única plantilla.

### Qué queda fuera del primer prototipo pero no del proyecto final
- `/servicios/`
- `/firma/`
- `/blog/`
- `/contacto/`
- `/aviso-de-privacidad/`

Estas páginas sí forman parte de la arquitectura de producción, pero no es necesario construirlas todas para que el cliente evalúe la primera propuesta visual.

El Blog deberá prototiparse después de validar la dirección visual, antes de implementar WordPress definitivo, porque su sistema editorial sí es requisito contractual.

## 11. Customer journeys principales

### Journey 1 — “Quiero registrar una marca”
Google / recomendación
→ Registro de marca
→ respuesta corta
→ alcance
→ viabilidad / proceso
→ precio
→ FAQ
→ contacto

### Journey 2 — “No sé si mi nombre se puede registrar”
Google / Home
→ Búsqueda de viabilidad
→ qué se revisa
→ qué recibe
→ siguiente paso
→ contacto

### Journey 3 — “El IMPI me mandó algo”
Google / Home
→ Contestación de oficios
→ identificar situación
→ alcance
→ documentos / proceso
→ contacto

### Journey 4 — “Ya tengo una marca”
Google / recomendación
→ Declaración o Renovación
→ requisitos / etapa
→ alcance
→ costo
→ contacto

### Journey 5 — “No sé qué necesito”
Home
→ orientador por etapa
→ página correcta
→ contacto contextual

## 12. CRO: regla de CTA

No usar CTA de contacto sólo una vez al final.

Tampoco repetir un botón cada dos párrafos.

Patrón recomendado:
1. CTA en header/primer viewport.
2. CTA contextual después de que el usuario entiende el alcance o precio.
3. CTA final.
4. WhatsApp flotante permanente según contrato.

Cada CTA debe conservar contexto de página/servicio.

## 13. SEO: función de cada tipo de página

### Home
Marca + propuesta general + navegación semántica.

### Página de servicio
Intención comercial/transaccional específica.

### Servicios hub
Orientación y enlazado interno; no competir artificialmente con páginas específicas.

### Blog
Intenciones informativas y preguntas de etapas/proceso.

No crear landings locales o variantes casi idénticas sin necesidad real.

## 14. Información bloqueada por cliente

No se puede cerrar todavía:
- servicio prioritario;
- cliente ideal;
- alcance geográfico definitivo;
- si existe consulta gratuita;
- modelo de honorarios;
- paquetes;
- tiempos de respuesta;
- proceso real;
- si hay videollamada;
- nombre y credenciales del profesional;
- experiencia;
- fotografía;
- prueba social;
- logo;
- tono de marca.

Todos estos huecos deberán utilizar placeholders explícitos en el prototipo si todavía faltan.

## 15. Decisiones que sí quedan provisoriamente cerradas

- La referencia visual no será EasyLex.
- El concepto de arquitectura se basa en el ciclo de vida de una marca.
- El contacto estará disponible desde el primer viewport.
- WhatsApp será persistente y contextual.
- No se inventará autoridad.
- La Home orientará antes de vender.
- Las páginas de servicio serán capaces de funcionar como landing pages independientes.
- El primer prototipo tendrá seis páginas: Home + cinco servicios contratados.
- Blog, Firma, Contacto y Privacidad siguen en el sitemap final aunque no entren en el primer prototipo.

## 16. Próximo paso metodológico

Antes del diseño visual:
1. definir el modelo de contenido mínimo para esas seis páginas;
2. definir cuáles contenidos pueden ser placeholders;
3. definir concepto central de Propuesta A;
4. construir DESIGN.md;
5. recién después iniciar wireframe/prototipo.
