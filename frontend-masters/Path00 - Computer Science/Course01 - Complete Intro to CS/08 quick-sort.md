# Quick Sort

- El Quick Sort es reconocido como uno de los algoritmos de ordenamiento más potentes y útiles en la informática. Al igual que el Merge Sort, utiliza una estrategia de "divide y vencerás" mediante recursión, pero con un enfoque distinto basado en la partición de datos.

## El Mecanismo del Pivote

- El núcleo del Quick Sort es la selección de un elemento llamado pivote. El proceso funciona de la siguiente manera:
  - Selección: Por lo general, se toma el último elemento de la lista como pivote.
  - Partición: Se crean dos listas nuevas: una "izquierda" para todos los elementos menores al pivote y una "derecha" para los elementos mayores.
  - Recursión: El algoritmo se llama a sí mismo de forma independiente para las listas izquierda y derecha.
  - Caso Base: La recursión se detiene cuando se recibe una lista de longitud 0 o 1, la cual se devuelve tal cual.
  - Concatenación: Una vez ordenadas las sublistas, se unen en el orden: lista izquierda + pivote + lista derecha.

## Análisis de Complejidad Temporal

- A diferencia del Merge Sort, el rendimiento del Quick Sort depende fuertemente de qué tan "centrado" sea el pivote elegido:
  - Caso Promedio y Mejor Caso $O(n \log n)$: Ocurre con listas distribuidas al azar, donde los pivotes tienden a quedar en el medio, permitiendo dividir el trabajo de manera equilibrada y aprovechar la eficiencia logarítmica.
  - Peor Caso $O(n^2)$: Curiosamente, el peor escenario es una lista ya ordenada o en orden inverso. En este caso, el pivote siempre es el número más grande o pequeño, lo que impide omitir comparaciones y obliga al algoritmo a comparar cada número contra todos los demás.

## Complejidad Espacial

- La demanda de memoria varía según cómo se implemente el algoritmo:
  - Implementación Básica $O(n)$: Si se crean arreglos nuevos en cada llamada recursiva (para facilitar la comprensión), la complejidad es lineal.
  - Implementación *In-place* $O(\log n)$: Es posible realizar el ordenamiento de forma "destructiva" operando directamente sobre el arreglo original. Esta versión es frecuentemente preferida sobre el Merge Sort porque consume mucha menos memoria.

## Variaciones y Optimizaciones

- Para evitar el peor caso de $O(n^2)$, existen variantes en la elección del pivote:
  - Quicksort3: Se toma el primer elemento, el del medio y el último, y se elige la mediana entre ellos como pivote. Esto garantiza que el pivote no sea el valor extremo, eliminando prácticamente el riesgo del peor caso a cambio de un ligero costo adicional en comparaciones.
  - Pivote Aleatorio: Otros enfoques simplemente eligen un elemento al azar en cada iteración.

## Analogía

- Analogía para entender el Quick Sort:
  - Imagina que tienes un grupo de personas de diferentes estaturas y quieres ordenarlas. Eliges a una persona al azar (el pivote) y le pides a todos los que sean más bajos que se pongan a su izquierda y a los más altos a su derecha. Luego, en cada uno de esos dos grupos, repites el proceso eligiendo a otra persona como pivote. Cuando todos los subgrupos se hayan dividido hasta ser de una sola persona, al pedirles que se junten de nuevo en el orden establecido, toda la fila estará perfectamente organizada.

## Infografía

![Infografía de Quick Sort](./img/quick-sort.png)
