# Arrays en JavaScript – Parte 1

Los arrays (arreglos) son estructuras de datos que permiten almacenar múltiples valores en una sola variable. En JavaScript, los arrays pueden contener elementos de cualquier tipo: números, cadenas, booleanos, objetos, otros arrays, etc.

---

## 1. Creación de arrays

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

const meses = new Array("Enero", "Febrero", "Marzo");
console.log(meses);
```

### Explicación:

* `[1, 2, 3]`: sintaxis literal para crear un array.
* `new Array(...)`: también válida, aunque menos recomendada.
* Ambos métodos crean una estructura **indexada**, donde cada elemento tiene una posición numérica empezando desde 0.

---

## 2. Arrays con múltiples tipos de datos

```javascript
const deTodo = [
    "Hola",
    null,
    true,
    "Felipe",
    1200,
    60.87,
    { nombre: "Bruno", especie: "gato" },
    numbers
];

console.log(deTodo);
```

* Los arrays en JavaScript pueden contener **tipos mixtos**: strings, booleanos, objetos, incluso otros arrays (estructuras anidadas).
* Esto los hace muy versátiles, pero es importante tener cuidado al acceder a elementos complejos.

---

## 3. Acceso por índice y modificación

```javascript
const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.table(numbers); // Muestra el array como tabla

console.log(numbers[2]); // Accede al tercer elemento: 30
console.log(numbers[4]); // Accede al quinto elemento: 50

// Añadir un nuevo valor en una posición específica
numbers[5] = [1, 2, 3];
console.log(numbers);

// Acceder a un valor dentro del array anidado
console.log(numbers[5][1]); // Resultado: 2
```

### Notas:

* Puedes acceder a cualquier elemento usando su **índice** (posición).
* Puedes modificar un elemento o agregar uno en una posición específica escribiendo: `array[indice] = nuevoValor`.

---

## 4. Medir y recorrer un array

```javascript
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses);

// Medir el tamaño del arreglo
console.log("Tamaño: " + meses.length);

// Recorrer el arreglo con bucle for
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
```

* `.length`: devuelve la cantidad de elementos del array.
* Puedes recorrerlo con un bucle `for` tradicional para acceder a cada valor.

---

## 5. Añadir un elemento a una posición específica

```javascript
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.log(meses);

meses[5] = "Junio";
console.log(meses);
```

* Puedes asignar directamente un valor a un índice aunque no haya sido definido previamente.
* Esto **aumenta la longitud del array** automáticamente.

---

## Conclusión

En esta primera parte aprendimos:

* Cómo crear arrays y almacenarlos en variables.
* Cómo acceder, modificar y recorrer los elementos.
* Que los arrays pueden contener cualquier tipo de dato, incluso otros arrays u objetos.
