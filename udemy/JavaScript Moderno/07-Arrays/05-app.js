const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses);

meses.push("Junio");
meses.push("Julio");
console.table(meses);


const carrito = [];

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

carrito.push(producto1);
carrito.push(producto2);
carrito.unshift(producto3); // Agrega al inicio

console.table(carrito);