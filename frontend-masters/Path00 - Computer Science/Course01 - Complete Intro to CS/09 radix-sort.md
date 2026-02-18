# Radix Sort

- El Radix Sort representa la entrada a una nueva frontera: los algoritmos de ordenamiento no basados en comparaciones. A diferencia de todos los métodos vistos anteriormente (Bubble, Insertion, Merge y Quick Sort), este algoritmo no decide el orden de los elementos preguntando repetidamente "¿es X mayor que Y?".

## El Mecanismo de Funcionamiento

- En lugar de comparar números entre sí, el Radix Sort organiza los datos basándose en criterios externos, específicamente sus dígitos y valores posicionales.
  - Uso de Cubetas (Buckets): Para ordenar números enteros positivos, se crean diez "cubetas", una para cada dígito del 0 al 9.
  - Proceso Iterativo: El algoritmo realiza un ciclo de ordenamiento por cada posición decimal, comenzando por las unidades, luego las decenas, luego las centenas, y así sucesivamente.
  - Encolar y Desencolar: En cada iteración, los números se colocan en la cubeta correspondiente al dígito que se está evaluando. Posteriormente, se extraen de las cubetas en orden y se regresan al arreglo principal antes de pasar a la siguiente posición decimal.
  - Duración del Proceso: El número de veces que se repite este ciclo depende de la variable $d$, que representa la longitud del número más largo en el arreglo (por ejemplo, si el número más grande es 90,932, el ciclo se ejecutará 5 veces).

## Análisis de Complejidad

- El Radix Sort introduce nuevas variables en el cálculo de Big O, ya que no depende únicamente de la cantidad de elementos ($n$).
  - Complejidad Temporal $O(n * k)$: Aquí, $k$ (o $d$) es la longitud máxima de los números.
    - ¿Es mejor que $O(n \log n)$?: Depende de los datos. Es muy efectivo si hay muchos números con longitudes variadas y una buena distribución. Sin embargo, si los números crecen de forma que cada uno es mucho más largo que el anterior (ej. 1, 10, 100, 1000...), su rendimiento puede degradarse hasta $O(n^2)$.
  - Complejidad Espacial $O(n + k)$: Este algoritmo no es eficiente en términos de memoria, razón por la cual solo se utiliza en circunstancias muy específicas.

## Contexto y Diferenciación

- Mientras que los algoritmos basados en comparaciones tienen un límite de velocidad teórico de $O(n \log n)$, el Radix Sort intenta superar esa barrera cambiando la naturaleza del problema. No obstante, su alto consumo de espacio y su dependencia de la estructura de los números (como su longitud) lo hacen menos universal que otros métodos.

## Analogía

- Analogía para entender el Radix Sort:
  - Imagina que eres un cartero con cientos de cartas y debes ordenarlas por código postal. En lugar de comparar dos sobres para ver cuál va primero, pones 10 cajas en el suelo marcadas del 0 al 9. Primero repartes las cartas en las cajas según el último número del código. Luego las recoges en orden y vuelves a repartirlas según el penúltimo número, y así sucesivamente. Al terminar con el primer dígito del código, todas las cartas estarán perfectamente ordenadas sin que hayas tenido que comparar un sobre contra otro ni una sola vez.

## Infografía

![Infografía de Radix Sort](./img/radix-sort.png)
