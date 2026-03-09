// Función que llama a otras funciones

iniciarApp("Felipe");

function iniciarApp(nombre="No nombre") {
    console.log("Iniciando app");
    segundaFuncion();
    usuarioAutenticado(nombre);
}

function segundaFuncion(){
    console.log("Segunda función");
}

function usuarioAutenticado(nombre){
    console.log("Autenticando usuario...");
    console.log("Usuario autenticado: " + nombre)
}
