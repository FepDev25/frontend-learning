const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300.5,
    disponible : true,
    mostrarInfo: function(){
        console.log("El producto tiene un precio de " + this.precio);
    }
}

producto.mostrarInfo();