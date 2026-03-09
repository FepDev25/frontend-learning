// Unir dos objetos

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

const medidas = {
    peso : "1kg",
    medida : "1m"
}

// Unir dos objetos 1
const result = Object.assign(producto, medidas, {color: "verde"});
console.log(result);

// Unir dos objetos 2
const result2 = { ...producto, ...medidas, ...{color: "verde"} }
console.log(result2);
