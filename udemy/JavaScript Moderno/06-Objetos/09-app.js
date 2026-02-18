"use strict"; // Evaluar el código Js de manera estricta

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

Object.seal(producto); // Se pueden modificar las existentes, pero no se pueden agregar ni modificar nuevas propiedades
// delete producto.precio
// producto.peso = 5;

producto.nombre = "Monitor de 30 pulgadas"
console.log(producto)
console.log(Object.isSealed(producto));