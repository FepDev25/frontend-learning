# Funciones en JavaScript – Parte 4 

En esta última parte abordamos:
- Uso de funciones de alto orden como `map()` y `filter()`
- Creación de métodos tradicionales dentro de objetos (usando `function`)
- Aplicaciones prácticas con arrays de objetos

---

## 1. `map()` – Transformar un array

```javascript
const carrito = [
    { nombre: "Monitor de 30 pulgadas", precio: 400 },
    { nombre: "Tablet", precio: 150 },
    { nombre: "Smart TV", precio: 800 },
    { nombre: "Iphone 21", precio: 5600 },
    { nombre: "Gomitas", precio: 0.5 },
    { nombre: "Coca Cola 3L", precio: 3 }
];

console.log("Arreglo 1:");
const nuevoArreglo = carrito.map(producto => producto.nombre + ", precio: " + producto.precio);
nuevoArreglo.forEach(item => console.log(item));
```

### Explicación:

* `.map()` recorre el array y devuelve un **nuevo array transformado**.
* Es ideal para extraer, modificar o formatear datos.
* En este ejemplo, se transforma cada objeto en un string con nombre y precio.

---

## 2. `filter()` – Filtrar elementos del array

```javascript
console.log("Arreglo 2:");
const nuevoArreglo2 = carrito.filter(producto => producto.precio < 100);
nuevoArreglo2.forEach(item => console.log(item));
```

### Explicación:

* `.filter()` devuelve un nuevo array **con elementos que cumplen una condición**.
* Aquí se filtran productos cuyo precio es menor a 100.
* No modifica el array original.

---

## 3. Métodos tradicionales con `function` en objetos

```javascript
const reproductor = {
    reproducir: function(id) {
        console.log('Reproduciendo canción con el id: ' + id);
    },

    borrar: function(id) {
        console.log('Borrando canción con el id: ' + id);
    },

    pausar: function() {
        console.log('Pausando');
    },

    crearPlaylist: function(playlist) {
        console.log('Crear Playlist: ' + playlist);
    }
};

reproductor.reproducir(2);
reproductor.pausar();
reproductor.borrar(2);
reproductor.crearPlaylist("Rock 90s");
```

### Diferencia con funciones flecha:

* Aquí se usan funciones declaradas con `function`, lo cual **sí mantiene el contexto de `this`**, a diferencia de las funciones flecha.
* Esta es la forma tradicional y recomendada de definir métodos dentro de objetos si necesitas acceder a propiedades del mismo objeto usando `this`.

---

## Conclusión

Con esta parte final, consolidaste el uso de:

* Funciones de alto orden (`map()`, `filter()`) para trabajar con arrays
* Métodos definidos en objetos con `function`
* Aplicaciones prácticas como reproductores, carritos, y transformaciones de datos
