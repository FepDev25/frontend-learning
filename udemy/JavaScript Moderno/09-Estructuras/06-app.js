function compra(usuario, puedePagar) {

    if (usuario && puedePagar) {
        console.log("Puede comprar");
    } else if (!usuario) {
        console.log("Crea una cuenta")
    } else if (!puedePagar) {
        console.log("No tienes fondos suficientes");
    } else {
        console.log("No puede comprar");
    }
}

compra(false, true);
compra(true, true);