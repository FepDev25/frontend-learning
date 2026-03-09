"use strict"; // Evaluar el código Js de manera estricta

// Sellar un objeto, se pueden modificar las existentes, pero no se pueden agregar ni modificar nuevas propiedades

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

console.log(producto)


Object.seal(producto); // Se pueden modificar las existentes, pero no se pueden agregar ni modificar nuevas propiedades
// delete producto.precio
// producto.peso = 5;

producto.nombre = "Monitor de 30 pulgadas"
producto.precio = 400.5
console.log(producto)
console.log(Object.isSealed(producto));
