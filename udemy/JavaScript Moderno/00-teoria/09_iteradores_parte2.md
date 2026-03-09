# Iteradores en JavaScript – Parte 2

En esta parte exploramos dos estructuras de repetición adicionales a `for`:
- `while`
- `do...while`

---

## 1. Bucle `while`

```javascript
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}
```

### Explicación:

* `while` evalúa la **condición antes de ejecutar** el bloque de código.
* Si la condición es verdadera, se ejecuta; si es falsa, no se ejecuta nunca.
* Es útil cuando **no se conoce de antemano** cuántas veces se debe repetir el bucle.

---

## 2. Bucle `do...while`

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i <= 10);
```

### Explicación:

* A diferencia de `while`, `do...while` **ejecuta el bloque al menos una vez** antes de evaluar la condición.
* Esto garantiza que el código interno se ejecute **mínimo una vez**, aunque la condición sea falsa.

---

## 3. Demostración del comportamiento único de `do...while`

```javascript
console.log("Al menos una vez");

i = 800;

do {
    console.log(i);
} while (i <= 10);
```

### Resultado:

```plaintext
Al menos una vez
800
```

Aunque `i <= 10` es falso, el código se ejecuta una vez antes de comprobarlo, gracias al comportamiento del `do...while`.

---

## Comparación rápida

| Característica           | `while` | `do...while` |
| ------------------------ | ------- | ------------ |
| Evalúa antes             | ✅       | ❌            |
| Evalúa después           | ❌       | ✅            |
| Ejecuta al menos una vez | ❌       | ✅            |
| Repetición condicional   | ✅       | ✅            |

---

## Conclusión

En esta parte aprendiste:

* A usar `while` para repetir bloques mientras una condición sea verdadera
* A usar `do...while` cuando necesitas que el bloque se ejecute **al menos una vez**
* Las diferencias clave entre ambos tipos de bucle
