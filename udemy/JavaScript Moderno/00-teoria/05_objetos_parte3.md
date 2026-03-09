# Objetos en JavaScript - Parte 3

En esta parte exploramos cómo restringir modificaciones en objetos con `"use strict"`, `Object.freeze()` y `Object.seal()`.

---

## 1. `"use strict"`

```javascript
"use strict";
````

* Esta directiva obliga al código JavaScript a ejecutarse en **modo estricto**, lo cual previene errores comunes y malas prácticas.
* Por ejemplo, evita el uso de variables no declaradas y mejora la seguridad del código.

---

## 2. `Object.freeze()` – Congelar un objeto

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

Object.freeze(producto); // Congela el objeto: no se puede modificar, agregar ni eliminar propiedades

// producto.nombre = "Monitor de 30 pulgadas"; // ❌ Error silencioso en modo normal, error real en "use strict"
// delete producto.precio;                     // ❌ También está prohibido

console.log(producto);
console.log(Object.isFrozen(producto)); // true
```

### ¿Qué hace `Object.freeze()`?

* Impide **modificaciones**, **eliminaciones** y **adiciones** de propiedades.
* El objeto se vuelve **inmutable**.
* Muy útil para proteger constantes o configuraciones.

---

## 3. `Object.seal()` – Sellar un objeto

```javascript
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300.5,
    disponible: true
};

Object.seal(producto); // Sella el objeto: permite modificar valores, pero no agregar o eliminar propiedades

// delete producto.precio;      // ❌ No permitido
// producto.peso = 5;           // ❌ No permitido

producto.nombre = "Monitor de 30 pulgadas"; // ✅ Sí se puede modificar valores existentes

console.log(producto);
console.log(Object.isSealed(producto)); // true
```

### ¿Qué hace `Object.seal()`?

* **Permite modificar** propiedades existentes.
* **No permite eliminar** ni **agregar** nuevas propiedades.
* El objeto está “sellado” en su estructura, pero no en sus valores.

---

## Comparación: `freeze` vs `seal`

| Operación            | Normal | `Object.seal()` | `Object.freeze()` |
| -------------------- | ------ | --------------- | ----------------- |
| Modificar valores    | ✅      | ✅               | ❌                 |
| Agregar propiedades  | ✅      | ❌               | ❌                 |
| Eliminar propiedades | ✅      | ❌               | ❌                 |

---

## Conclusión

* `"use strict"` mejora la calidad del código al aplicar reglas más estrictas.
* `Object.freeze()` es útil para proteger objetos que no deben cambiar.
* `Object.seal()` permite mantener los valores modificables, pero evita la estructura dinámica.
* Estos métodos ayudan a prevenir errores y asegurar integridad en tus datos.

