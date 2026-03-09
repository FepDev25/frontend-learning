# Variables en JavaScript

JavaScript permite declarar variables utilizando tres palabras clave: `var`, `let` y `const`. Cada una tiene comportamientos distintos en cuanto a **ámbito**, **reasignación** y **hoisting**.

---

## 1. Usando `var`

```javascript
console.log("Variables");

// Inicializar variable con valor
var producto = "Monitor de 24 pulgadas";
console.log(producto); // "Monitor de 24 pulgadas"

// Reasignar valor
producto = "Monitor de 12 pulgadas";
console.log(producto); // "Monitor de 12 pulgadas"

// Tipado dinámico
producto = 56;
console.log(producto); // 56

// Inicializar y luego dar valor
var disponible;
disponible = true;
console.log(disponible); // true

// Inicializar múltiples variables en una línea
var num1 = 5,
    num2 = 10,
    num3 = 15;
console.log(num1, num2, num3); // 5 10 15
```

**Características de `var`:**

* Puede ser redeclarada y reasignada.
* Tiene **ámbito de función**.
* Es **hoisted**, pero sin su valor.

---

## 2. Usando `let`

```javascript
let producto = "Celular";
console.log(producto); // "Celular"

producto = "Tablet";
console.log(producto); // "Tablet"

producto = null;
console.log(producto); // null

producto = false;
console.log(producto); // false
```

**Características de `let`:**

* Puede ser reasignada, pero **no redeclarada** en el mismo ámbito.
* Tiene **ámbito de bloque** (`{ ... }`).
* Es preferida sobre `var` por evitar errores de redeclaración accidental.

---

## 3. Usando `const`

```javascript
const nombre = "Felipe";
console.log(nombre); // "Felipe"

// No se pueden reasignar
// nombre = "Carlos"; ❌ Error

// Deben inicializar con un valor
// const edad; ❌ Error
```

**Características de `const`:**

* No puede ser reasignada ni redeclarada.
* Debe ser **inicializada al momento de la declaración**.
* Tiene **ámbito de bloque**.

---

## Conclusión

* Usa `const` por defecto.
* Usa `let` si sabes que el valor cambiará.
* Evita `var` en código moderno, ya que puede introducir errores difíciles de rastrear.
