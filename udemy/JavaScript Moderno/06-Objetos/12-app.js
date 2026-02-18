// Object literal
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

// Object constructor
function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = false;
}

const producto2 = new Producto("Monitor de 24 pulgadas", 250);
const producto3 = new Producto("Monitor de 64 pulgadas", 870);
console.log(producto2);
console.log(producto3);