// Destructuring de objetos anidados

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true,
    information : {
        peso : "1kg",
        medida : "1m"
    }
}
console.log(producto);
const { peso, medida } = producto.information;
console.log(peso, medida);
