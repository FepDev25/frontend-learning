// Multiple conditions

function compra(efectivo, credito, totalPagar) {

    if (efectivo >= totalPagar || credito >= totalPagar) {
        console.log("Se puede pagar");
    } else{
        console.log("Fondos insuficientes");
    }
}

compra(100,120,500);
compra(400,100,305)