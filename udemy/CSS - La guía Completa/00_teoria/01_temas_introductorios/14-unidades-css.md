# Unidades en CSS

## ¿Qué son las unidades en CSS?

Las **unidades de medida** en CSS permiten definir dimensiones como anchos, altos, tamaños de fuente, márgenes, paddings, etc. Se dividen en dos tipos principales: **absolutas** y **relativas**.

---

## Unidades Absolutas

Tienen un tamaño fijo sin importar el contexto o el tamaño del dispositivo.

| Unidad | Equivalente      | Uso común             |
|--------|------------------|------------------------|
| `px`   | Píxeles           | Interfaces web, precisión |
| `cm`   | Centímetros       | Impresión              |
| `mm`   | Milímetros        | Impresión              |
| `in`   | Pulgadas          | Impresión              |
| `pt`   | Puntos (1/72 in)  | Tipografía impresa     |

> **Nota:** `px` es la más usada en web dentro de las absolutas, pero no escala bien en pantallas o zoom.

---

## Unidades Relativas

Se adaptan al entorno y al tamaño de otros elementos, facilitando el diseño **responsivo**.

| Unidad  | Relativa a...                              |
|---------|---------------------------------------------|
| `%`     | Tamaño del elemento padre                  |
| `em`    | Tamaño de fuente del **elemento padre**    |
| `rem`   | Tamaño de fuente del **elemento raíz (`<html>`)** |
| `vw`    | 1% del ancho del viewport                  |
| `vh`    | 1% del alto del viewport                   |

---

## Ventajas de las unidades relativas

- Permiten diseños **escalables y accesibles**  
- Se adaptan a diferentes pantallas y dispositivos  
- Respetan configuraciones de accesibilidad del navegador  
- Son ideales para **tipografía, paddings y gaps**

---

## Uso de `rem` y el truco de `62.5%`

Por defecto, el tamaño de fuente del navegador es `16px`.  
Si se establece `font-size: 62.5%` en el elemento `<html>`, esto equivale a:

```css
html {
  font-size: 62.5%; /* 62.5% de 16px = 10px */
}
```

Así, `1rem = 10px`, lo que **facilita el cálculo mental** al usar `rem`.

---

## Ejemplo aplicado

### HTML

```html
<section class="listado-categorias">
  <div class="categoria">
    <a href="#">Oficina</a>
  </div>
  <div class="categoria">
    <a href="#">Hogar</a>
  </div>
  <div class="categoria">
    <a href="#">Cocina</a>
  </div>
</section>
```

### CSS

```css
html {
  font-size: 62.5%; /* 1rem = 10px */
}

.listado-categorias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* 20px */
}

.categoria a {
  display: block;
  text-align: center;
  padding: 2rem;     /* 20px */
  font-size: 2rem;   /* 20px */
}
```

> Con esta configuración, todos los tamaños son intuitivos: `2rem = 20px`, `1.6rem = 16px`, etc.

---

## Conclusión

Elegir correctamente entre unidades **absolutas** y **relativas** es fundamental para crear diseños escalables, accesibles y responsivos. Usar `rem` junto con una base clara como `62.5%` en `<html>` mejora la consistencia y comprensión del tamaño de los elementos en CSS.
