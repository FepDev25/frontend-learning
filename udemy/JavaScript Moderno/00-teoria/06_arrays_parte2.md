# Arrays en JavaScript – Parte 2

En esta parte exploramos cómo **agregar elementos a un array**, tanto al final como al inicio, y cómo utilizar el **spread operator** para crear nuevas estructuras a partir de arrays existentes.

---

## 1. Agregar elementos con `.push()`

```javascript
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses);

meses.push("Junio");
meses.push("Julio");

console.table(meses);
```

### Explicación:

* `.push(valor)`: agrega un elemento al **final** del array.
* Puedes agregar varios elementos de forma consecutiva.

---

## 2. Uso de `.unshift()` y `.push()` con objetos

```javascript
const carrito = [];

const producto1 = {
    nombre: "Celular A52S",
    precio: 300.5
};
const producto2 = {
    nombre: "Celular Iphone 15",
    precio: 1200
};
const producto3 = {
    nombre: "Tablet Xiaomi",
    precio: 300.5
};

carrito.push(producto1);     // Agrega al final
carrito.push(producto2);     // Agrega al final
carrito.unshift(producto3);  // Agrega al inicio

console.table(carrito);
```

### Explicación:

* `.unshift(valor)`: agrega un elemento al **inicio** del array.
* Esto es útil para mantener orden cronológico o prioridad visual.
* El array puede contener objetos complejos como un **carrito de productos**.

---

## 3. Spread operator (`...`) para clonar y agregar

```javascript
const carrito = [];

const producto1 = {
    nombre: "Celular A52S",
    precio: 300.5
};
const producto2 = {
    nombre: "Celular Iphone 15",
    precio: 1200
};

carrito.push(producto1);
carrito.push(producto2);

const producto3 = {
    nombre: "Tablet Xiaomi",
    precio: 300.5
};

let resultado = [...carrito, producto3];
console.log(resultado);
```

### ¿Qué hace el spread operator?

* El operador `...` **copia todos los elementos** del array original (`carrito`) dentro de uno nuevo.
* Se puede usar para agregar elementos sin modificar el array original.
* Ideal en programación funcional o en estructuras inmutables como en React.

---

## Comparación: Métodos vs Spread

| Acción               | Método          | Spread Operator           |
| -------------------- | --------------- | ------------------------- |
| Agregar al final     | `push()`        | `[...arr, nuevoElemento]` |
| Agregar al inicio    | `unshift()`     | `[nuevoElemento, ...arr]` |
| No modifica original | ❌ (lo modifica) | ✅ (crea uno nuevo)        |

---

## Conclusión

* Los métodos `.push()` y `.unshift()` permiten **modificar arrays** agregando elementos.
* El **spread operator** permite trabajar de forma más **declarativa e inmutable**, ideal para copiar y extender arrays sin alterarlos directamente.
* Trabajar con arrays de objetos es común en sistemas como carritos de compras, listas de tareas o registros.
