// Métodos de los String: Replace, Slice, Substring, CharAt

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

// La diferencia entre slice y substring es que slice acepta números negativos, mientras que substring no los acepta, si se le pasa un número negativo lo convierte en 0
console.log("Diferencia entre slice y substring");
console.log(producto.slice(-10)); // devuelve las últimas 10 letras
console.log(producto.substring(-10)); // devuelve toda la cadena, ya que el número negativo lo convierte en 0, por lo tanto devuelve desde el índice 0 hasta el final de la cadena

console.log("CharAt");
console.log(producto.charAt(0));
