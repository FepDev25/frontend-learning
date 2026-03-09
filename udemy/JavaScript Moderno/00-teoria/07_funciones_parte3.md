# Funciones en JavaScript – Parte 3

En esta parte aprenderás sobre:
- Funciones flecha (`=>`)
- Declaración de métodos en objetos
- Uso de `set` y `get` para acceder a propiedades de forma controlada

---

## 1. Métodos dentro de objetos y uso de `get` / `set`

```javascript
const reproductor = {
    song: '',

    reproducir: id => console.log("Reproduciendo: " + id),
    borrar: id => console.log("Borrando: " + id),
    pausar: () => console.log("Pausando"),
    crearPlaylist: nombrePlaylist => console.log("Crear playlist: " + nombrePlaylist),
    reproducirPlaylist: nombrePlaylist => console.log("Reproduciendo Playlist: " + nombrePlaylist),

    setSong(song) {
        this.song = song;
    },

    get getSong() {
        return this.song;
    }
};

reproductor.setSong("Close to the edge");
console.log(reproductor.getSong);

reproductor.reproducir(2);
reproductor.pausar();
reproductor.borrar(2);
reproductor.crearPlaylist("Rock 90s");
reproductor.reproducirPlaylist("Rock 90s");
```

### Explicación:

* Los métodos se pueden definir directamente dentro de objetos.
* `setSong()` permite asignar un valor controlado.
* `get getSong()` permite obtener el valor como si fuera una propiedad (`reproductor.getSong`).
* Ideal para encapsular lógica de acceso y modificación.

> ⚠️ Las funciones flecha no deben usarse para métodos que dependan de `this`, ya que no tienen su propio `this`.

---

## 2. Funciones flecha básicas

```javascript
const aprendiendo = function() {
    console.log("Aprendiendo");
};

const aprendiendo2 = () => console.log("Aprendiendo");

aprendiendo();  // Aprendiendo
aprendiendo2(); // Aprendiendo
```

### Explicación:

* Las **funciones flecha** (`=>`) son una sintaxis más concisa.
* Se usan especialmente para callbacks y funciones anónimas.
* No tienen su propio `this`, lo cual puede ser útil o problemático según el caso.

---

## 3. Funciones flecha con retorno directo

```javascript
const sumar5 = (num) => num + 5;
console.log(sumar5(10)); // 15
```

* Si el cuerpo de la función es una sola expresión, se puede omitir `return` y las llaves.

---

## 4. Funciones flecha con lógica compuesta

```javascript
const operar = (a, b) => {
    const c = a * b;
    return (a + b) / c;
};

console.log(operar(9, 67)); // Resultado de la operación
```

* Si necesitas varias instrucciones, usa llaves `{}` y una declaración `return` explícita.

---

## Conclusión

En esta tercera parte aprendiste:

* Cómo definir métodos dentro de objetos
* Qué son y cómo usar funciones flecha (`=>`)
* Cómo implementar `set` y `get` en objetos para control de propiedades
* Que las funciones flecha no deben usarse como métodos si requieren `this`

Esto concluye el módulo completo sobre funciones en JavaScript. ¡Ahora tienes una comprensión sólida tanto de su sintaxis como de sus aplicaciones más avanzadas!
