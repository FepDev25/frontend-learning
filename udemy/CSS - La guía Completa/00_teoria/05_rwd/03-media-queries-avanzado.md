# Responsive Web Design - Parte 3: Media Queries avanzadas y contenedores responsivos

En esta parte exploramos el uso de Media Queries entre rangos de tamaño, estándares de puntos de corte (breakpoints), y estrategias para crear **contenedores responsivos**.

---

## Media Query entre dos tamaños

```css
.oferta {
  background-color: #00446e;
  padding: 2rem;
  text-align: center;
}

.precio {
  font-size: 6rem;
  margin: 0;   
}

@media (min-width: 600px) and (max-width: 800px) {
  .oferta {
    background-color: yellowgreen;
  }
}
```

* Esta Media Query se activa **solo si el ancho está entre 600px y 800px**.
* Se pueden encadenar múltiples condiciones con `and`, `or`, `not`.

---

## Snippet para Media Query (VS Code u otros editores)

Puedes automatizar la escritura de media queries con este snippet:

```json
"media query": {
  "prefix": "mq",
  "body": [
    "@media ( min-width: ${1:width}px ) {",
    "  $0",
    "}"
  ],
  "description": "Media query for responsive design"
}
```

* Al escribir `mq` + `Tab`, se expande el bloque base de una media query.
* Acelera el trabajo en proyectos grandes.

---

## Tamaños estándar para Media Queries

Es común utilizar puntos de corte **basados en los dispositivos más utilizados**. A continuación, algunos ejemplos:

```css
@media (min-width: 550px) {
  /* Móvil (horizontal) */
}

@media (min-width: 768px) {
  /* Tablet vertical */
}

@media (min-width: 1024px) {
  /* Laptop / Tablet en horizontal */
}

@media (min-width: 1200px) {
  /* Escritorio mediano */
}

@media (min-width: 1600px) {
  /* Monitor grande / 4K */
}
```

> ⚠️ Los valores pueden adaptarse a tu audiencia y proyecto, no son obligatorios.

---

## Contenedor responsivo

```css
.contenedor-responsive {
  background-color: #fff;

  /* Opción 1 */
  width: 90%;
  max-width: 1000px;

  /* Opción 2 (más moderna) */
  width: min(90%, 1000px);

  height: 400px;
  margin: 0 auto;
}
```

### Explicación

* `width: 90%` hace que el contenedor ocupe la mayor parte del ancho disponible.
* `max-width: 1000px` evita que se expanda demasiado en pantallas grandes.
* `min(90%, 1000px)` aplica **el valor más pequeño entre ambos**, haciendo lo mismo en una sola línea.

Este patrón es ideal para **centrar contenido**, mantenerlo legible y adaptado en múltiples dispositivos.

---

## Conclusión

En este módulo aprendiste:

* Cómo aplicar estilos entre rangos específicos de tamaño con `min-width` y `max-width`.
* Snippets para acelerar tu flujo de trabajo con Media Queries.
* Tamaños estándar para guiarte en tus puntos de ruptura.
* Cómo definir contenedores que se adaptan fluidamente a diferentes resoluciones.
