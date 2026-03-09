// Funciones anónimas y funciones flecha

const aprendiendo = function (){
    console.log("Aprendiendo");
}

const aprendiendo2 = () => console.log("Aprendiendo");

aprendiendo();
aprendiendo2();

const decirBuenasNoches = nombre => `Buenas noches ${nombre}`;
console.log(decirBuenasNoches("Felipe"));
