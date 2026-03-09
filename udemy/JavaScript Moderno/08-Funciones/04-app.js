// Función vs Método

const num1 = 20;
const num2 = "20";

// Las funciones son independientes, no necesitan de un objeto para funcionar
console.log( parseInt(num2) ); // Función

// Los métodos son funciones que están dentro de un objeto, necesitan de un objeto para funcionar
console.log( num1.toString()); // Método
