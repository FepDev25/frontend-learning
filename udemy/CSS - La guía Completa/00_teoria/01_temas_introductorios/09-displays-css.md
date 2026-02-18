# El uso de `display` en CSS

## ¿Qué es `display`?

La propiedad `display` en CSS determina **cómo se comporta un elemento en el flujo del documento** y cómo se muestra visualmente en la página. Es una de las propiedades más importantes para el diseño y posicionamiento.

---

## Displays por defecto

Cada etiqueta HTML tiene un valor de `display` predeterminado asignado por el navegador.

| Elemento HTML        | `display` por defecto |
|----------------------|-----------------------|
| `<div>`, `<p>`, `<h1>`... | `block`             |
| `<span>`, `<a>`, `<strong>` | `inline`         |
| `<img>`              | `inline-block`        |

Estos valores pueden modificarse explícitamente con CSS.

---

## 1. `display: block`

- Ocupa **todo el ancho disponible**.
- **Empuja** el siguiente elemento hacia abajo.
- Se puede aplicar `width`, `height`, `margin`, `padding`.

### Ejemplo:

```css
div {
  display: block;
}
```

```html
<div>Elemento 1</div>
<div>Elemento 2</div>
```

> Ambos estarán en líneas separadas.

---

## 2. `display: inline`

* Ocupa solo el **ancho del contenido**.
* No inicia una nueva línea.
* **No acepta** `width` ni `height` (sí `padding` lateral).

### Ejemplo:

```css
span {
  display: inline;
}
```

```html
<span>Hola</span><span>Mundo</span>
```

> Los elementos estarán uno junto al otro.

---

## 3. `display: inline-block`

* Combina características de `inline` y `block`.
* Se muestra en línea como `inline`, pero **permite** usar `width`, `height`, `padding`, `margin`.

### Ejemplo:

```css
button {
  display: inline-block;
  width: 150px;
  height: 40px;
}
```

```html
<button>Enviar</button>
```

> Se comporta como botón alineado con otros elementos, pero con control de tamaño.

---

## 4. `display: none`

* Elimina el elemento del flujo del documento.
* No ocupa espacio y no se renderiza visualmente.

### Ejemplo:

```css
.oculto {
  display: none;
}
```

```html
<p class="oculto">Este párrafo no se verá</p>
```

---

## 5. ¿Y qué pasa con `flex` y `grid`?

Los valores `display: flex` y `display: grid` son fundamentales para el diseño moderno, pero **se explicarán en profundidad en módulos específicos más adelante**, ya que requieren su propio conjunto de propiedades (`justify-content`, `align-items`, `grid-template-columns`, etc.).

---

## Conclusión

Controlar el tipo de `display` es fundamental para definir cómo se comportan los elementos entre sí. Entender las diferencias entre `block`, `inline` e `inline-block` te permitirá organizar correctamente los componentes antes de aplicar layouts más avanzados como `flex` o `grid`.
