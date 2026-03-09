# Iteradores en JavaScript – Parte 1

Los **iteradores** permiten ejecutar bloques de código múltiples veces. El más clásico de ellos es el **bucle `for`**, que se usa para recorrer secuencias como arrays o ciclos numéricos.

---

## 1. Bucle `for` básico

```javascript
console.log("Loop 1");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Loop 2");
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

console.log("Loop 3");
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i); // Solo pares
    }
}
```

### Explicación:

* `for (inicio; condición; incremento)` es la estructura general.
* Se puede usar para contar, aplicar filtros (como números pares), o hacer cálculos iterativos.

---

## 2. Recorrer un array con `for`

```javascript
const carrito = [
    { nombre: "Monitor de 30 pulgadas", precio: 400 },
    { nombre: "Tablet", precio: 150 },
    { nombre: "Smart TV", precio: 800 },
    { nombre: "Iphone 21", precio: 5600 },
    { nombre: "Gomitas", precio: 0.5 },
    { nombre: "Coca Cola 3L", precio: 3 }
];

console.log("Loop 4");
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}
```

### Notas:

* `.length` devuelve el número total de elementos.
* Se accede a cada objeto del array usando su índice `i`.

---

## 3. Control de flujo: `break` y `continue`

```javascript
console.log("Loop hasta encontrar 7");
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7) {
        console.log("7 encontrado");
        break;
    }
}
```

* `break`: detiene completamente la ejecución del bucle.

```javascript
console.log("Loop excluyendo 7");
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        continue; // Salta el valor 7
    }
    console.log(i);
}
```

* `continue`: **salta** la iteración actual y continúa con la siguiente.

---

## 4. Condición dentro del `for` con objetos

```javascript
const carrito = [
    { nombre: "Monitor de 30 pulgadas", precio: 400 },
    { nombre: "Tablet", precio: 150 },
    { nombre: "Smart TV", precio: 800 },
    { nombre: "Iphone 21", precio: 5600, descuento: true },
    { nombre: "Gomitas", precio: 0.5 },
    { nombre: "Coca Cola 3L", precio: 3 }
];

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(carrito[i].nombre + " tiene descuento");
        continue;
    }
    console.log(carrito[i].nombre + " no tiene descuento");
}
```

### Explicación:

* Puedes evaluar condiciones sobre objetos dentro del array.
* Si un producto tiene la propiedad `descuento`, se ejecuta un bloque distinto.

---

## Conclusión

En esta primera parte sobre iteradores aprendiste:

* A usar el bucle `for` para contar y recorrer arrays.
* A aplicar condiciones dentro del bucle.
* A controlar el flujo con `break` y `continue`.
* A trabajar con arrays de objetos usando lógica condicional.
