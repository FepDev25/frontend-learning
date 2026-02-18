# Introducción a CSS Grid

## ¿Qué es CSS Grid?

**CSS Grid** es un sistema de diseño bidimensional que permite organizar elementos en **filas y columnas**. A diferencia de Flexbox (que se enfoca en un solo eje), Grid permite controlar **ambos ejes** al mismo tiempo, lo que lo convierte en una herramienta poderosa para construir layouts más complejos y estructurados.

---

## Flexbox vs Grid

| Característica       | Flexbox                       | CSS Grid                         |
|----------------------|-------------------------------|----------------------------------|
| Dirección            | Unidimensional (horizontal o vertical) | Bidimensional (horizontal y vertical) |
| Flujo de contenido   | Fluido, útil para contenido dinámico | Estructura fija o dinámica en filas y columnas |
| Ejemplo típico       | Menús, tarjetas en fila       | Galerías, layouts de secciones  |

---

## Conceptos básicos de Grid

| Término              | Descripción |
|----------------------|-------------|
| **Grid**             | El contenedor que define una cuadrícula |
| **Grid Cell**        | Cada celda individual dentro de la cuadrícula |
| **Grid Track**       | Una fila o columna completa |
| **Grid Line**        | Las líneas que dividen las filas y columnas |
| **Grid Area**        | Un espacio rectangular formado por una o más celdas |

---

## Propiedades principales

### 1. `display: grid`

Activa el sistema de cuadrícula en un contenedor:

```css
.listado-categorias {
  display: grid;
}
```

### 2. `grid-template-columns` y `grid-template-rows`

Definen la estructura de la cuadrícula:

```css
grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual ancho */
grid-template-rows: 200px auto;        /* dos filas: una fija y otra dinámica */
```

* `1fr` significa una fracción del espacio disponible.
* También se pueden usar `px`, `%`, `auto`, etc.

### 3. `gap`

Define el espacio entre filas y columnas.

```css
gap: 20px;
```

---

## Ejemplo completo

### HTML:

```html
<section class="contenedor">
  <h2>Categorías de productos</h2>

  <div class="listado-categorias">
    <div>
      <img src="images/categoria1.jpg" alt="Oficina"> 
      <a href="#">Oficina</a>    
    </div>

    <div>
      <img src="images/categoria2.jpg" alt="Hogar">  
      <a href="#">Hogar</a>   
    </div>

    <div>
      <img src="images/categoria3.jpg" alt="Cocina">    
      <a href="#">Cocina</a> 
    </div>
  </div>
</section>
```

### CSS:

```css
.listado-categorias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

> Se generan 3 columnas iguales con 20px de separación entre cada ítem.

---

## Áreas con `grid-template-areas`

Permite asignar nombres a zonas de la cuadrícula para mayor claridad:

```css
.grid-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}
```

Luego puedes asignar las áreas a los elementos:

```css
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

---

## Conclusión

CSS Grid es ideal para construir **layouts estructurados y responsivos**. A través de propiedades como `grid-template-columns`, `gap` y `grid-template-areas`, permite tener control total sobre filas y columnas, facilitando la creación de interfaces limpias y organizadas.
