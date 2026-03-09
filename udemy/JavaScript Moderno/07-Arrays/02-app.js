// Acceder a los valores de un array

const numbers = [10,20,30,40,50];
console.log(numbers);
console.table(numbers); // Muestra el array en forma de tabla

console.log(numbers[2]); // 30
console.log(numbers[4]); // 50

numbers[5] = [1,2,3];
console.log(numbers);
console.log(numbers[5][1]); // 2
