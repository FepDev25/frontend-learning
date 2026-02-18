# Selectores en CSS - Parte 2: Combinados, jerárquicos y por atributo

En esta segunda parte exploramos selectores que combinan etiquetas y clases, múltiples tipos, relaciones jerárquicas entre elementos y selectores que actúan sobre atributos específicos de HTML.

---

## 6. Selector de etiqueta y clase

```css
div.texto {
  color: lightcoral;
}

texto {
  color: black;
}
```

* `div.texto` aplica estilos **solo a elementos `<div>` que tengan la clase `.texto`**.
* Es más específico que solo `.texto`.
* El segundo selector `texto` parece ser un error tipográfico si no es un elemento personalizado (no estándar en HTML).

### En el HTML

```html
<div class="texto">
  Oferta Especial!
</div>
```

> Este `div` se verá con texto color **lightcoral**.

---

## 7. Selector de múltiples elementos

```css
.oferta, .texto {
  border: 1px solid black;
}
```

* Aplica un **borde negro** a cualquier elemento que tenga la clase `.oferta` **o** `.texto`.
* Se pueden agrupar tantos selectores como se desee con comas `,`.

### En el HTML selector de etiqueta y clase

```html
<p class="texto">...</p>
<div class="oferta">Oferta Especial!</div>
```

---

## 8. Selector de primer nivel de hijos

```css
.admin > div {
  border: 2px solid red;
}
```

* El símbolo `>` selecciona **solo los hijos directos** del elemento `.admin`.
* No selecciona nietos, bisnietos, etc.

### En el HTML selector de primer nivel de hijos

```html
<div class="admin">
  <div> <!-- 🟥 borde rojo aplicado -->
    <p>...</p>
  </div>
</div>
```

---

## 9. Primer elemento siguiente (hermano adyacente)

```css
.admin div + p {
  background-color: lightgreen;
}
```

* El selector `A + B` selecciona el **primer elemento `B` que aparece justo después de `A` como su hermano**.
* Aquí, selecciona el primer `<p>` **que sigue inmediatamente a un `<div>` dentro de `.admin`**.

### En el HTML primer elemento siguiente

```html
<div class="admin">
  <div>...</div>
  <p>Has iniciado sesión como: Admin</p> <!-- ✅ Aplicado -->
</div>
```

---

## 10. Selector por atributo

```css
a[href$=".com"] {
  color: cadetblue;
}

input[type="tel"] {
  background-color: lightyellow;
}
```

* `[href$=".com"]`: selecciona todos los enlaces cuyo atributo `href` **termina con `.com`** (`$=` significa “termina en”).
* `[type="tel"]`: selecciona todos los `<input>` donde `type` es exactamente `"tel"`.

### En el HTML selectores por atributos

```html
<a href="http://www.google.com">Google</a> <!-- ✅ cadetblue -->
<a href="tienda.html">Tienda</a>           <!-- ❌ no aplica -->

<input type="tel" id="telefono" value="1212" /> <!-- ✅ fondo amarillo -->
```

---

## Conclusión

Estos selectores permiten **refinar el alcance de los estilos** y aplicarlos de manera precisa según:

* Tipo de etiqueta y clase combinados.
* Múltiples elementos al mismo tiempo.
* Relación padre → hijo directo.
* Hermanos inmediatos.
* Condiciones sobre atributos HTML.
