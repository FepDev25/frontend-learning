# Selectores en CSS - Parte 3: Avanzados, específicos y pseudo-elementos

En esta parte final exploramos selectores que permiten apuntar a elementos según su posición, excluir elementos específicos, o aplicar estilo a fragmentos de texto dentro de un elemento.

---

## 11. Primer hijo de una lista

```css
ul li:first-child {
  background-color: lightskyblue;
}

ul li:first-of-type {
  background-color: lightskyblue;
}
```

* `:first-child`: selecciona el primer hijo de su padre si es un `<li>`.
* `:first-of-type`: selecciona el primer `<li>` dentro de su padre, sin importar si hay otros tipos de elementos antes.

### En el HTML primer hijo de una lista

```html
<ul>
  <li>Compra 1</li> <!-- ✅ se aplica -->
  ...
</ul>
```

---

## 12. Último hijo de una lista

```css
ul li:last-child {
  background-color: chartreuse;
}

ul li:last-of-type {
  background-color: chartreuse;
}
```

* `:last-child`: selecciona el último hijo si es un `<li>`.
* `:last-of-type`: selecciona el último `<li>` sin importar otros elementos finales.

---

## 13. Seleccionar elementos específicos

```css
#especifico li:nth-child(even) {
  background-color: lightgreen;
}

#especifico li:nth-child(2n+1) {
  background-color: lightcoral;
}

#especifico li:nth-child(10) {
  background-color: red;
}
```

* `nth-child(even)` → selecciona los hijos en posiciones pares (2, 4, 6...).
* `nth-child(2n+1)` → selecciona impares (1, 3, 5...).
* `nth-child(10)` → selecciona solo el elemento número 10.

> Recuerda: la numeración de `nth-child()` es **absoluta**, no por tipo.

---

## 14. Seleccionar todos los elementos excepto algunos

```css
.elementos p:not(.texto) {
  background-color: bisque;
}

.elementos p:not(.oferta):not(.descripcion) {
  text-transform: uppercase;
}
```

* `:not()` excluye selectores específicos.
* Puedes **encadenar varios `:not()`** para excluir múltiples clases.

### En el HTML seleccionar todos los elementos excepto algunos

```html
<p class="texto">Texto 1</p>        <!-- ❌ excluido -->
<p class="heading">Texto 2</p>      <!-- ✅ bisque + uppercase -->
<p class="descripcion">Texto 3</p>  <!-- ✅ bisque, ❌ uppercase -->
<p class="oferta">Texto 4</p>       <!-- ✅ bisque, ❌ uppercase -->
```

---

## 15. Primera letra y línea

```css
.primer-letra::first-letter {
  font-size: 2em;
  color: red;
}

.primer-linea::first-line {
  font-weight: bold;
  color: blue;
}
```

* `::first-letter`: selecciona la **primera letra** del párrafo o bloque.
* `::first-line`: selecciona la **primera línea visible** del párrafo (según ancho disponible).

> Estos selectores son útiles en estilos tipográficos como los de periódicos o blogs.

---

## Conclusión

Con estos selectores avanzados, ahora puedes:

* Estilizar elementos según su **posición relativa o tipo**.
* Aplicar reglas específicas a **ítems individuales o patrones (pares/impares)**.
* **Excluir elementos** según clases o atributos.
* Controlar **fracciones internas** del contenido textual como letras o líneas.
