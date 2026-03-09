// Loops: break y continue

console.log("Loop hasta encontrar 7")
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7){
        console.log("7 encontrado");
        break; // Detiene la ejecución del loop
    }
}

console.log("Loop excluyendo 7")
for (let i = 1; i <= 10; i++) {
    if (i === 7){
        continue; // Salta a la siguiente iteración del loop, omitiendo el código que está debajo
    }
    console.log(i);
}

const carrito = [
    {nombre : "Monitor de 30 pulgadas", precio : 400},
    {nombre : "Tablet", precio : 150},
    {nombre : "Smart TV", precio : 800},
    {nombre : "Iphone 21", precio : 5600, descuento : true},
    {nombre : "Gomitas", precio : .5},
    {nombre : "Coca Cola 3L", precio : 3}
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento){
        console.log(carrito[i].nombre + " tiene descuento");
        continue;
    }
    console.log(carrito[i].nombre + " no tiene descuento");
}