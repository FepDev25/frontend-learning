console.log("******** Modificar texto o imágenes ********")

const encabezado = document.querySelector("h1")
console.log(encabezado)
console.log(encabezado.innerText) // si en el css visibility: hidden, no lo trae
console.log(encabezado.textContent)
console.log(encabezado.innerHTML) // Se trae el HTML

document.querySelector("h1").textContent  = "Nuevo texto desde JS"

const imagen = document.querySelector("img")
console.log(imagen)
console.log(imagen.src)
console.log(imagen.alt)