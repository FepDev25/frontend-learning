# Estructuras de Control en JavaScript – Parte 2

En esta segunda parte veremos estructuras de control más avanzadas como:
- `switch`
- operadores lógicos (`&&`, `||`, `!`)
- operador ternario (`condición ? true : false`)

---

## 1. Uso combinado de `if` y `switch`

```javascript
function puedoPagar(dinero, totalPagar, metodoPago) {
    console.log("\nDinero: " + dinero);
    console.log("Total a pagar: " + totalPagar);

    if (dinero > totalPagar) {
        console.log("Se puede pagar. Saldo restante: " + (dinero - totalPagar));
    } else if (dinero === totalPagar) {
        console.log("Se puede pagar, te quedas sin nada de dinero");
    } else {
        console.log("Saldo insuficiente");
        return;
    }

    switch (metodoPago) {
        case "tarjeta":
            console.log("Pagando con tarjeta...");
            break;
        case "efectivo":
            console.log("Pagando con efectivo...");
            break;
        case "cheque":
            console.log("Pagando con cheque...");
            break;
        default:
            console.log("No se especificó el método de pago");
            break;
    }
}

puedoPagar(300, 100, "efectivo");
puedoPagar(300, 300, "cheque");
puedoPagar(300, 300, "otro");
puedoPagar(300, 305, "tarjeta");
puedoPagar(300, "Letras");
```

### Explicación:

* Se usa `switch` para evaluar distintos **métodos de pago**.
* Cada `case` representa una opción.
* `default` actúa como una opción por defecto cuando no hay coincidencias.

---

## 2. Operadores lógicos: `&&`, `||`, `!`

```javascript
function compra(usuario, puedePagar) {
    if (usuario && puedePagar) {
        console.log("Puede comprar");
    } else if (!usuario) {
        console.log("Crea una cuenta");
    } else if (!puedePagar) {
        console.log("No tienes fondos suficientes");
    } else {
        console.log("No puede comprar");
    }
}

compra(false, true); // Crea una cuenta
compra(true, true);  // Puede comprar
```

### Operadores usados:

* `&&` (AND): ambas condiciones deben ser verdaderas.
* `||` (OR): una o ambas condiciones pueden ser verdaderas.
* `!` (NOT): invierte el valor lógico.

---

## 3. Operador ternario

```javascript
const autenticado = true;
console.log(autenticado ? "Autenticado" : "No autenticado");

const num1 = 400;
const frase = num1 > 350 ? "Number mayor a 350" : "Number menor a 350";
console.log(frase);
```

### Sintaxis:

```javascript
condición ? valor_si_true : valor_si_false;
```

* Es una forma **compacta** de escribir condiciones simples.
* No es recomendable para estructuras muy complejas, pero útil para asignaciones rápidas.

---

## Conclusión

En esta parte aprendiste:

* A usar `switch` para evaluar múltiples condiciones específicas.
* Cómo usar operadores lógicos (`&&`, `||`, `!`) en estructuras de control.
* Qué es el operador ternario y cómo simplifica condiciones simples.
