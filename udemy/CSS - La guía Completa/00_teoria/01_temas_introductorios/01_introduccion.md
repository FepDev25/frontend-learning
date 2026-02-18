# Introducción a CSS

## ¿Qué es CSS?

CSS (Cascading Style Sheets), u Hojas de Estilo en Cascada, es un lenguaje utilizado para describir la presentación de documentos HTML. Define cómo se deben mostrar los elementos en pantalla, en papel o en otros medios. Mientras HTML estructura el contenido, CSS lo estiliza visualmente.

CSS permite controlar aspectos como colores, fuentes, márgenes, alineación, tamaño, posición, animaciones y mucho más, de forma centralizada y reutilizable.

---

## Anatomía de una Regla CSS

Una regla en CSS tiene la siguiente forma:

```css
selector {
  propiedad: valor;
}
```

### Partes de la regla

* **Selector**: indica qué elemento(s) HTML será(n) afectado(s) por la regla.
* **Propiedad**: especifica qué aspecto del estilo se quiere cambiar (ej: color, tamaño, margen).
* **Valor**: indica el nuevo valor para la propiedad (ej: `blue`, `16px`, `center`).
* **Declaración**: combinación de propiedad y valor, separadas por dos puntos `:` y terminadas con punto y coma `;`.
* **Bloque de declaraciones**: está entre llaves `{}` e incluye una o más declaraciones.

### Ejemplo

```css
p {
  color: blue;
  font-size: 16px;
}
```

Este código aplica un color azul y un tamaño de fuente de 16 píxeles a todos los párrafos (`<p>`).

---

## Unidades de Medida en CSS

### 1. **px (píxeles)**

* Unidad absoluta.
* No escala según el entorno.
* Útil para interfaces precisas.
* Ejemplo: `font-size: 16px;`

### 2. **em**

* Unidad relativa al tamaño de fuente del **elemento padre**.
* 1em equivale al tamaño de fuente del padre.
* Ejemplo: Si el elemento padre tiene `font-size: 16px`, entonces `1.5em` = 24px.

### 3. **rem** (root em)

* Unidad relativa al tamaño de fuente del **elemento raíz** (`<html>`).
* Es más predecible que `em`, ya que no depende de la jerarquía.
* Ejemplo: Si `<html> { font-size: 16px; }`, entonces `2rem` = 32px.

---

## Propiedades Básicas de CSS

A continuación, algunas propiedades comunes para empezar a estilizar:

| Propiedad          | Descripción                               | Ejemplo                           |
| ------------------ | ----------------------------------------- | --------------------------------- |
| `color`            | Cambia el color del texto                 | `color: red;`                     |
| `background-color` | Cambia el color de fondo                  | `background-color: yellow;`       |
| `font-size`        | Cambia el tamaño del texto                | `font-size: 18px;`                |
| `font-family`      | Define la tipografía del texto            | `font-family: Arial, sans-serif;` |
| `text-align`       | Alinea el texto (izquierda, centro, etc.) | `text-align: center;`             |
| `margin`           | Establece el espacio externo              | `margin: 10px;`                   |
| `padding`          | Establece el espacio interno              | `padding: 20px;`                  |
| `border`           | Agrega borde al elemento                  | `border: 1px solid black;`        |
| `width` / `height` | Define dimensiones del elemento           | `width: 100px; height: 200px;`    |

---

## Conclusión

CSS es fundamental para el desarrollo web moderno, ya que permite separar el contenido de su presentación. Entender su sintaxis y unidades de medida es clave para construir interfaces atractivas, responsivas y mantenibles.
