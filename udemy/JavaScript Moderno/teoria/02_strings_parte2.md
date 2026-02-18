# Strings en JavaScript - Parte 2

En esta segunda parte exploramos más métodos útiles para manipular cadenas, como reemplazo, extracción, repetición y conversión de datos.

---

## 1. Métodos de Reemplazo

```javascript
const producto = "Monitor de 20 pulgadas";
console.log(producto);

console.log("Replace");
console.log(producto.replace('pulgadas', '"')); // Monitor de 20 "
console.log(producto.replace('Monitor', 'Monitor curvo')); // Monitor curvo de 20 pulgadas
```

* `.replace(valorAnterior, valorNuevo)`: reemplaza el primer valor encontrado por el nuevo.

---

## 2. Extracción de subcadenas

```javascript
console.log("Slice");
console.log(producto.slice(0, 13)); // Monitor de 20
console.log(producto.slice(10));    // de 20 pulgadas
console.log(producto.slice(6, 1));  // "" (no funciona bien si el primer número es mayor que el segundo)

console.log("Substring");
console.log(producto.substring(0, 13)); // Monitor de 20
console.log(producto.substring(6, 1));  // onito (corrige el orden automáticamente)

console.log(producto.charAt(0)); // M
```

* `.slice(inicio, fin)`: extrae desde `inicio` hasta `fin` (no lo incluye). Admite índices negativos.
* `.substring(inicio, fin)`: similar a `slice`, pero no acepta negativos y corrige si `inicio > fin`.
* `.charAt(posición)`: devuelve el carácter en la posición indicada.

---

## 3. Repetir Strings

```javascript
console.log("Repeat");
const texto = "Felipe";
console.log(texto.repeat(5)); // FelipeFelipeFelipeFelipeFelipe
```

* `.repeat(n)`: repite el string `n` veces.

---

## 4. Dividir Strings

```javascript
console.log("Split");
console.log(producto.split(" ")); 
// ["Monitor", "de", "20", "pulgadas"]
```

* `.split(separador)`: divide el string en un array según el separador.

---

## 5. Conversión entre tipos

```javascript
console.log(producto.toUpperCase()); // MONITOR DE 20 PULGADAS
console.log(producto.toLowerCase()); // monitor de 20 pulgadas

const number = 12;
console.log(number);           // 12 (tipo número)
console.log(number.toString()); // "12" (tipo string)
```

* `.toUpperCase()` y `.toLowerCase()` convierten la cadena a mayúsculas o minúsculas.
* `.toString()`: convierte cualquier tipo de dato (como números) a una cadena de texto.

---

## Conclusión

Con estos métodos adicionales puedes:

* Modificar partes de un string (`replace`, `slice`, `substring`)
* Obtener caracteres individuales (`charAt`)
* Repetir o dividir cadenas (`repeat`, `split`)
* Convertir entre tipos para una mejor manipulación o visualización

Estas herramientas son esenciales para el trabajo diario con datos textuales en JavaScript.
