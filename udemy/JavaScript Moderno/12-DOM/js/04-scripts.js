console.log("******** Query selector ********")

const card = document.querySelector(".card") // Retorna máximo un elemento
console.log(card)

// Se pueden tener conectores específicos como en CSS
const info = document.querySelector(".premium .info")
console.log(info)

// Seleccionar el segundo card de hospedaje
const card2 = document.querySelectorAll("section.hospedaje .card:nth-child(2)")
console.log(card2)

// Seleccionar el formulario
const form = document.querySelector("#formulario")
console.log(form)

// Seleccionar elementos html
const nav = document.querySelector("nav")
console.log(nav)