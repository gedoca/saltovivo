Refactorizar la sección de precios de `src/pages/Inversion.tsx` para mostrar **tres opciones de inscripción** en lugar de una sola tarjeta de 1 mes.

### Diseño y contenido
- Agregar un título introductorio sobre las tarjetas: "Elegí tu experiencia" (i18n).
- Mostrar 3 tarjetas de precio en una grilla responsive (1 columna en móvil, 3 en escritorio):
  1. **1 Semana** — 1.000 €
  2. **2 Semanas** — 1.800 €
  3. **1 Mes** — 3.300 € (opción existente)
- Cada tarjeta debe incluir:
  - Badge con la duración.
  - Precio destacado.
  - Lista de inclusiones comunes para todas las opciones:
    - Estadía completa (alojamiento en habitación compartida)
    - 1 o 2 semanas de programa de transformación a escoger
    - Todas las experiencias y actividades del itinerario en las semanas elegidas
    - Seguros especializados
    - Talleres vivenciales
    - Todas las comidas (alimentación consciente)
  - Nota "No incluye viaje internacional a Sicilia".
  - Botón CTA que redirija al **formulario de pre-inscripción actual** de Google Forms.
- Destacar visualmente la tarjeta de 1 mes como la opción más completa (por ejemplo, con borde primario o badge "Experiencia completa"), manteniendo coherencia con la estética actual de Salto Vivo.

### Traducciones (i18n)
- Agregar las claves necesarias en `src/locales/es.json` y `src/locales/it.json` para:
  - Título de la sección.
  - Nombres y duraciones de cada opción.
  - Precios (si se parametrizan).
  - Inclusiones comunes (algunas con variantes semanales).
  - Texto de los botones CTA.
- Usar el hook `useTranslation` ya existente en `Inversion.tsx` para renderizar los textos.

### Alcance explícito
- No se integra procesamiento de pagos (Stripe/Paddle) ni checkout interno.
- Los botones siguen siendo redirecciones al formulario de pre-inscripción actual.
- Se mantiene el resto de la página de Inversión (apoyo desde Latinoamérica, becas, cronograma de admisión, tarjetas de ecosistema) sin cambios funcionales, salvo ajustes textuales mínimos si son necesarios para coherencia.