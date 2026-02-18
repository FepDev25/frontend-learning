const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];    

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

meses.forEach((mes, index) => {
    if (mes === 'Abril') {
        console.log(`El mes ${mes} se encuentra en el índice ${index}`);
    }
})

const indice = meses.findIndex( mes => mes === 'Abril' )
console.log(`El mes Abril se encuentra en el índice ${indice}`);

const indice2 = carrito.findIndex( producto => producto.nombre === 'Celular' )
console.log(`El producto Celular se encuentra en el índice ${indice2}`);

const indice3 = carrito.findIndex( producto => producto.precio === 1000 ) // -1
console.log(`El producto con precio 1000 se encuentra en el índice ${indice3}`); 