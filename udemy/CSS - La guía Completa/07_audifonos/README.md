# Proyecto 07: Landing Page de Audífonos TechPro

Este proyecto consiste en la creación de una landing page moderna y atractiva para un producto ficticio de audífonos llamado "TechPro". El diseño se centra en el uso de técnicas avanzadas de CSS para lograr un layout dinámico, efectos visuales llamativos y un rendimiento optimizado.

## 🎨 Características de CSS Implementadas

El proyecto destaca por el uso de las siguientes propiedades y técnicas de CSS:

### 1. **CSS Custom Properties (Variables)**
Se utiliza `:root` para definir una paleta de colores global, familias de fuentes y medidas de separación. Esto permite mantener la consistencia en todo el sitio y facilita la actualización de valores.

```css
:root {
    --primario: #1073BA;
    --secundario: #00DA55;
    --fuentePincipal: 'Roboto', sans-serif;
    --separacion: 5rem;
}

.header {
    background-color: var(--negro);
    padding: calc( var(--separacion) * 3 ) 0;
}
```

### 2. **Responsive Design (Mobile-First)**
El layout está construido siguiendo una estrategia "mobile-first". Los estilos base son para dispositivos móviles y se utilizan `media queries` (en `768px` y `992px`) para adaptar el diseño a pantallas más grandes.

- **Header:** Pasa de una columna a un grid de dos columnas.
- **Modelos:** La lista de modelos cambia de un layout de `flex-direction: column-reverse` a un grid complejo en escritorio.
- **Fondos:** Los fondos con gradientes y imágenes se ajustan para optimizar la visualización en diferentes orientaciones y tamaños de pantalla.

### 3. **CSS Grid Layout**
Grid es fundamental para las secciones más complejas:

- **Header y Características:** Se usan grids simples para organizar el contenido en columnas.
- **Listado de Modelos:** Se implementa un grid más avanzado donde un elemento (`.modelo-z`) ocupa el espacio de dos filas y una columna (`grid-row: 1 / 3`), creando un layout asimétrico y visualmente interesante.

### 4. **Flexbox**
Flexbox se usa para alineación y distribución de elementos en un solo eje:

- **Contenido de Modelos:** Se utiliza para centrar verticalmente el texto dentro de cada tarjeta de modelo.
- **Layout Móvil:** En la vista móvil, el listado de modelos usa `flex-direction: column-reverse` para cambiar el orden visual de los elementos.

### 5. **Efectos Visuales Avanzados**
- **Texto con Degradado:** Se crea un efecto de texto con un relleno de degradado utilizando `background-clip: text`.
- **Fondos con Gradientes y Múltiples Imágenes:** Se combinan `linear-gradient` con imágenes de fondo para crear superposiciones de color y efectos visuales atractivos en secciones como "Sobre Tech" y "Newsletter".
- **Transiciones y Transformaciones:** Se aplican efectos `:hover` a los modelos de audífonos, que escalan su tamaño (`transform: scale(1.1)`) y modifican el tamaño de su imagen de fondo con una transición suave.

### 6. **Optimización de Imágenes con CSS y JavaScript**
El proyecto utiliza un script de JavaScript (`js/imagenes.js`) para detectar el soporte del navegador para formatos de imagen modernos como **AVIF** y **WebP**. El script añade clases (`.avif`, `.webp`, `.notavif`, etc.) a la etiqueta `<html>`. Luego, el CSS utiliza estas clases para servir la imagen más optimizada disponible, mejorando significativamente el rendimiento de la página.

```css
/* Fallback para navegadores sin soporte */
.notavif.notwebp .sobre-tech {
    background-image: linear-gradient(...), url('../img/imagen-mujer.jpg');
}

/* Para navegadores con soporte WebP */
.webp .sobre-tech {
   background-image: linear-gradient(...), url('../img/imagen-mujer.webp');
}

/* Para navegadores con soporte AVIF */
.avif .sobre-tech {
    background-image: linear-gradient(...), url('../img/imagen-mujer.avif');
}
```

### 7. **Tipografía y Unidades Relativas**
- **Google Fonts:** Se importan las fuentes `Roboto` y `Lato`.
- **Unidades `rem`:** Se usa la técnica de `font-size: 62.5%` en `<html>` para que `1rem` sea igual a `10px`, facilitando un diseño escalable y accesible.

## 📂 Estructura de Archivos

- `css/normalize.css`: Reseteo de estilos para consistencia entre navegadores.
- `css/styles.css`: Estilos principales del proyecto, utilizando las técnicas mencionadas.
- `js/imagenes.js`: Script para la detección de formatos de imagen soportados.
