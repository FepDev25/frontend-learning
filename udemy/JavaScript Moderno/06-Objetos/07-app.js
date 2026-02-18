const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true
}

console.log(producto)

// Aunque esté como const se pueden alterar los valores de sus llaves o sus llaves como tal
producto.nombre = "Monitor de 30 pulgadas"
delete producto.precio

console.log(producto)