const producto = "Monitor de 20 pulgadas";
console.log(producto);

console.log("Replace");
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

console.log("Slice");
console.log(producto.slice(0,13));
console.log(producto.slice(10));
console.log(producto.slice(6, 1));

console.log("Substring")
console.log(producto.substring(0,13));
console.log(producto.substring(6,1));

console.log(producto.charAt(0));