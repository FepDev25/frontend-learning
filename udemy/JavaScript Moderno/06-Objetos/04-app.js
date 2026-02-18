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