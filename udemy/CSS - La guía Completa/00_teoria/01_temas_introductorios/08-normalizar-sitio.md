# Normalizar un sitio con `normalize.css`

## ¿Qué significa normalizar?

En desarrollo web, **normalizar** se refiere a **corregir las inconsistencias en los estilos predeterminados** de los navegadores. Cada navegador aplica un conjunto distinto de estilos por defecto a los elementos HTML, lo que puede causar resultados visuales impredecibles si no se manejan correctamente.

---

## ¿Qué es `normalize.css`?

[`normalize.css`](https://necolas.github.io/normalize.css/) es una pequeña hoja de estilos CSS creada por **Nicolas Gallagher** que:

- Hace que los elementos HTML rendericen de forma **más consistente** entre navegadores.
- **Preserva los estilos útiles por defecto** (a diferencia de `reset.css`, que los elimina por completo).
- Mejora la **usabilidad** y la **accesibilidad** en algunos navegadores.
- Es ampliamente usado en proyectos profesionales.

---

## ¿Por qué es importante usarlo?

**Ventajas de usar `normalize.css`:**

- Asegura que elementos como encabezados, formularios, listas y tablas luzcan igual en todos los navegadores modernos.
- Reduce problemas de compatibilidad entre navegadores.
- Sirve como base limpia para aplicar tus propios estilos.
- Aumenta la productividad al evitar tener que corregir estilos predeterminados a mano.

---

## ¿Cómo usar `normalize.css`?

1. Visita el sitio oficial:  
  <https://necolas.github.io/normalize.css/>

2. Descarga el archivo `normalize.css`.

3. Agrégalo al proyecto, por ejemplo en la carpeta `css/`:

4. Enlaza primero `normalize.css` en tu HTML antes de tu hoja de estilos principal:

```bash

/css/
+-- normalize.css
+-- app.css
index.html


```html
<head>
  <meta charset="UTF-8">
  <title>Mi sitio</title>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/app.css">
</head>
```

**Nota:** El orden importa: primero normalizas, luego personalizas.

---

## Diferencia entre `normalize.css` y `reset.css`

| Característica                     | normalize.css | reset.css     |
| ---------------------------------- | ------------- | ------------- |
| Conserva estilos útiles            | Sí          | No          |
| Elimina todo padding/margin        | No          | Sí          |
| Diseñado para navegadores modernos | Sí          | Sí          |
| Uso recomendado hoy en día         | Muy usado   | Menos común |

---

## Conclusión

Usar `normalize.css` es una práctica profesional que ayuda a comenzar tu CSS desde una base coherente entre navegadores. Te ahorra tiempo, evita errores visuales y mejora la calidad del diseño.
