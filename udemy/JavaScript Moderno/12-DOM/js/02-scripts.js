// seleccionar elementos por su clase

console.log("******** Get Element by Class Name ********");

let header = document.getElementsByClassName("header");
console.log(header);

header = document.getElementsByClassName("header")[0];
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);
