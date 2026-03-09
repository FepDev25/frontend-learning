// Array Methods - every()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

// every() - Retorna true si todos los elementos cumplen la condición, de lo contrario retorna false
const resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado);

const resultado2 = carrito.every( producto => producto.precio < 500 );
console.log(resultado2);
