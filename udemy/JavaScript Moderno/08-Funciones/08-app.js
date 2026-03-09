// Funciones con retorno de valores

function sumar(num1 = 0, num2 = 0) {
    return num1 + num2;
}

const result = sumar(10,23);
console.log(result);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

total = agregarCarrito(13);
total = agregarCarrito(120);
total = agregarCarrito(200);
total = agregarCarrito(45.45);

function calcularImpuesto(total){
    return total * 1.15;
}

const totalPagar = calcularImpuesto(total);
console.log("Total: " + total);
console.log("Total a pagar: " + totalPagar);