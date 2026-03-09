// Array Methods - concat() y spread operator

const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];    
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];    

// concat() - Retorna un nuevo arreglo con la unión de los arreglos que se le pasan como argumentos
const meses = meses1.concat(meses2);
console.log(meses);

// Spread operator - Retorna un nuevo arreglo con la unión de los arreglos que se le pasan como argumentos
const meses3 = [...meses1, ...meses2];
console.log(meses3);
