# Responsive Web Design - Parte 4: Columnas Responsivas con Flexbox y Grid

En esta parte aprenderás a crear **columnas que se activan solo en pantallas más grandes**, utilizando Flexbox y CSS Grid. En pantallas pequeñas, el diseño permanece en una sola columna; a partir de cierto ancho, se reorganiza automáticamente en múltiples columnas.

---

## Columnas responsivas con **Flexbox**

```css
@media (min-width: 768px) {
  .tres-columnas-flex {
    display: flex;
    gap: 1rem;
  }

  .columna {
    flex-grow: 1;
  }
}
```

### ¿Cómo funciona?

* El contenedor `.tres-columnas-flex` se convierte en un `display: flex` a partir de los **768px de ancho** (típico tamaño de tablet).
* Se agrega un `gap` de 1rem entre las columnas.
* Cada `.columna` se expande equitativamente con `flex-grow: 1`, ocupando el espacio disponible.

### Ventajas

* Diseño fluido y adaptable.
* Buena opción para **tarjetas, secciones de servicios, contenidos uniformes**.

---

## Columnas responsivas con **CSS Grid**

```css
@media (min-width: 768px) {
  .tres-columnas-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
```

### ¿Cómo funciona? Columnas responsivas

* A partir de `768px`, el contenedor se convierte en una grilla con **3 columnas iguales** gracias a `repeat(3, 1fr)`.
* El `gap` de `1rem` separa las columnas.

### Ventajas Columnas responsivas

* Mayor control sobre filas, columnas y áreas específicas.
* Ideal para **galerías, layouts estructurados o contenido con proporciones distintas**.

---

## Comparación Flexbox vs Grid para columnas

| Característica      | Flexbox                         | CSS Grid                         |
| ------------------- | ------------------------------- | -------------------------------- |
| Dirección principal | Unidimensional (fila o columna) | Bidimensional (fila y columna)   |
| Reordenamiento      | Natural por flujo del contenido | Se puede posicionar libremente   |
| Uso ideal           | Elementos similares y dinámicos | Layouts estructurados y precisos |

---

## Comportamiento mobile-first

En ambos casos, al **no definir estilos fuera de la media query**, el contenido se muestra en una sola columna por defecto (modo móvil).
A medida que el ancho crece, se reorganiza en varias columnas.

Esto es una **implementación Mobile First**, donde se prioriza la experiencia en pantallas pequeñas y se mejora progresivamente.

---

## Conclusión

Crear columnas que se adapten al tamaño de pantalla es fundamental para el diseño moderno.
Con Flexbox y Grid, puedes lograrlo de forma limpia y eficiente usando Media Queries.
Elegir entre uno u otro dependerá de la **estructura** y **flexibilidad** que necesite tu contenido.
