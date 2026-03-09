// Agregar un nuevo producto al carrito utilizando el operador spread

const carrito = [];

const producto1 = {
    nombre: "Celular A52S",
    precio: 300.5,
}
const producto2 = {
    nombre: "Celular Iphone 15",
    precio: 1200,
}

carrito.push(producto1);
carrito.push(producto2);

console.table(carrito);

const producto3 = {
    nombre: "Tablet Xiaomi",
    precio: 300.5,
}

let resultado = [...carrito, producto3];
console.table(resultado);
