# Especificidad en CSS

## ¿Qué es la especificidad?

La **especificidad** en CSS es el conjunto de reglas que determinan **qué estilo se aplica cuando varios selectores coinciden con un mismo elemento**. Cuando hay conflicto entre estilos, el navegador aplica el más específico.

---

## Regla general

CSS evalúa qué selector es más **específico** con una puntuación, basada en los tipos de selectores utilizados:

| Tipo de selector     | Puntos de especificidad |
|----------------------|-------------------------|
| Selectores de ID     | 100                     |
| Selectores de clase  | 10                      |
| Selectores de tipo   | 1                       |

> El estilo con la puntuación más alta **gana** y se aplica.

---

## Introducción a clases e IDs

### Clases (`.clase`)

- Se usan para aplicar estilos a **varios elementos**.
- Se escriben con un punto (`.`) seguido del nombre.

```css
.navegacion a {
  color: red;
}
```

### IDs (`#id`)

- Se usan para identificar **un solo elemento único**.
- Se escriben con un `#` seguido del nombre.

```css
#navegacion a {
  color: green;
}
```

---

## Comparación de especificidad

Analicemos los siguientes selectores:

```css
#navegacion a {
  color: green;
}

.navegacion a {
  color: red;
}

nav a {
  color: blue;
}
```

Supongamos que tenemos el siguiente HTML:

```html
<nav id="navegacion" class="navegacion">
  <a href="#">Inicio</a>
</nav>
```

### Especificidad de cada regla

| Selector        | ID | Clase | Elemento | Total |
| --------------- | -- | ----- | -------- | ----- |
| `#navegacion a` | 1  | 0     | 1        | 101   |
| `.navegacion a` | 0  | 1     | 1        | 11    |
| `nav a`         | 0  | 0     | 2        | 2     |

**Resultado final:**
El navegador aplicará `color: green` al enlace porque `#navegacion a` tiene **la especificidad más alta (101)**.

---

## Consejos útiles

- **Evita el uso excesivo de `!important`**. Solo debe usarse como último recurso, ya que fuerza la aplicación de un estilo sin respetar la especificidad.
- **Prefiere clases sobre IDs** en la mayoría de los casos, ya que son más reutilizables y fáciles de mantener.
- **El orden en el archivo importa** solo cuando la especificidad es igual. En ese caso, gana la **última regla escrita**.

---

## Conclusión

Comprender la especificidad te permite controlar con precisión qué estilos se aplican. Usar correctamente IDs y clases mejora la organización y mantenibilidad de tus estilos.
