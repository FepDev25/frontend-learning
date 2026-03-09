# Iteradores en JavaScript – Parte 3

En esta parte final aprenderás:
- A usar métodos como `forEach` y `map`
- A iterar con `for...of` para arrays
- A usar `for...in` y `Object.entries()` para recorrer objetos

---

## 1. Recorrer arrays con `forEach()`

```javascript
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar"];

pendientes.forEach(p => console.log(p));
```

### Explicación:

* `forEach()` recorre cada elemento del array, ejecutando la función proporcionada.
* Es útil para **acciones con efectos secundarios**, como imprimir.

---

## 2. `forEach()` y `map()` con números

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => {
    n = n * 98;
    console.log(n);
});

console.log("Nuevo arreglo");
const nuevoArreglo = numbers.map(n => n * 77);
nuevoArreglo.forEach(n => console.log(n));
```

### Diferencias:

* `forEach()` **no devuelve un nuevo array**, solo recorre.
* `map()` **devuelve un nuevo array** transformado.

---

## 3. Recorrer arrays con `for...of`

```javascript
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar"];
for (let pendiente of pendientes) {
    console.log(pendiente);
}

const carrito = [
    { nombre: "Monitor de 30 pulgadas", precio: 400 },
    { nombre: "Tablet", precio: 150 },
    { nombre: "Smart TV", precio: 800 },
    { nombre: "Iphone 21", precio: 5600 },
    { nombre: "Gomitas", precio: 0.5 },
    { nombre: "Coca Cola 3L", precio: 3 }
];

for (let producto of carrito) {
    console.log(producto);
}
```

### `for...of`:

* Recorre arrays directamente accediendo a los **valores**.
* Más limpio que `for` tradicional para recorrer listas completas.

---

## 4. Recorrer propiedades de un objeto

```javascript
const auto_1 = {
    modelo: 'Mustang',
    motor: 6.0,
    anio: 1969,
    marca: 'Ford'
};

for (let propiedad in auto_1) {
    console.log(`${auto_1[propiedad]}`);
}

for (let [llave, valor] of Object.entries(auto_1)) {
    console.log(`${llave}: ${valor}`);
}
```

### Explicación:

* `for...in` recorre las **claves** de un objeto.
* `Object.entries()` devuelve un array de pares `[clave, valor]`, útil con `for...of`.

---

## Conclusión

En esta última parte aprendiste a:

* Usar `forEach()` y `map()` para trabajar con arrays
* Iterar con `for...of` sobre listas y objetos iterables
* Recorrer objetos con `for...in` y `Object.entries()`
* Elegir la mejor estructura de repetición según el tipo de datos
