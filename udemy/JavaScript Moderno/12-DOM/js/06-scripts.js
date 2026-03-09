// modificar texto o imagenes con Js

let encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// acceder al texto
console.log(encabezado.innerText); // se trae el texto pero no el contenido oculto, como el span
console.log(encabezado.textContent); // se trae todo el texto, incluso el contenido oculto
console.log(encabezado.innerHTML); // se trae el html

document.querySelector('.contenido-hero h1').textContent = 'Nuevo encabezado desde Js';

const imagen = document.querySelector('.card img');
console.log(imagen);
console.log(imagen.src);
imagen.src = 'img/hacer2.jpg';