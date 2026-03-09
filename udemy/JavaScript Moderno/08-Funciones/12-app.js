// Funciones de orden superior: map, filter, reduce

const carrito = [
    {nombre : "Monitor de 30 pulgadas", precio : 400},
    {nombre : "Tablet", precio : 150},
    {nombre : "Smart TV", precio : 800},
    {nombre : "Iphone 21", precio : 5600},
    {nombre : "Gomitas", precio : .5},
    {nombre : "Coca Cola 3L", precio : 3}
]

console.log("Arreglo 1:")
const nuevoArreglo = carrito.map( producto => producto.nombre + ", precio: " + producto.precio);
nuevoArreglo.forEach((carrito) => {console.log(carrito)});

console.log("Arreglo 2:")
const nuevoArreglo2 = carrito.filter( producto => producto.precio < 100);
nuevoArreglo2.forEach((carrito) => {console.log(carrito)});

console.log("Reduccion:")
const reduccion = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(reduccion);
