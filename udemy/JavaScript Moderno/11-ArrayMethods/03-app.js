// Array Methods - forEach() y reduce()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

// forEach() - Itera un arreglo, no retorna nada
let total = 0;
carrito.forEach( producto => {
    total += producto.precio;
});
console.log(`El total de la compra es: ${total}`);

// reduce() - Retorna un nuevo valor, basado en el arreglo que se le pasa
total = carrito.reduce( (total, producto) => total + producto.precio, 0); // 0 es el valor inicial de total
console.log(`El total de la compra es: ${total}`);
