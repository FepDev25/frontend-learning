# Objetos en JavaScript - Parte 2

En esta parte aprenderemos cómo extraer información fácilmente con destructuring, acceder a objetos anidados, y modificar propiedades incluso cuando el objeto fue declarado con `const`.

---

## 1. Destructuring (Desestructuración de objetos)

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

console.log(producto.nombre); // Acceso tradicional

const nombreAntiguo = producto.nombre;
console.log(nombreAntiguo);   // Forma antigua

// Nueva forma: destructuring
const { nombre } = producto;
console.log(nombre);          // Monitor de 20 pulgadas

const { precio } = producto;
console.log(precio);          // 300.5
```

### ¿Qué es destructuring?

Es una forma moderna de extraer propiedades de un objeto de manera directa, más concisa y legible.

---

## 2. Destructuring de otro objeto

```javascript
const persona = {
    nombreCompleto: "Felipe",
    edad: 18,
    casado: false
};

const { nombreCompleto, edad, casado } = persona;
console.log(nombreCompleto, edad, casado); // Felipe 18 false
```

Puedes extraer múltiples propiedades a la vez, y usarlas sin necesidad de `persona.nombreCompleto`, etc.

---

## 3. Objetos con propiedades anidadas

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true,
    information: {
        peso: "1kg",
        medida: "1m"
    }
};

const { peso, medida } = producto.information;
console.log(peso, medida); // 1kg 1m
```

* Para acceder a propiedades dentro de otro objeto, usamos `obj.prop1.prop2`.
* También puedes usar destructuring sobre subobjetos directamente.

---

## 4. Destructuring de objetos profundamente anidados

```javascript
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 300.5,
    disponible: true,
    information: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricante: {
            pais: "Ecuador",
            ciudad: "Quito"
        },
        color: "negro"
    }
};

const { nombre, information: { fabricante: { pais, ciudad } } } = producto;
console.log(nombre, pais, ciudad); // Monitor de 32 pulgadas Ecuador Quito
```

Desestructurar objetos anidados te permite acceder a información profunda de forma directa y elegante.

---

## 5. Modificación de objetos `const`

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

producto.nombre = "Monitor de 30 pulgadas"; // Modifica valor
delete producto.precio;                    // Elimina propiedad

console.log(producto);
```

### Importante:

Aunque el objeto fue declarado con `const`, **se pueden modificar sus propiedades internas**. Lo que no está permitido es reasignar el objeto completamente:

```javascript
producto = {}; // ❌ Error
```

---

## Conclusión

* Destructuring es una técnica moderna para trabajar con objetos de forma más limpia.
* Puedes desestructurar objetos anidados fácilmente.
* Los objetos `const` son mutables en su contenido.
* Entender cómo manipular objetos es esencial para trabajar con datos complejos en JavaScript.
