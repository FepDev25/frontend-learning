// Agregar funciones a un objeto

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true,
    mostrarInfo: function(){
        console.log("El producto tiene un precio de " + this.precio);
    }
}

// this hace referencia al objeto padre, en este caso producto

producto.mostrarInfo();

// se puede agregar una función a un objeto después de haberlo creado
producto.calcularIva = function(){
    return this.precio * 0.15;
}

console.log(producto.calcularIva());
