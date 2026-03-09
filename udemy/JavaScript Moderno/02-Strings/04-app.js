// Eliminar espacios en blanco al inicio y al final de un String

const producto = "                         Monitor de 20 pulgadas                        ";
console.log(producto + ` longitud : ${producto.length} `);

const trimStart = producto.trimStart();
console.log(trimStart + ` longitud : ${trimStart.length} `);
const trimEnd = producto.trimEnd();
console.log(trimEnd + ` longitud : ${trimEnd.length} `);
const trimAll= producto.trim();
console.log(trimAll + ` longitud : ${trimAll.length} `);
