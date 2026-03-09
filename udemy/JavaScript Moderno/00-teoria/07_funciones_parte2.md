# Funciones en JavaScript – Parte 2

En esta segunda parte exploramos:
- Parámetros con valores por defecto
- Flujo de ejecución entre funciones
- El uso de `return` para devolver valores
- Composición de funciones para construir lógica compleja

---

## 1. Parámetros por defecto

```javascript
function saludar(nombre = "Sin nombre", apellido = "Sin apellido") {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();                        // Hola Sin nombre Sin apellido
saludar("Felipe", "Peralta");    // Hola Felipe Peralta
```

### Explicación:

* Puedes asignar **valores por defecto** a los parámetros.
* Si no se pasa un valor al llamar la función, se usa el valor por defecto.
* Mejora la robustez del código evitando `undefined`.

---

## 2. Flujo de ejecución entre funciones

```javascript
iniciarApp("Felipe");

function iniciarApp(nombre = "No nombre") {
    console.log("Iniciando app");
    segundaFuncion();
    usuarioAutenticado(nombre);
}

function segundaFuncion() {
    console.log("Segunda función");
}

function usuarioAutenticado(nombre) {
    console.log("Autenticando usuario...");
    console.log("Usuario autenticado: " + nombre);
}
```

### Explicación:

* Una función puede **llamar a otras funciones**.
* Esto permite dividir tareas complejas en pasos más simples.
* El flujo sigue el orden en que se llaman las funciones, no en que están escritas.

---

## 3. Retornar valores (`return`)

```javascript
function sumar(num1 = 0, num2 = 0) {
    return num1 + num2;
}

const result = sumar(10, 23);
console.log(result); // 33
```

### Notas:

* La palabra clave `return` **devuelve un valor** al lugar donde se llama la función.
* Sin `return`, una función devuelve `undefined`.

---

## 4. Composición de funciones: carrito e impuestos

```javascript
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

total = agregarCarrito(13);
total = agregarCarrito(120);
total = agregarCarrito(200);
total = agregarCarrito(45.45);

function calcularImpuesto(total) {
    return total * 1.15;
}

const totalPagar = calcularImpuesto(total);
console.log("Total: " + total);
console.log("Total a pagar: " + totalPagar);
```

### Explicación:

* `agregarCarrito()` suma precios al total.
* `calcularImpuesto()` toma el total y devuelve el monto con 15% adicional.
* Este patrón es común: **una función construye datos, otra los procesa**.

---

## Conclusión

En esta parte aprendiste a:

* Usar valores por defecto en parámetros
* Llamar funciones desde otras funciones para organizar el flujo de trabajo
* Retornar valores y asignarlos a variables
* Combinar funciones para construir lógica de negocio más robusta
