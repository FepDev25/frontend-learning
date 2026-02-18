function puedoPagar(dinero, totalPagar){
    console.log("Dinero: " + dinero);
    console.log("Total a pagar: " + totalPagar);

    if (dinero >= totalPagar){
        console.log("Se puede pagar. Saldo restante: " + (dinero - totalPagar));
    } else{
        console.log("Saldo insuficiente");
    }
}


puedoPagar(300,100);
puedoPagar(300,300);
puedoPagar(300,305);