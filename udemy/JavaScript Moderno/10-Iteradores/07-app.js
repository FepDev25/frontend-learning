const auto_1 = {
    modelo: 'Mustang',
    motor: 6.0,
    anio: 1969,
    marca: 'Ford'
}

for (let propiedad in auto_1) {
    console.log(`${auto_1[propiedad]}`);
}


for (let[llave, valor] of Object.entries(auto_1)){
    console.log(`${llave}: ${valor}`);
}