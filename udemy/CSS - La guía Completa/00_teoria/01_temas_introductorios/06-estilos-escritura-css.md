# Estilos para Escribir CSS: Módulos, BEM y SMACSS

A medida que los proyectos crecen, mantener el CSS organizado y fácil de mantener se vuelve crucial. Existen varias **metodologías** que nos ayudan a escribir CSS más predecible, reutilizable y escalable.

---

## 1. CSS Modular

### Definición

CSS Modular es una práctica que consiste en **dividir el CSS en archivos pequeños**, cada uno enfocado en una parte específica de la aplicación (por ejemplo, header, footer, botones, etc.).

### Estructura común

```bash

/css/
+-- base.css
+-- layout.css
+-- components/
|   +-- header.css
|   +-- button.css
|   --- card.css

```

### Ventajas

- Organización lógica del código.
- Facilita la reutilización de estilos.
- Permite mantenimiento por componentes.

### Ejemplo

```css
/* components/button.css */
.button {
  padding: 0.75rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
}
```

Y en HTML:

```html
<button class="button">Enviar</button>
```

---

## 2. BEM (Block Element Modifier)

### Definición BEM

**BEM** (Bloque–Elemento–Modificador) es una metodología de nomenclatura CSS que mejora la claridad, la jerarquía y la escalabilidad del código.

### Convención de nombres

```css
.block {}
.block__element {}
.block--modifier {}
```

### Componentes

- **Bloque**: entidad independiente (ej. `.card`)
- **Elemento**: parte del bloque (ej. `.card__title`)
- **Modificador**: variante del bloque o elemento (ej. `.card--highlighted`)

### Ejemplo componentes

```css
.card {
  border: 1px solid #ccc;
  padding: 1rem;
}

.card__title {
  font-weight: bold;
}

.card--highlighted {
  background-color: #f9f9f9;
}
```

HTML correspondiente:

```html
<div class="card card--highlighted">
  <h2 class="card__title">Título destacado</h2>
</div>
```

### Ventajas BEM

- Evita colisiones de nombres.
- Claridad en la relación entre elementos.
- Facilita el trabajo en equipo.

---

## 3. SMACSS (Scalable and Modular Architecture for CSS)

### Definición SMACSS

**SMACSS** es una guía para categorizar reglas CSS en tipos específicos, ayudando a estructurar proyectos grandes.

### Categorías principales

1. **Base**: estilos por defecto para etiquetas (`body`, `a`, `h1`, etc.).
2. **Layout**: estructura general (`.container`, `.header`, `.sidebar`).
3. **Module**: componentes reutilizables (`.card`, `.form`, `.button`).
4. **State**: clases que indican un estado (`.is-active`, `.is-hidden`).
5. **Theme (opcional)**: estilos para cambiar apariencia general.

### Ejemplo SMACSS

```css
/* Base */
a {
  text-decoration: none;
}

/* Layout */
.l-header {
  background-color: #222;
}

/* Module */
.btn {
  background-color: blue;
  color: white;
}

/* State */
.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

Y en HTML:

```html
<header class="l-header">
  <button class="btn is-disabled">Enviar</button>
</header>
```

### Ventajas SMACSS

- Clasificación clara de estilos.
- Mayor previsibilidad.
- Escalabilidad para grandes proyectos.

---

## Conclusión

| Metodología | Ventajas clave                      |
| ----------- | ----------------------------------- |
| **Modular** | Separa en archivos por componente.  |
| **BEM**     | Nombres claros, evita conflictos.   |
| **SMACSS**  | Categoriza estilos según propósito. |

Utilizar cualquiera de estas metodologías (o combinarlas) mejora la legibilidad, mantenimiento y escalabilidad de tu CSS. Elegir la adecuada depende del tamaño del proyecto y del equipo de desarrollo.
