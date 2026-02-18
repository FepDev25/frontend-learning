# Selectores en CSS - Parte 1: Básicos, clases, IDs y combinaciones

En esta sección estudiaremos los selectores fundamentales en CSS, aplicados a ejemplos reales. Aprenderás a usar selectores por etiqueta, clase, múltiples clases, clases anidadas e identificadores únicos (`id`).

---

## 1. Selector de etiqueta

```css
p {
  font-size: 2rem;
  color: brown;
}
```

Este selector afecta **a todos los elementos `<p>` del documento**, sin importar su ubicación o clase.

* Cambia el tamaño del texto a `2rem` (20px si `html = 62.5%`).
* Aplica el color marrón a todos los párrafos.

---

## 2. Selector de clase

```css
.primer-parrafo {
  color: blue;
  font-size: 3rem;
}
```

* Aplica estilos **solo a los elementos que tengan la clase `primer-parrafo`**.
* Este selector permite reutilizar estilos sin afectar elementos no deseados.

### En el HTML

```html
<p class="primer-parrafo">Primer Texto</p>
```

---

## 3. Selector de múltiples clases

```css
.texto {
  background-color: aqua;
}

.azul {
  color: blue;
}

.mayusculas {
  text-transform: uppercase;
}

.texto.mayusculas {
  font-size: 7rem;
}

.texto.alineacion {
  text-align: right;
}
```

### Comportamiento

* Un elemento con varias clases puede combinar los estilos de cada una.
* `.texto.mayusculas` selecciona **solo** los elementos que tengan **ambas clases al mismo tiempo**.
* `.texto.alineacion` también requiere ambas clases.

### En el HTML selector de múltiples clases

```html
<p class="texto alineacion">...</p>
<p class="texto azul mayusculas">...</p>
```

---

## 4. Selector de clases anidadas

```css
.descripcion {
  color: blueviolet;
}

.header .descripcion {
  color: hotpink;
}
```

* `.descripcion` afecta todos los elementos con esa clase.
* `.header .descripcion` es **más específico**: afecta solo las descripciones **que estén dentro de un `.header`**.

### En el HTML selector de clases aninadas

```html
<header class="header">
  <div class="descripcion">Descripción sitio web</div> <!-- color hotpink -->
</header>

<div class="descripcion">Segunda Descripción</div> <!-- color blueviolet -->
```

---

## 5. Selector por ID

```css
#encabezado {
  text-transform: uppercase;
  text-align: center;
  color: red;
  background-color: black;
}
```

* El selector `#encabezado` selecciona **solo el elemento con `id="encabezado"`**.
* Es el selector **más específico** de los tres básicos (etiqueta < clase < ID).

> ⚠️ Solo debe haber **un elemento por página con el mismo `id`**.

---

## Reglas combinadas

```css
.texto {
  background-color: aqua;
}
```

* Este estilo se aplica a todos los elementos con la clase `.texto`, incluyendo aquellos que también tengan otras clases o incluso un `id`.

---

## Conclusión

En esta primera parte aprendimos a usar los selectores más esenciales:

* `etiqueta` → selecciona todos los elementos del mismo tipo.
* `.clase` → aplica a todos los elementos con esa clase.
* `#id` → aplica solo a un elemento único.
* Combinación de clases para aplicar estilos más específicos.
* Clases anidadas para controlar estilos según jerarquía.
