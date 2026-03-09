// Array Methods - filter()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

// filter() - Retorna un nuevo arreglo con los elementos que cumplan la condición
const carritoFiltrado = carrito.filter( producto => producto.precio > 400 );
console.log(carritoFiltrado);

const carritoFiltrado2 = carrito.filter( producto => producto.precio <= 400 );
console.log(carritoFiltrado2);
