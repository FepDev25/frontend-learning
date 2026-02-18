# Estructuras de Control en JavaScript – Parte 1

Las estructuras de control permiten modificar el flujo de ejecución de un programa dependiendo de ciertas condiciones. Las más comunes son `if`, `else` y `else if`.

---

## 1. Estructura básica `if...else`

```javascript
const puntaje = 1000;

if (puntaje === 1000) {
    console.log("Es igual");
} else {
    console.log("No es igual");
}
```

### Explicación:

* `if` evalúa una condición lógica.
* Si se cumple (`true`), ejecuta el bloque que le sigue.
* `else` se ejecuta si la condición es falsa.

---

## 2. Cambiar el valor y evaluar

```javascript
let puntaje = 1000;

if (puntaje === 1000) {
    console.log("Es igual");
} else {
    console.log("No es igual");
}

puntaje = 2000;

if (puntaje === 1000) {
    console.log("Es igual");
} else {
    console.log("No es igual");
}

puntaje = 3000;

if (puntaje !== 1000) {
    console.log("Es diferente");
} else {
    console.log("No es diferente");
}
```

### Notas:

* Puedes usar operadores como `===` (igual estricto) o `!==` (diferente estricto).
* El valor de la variable se puede cambiar y luego volver a evaluar.

---

## 3. Función con estructura `if...else`

```javascript
function puedoPagar(dinero, totalPagar) {
    console.log("Dinero: " + dinero);
    console.log("Total a pagar: " + totalPagar);

    if (dinero >= totalPagar) {
        console.log("Se puede pagar. Saldo restante: " + (dinero - totalPagar));
    } else {
        console.log("Saldo insuficiente");
    }
}

puedoPagar(300, 100);  // saldo restante
puedoPagar(300, 300);  // saldo exacto
puedoPagar(300, 305);  // saldo insuficiente
```

* Esta estructura compara dos valores y toma decisiones.
* Usa un operador relacional (`>=`) para comparar montos.

---

## 4. Estructura `if...else if...else`

```javascript
function puedoPagar(dinero, totalPagar) {
    console.log("Dinero: " + dinero);
    console.log("Total a pagar: " + totalPagar);

    if (dinero > totalPagar) {
        console.log("Se puede pagar. Saldo restante: " + (dinero - totalPagar));
    } else if (dinero === totalPagar) {
        console.log("Se puede pagar, te quedas sin nada de dinero");
    } else {
        console.log("Saldo insuficiente");
    }
}

puedoPagar(300, 100);   // saldo restante
puedoPagar(300, 300);   // saldo exacto
puedoPagar(300, 305);   // saldo insuficiente
```

### Explicación:

* `else if` permite evaluar **condiciones adicionales** si la primera no se cumple.
* Se evalúan en orden: al cumplirse una, se ignoran las demás.

---

## Conclusión

En esta primera parte aprendiste:

* La estructura básica de `if`, `else` y `else if`
* Cómo usarlas para comparar valores
* Cómo aplicarlas dentro de funciones para tomar decisiones
