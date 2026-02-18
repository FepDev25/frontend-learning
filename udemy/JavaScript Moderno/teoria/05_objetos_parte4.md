# Objetos en JavaScript - Parte 4 
En esta última parte abordamos:
- Cómo unir objetos
- Cómo definir métodos dentro de un objeto
- Uso de constructores
- Inspección de propiedades con métodos de `Object`

---

## 1. Unir objetos

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

const medidas = {
    peso: "1kg",
    medida: "1m"
};

// Método 1: Object.assign()
const result = Object.assign(producto, medidas);
console.log(result);

// Método 2: Spread operator
const result2 = { ...producto, ...medidas };
console.log(result2);
```

### Explicación:

* `Object.assign(destino, fuente)`: copia las propiedades de `medidas` dentro de `producto`.
* `{ ...obj1, ...obj2 }`: operador spread, más moderno y legible.
* Ambos métodos **fusionan objetos**, pero cuidado: `assign()` **modifica el objeto original**, el spread operator crea uno nuevo.

---

## 2. Métodos dentro de un objeto

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true,
    mostrarInfo: function() {
        console.log("El producto tiene un precio de " + this.precio);
    }
};

producto.mostrarInfo(); // El producto tiene un precio de 300.5
```

### Explicación:

* Puedes definir funciones dentro de un objeto: se denominan **métodos**.
* `this` hace referencia al objeto actual (`producto`), lo que permite acceder a sus propiedades desde dentro.

---

## 3. Crear objetos con constructor

```javascript
// Object literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

// Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = false;
}

const producto2 = new Producto("Monitor de 24 pulgadas", 250);
const producto3 = new Producto("Monitor de 64 pulgadas", 870);

console.log(producto2);
console.log(producto3);
```

### Explicación:

* Un **constructor** es una función que permite crear múltiples objetos con la misma estructura.
* Se usa con la palabra clave `new`.
* Este enfoque se parece a una clase en otros lenguajes.

---

## 4. Obtener información del objeto

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

console.log(Object.keys(producto));    // ["nombre", "precio", "disponible"]
console.log(Object.values(producto));  // ["Monitor de 20 pulgadas", 300.5, true]
console.log(Object.entries(producto)); // [["nombre", "Monitor de 20 pulgadas"], ["precio", 300.5], ["disponible", true]]
```

### Métodos útiles:

* `Object.keys(obj)`: devuelve un array con todas las claves.
* `Object.values(obj)`: devuelve un array con todos los valores.
* `Object.entries(obj)`: devuelve un array de arrays, cada uno con `[clave, valor]`.

---

## Conclusión

* Puedes **fusionar objetos** fácilmente con `Object.assign()` o spread operator.
* Los objetos pueden tener **métodos internos** definidos con funciones.
* Es posible crear múltiples instancias con una **función constructora**.
* Usa `Object.keys()`, `Object.values()` y `Object.entries()` para **inspeccionar** objetos dinámicamente.

Este es el final del módulo de objetos. ¡Buen trabajo documentando esta sección tan importante de JavaScript!
