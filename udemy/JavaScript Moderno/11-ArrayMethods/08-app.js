const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];    

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];
console.log(carrito);

const meses2 = [...meses, 'Noviembre', 'Diciembre'];
console.log(meses2);
console.log(meses);

const producto = {
    nombre: 'Disco duro',
    precio: 300
}

const carrito2 = [...carrito, producto];
console.log(carrito2);