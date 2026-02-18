# Introducción a Flexbox

## ¿Qué es Flexbox?

**Flexbox** (Flexible Box Layout) es un modelo de diseño unidimensional en CSS que permite distribuir y alinear fácilmente los elementos dentro de un contenedor. Su principal ventaja es que se adapta al tamaño del contenido y del contenedor, facilitando la creación de layouts responsivos y flexibles.

---

## ¿Cómo se activa Flexbox?

Para usar Flexbox, debes establecer la propiedad `display: flex` en un **contenedor padre**. Los elementos hijos se vuelven automáticamente elementos "flexibles".

```css
.contenedor {
  display: flex;
}
```

---

## Ejes en Flexbox

Flexbox trabaja en torno a dos ejes:

* **Eje principal (main axis):** el eje sobre el cual se distribuyen los elementos hijos.

  * Por defecto es **horizontal** (`row`).
* **Eje cruzado (cross axis):** perpendicular al eje principal.

Puedes cambiar el eje principal con la propiedad `flex-direction`.

---

## `flex-direction`

Controla la dirección del eje principal:

| Valor            | Descripción                                |
| ---------------- | ------------------------------------------ |
| `row`            | (por defecto) Elementos en fila horizontal |
| `row-reverse`    | Como `row`, pero en orden inverso          |
| `column`         | Elementos en columna vertical              |
| `column-reverse` | Como `column`, pero en orden inverso       |

### Ejemplo:

```css
.contenedor {
  display: flex;
  flex-direction: row;
}
```

---

## `justify-content`

Controla la **alineación horizontal** (a lo largo del eje principal):

| Valor           | Descripción                              |
| --------------- | ---------------------------------------- |
| `flex-start`    | Elementos alineados al inicio            |
| `flex-end`      | Elementos alineados al final             |
| `center`        | Elementos centrados                      |
| `space-between` | Espaciados con margen entre ellos        |
| `space-around`  | Espacio igual alrededor de cada elemento |
| `space-evenly`  | Espacio igual entre, antes y después     |

---

## `align-items`

Controla la **alineación vertical** (a lo largo del eje cruzado):

| Valor        | Descripción                          |
| ------------ | ------------------------------------ |
| `stretch`    | (por defecto) Estira los elementos   |
| `flex-start` | Alinea al inicio del eje cruzado     |
| `flex-end`   | Alinea al final del eje cruzado      |
| `center`     | Centra verticalmente                 |
| `baseline`   | Alinea según la línea base del texto |

---

## Ejemplo completo

### HTML:

```html
<div class="contenedor-navegacion">
  <nav class="nav-principal contenedor">
    <a href="./index.html">Inicio</a>
    <a href="./nosotros.html">Nosotros</a>
    <a href="./tienda.html">Tienda</a>
    <a href="./blog.html">Blog</a>
    <a href="./galeria.html">Galería</a>  
    <a href="./contacto.html">Contacto</a>
  </nav>
</div>
```

### CSS:

```css
.nav-principal {
  padding: 20px 0 30px 0;
  display: flex;
  justify-content: space-between;
}
```

### ¿Qué ocurre aquí?

* `.nav-principal` se convierte en un contenedor flex.
* Sus hijos (`<a>`) se colocan **horizontalmente** (`row` es por defecto).
* `justify-content: space-between` distribuye los enlaces dejando espacio **igual entre ellos**, y pegando el primero al inicio y el último al final del contenedor.
* Si no se define `align-items`, se usa `stretch` por defecto (los enlaces se estiran en altura si hay espacio disponible).

---

## Conclusión

Flexbox es una herramienta poderosa y flexible para diseñar interfaces modernas sin depender de floats ni posicionamientos complicados. Dominar `flex-direction`, `justify-content` y `align-items` es el primer paso para crear layouts alineados y distribuidos profesionalmente.
