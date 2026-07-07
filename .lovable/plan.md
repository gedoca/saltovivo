## Instalar Meta Pixel de Facebook

Agregar el código de seguimiento de Meta Pixel (ID `2048605168775531`) al archivo `index.html`.

### Cambios

**1. `index.html` — dentro del `<head>`** (antes del cierre `</head>`)

Insertar el snippet `<script>` de Meta Pixel que inicializa `fbq` y dispara `PageView`.

**2. `index.html` — inmediatamente después de `<body>`**

Insertar el fallback `<noscript>` con la imagen de tracking 1×1. Se coloca en el `<body>` (no en el `<head>`) porque la restricción HTML5 del stack no permite `<noscript><img></noscript>` dentro del `<head>`.

### Notas

- El Pixel se cargará en todas las rutas del SPA. Solo dispara `PageView` en la carga inicial; si más adelante querés trackear navegación entre rutas de React Router habría que agregar un `fbq('track', 'PageView')` en un listener de cambios de ruta (no incluido en este cambio).
- No se modifica ningún componente React ni lógica de la app.
