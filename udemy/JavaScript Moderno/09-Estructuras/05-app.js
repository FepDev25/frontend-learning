function puedoPagar(dinero, totalPagar, metodoPago){
    console.log("\nDinero: " + dinero);
    console.log("Total a pagar: " + totalPagar);


    if (dinero > totalPagar){
        console.log("Se puede pagar. Saldo restante: " + (dinero - totalPagar));
    } else if (dinero === totalPagar){
        console.log("Se puede pagar, te quedas sin nada de dinero");
    }
    else{
        console.log("Saldo insuficiente");
        return;
    }

    switch (metodoPago){
        case "tarjeta":
            console.log("Pagando con tarjeta...");
            break;
        case "efectivo":
            console.log("Pagando con efectivo...");
            break;
        case "cheque":
            console.log("Pagando con cheque...");
            break;
        default:
            console.log("No se especificó el método de pago");
            break;

    }
}


puedoPagar(300,100, "efectivo");
puedoPagar(300,300, "cheque");
puedoPagar(300,300, "otro");
puedoPagar(300,305, "tarjeta");
puedoPagar(300,"Letras");

