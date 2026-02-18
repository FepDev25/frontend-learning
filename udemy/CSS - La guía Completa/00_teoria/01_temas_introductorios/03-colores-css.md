# Colores en CSS

CSS ofrece varias formas de aplicar colores a elementos, ya sea para texto, fondos, bordes y más. Comprender los diferentes métodos para declarar colores es esencial para crear interfaces visualmente atractivas y accesibles.

---

## 1. Colores por nombre

CSS permite usar nombres predefinidos para muchos colores estándar.

### Ejemplo colores por nombre

```css
h1 {
  font-size: 20px;
  color: black;
}
```

Hay más de 140 nombres reconocidos, como `red`, `blue`, `green`, `white`, `gray`, `orange`, `purple`, entre otros.

---

## 2. Colores Hexadecimales

Usan el sistema de numeración base 16 para representar valores RGB. Comienzan con `#` seguido de 3 o 6 caracteres.

### Sintaxis

* `#000` → negro
* `#ffffff` → blanco
* `#ff0000` → rojo

### Ejemplo colores hexadecimales

```css
h2 {
  color: #000;
}
```

Cada par representa:

* Primer par (`ff`) → rojo
* Segundo par (`00`) → verde
* Tercer par (`00`) → azul

---

## 3. RGB (Red, Green, Blue)

Permite definir un color indicando los niveles de rojo, verde y azul, con valores entre `0` y `255`.

### Ejemplo RGB

```css
p {
  color: rgb(0, 0, 0); /* Negro */
}
```

```css
p {
  color: rgb(255, 0, 0); /* Rojo puro */
}
```

---

## 4. RGBA (Red, Green, Blue, Alpha)

Es igual que `rgb()`, pero con un canal alfa adicional que define la opacidad.

* El valor del **alpha** va de `0` (totalmente transparente) a `1` (completamente opaco).

### Ejemplo RGBA

```css
a {
  color: rgba(0, 0, 0, 0.4); /* Negro con 40% de opacidad */
}
```

---

## 5. HSL (Hue, Saturation, Lightness)

Permite definir colores en función del tono, saturación y luminosidad.

### Sintaxis HSL

```css
selector {
  color: hsl(0, 100%, 50%);
}
```

* **Hue (tono)**: grado del color en el círculo cromático (0°–360°).
  Ej: 0° = rojo, 120° = verde, 240° = azul.
* **Saturation**: cuán puro o grisáceo es el color (`0%` es gris, `100%` es totalmente saturado).
* **Lightness**: cuán claro u oscuro es el color (`0%` es negro, `100%` es blanco).

### Ejemplo

```css
p {
  color: hsl(0, 0%, 0%); /* Negro */
}
```

---

## Comparación entre formatos

| Formato     | Ventajas                          | Ejemplo                           |
| ----------- | --------------------------------- | --------------------------------- |
| Nombre      | Fácil de recordar y usar          | `color: blue;`                    |
| Hexadecimal | Breve, ampliamente soportado      | `color: #3498db;`                 |
| RGB         | Intuitivo en valores numéricos    | `color: rgb(52, 152, 219);`       |
| RGBA        | Soporta transparencia             | `color: rgba(52, 152, 219, 0.5);` |
| HSL         | Fácil para ajustar tonos y brillo | `color: hsl(204, 70%, 53%);`      |

---

## Conclusión

Usar distintos formatos de color en CSS te da flexibilidad y control sobre la apariencia de tu sitio. Conocer cada método te permitirá escoger el más adecuado según tus necesidades: opacidad con `rgba`, ajustes finos de tonos con `hsl`, o simplemente colores estándar por nombre.
