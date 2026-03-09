// queryselectorAll
// retorno un nodelist con todos los elementos que coincidan con el selector

console.log("******** Query selector all ********");

const cards = document.querySelectorAll(".card");
console.log(cards);

// si no existe
const noExiste = document.querySelectorAll("no-existe");
console.log(noExiste); // retorna un nodelist vacio, no es null
