const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];    
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];    

const meses = meses1.concat(meses2);
console.log(meses);

const meses3 = [...meses1, ...meses2];
console.log(meses3);
