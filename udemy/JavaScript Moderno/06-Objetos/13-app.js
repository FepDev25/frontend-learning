// Acceder a las propiedades de un objeto con Object.keys, Object.values y Object.entries

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

// Llaves
console.log(Object.keys(producto));

// Valores
console.log(Object.values(producto));

// Llaves y valores en pares
console.log(Object.entries(producto));
