# Métodos de Arrays en JavaScript – Parte 2

En esta segunda parte exploramos métodos fundamentales para:
- Sumar valores (`reduce`)
- Filtrar elementos (`filter`)
- Buscar un objeto específico (`find`)

---

## 1. Sumar valores con `forEach` y `reduce`

```javascript
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

let total = 0;
carrito.forEach(producto => {
    total += producto.precio;
});
console.log(`El total de la compra es: ${total}`);
```

* `forEach()` puede usarse para acumular valores en una variable externa.

```javascript
total = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(`El total de la compra es: ${total}`);
```

* `reduce()` es más compacto y funcional: recibe un **acumulador**, el elemento actual y un valor inicial.

---

## 2. Filtrar elementos con `filter()`

```javascript
const carritoFiltrado = carrito.filter(producto => producto.precio > 400);
console.log(carritoFiltrado);
```

* `filter()` devuelve un nuevo array con todos los elementos que **cumplen la condición**.

```javascript
const carritoFiltrado2 = carrito.filter(producto => producto.precio <= 400);
console.log(carritoFiltrado2);
```

* Puedes usar múltiples filtros según el criterio (precio, nombre, etc.).

---

## 3. Buscar un elemento con `find()`

```javascript
const resultado = carrito.find(producto => producto.nombre === 'Audifonos');
console.log(resultado);
```

### Diferencia entre `find()` y `filter()`:

| Método     | Resultado             | Tipo   |
| ---------- | --------------------- | ------ |
| `find()`   | Primer elemento       | Objeto |
| `filter()` | Todos los que cumplan | Array  |

---

## Conclusión

En esta segunda parte aprendiste a:

* Sumar totales con `forEach()` y `reduce()`
* Filtrar elementos con `filter()`
* Buscar un solo resultado con `find()`

