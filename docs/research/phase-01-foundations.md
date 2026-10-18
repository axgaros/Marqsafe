# MarqSafe — Fase 01: fundamentos y restricciones

Estado: **en progreso**  
Propuesta activa: **A**  
No se ha iniciado diseño visual ni HTML.

## 1. Restricciones contractuales confirmadas

- WordPress + Gutenberg.
- Hostinger Premium por 48 meses.
- Sitio administrable por el cliente.
- Servicios de propiedad industrial.
- Honorarios editables y valores repetidos sincronizados.
- Blog operativo.
- Formulario + antispam.
- WhatsApp contextual.
- SEO técnico, Search Console y medición básica.
- HTTPS, respaldos, rendimiento y responsive.
- Dos rondas de ajustes.
- Diseño original.

## 2. Restricciones técnicas verificadas

### WordPress

WordPress 7.1 permite intercalar bloques editables dentro de un bloque `core/html` con una carcasa HTML estática. Los bloques internos quedan editables pero bloqueados contra mover, borrar o insertar hermanos. Esto se considera una hipótesis prioritaria para MarqSafe, pero deberá probarse en la instalación real antes de adoptarse como arquitectura definitiva.

Fuente oficial: https://make.wordpress.org/core/2026/07/23/editable-blocks-inside-the-custom-html-block/

El bloque Custom HTML es un bloque estático cuyo markup se guarda en el contenido de la entrada/página.

Fuente oficial: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/core-blocks-widgets/core-block-html/

### Hostinger Premium

Para planes Premium V3 (comprados desde el 17 de diciembre de 2025), Hostinger documenta:

- 3 sitios.
- 20 GB de almacenamiento.
- 2 GB de RAM.
- 1 núcleo de CPU.
- 10 bases de datos.

La cuenta real deberá verificarse en hPanel antes de asumir estos recursos como definitivos.

Fuente oficial: https://www.hostinger.com/support/10717644-new-web-and-cloud-hosting-limits-at-hostinger/

## 3. Criterios no negociables de implementación

- No diseñar componentes sin una ruta razonable de implementación en WordPress.
- No introducir frameworks pesados para funciones triviales.
- HTML semántico primero; CSS después; JavaScript solo cuando aporte funcionalidad.
- Plugins mínimos y justificados.
- No duplicar CSS/JS dentro de múltiples bloques si puede centralizarse.
- Contenido habitual del cliente debe ser editable sin exigir conocimientos de programación cuando sea razonable.
- Datos jurídicos, comerciales, honorarios y credenciales no confirmados se marcan como pendientes; no se inventan.
- Propuesta A se completa antes de iniciar Propuesta B.

## 4. Accesibilidad objetivo

Objetivo de implementación: WCAG 2.2 AA en las áreas aplicables, incluyendo navegación por teclado, foco visible/no oculto, etiquetas, contraste y tamaño/espaciado suficiente de targets.

Fuente oficial: https://www.w3.org/TR/WCAG22/

## 5. Arquitecturas WordPress candidatas a validar más adelante

No se elige todavía una arquitectura definitiva. Se conservan estas alternativas:

1. Gutenberg nativo.
2. HTML personalizado puro.
3. HTML por secciones + CSS global.
4. HTML personalizado con bloques Gutenberg internos editables — **candidato prioritario para prueba**.
5. Custom Gutenberg Blocks.
6. ACF Blocks.
7. Page builder solo si existe una necesidad demostrable.

## 6. Bloqueos actuales

- Falta URL de referencia proporcionada por el cliente.
- Falta información comercial detallada del cliente.
- Falta contenido definitivo.
- Falta verificar recursos exactos del plan en hPanel.
- Falta probar la experiencia real de Custom HTML + inner blocks en la instalación final.

## 7. Siguiente paso metodológico

Completar investigación de referencia y benchmark antes de definir la dirección visual de la Propuesta A.

No crear todavía HTML, CSS, JavaScript ni componentes visuales finales.
