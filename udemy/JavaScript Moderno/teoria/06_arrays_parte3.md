# Arrays en JavaScript – Parte 3 

En esta última parte aprenderás a:
- Eliminar elementos de un array
- Usar destructuring para extraer datos
- Recorrer arrays con diferentes métodos (`for`, `forEach`, `map`)

---

## 1. Eliminar elementos de un array

```javascript
let carrito = [];

const producto1 = { nombre: "Celular A52S", precio: 300.5 };
const producto2 = { nombre: "Celular Iphone 15", precio: 1200 };
const producto3 = { nombre: "Tablet Xiaomi", precio: 300.5 };
const producto4 = { nombre: "Caramelos", precio: 30.5 };

carrito = [...carrito, producto1, producto2, producto3, producto4];
console.log(carrito);

// Eliminar el último elemento
carrito.pop();
console.log(carrito);

// Eliminar el primer elemento
carrito.shift();
console.log(carrito);

// Eliminar el elemento en la posición 0 (1 solo)
carrito.splice(0, 1);
console.log(carrito);
```

### Métodos para eliminar:

| Método          | Descripción                            |
| --------------- | -------------------------------------- |
| `.pop()`        | Elimina el último elemento             |
| `.shift()`      | Elimina el primer elemento             |
| `.splice(i, n)` | Elimina `n` elementos desde índice `i` |

---

## 2. Destructuring en arrays

```javascript
const nums = [10, 20, 30, 40, 50, 60];

const [ first ] = nums;
console.log(first); // 10

const [ primero, segundo, tercero ] = nums;
console.log(primero, segundo, tercero); // 10 20 30

const [ , , , cuarto ] = nums;
console.log(cuarto); // 40

const [ primero2, ...resto ] = nums;
console.log(primero2, resto); // 10 [20, 30, 40, 50, 60]
```

### Explicación:

* Puedes extraer elementos por posición.
* El operador `...resto` agrupa el resto de los elementos como un nuevo array.

---

## 3. Recorrer un array de objetos

```javascript
const carrito = [
    {nombre: "Monitor de 30 pulgadas", precio: 400},
    {nombre: "Tablet", precio: 150},
    {nombre: "Smart TV", precio: 800},
    {nombre: "Iphone 21", precio: 5600},
    {nombre: "Gomitas", precio: 0.5},
    {nombre: "Coca Cola 3L", precio: 3}
];

console.log("For normal");
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

console.log("Foreach");
carrito.forEach((producto) => {
    console.log(producto);
});
```

### Comparación:

* `for`: clásico, flexible, útil si necesitas romper el ciclo con `break`.
* `forEach`: más limpio y moderno, ideal para recorrer sin modificar.

---

## 4. Crear nuevos arrays con `map()`

```javascript
const nuevo = carrito.map(function (producto) {
    return producto;
});

console.log("Copia de carrito:");
console.log(nuevo);
```

### Explicación:

* `.map()` crea un **nuevo array** aplicando una función a cada elemento.
* En este ejemplo, devuelve una copia exacta del array.
* Se usa para **transformar datos**, como generar una lista de nombres o precios.

---

## Conclusión

En esta última parte aprendiste a:

* Eliminar elementos con `.pop()`, `.shift()` y `.splice()`
* Extraer valores con destructuring
* Recorrer arrays con `for`, `forEach` y `map`
* Clonar y transformar arrays fácilmente
