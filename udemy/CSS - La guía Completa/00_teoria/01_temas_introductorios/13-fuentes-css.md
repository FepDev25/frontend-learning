# Fuentes en CSS

## ¿Qué es la tipografía en CSS?

La **tipografía** es un aspecto esencial del diseño web. CSS permite controlar completamente las fuentes utilizadas en un sitio web, mejorando la legibilidad y la estética del contenido.

---

## Propiedades para modificar fuentes

| Propiedad           | Descripción                                       |
|---------------------|---------------------------------------------------|
| `font-family`       | Define la familia tipográfica a usar              |
| `font-size`         | Tamaño de la fuente                               |
| `font-weight`       | Grosor del texto (`normal`, `bold`, `100–900`)   |
| `font-style`        | Estilo del texto (`normal`, `italic`, `oblique`) |
| `line-height`       | Altura de línea (espaciado vertical)             |
| `letter-spacing`    | Espacio entre letras                              |
| `text-transform`    | Mayúsculas/minúsculas (`uppercase`, etc.)        |
| `text-align`        | Alineación del texto (`left`, `center`, etc.)    |

---

## Uso básico con `font-family`

```css
body {
  font-family: 'Raleway', sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
```

* Es recomendable definir una **fuente secundaria** (fallback) como `sans-serif` o `serif`.
* `sans-serif` = sin adornos.
* `serif` = con detalles decorativos en los extremos.

---

## Agregar fuentes externas con Google Fonts

### 1. Ir a [Google Fonts](https://fonts.google.com/)

* Buscar las fuentes deseadas (por ejemplo: Raleway, Playfair Display).
* Seleccionar los estilos (grosor, itálica, etc.).
* Copiar el `<link>` generado por Google Fonts.

### 2. Insertar en el `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
```

### 3. Aplicar en CSS

```css
body {
  font-family: 'Raleway', sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
```

---

## Añadir fuentes personalizadas con `@font-face`

Si tienes una fuente descargada localmente (`.ttf`, `.woff`, `.woff2`), puedes integrarla así:

```css
@font-face {
  font-family: 'MiFuentePersonal';
  src: url('../fonts/mifuente.woff2') format('woff2'),
       url('../fonts/mifuente.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.titulo {
  font-family: 'MiFuentePersonal', sans-serif;
}
```

> **Nota:** Asegúrate de que la fuente esté en la carpeta correcta del proyecto.

---

## Ejemplo completo en HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/app.css">

  <title>Aprendiendo HTML</title>
</head>
```

---

## Conclusión

El uso adecuado de fuentes mejora notablemente la experiencia del usuario. CSS permite personalizar la tipografía con propiedades detalladas, importar fuentes externas como las de Google Fonts o usar tus propias fuentes con `@font-face`. Siempre recuerda combinar funcionalidad, rendimiento y estilo.
