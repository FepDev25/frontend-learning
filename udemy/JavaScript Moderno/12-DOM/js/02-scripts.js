console.log("******** Get elements by class ********")

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de una vez, se devuelve un array
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);