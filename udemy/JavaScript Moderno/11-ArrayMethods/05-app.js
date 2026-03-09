// Array Methods - find()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

// find() - Retorna el primer elemento que cumpla la condición, de lo contrario retorna undefined
const resultado = carrito.find( producto => producto.nombre === 'Audifonos' );
console.log(resultado);
const resultado2 = carrito.find( producto => producto.precio === 1000 );
console.log(resultado2);
