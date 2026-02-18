# Funciones en JavaScript – Parte 1

Las funciones permiten encapsular bloques de código que pueden ser reutilizados. Son fundamentales para estructurar programas de manera lógica, clara y reutilizable.

---

## 1. Declaración de función

```javascript
function sumar() {
    console.log(2 + 2);
}

sumar(); // 4
```

### Explicación:

* Se define usando la palabra clave `function`, seguida del nombre y paréntesis.
* Puede ser invocada en cualquier lugar del código, **incluso antes de su declaración** gracias al hoisting.

---

## 2. Expresión de función

```javascript
const sumar2 = function() {
    console.log(3 + 3);
};

sumar2(); // 6
```

### Diferencias clave:

| Característica                               | Declaración de función | Expresión de función           |
| -------------------------------------------- | ---------------------- | ------------------------------ |
| Hoisting (puede llamarse antes de definirla) | ✅ Sí                   | ❌ No                           |
| Sintaxis                                     | `function nombre() {}` | `const nombre = function() {}` |
| Ámbito                                       | Global o local         | Local (bloque, constante)      |

---

## 3. Ejemplo de comportamiento (hoisting)

```javascript
sumar(); // Funciona

function sumar() {
    console.log(2 + 2);
}

// sumar2(); ❌ Error: Cannot access 'sumar2' before initialization
const sumar2 = function() {
    console.log(3 + 3);
};
```

* Las funciones declaradas se **elevan al inicio** del contexto de ejecución.
* Las funciones expresadas **no se elevan** junto con su asignación.

---

## 4. Funciones vs Métodos

```javascript
const num1 = 20;
const num2 = "20";

console.log(parseInt(num2)); // Función: recibe un valor y devuelve otro

console.log(num1.toString()); // Método: se aplica sobre un objeto
```

### Diferencia:

* **Funciones**: pueden ser independientes. Ej: `parseInt(valor)`
* **Métodos**: funciones **ligadas a un objeto**. Ej: `"texto".toUpperCase()` o `num.toString()`

---

## 5. Funciones con parámetros

```javascript
function suma(a, b) {
    console.log(a + b);
}

suma(3, 1);   // 4
suma(22, 5);  // 27

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Felipe", "Peralta"); // Hola Felipe Peralta
```

* Los **parámetros** son variables dentro de la función.
* Los **argumentos** son los valores reales que se pasan al llamar la función.

---

## Conclusión

En esta primera parte aprendiste:

* Cómo declarar funciones de forma tradicional y como expresiones.
* Qué es el hoisting y cómo afecta su ejecución.
* La diferencia entre funciones y métodos.
* Cómo pasar datos a funciones mediante parámetros.

En la siguiente parte exploraremos:

* Retorno de valores (`return`)
* Funciones flecha (`=>`)
* Funciones anidadas o autoejecutables
