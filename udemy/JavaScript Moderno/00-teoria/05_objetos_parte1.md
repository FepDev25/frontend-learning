# Objetos en JavaScript - Parte 1

Los objetos son una de las estructuras fundamentales en JavaScript. Se utilizan para agrupar múltiples valores relacionados bajo un mismo identificador, y pueden incluir propiedades (datos) y métodos (funciones).

---

## 1. Creación de un objeto literal

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

console.log(producto);
```

### Explicación:

* Se usa la sintaxis de **objeto literal** con llaves `{}`.
* Cada propiedad se define como `clave: valor`, separadas por comas.
* Este objeto tiene 3 propiedades: `nombre`, `precio` y `disponible`.

---

## 2. Acceder a propiedades

```javascript
console.log(producto.nombre);      // Acceso con notación punto → "Monitor de 20 pulgadas"
console.log(producto.precio);      // → 300.5
console.log(producto.disponible);  // → true

console.log(producto['nombre']);   // Acceso con notación de corchetes
```

### Notas:

* La **notación punto** es la más común y legible.
* La **notación de corchetes** es útil cuando el nombre de la propiedad está en una variable o contiene espacios/caracteres especiales.

---

## 3. Modificar un objeto

Los objetos son **mutables**, incluso si se declararon con `const`. No se puede reasignar el objeto completo, pero sí cambiar, agregar o eliminar sus propiedades:

```javascript
// Agregar nueva propiedad
producto.imagen = "imagen.png";
console.log(producto);

// Eliminar una propiedad
delete producto.disponible;
console.log(producto);
```

### Explicación:

* `producto.imagen = ...` agrega una nueva clave.
* `delete producto.disponible` elimina una propiedad del objeto.

> Aunque el objeto esté declarado con `const`, se puede modificar su contenido. Lo que no se puede hacer es asignar un **nuevo objeto completo** a esa misma constante.

---

## Conclusión

* Los objetos son estructuras clave en JavaScript para organizar datos relacionados.
* Puedes acceder a sus propiedades, modificarlas, agregar nuevas o eliminarlas en tiempo de ejecución.
* En próximas partes veremos cómo **desestructurar objetos**, **anidarlos**, **usarlos dentro de funciones**, y mucho más.

