# Métodos de Arrays en JavaScript – Parte 3

En esta parte final exploramos:
- Validación completa con `every()`
- Unión de arrays con `concat()` y el operador `spread`
- Añadir elementos a arrays sin modificarlos directamente

---

## 1. Verificar condiciones con `every()`

```javascript
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado); // true

const resultado2 = carrito.every(producto => producto.precio < 500);
console.log(resultado2); // false
```

### Explicación:

* `every()` devuelve `true` si **todos** los elementos cumplen la condición.
* Si uno no lo cumple, retorna `false`.

---

## 2. Unir arrays con `concat()` y spread `...`

```javascript
const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const meses = meses1.concat(meses2);
console.log(meses); // Usa concat

const meses3 = [...meses1, ...meses2];
console.log(meses3); // Usa spread operator
```

### Comparación:

| Método      | Inmutabilidad | Legibilidad | Preferido |
| ----------- | ------------- | ----------- | --------- |
| `concat()`  | ✅             | Media       | Bueno     |
| `...spread` | ✅             | Alta        | Muy común |

---

## 3. Usar spread para extender arrays sin modificar originales

```javascript
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];
const meses2 = [...meses, 'Noviembre', 'Diciembre'];

console.log(meses2); // Incluye nuevos meses
console.log(meses);  // Original permanece igual
```

* El operador spread (`...`) es ideal para **crear una copia y agregar elementos**, sin afectar el original.

---

## 4. Agregar objetos a arrays con spread

```javascript
const producto = {
    nombre: 'Disco duro',
    precio: 300
};

const carrito2 = [...carrito, producto];
console.log(carrito2);
```

### Ventajas:

* Mantiene inmutabilidad: no cambia el array original.
* Ideal para programación funcional y frameworks como React.

---

## Conclusión

En esta parte final sobre métodos de arrays aprendiste a:

* Verificar condiciones globales con `every()`
* Unir arrays con `concat()` y el operador spread (`...`)
* Agregar elementos sin modificar el array original
