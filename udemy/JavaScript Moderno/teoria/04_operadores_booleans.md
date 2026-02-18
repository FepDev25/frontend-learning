# Operadores y Booleanos en JavaScript

En este módulo se abordan los operadores de comparación y los valores booleanos en JavaScript, incluyendo casos especiales como `undefined` y `null`.

---

## 1. Operadores de comparación

```javascript
const num1 = 20;
const num2 = "20";
const num3 = 30;

console.log(`${num1} == ${num2}:`);
console.log(num1 == num2); // true

console.log(`${num1} != ${num2}:`);
console.log(num1 != num2); // false

console.log(`${num1} !== ${num2}:`);
console.log(num1 !== num2); // true

console.log(`${num1} === ${num3}:`);
console.log(num1 === num3); // false

console.log(`${num1} > ${num3}:`);
console.log(num1 > num3); // false

console.log(`${num1} < ${num3}:`);
console.log(num1 < num3); // true

console.log(`${num2} === ${num3}:`);
console.log(num2 === num3); // false

console.log(`${num2} != ${num3}:`);
console.log(num2 != num3); // true
```

### Explicación:

* `==`: comparación con **conversión de tipo**. `"20" == 20` es `true`.
* `===`: comparación **estricta**, no convierte tipos. `"20" !== 20` es `true`.
* `!=` y `!==`: desigualdad, con y sin conversión respectivamente.
* `>`, `<`: operadores relacionales, comparan magnitud numérica.

---

## 2. Valores `undefined` y `null`

```javascript
console.log("**********Undefined***********");
let numero;
console.log(numero);           // undefined
console.log(typeof numero);    // "undefined"

console.log("**********null***********");
let numero1 = null;
console.log(numero1);          // null
console.log(typeof numero1);   // "object" (quirk de JavaScript)

console.log("**********Comparación*************");
console.log(numero == numero1);  // true (ambos representan "ausencia de valor")
console.log(numero === numero1); // false (tipos distintos)
```

### Explicación:

* `undefined`: variable declarada pero **no inicializada**.
* `null`: representa **intencionalmente vacío**.
* `typeof null` devuelve `"object"` por un error histórico en el lenguaje.

---

## 3. Booleanos

```javascript
const boolean1 = true;
const boolean2 = false;
console.log(boolean1, boolean2);     // true false
console.log(typeof boolean1);       // "boolean"

const boolean3 = new Boolean(true);
console.log(boolean3);              // [Boolean: true]
console.log(typeof boolean3);       // "object"
```

* Los booleanos literales (`true`, `false`) son del tipo primitivo `boolean`.
* Usar `new Boolean()` crea un **objeto**, no un valor primitivo. Esto puede causar errores lógicos.

---

## 4. Comparaciones con booleanos

```javascript
const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2); // false
console.log(boolean1 === true);     // true
```

* Comparaciones booleanas siguen el mismo principio: con `===` se verifica **valor y tipo**.
* Evita comparar valores booleanos con `==` si estás manejando objetos (`new Boolean`).

---

## Conclusión

* Usa `===` y `!==` para comparaciones más seguras.
* Evita crear booleanos como objetos con `new`.
* Comprende las diferencias entre `undefined` y `null` para evitar errores sutiles.
* Los operadores de comparación son clave para estructuras de control (`if`, `while`, etc.).
