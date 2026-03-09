// query selector
// retorno maximo un elemento, el primero que coincida con el selector

console.log("******** Query selector ********");

let card = document.querySelector(".card"); // retorna el primer elemento que coincida con el selector
console.log(card);

// se puede tener selectores específicos como en css
// se selecciona el primer elemento con la clase info dentro de un elemento con la clase premium
const info = document.querySelector(".premium .info");
console.log(info);

const segundoCard = document.querySelector("section.hospedaje .card:nth-child(2)");
console.log(segundoCard);

// seleccionar formulario
const formulario = document.querySelector("#formulario");
console.log(formulario);

// seleccionar elementos HTML
const nav = document.querySelector("nav");
console.log(nav);