"use strict"; // Evaluar el código Js de manera estricta

// Congelar un objeto, no se pueden modificar los valores de las llaves del objeto

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

Object.freeze(producto); // No se pueden modificar los valores de las llaves del objeto
// producto.nombre = "Monitor de 30 pulgadas"
// delete producto.precio

console.log(producto)
console.log(Object.isFrozen(producto));
