const producto = {
    nombre : "Monitor de 32 pulgadas",
    precio : 300.5,
    disponible : true,
    information : {
        medidas : {
            peso : "1kg",
            medida : "1m"
        },
        fabricante : {
            pais : "Ecuador",
            ciudad : "Quito"
        },
        color : "negro"
    }
}
console.log(producto);

const { nombre, information: { fabricante : { pais, ciudad } } } = producto;
console.log(nombre, pais, ciudad);