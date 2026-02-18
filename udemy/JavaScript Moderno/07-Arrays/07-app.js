let carrito = [];

const producto1 = {
    nombre: "Celular A52S",
    precio: 300.5,
}
const producto2 = {
    nombre: "Celular Iphone 15",
    precio: 1200,
}

const producto3 = {
    nombre: "Tablet Xiaomi",
    precio: 300.5,
}

const producto4 = {
    nombre: "Caramelos",
    precio: 30.5,
}

carrito = [...carrito, producto1, producto2, producto3, producto4];
console.log(carrito);

// Eliminar el elemento final
carrito.pop();
console.log(carrito);

// Eliminar el elemento del inicio
carrito.shift();
console.log(carrito);

// ELiminar otros elemento
carrito.splice(0, 1);
console.log(carrito);