// Destructuring de objetos

// Destructuring es una forma de extraer valores de un objeto o un array y asignarlos a variables. 
// Es una sintaxis más limpia y fácil de leer que la forma tradicional de acceder a las propiedades de un objeto.

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

console.log(producto.nombre);

const nombreAntiguo = producto.nombre;
console.log(nombreAntiguo);

// Destructuring
const { nombre } = producto;
console.log(nombre);

const { precio } = producto;
console.log(precio);

const persona = {
    nombreCompleto : "Felipe",
    edad : 18,
    casado : false
}

const { nombreCompleto, edad, casado } = persona;
console.log(nombreCompleto, edad, casado);

const gato = {
    nombre: "Pedrito",
    color: "Naranja",
    raza: "Siames",
    edad: 2
}

const { color } = gato;
console.log(color);


