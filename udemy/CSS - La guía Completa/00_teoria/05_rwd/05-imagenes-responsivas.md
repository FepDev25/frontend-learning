# Responsive Web Design - Parte 5: Imágenes Responsivas y Formatos Modernos

Las imágenes son elementos clave en la experiencia web, pero también pueden ser un gran factor de peso y ralentización. Esta sección te enseña cómo hacerlas **responsivas, optimizadas y adaptables** a distintos dispositivos y conexiones.

---

## Imágenes Responsivas con CSS

```css
img {
  max-width: 100%;
  display: block;
}
```

* `max-width: 100%` hace que la imagen **nunca sobrepase el ancho de su contenedor**.
* `display: block` elimina el espacio indeseado que aparece con `display: inline` por defecto en imágenes.

### Resultado

La imagen se **escala automáticamente** al tamaño del contenedor, lo que la hace **responsiva y adaptable**.

---

## Imágenes con formatos modernos: AVIF y WebP

```html
<h2>Formatos Modernos</h2>

<img loading="lazy" src="img/imagen.avif" alt="imagen responsive"> 
<br>
<img loading="lazy" src="img/imagen.webp" alt="imagen responsive">
```

* `loading="lazy"` permite **cargar la imagen solo cuando aparece en pantalla**, mejorando el rendimiento.
* Formatos como **AVIF** y **WebP** tienen **mejor compresión** que JPEG o PNG.
* Se recomienda tener una imagen de respaldo (`.jpg`) para navegadores antiguos.

---

## `<picture>`: imagen adaptable según compatibilidad o tamaño

```html
<picture>
  <source srcset="img/imagen.avif" type="image/avif">
  <source srcset="img/imagen.webp" type="image/webp">
  <img loading="lazy" src="img/imagen.jpg" alt="imagen responsive">
</picture>
```

* `<source>` con `type` permite **priorizar formatos modernos** si el navegador los soporta.
* `<img>` al final es el **fallback** (por ejemplo, para Safari en versiones antiguas).
* El navegador elige automáticamente el mejor formato compatible.

---

## Snippet para insertar `<picture>` (VS Code)

```json
"imagenes" : {
  "prefix": "im", 
  "body" : [
    "<picture>",
    "  \t<source srcset=\"$1.avif\" type=\"image/avif\">",
    "  \t<source srcset=\"$2.webp\" type=\"image/webp\">",
    "  <img loading=\"lazy\" src=\"$3\" alt=\"$4\" width=\"500\" height=\"300\">",
    "</picture>"
  ]
}
```

### Uso

Al escribir `im` + `Tab`, se inserta automáticamente una estructura completa para imágenes modernas y accesibles.

---

## `srcset` y `sizes` para diferentes resoluciones

```html
<img 
  src="img/imagen-400.jpg"
  srcset="img/imagen-400.jpg 400w, img/imagen-800.jpg 800w, img/imagen-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  alt="Imagen responsive"
>
```

* `srcset`: lista de imágenes con distintos anchos (`w`).
* `sizes`: describe cuánto espacio ocupará la imagen en diferentes condiciones.
* El navegador **elige la mejor imagen automáticamente**, según el tamaño y resolución de pantalla.

---

## Conclusión

Al implementar imágenes responsivas:

✅ Mejoras el rendimiento del sitio
✅ Reduces el consumo de datos móviles
✅ Garantizas compatibilidad y accesibilidad
✅ Preparas tu sitio para el futuro web moderno

El uso de `max-width`, `<picture>`, `srcset`, y formatos como AVIF y WebP son ya **estándares profesionales** en el desarrollo web.
