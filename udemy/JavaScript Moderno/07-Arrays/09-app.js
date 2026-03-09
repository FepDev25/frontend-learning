// Iterar un arreglo con forEach

const carrito = [
    {nombre : "Monitor de 30 pulgadas", precio : 400},
    {nombre : "Tablet", precio : 150},
    {nombre : "Smart TV", precio : 800},
    {nombre : "Iphone 21", precio : 5600},
    {nombre : "Gomitas", precio : .5},
    {nombre : "Coca Cola 3L", precio : 3}
]

console.log(carrito);

console.log("For normal");
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

console.log("Foreach");
carrito.forEach((carrito) => {console.log(carrito)});

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.forEach((numero) => {console.log(`${numero} ** 2 = ${numero ** 2}`)});
