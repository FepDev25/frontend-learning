# Strings en JavaScript - Parte 1

Las cadenas de texto (strings) son un tipo de dato fundamental en JavaScript. Se pueden crear de diferentes formas y tienen múltiples métodos útiles para manipular y analizar texto.

---

## 1. Declaración de Strings

```javascript
const producto = "Monitor de 20 pulgadas";
console.log(producto); // Monitor de 20 pulgadas

const producto2 = String('Monitor de 20 pulgadas');
console.log(producto2); // Monitor de 20 pulgadas

const producto3 = new String('Monitor de 32 pulgadas');
console.log(producto3); // [String: 'Monitor de 32 pulgadas']
```

* `""` y `''` son formas comunes de crear strings.
* `String()` convierte un valor a tipo cadena.
* `new String()` crea un objeto tipo string, lo cual **no se recomienda para uso general**.

---

## 2. Métodos básicos de los Strings

```javascript
console.log('Métodos de los String:');

const producto = "Monitor de 20 pulgadas";
console.log(producto); // Monitor de 20 pulgadas

console.log("Tamaño de la cadena: " + producto.length);          // 23
console.log("Index of pulgada: " + producto.indexOf("pulgada")); // 14
console.log("Incluye Monitor: " + producto.includes("Monitor")); // true
console.log("Uppercase: " + producto.toUpperCase());             // MONITOR DE 20 PULGADAS
console.log("Lowercase: " + producto.toLowerCase());             // monitor de 20 pulgadas
```

### Métodos destacados:

* `.length`: obtiene la longitud de la cadena.
* `.indexOf(subcadena)`: devuelve el índice donde comienza la subcadena (o -1 si no está).
* `.includes(subcadena)`: indica si la subcadena está presente (`true` o `false`).
* `.toUpperCase() / .toLowerCase()`: convierten la cadena a mayúsculas o minúsculas.

---

## 3. Concatenar Strings

```javascript
console.log('Concatenar String');

const producto = "Monitor de 20 pulgadas";
const precio = "20 USD";

console.log(producto.concat(" con un precio de ").concat(precio));         // Método concat
console.log(producto + " con un precio de " + precio);                    // Concatenación con +
console.log(producto , " con un precio de " , precio);                    // Separación con coma (no une cadenas)
console.log(`${producto} con un precio de ${precio} `);                   // Template literals
```

---

## 4. Eliminar espacios en Strings

```javascript
const producto = "                         Monitor de 20 pulgadas                        ";
console.log(producto + ` longitud : ${producto.length} `);

const trimStart = producto.trimStart();
console.log(trimStart + ` longitud : ${trimStart.length} `);

const trimEnd = producto.trimEnd();
console.log(trimEnd + ` longitud : ${trimEnd.length} `);

const trimAll = producto.trim();
console.log(trimAll + ` longitud : ${trimAll.length} `);
```

### Métodos de recorte:

* `.trimStart()`: elimina espacios del inicio.
* `.trimEnd()`: elimina espacios del final.
* `.trim()`: elimina espacios al inicio y al final.

---

## Conclusión

Los Strings en JavaScript ofrecen gran flexibilidad para manejar texto. Puedes:

* Convertir valores a string
* Obtener información (longitud, contenido, posición)
* Modificar su presentación (mayúsculas, recortes)
* Unirlos fácilmente usando diferentes métodos
