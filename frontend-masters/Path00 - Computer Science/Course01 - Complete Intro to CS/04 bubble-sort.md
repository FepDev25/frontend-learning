# Bubble Sort

- El Bubble Sort (o sorteo de burbuja) es un algoritmo de ordenamiento iterativo que suele ser el primero en enseñarse debido a que se alinea muy bien con el modelo mental humano de cómo ordenar objetos.

## Mecanismo de Funcionamiento

- El algoritmo funciona mediante una lógica simple de comparación y paridad:
  - Se comparan dos elementos adyacentes en un arreglo.
  - Si están en el orden incorrecto (el más grande aparece primero), se intercambian (swap).
  - El algoritmo avanza un índice y repite la comparación hasta llegar al final del arreglo.
  - Si durante una pasada completa se realizó al menos un intercambio, el algoritmo debe volver a empezar desde el inicio, ya que la lista podría seguir desordenada.
  - El proceso termina únicamente cuando se completa una pasada completa sin realizar ningún intercambio.

## El concepto de "Burbuja" y su Optimización

- El nombre "Bubble Sort" proviene del hecho de que los números más grandes "burbujean" hacia las últimas posiciones del arreglo.
  - Garantía de orden: Al final de la primera iteración, el número más grande está garantizado de estar en la última posición.
  - Optimización: Debido a lo anterior, en cada nueva pasada se puede verificar un elemento menos que en la anterior, ya que el final del arreglo se va consolidando como una sección ya ordenada. Aunque esto hace que el algoritmo sea más rápido en la práctica, no cambia su clasificación general en la notación Big O.

## Complejidad Computacional y Espacial

- El rendimiento del Bubble Sort varía drásticamente según el estado inicial de los datos:
  - Mejor caso $O(n)$: Ocurre cuando la lista ya está ordenada. El algoritmo recorre los elementos una sola vez, no realiza intercambios y finaliza.
  - Peor caso $O(n^2)$: Sucede cuando la lista está ordenada exactamente al revés. Requiere el máximo de comparaciones e intercambios en cada pasada.
  - Caso promedio $O(n^2)$: Con una lista aleatoria, el número de comparaciones e intercambios crece de forma exponencial respecto al tamaño de la entrada.
  - Complejidad Espacial $O(1)$: Es sumamente eficiente en memoria porque opera directamente sobre el arreglo original sin crear estructuras adicionales.

## Características Adicionales

- Es destructivo: Al operar sobre el arreglo original, se pierde el orden inicial de los datos. Si se necesita conservar la lista original, se debe crear una copia antes de empezar.
- Es estable: Se considera un algoritmo estable porque garantiza que, si dos elementos son iguales, conservarán el mismo orden relativo que tenían al principio.

## Analogía

- Analogía para entender el Bubble Sort:
  - Imagina una fila de personas de diferentes estaturas que quieren ordenarse de menor a mayor. El primer humano se compara con el segundo; si es más alto, intercambian lugares. Luego, esa persona (si resultó ser la más alta) se compara con la tercera, y así sucesivamente hasta que la persona más alta de todas llegue al final de la fila. El proceso se repite hasta que el más alto de los que quedan llegue a su lugar, como si las personas más altas fueran burbujas de aire subiendo hacia la superficie de un estanque.

## Ingofrafia explicativa

![Bubble sort](./img/bubble%20sort.png)
