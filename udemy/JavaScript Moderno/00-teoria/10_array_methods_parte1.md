# Métodos de Arrays en JavaScript – Parte 1

JavaScript proporciona métodos muy útiles para recorrer, buscar, y manipular arrays. En esta parte exploraremos:

- `forEach()`
- `includes()`
- `some()`
- `findIndex()`

---

## 1. Usar `forEach()` para buscar un valor

```javascript
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

meses.forEach((mes) => {
    if (mes === 'Enero') {
        console.log('Enero existe');
    }
});
```

### Explicación:

* `forEach()` recorre cada elemento del array y ejecuta una función.
* Se puede usar para aplicar lógica condicional a cada elemento.

---

## 2. Comprobar existencia con `includes()`

```javascript
const resultado = meses.includes('Enero');
console.log(resultado); // true
```

* `includes(valor)` devuelve `true` si el valor existe en el array.
* Funciona solo con **arrays planos**, no con objetos.

---

## 3. Verificar existencia con `some()`

```javascript
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

const resultado2 = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado2); // true

const resultado3 = meses.some(mes => mes === 'Enero');
console.log(resultado3); // true
```

### Explicación:

* `some()` comprueba si **al menos un elemento cumple** la condición.
* A diferencia de `includes()`, `some()` puede trabajar con **arrays de objetos**.

---

## 4. Encontrar índice con `findIndex()`

```javascript
meses.forEach((mes, index) => {
    if (mes === 'Abril') {
        console.log(`El mes ${mes} se encuentra en el índice ${index}`);
    }
});

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(`El mes Abril se encuentra en el índice ${indice}`);
```

### Explicación:

* `findIndex()` devuelve el índice del **primer elemento** que cumple la condición.
* Si no lo encuentra, devuelve `-1`.

---

## 5. `findIndex()` con objetos

```javascript
const indice2 = carrito.findIndex(producto => producto.nombre === 'Celular');
console.log(`El producto Celular se encuentra en el índice ${indice2}`);

const indice3 = carrito.findIndex(producto => producto.precio === 1000);
console.log(`El producto con precio 1000 se encuentra en el índice ${indice3}`); // -1
```

### Nota:

* `findIndex()` es útil para ubicar elementos y luego modificarlos, eliminarlos o resaltarlos.

---

## Conclusión

En esta primera parte aprendiste a:

* Buscar valores en arrays usando `forEach` e `includes`
* Evaluar condiciones en arrays con `some()`
* Obtener la posición de elementos con `findIndex()`
