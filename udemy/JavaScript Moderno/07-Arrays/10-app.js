const carrito = [
    {nombre : "Monitor de 30 pulgadas", precio : 400},
    {nombre : "Tablet", precio : 150},
    {nombre : "Smart TV", precio : 800},
    {nombre : "Iphone 21", precio : 5600},
    {nombre : "Gomitas", precio : .5},
    {nombre : "Coca Cola 3L", precio : 3}
]

console.log("Foreach");
carrito.forEach((carrito) => {console.log(carrito)});

const nuevo = carrito.map( function (producto) {
    return producto;
} )
console.log("Copia de carrito: ");
console.log(nuevo);