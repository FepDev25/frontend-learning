# Importar un archivo CSS en HTML

Para mantener una estructura lim### Desventajas de usar `<style>` o `style=""`:ia y escalable en nuestros proyectos web, es común separar el CSS del archivo HTML. Esta separación se logra enlazando una hoja de estilo externa utilizando la etiqueta `<link>` dentro del `<head>` del documento HTML.

## Ejemplo

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/app.css">
  <title>Aprendiendo HTML</title>
</head>
```

### Descripción de cada línea

* `<meta charset="UTF-8">`: define la codificación de caracteres del documento.
* `<meta name="viewport"...>`: asegura que el diseño sea responsivo en dispositivos móviles.
* `<link rel="stylesheet"...>`: enlaza el archivo CSS externo.
* `<title>`: establece el título de la página en el navegador.

---

## Estructura de carpetas en el ejemplo

```bash
mi-proyecto/
|
+-- index.html
+-- css/
|   --- app.css
```

* `index.html`: archivo HTML principal ubicado en la raíz del proyecto.
* `css/`: carpeta que contiene los archivos de estilos.
* `app.css`: hoja de estilo externa vinculada al HTML.

El atributo `href="css/app.css"` indica que el navegador debe buscar el archivo `app.css` dentro de la carpeta `css`, que está al mismo nivel que el archivo HTML.

---

## ¿Por qué es mejor usar un archivo CSS externo?

### Ventajas

1. **Separación de responsabilidades (Separation of Concerns)**
   El HTML se encarga del contenido y estructura, mientras que el CSS define la presentación.

2. **Mantenibilidad**
   Es más fácil actualizar y modificar los estilos sin alterar el archivo HTML.

3. **Reutilización**
   La misma hoja de estilo puede ser usada en múltiples archivos HTML.

4. **Rendimiento**
   Los navegadores pueden almacenar en caché el archivo CSS, acelerando la carga de páginas.

5. **Escalabilidad**
   En proyectos grandes, mantener estilos externos permite una mejor organización del código.

---

## ¿Y qué pasa si escribo CSS dentro del HTML?

También es posible aplicar estilos directamente dentro de una etiqueta `<style>` en el `<head>` o incluso usando el atributo `style` en cada etiqueta HTML, pero esto tiene varias desventajas:

### Desventajas de usar `<style>` o `style=""`

* Dificulta la lectura y mantenimiento del código.
* Rompe la separación entre estructura y presentación.
* Aumenta la repetición de código.
* No permite la reutilización en múltiples páginas.

**Ejemplo menos recomendado:**

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```

---

## Conclusión

Importar un archivo CSS externo es una práctica recomendada en desarrollo web. Mejora la organización, facilita la colaboración en equipo y permite mantener proyectos más limpios y profesionales.
