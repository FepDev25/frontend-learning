// Agregar y eliminar propiedades de un objeto

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}
console.log(producto)

// Agregar nueva propiedad
producto.imagen = "imagen.png";
console.log(producto);

// Eliminar propiedad
delete producto.disponible;
console.log(producto);
