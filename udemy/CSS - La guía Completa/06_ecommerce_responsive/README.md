# Proyecto 06: E-commerce Responsive - TiendaMuebles

Este proyecto es parte de un curso de CSS y se enfoca en construir un sitio web de e-commerce totalmente responsivo. El objetivo principal es aplicar una amplia gama de técnicas de CSS moderno para crear layouts complejos y adaptables que funcionen en diferentes dispositivos y tamaños de pantalla.

## 🎨 Características de CSS Implementadas

A continuación se detallan las técnicas y conceptos de CSS más importantes utilizados en este proyecto:

### 1. **Responsive Design (Media Queries)**
El diseño es "mobile-first", lo que significa que los estilos base están definidos para dispositivos móviles y luego se expanden para pantallas más grandes mediante `media queries`.

- **Puntos de quiebre (Breakpoints):** Se utiliza principalmente un breakpoint de `768px` para adaptar el layout a tablets y escritorios.
- **Ejemplos de adaptaciones:**
    - La navegación principal pasa de ser una columna (`flex-direction: column`) a una fila (`flex-direction: row`).
    - El grid de productos se transforma de una sola columna a un layout complejo de múltiples columnas.
    - Los tamaños de fuente y la altura del "hero" se ajustan para pantallas más grandes.

### 2. **CSS Grid Layout**
CSS Grid es la base para los layouts más complejos del sitio.

- **Listado de Productos:** En la página de inicio y tienda, se utiliza un grid complejo para posicionar los productos. Se usa `grid-template-columns: repeat(6, 1fr)` y se asignan áreas específicas a los productos con `grid-column`.
- **Footer:** El pie de página está organizado en tres columnas utilizando `grid-template-columns: repeat(3, 1fr)`.
- **Blog:** El layout del blog se divide en una sección principal y una barra lateral (`sidebar`) usando `grid-template-columns: 2fr 1fr`.

### 3. **Flexbox**
Flexbox se utiliza para alinear y distribuir elementos en una sola dimensión.

- **Navegación Principal:** El menú de navegación (`nav-principal`) usa Flexbox para alinear los enlaces. En móviles, los alinea verticalmente y en escritorio, horizontalmente con `justify-content: space-between`.

### 4. **Box Model y Normalización**
- Se aplica `box-sizing: border-box` a todos los elementos para un modelo de caja más predecible e intuitivo.
- Se utiliza `normalize.css` para resetear los estilos por defecto del navegador y asegurar consistencia visual entre diferentes navegadores.

### 5. **Tipografía Web**
- **Fuentes de Google:** Se importan las fuentes `Raleway` y `Playfair Display` desde Google Fonts para los textos y encabezados, respectivamente.
- **Unidades `rem`:** Se establece `font-size: 62.5%` en el `<html>` para que `1rem` sea equivalente a `10px`, facilitando el manejo de tamaños de fuente responsivos.

### 6. **Selectores y Pseudoclases**
- Se utilizan selectores avanzados como `:nth-child()` para aplicar estilos específicos a ciertos productos en el grid sin necesidad de añadir clases adicionales.
- Se usan pseudoclases como `:hover` para añadir interactividad a botones y enlaces con transiciones suaves.

### 7. **Fondos Avanzados**
- En la sección "Sobre Nosotros", se combina un gradiente lineal con una imagen de fondo (`linear-gradient( to right, transparent 50%, #037bc0 50%), url(...)`) para crear un efecto de texto sobre un fondo de color que no tapa la imagen por completo.

### 8. **Formularios**
- El formulario de contacto está estilizado para ser claro y fácil de usar, alineando etiquetas e inputs de manera consistente utilizando Flexbox.

## 📂 Estructura de Archivos CSS

La estructura de los archivos CSS es simple y organizada:

- `css/normalize.css`: Contiene los estilos para la normalización del CSS.
- `css/app.css`: Contiene todos los estilos personalizados del proyecto, organizados de forma lógica desde estilos globales hasta layouts específicos de cada sección.
