// Iteradores
// For loop

console.log("Loop 1")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Loop 2")
for (let i = 0; i <= 100; i+=5) {
    console.log(i);
}

console.log("Loop 3")
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

const carrito = [
    {nombre : "Monitor de 30 pulgadas", precio : 400},
    {nombre : "Tablet", precio : 150},
    {nombre : "Smart TV", precio : 800},
    {nombre : "Iphone 21", precio : 5600},
    {nombre : "Gomitas", precio : .5},
    {nombre : "Coca Cola 3L", precio : 3}
]

console.log("Loop 4")
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i])
}
