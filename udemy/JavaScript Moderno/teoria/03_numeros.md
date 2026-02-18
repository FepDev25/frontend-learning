# Números en JavaScript

En JavaScript, los números son de tipo `number` y pueden ser enteros, decimales, positivos o negativos. Además, existen múltiples funciones nativas para realizar cálculos matemáticos complejos.

---

## 1. Declaración de números

```javascript
const num1 = 20;
const num2 = 30;
const num3 = 20.5;
const num4 = .259;
const num5 = -20;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
```

Estos son ejemplos de cómo declarar números en diferentes formas:

* Enteros (`20`, `30`)
* Decimales (`20.5`, `.259`)
* Negativos (`-20`)

También se puede crear un número como objeto, aunque no es común:

```javascript
const num6 = new Number(90);
console.log(num6); // [Number: 90]
```

El objeto `Number` se usa en contextos específicos, como validación avanzada o métodos especiales, pero para cálculos es mejor usar números simples (`number`).

---

## 2. Operaciones aritméticas básicas

```javascript
const num1 = 100;
const num2 = 10;

console.log(num1 + num2); // Suma → 110
console.log(num1 - num2); // Resta → 90
console.log(num1 * num2); // Multiplicación → 1000
console.log(num1 / num2); // División → 10
console.log(num1 % 87);   // Módulo (residuo) → 13
```

Estas son las operaciones matemáticas esenciales que puedes realizar con números.

---

## 3. Funciones del objeto `Math`

JavaScript incluye el objeto `Math` con métodos matemáticos predefinidos:

```javascript
console.log(Math.PI); // Valor de π

console.log(Math.round(2.2)); // Redondea al entero más cercano → 2
console.log(Math.round(2.8)); // → 3

console.log(Math.ceil(2.2));  // Redondeo hacia arriba → 3
console.log(Math.floor(2.8)); // Redondeo hacia abajo → 2

console.log(Math.sqrt(144));  // Raíz cuadrada → 12
console.log(Math.abs(-78));   // Valor absoluto → 78

console.log(Math.pow(2, 8));  // Potencia 2^8 → 256

console.log(Math.min(1, 5, 10, 90, 2)); // Mínimo → 1
console.log(Math.max(1, 5, 10, 90, 2)); // Máximo → 90

console.log(Math.floor(Math.random() * 100)); // Número aleatorio entre 0 y 99
```

**Importante**: `Math.random()` genera un número decimal aleatorio entre 0 y 1, por eso se multiplica y redondea para obtener enteros.

---

## 4. Precedencia de operaciones

```javascript
console.log(20 + 30 * 2);       // 80
console.log((20 + 30) * 2);     // 100
```

* **Sin paréntesis**, se sigue la jerarquía: multiplicación antes que suma.
* **Con paréntesis**, se fuerza el orden.

Ejemplo práctico: cálculo con impuestos o descuentos:

```javascript
console.log((20+30+51+2.5+3.33) * 0.85); // Aplica 15% de descuento
console.log((20+30+51+2.5+3.33) * 1.15); // Aplica 15% de impuesto
```

---

## 5. Incrementos

```javascript
let puntaje = 10;
console.log(puntaje++); // 10 (post-incremento)
console.log(puntaje);   // 11

puntaje = 10;
console.log(++puntaje); // 11 (pre-incremento)

puntaje = 10;
console.log(puntaje += 5); // 15 (aumento con asignación directa)
```

* `++` incrementa en 1.
* `+=` suma cualquier cantidad y reasigna el valor.

---

## 6. Conversión de strings a números

```javascript
const num1 = "20";
const num2 = "20.2";
const num3 = 30;

console.log(num1 + num3); // "2030" (concatenación)
console.log(num2 + num3); // "20.230"

console.log(Number.parseInt(num1) + num3);   // 50
console.log(Number.parseFloat(num2) + num3); // 50.2
```

Cuando se suman strings y números, **JavaScript convierte todo a string**, a menos que se usen funciones como:

* `parseInt()`: convierte string a entero
* `parseFloat()`: convierte string a decimal

Validación de si un valor es entero:

```javascript
console.log(Number.isInteger(num1)); // false (es string)
console.log(Number.isInteger(num2)); // false (también string)
console.log(Number.isInteger(num3)); // true
```

---

## Conclusión

Los números en JavaScript son versátiles, pero requieren cuidado:

* El tipado dinámico puede llevar a errores (ej. "20" + 10 = "2010").
* Usa `Math` para operaciones matemáticas seguras.
* Asegúrate de convertir valores antes de operar (`parseInt`, `parseFloat`).

