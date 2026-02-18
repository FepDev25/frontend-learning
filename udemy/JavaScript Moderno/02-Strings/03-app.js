console.log('Concatenar String');

const producto = "Monitor de 20 pulgadas";
const precio = "20 USD"

console.log(producto.concat(" con un precio de ").concat(precio));
console.log(producto + " con un precio de " + precio);
console.log(producto , " con un precio de " , precio);
console.log(`${producto} con un precio de ${precio} `);