// Iteradores: forEach y map

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar"];
pendientes.forEach( p =>  console.log(p) );

const numbers = [1, 2, 3, 4, 5];
numbers.forEach( n => {
    n = n * 98;
    console.log(n);
})

console.log("Nuevo arreglo");
const nuevoArreglo = numbers.map( n => n * 77);
nuevoArreglo.forEach( n => console.log(n));
