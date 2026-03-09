// Array Methods - includes() y some()

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];    

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

// Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if (mes === 'Enero') {
        console.log('Enero existe');
    }
})

// includes() - Retorna true o false
const resultado = meses.includes('Enero');
console.log(resultado);

// some() - Retorna true o false
const resultado2 = carrito.some((producto) => producto.nombre === 'Celular');
console.log(resultado2);

const resultado3 = meses.some((mes) => mes === 'Enero');
console.log(resultado3);
