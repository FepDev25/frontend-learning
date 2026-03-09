// Destructuring con arrays

const nums = [10, 20, 30, 40, 50, 60];

// Destructuring con números
const [ first ] = nums;
console.log(first);

const [ primero, segundo, tercero ] = nums;
console.log(primero, segundo, tercero);

const [ , , , cuarto ] = nums;
console.log(cuarto);

const [ primero2, ...resto ] = nums;
console.log(primero2, resto);
