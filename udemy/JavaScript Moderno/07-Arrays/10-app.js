// Iterar un arreglo con forEach

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

// Map es similar a forEach pero este devuelve un nuevo arreglo con los resultados de la función aplicada a cada elemento del arreglo original
const nuevo = carrito.map( function (producto) {
    return producto;
} )
console.log("Copia de carrito: ");
console.log(nuevo);

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosDuplicados = numeros.map((numero) => {
    return 2 * numero;
})

console.log(numeros);
console.log(numerosDuplicados);
