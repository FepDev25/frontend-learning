# Selectores en CSS (Parte 1 - Básicos)

Los **selectores** en CSS permiten apuntar a uno o más elementos HTML específicos para aplicarles estilos. Esta sección se centra en los selectores básicos, sin usar clases (`.clase`) ni identificadores (`#id`).

---

## 1. Selector de Tipo (Etiqueta)

Selecciona todos los elementos de un mismo tipo o etiqueta HTML.

### Ejemplo

```css
h1 {
  font-size: 20px;
  color: black;
}
```

Este selector aplica estilos a **todos los elementos `<h1>`** del documento.

---

## 2. Selector Descendente

Selecciona elementos que están **dentro de otro elemento**, sin importar cuán profundamente anidados estén.

### Ejemplo selector descendente

```css
nav a {
  text-transform: uppercase;
}
```

Este selector aplica mayúsculas a todos los **enlaces (`<a>`) que estén dentro de un `<nav>`**.

---

## 3. Pseudo-clase `:first-child`

Selecciona el **primer hijo** de un elemento padre.

### Ejemplo pseudo clase

```css
nav a:first-child {
  color: red;
}
```

Este selector aplica el color rojo al **primer `<a>` hijo directo** dentro del `<nav>`.

---

## 4. Pseudo-clase `:last-of-type`

Selecciona el **último hijo de un tipo específico** dentro de un contenedor.

### Ejemplo pseudo clase 2

```css
nav a:last-of-type {
  color: green;
}
```

Este selector aplica el color verde al **último `<a>`** dentro de un `<nav>`, ignorando si hay otros elementos hijos como `<p>` o `<div>`.

---

## 5. Pseudo-clase `:nth-child(n)`

Selecciona el **n-ésimo hijo** (basado en el orden), sin importar el tipo de etiqueta.

### Ejemplo pseudo clase 3

```css
nav a:nth-child(3) {
  color: blue;
}
```

Este aplica el color azul al **tercer hijo del `<nav>`**, siempre y cuando ese tercer hijo sea un `<a>`. Si el tercer hijo es otro tipo de elemento (por ejemplo, un `<span>`), este selector no se aplicará al `<a>` aunque sea el tercer `<a>`.

> **Nota:** Para seleccionar el tercer **`<a>`** independientemente de su orden como hijo, se recomienda más adelante usar `:nth-of-type(3)`.

---

## Conclusión

Los selectores básicos permiten aplicar estilos a elementos HTML según su tipo o posición en el DOM. Dominar estos selectores es fundamental para construir hojas de estilo eficientes sin depender aún de clases o IDs.

En el próximo módulo, profundizaremos en **clases, identificadores y selectores combinados** para un mayor control y reutilización de estilos.
