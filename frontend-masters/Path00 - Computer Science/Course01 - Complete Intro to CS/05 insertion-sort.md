# Insertion Sort

- El Insertion Sort (o sorteo por inserción) es un algoritmo de ordenamiento iterativo que, aunque no es el más rápido para todos los casos, resulta sumamente útil en contextos específicos, especialmente cuando los datos ya están parcialmente ordenados.

## Mecanismo de Funcionamiento

- La lógica de este algoritmo consiste en dividir imaginariamente la lista en dos secciones: una parte ordenada y una parte desordenada.
  - Inicio: El algoritmo considera que el primer elemento (índice 0) ya está ordenado, ya que, por definición, una lista de un solo elemento no requiere cambios.
  - Proceso de inserción: Se toma el siguiente elemento de la parte desordenada y se compara hacia atrás con los elementos de la sección ordenada.
  - Comparación y desplazamiento: El algoritmo pregunta: "¿Es el elemento que quiero insertar mayor que el que estoy viendo?". Si no lo es, se van moviendo los elementos más grandes hacia la derecha mediante intercambios (*swaps*) hasta encontrar la posición correcta donde insertar el nuevo elemento.
  - Finalización: Este proceso se repite elemento por elemento hasta que se ha recorrido toda la lista.

## Análisis de Complejidad

- El rendimiento del Insertion Sort varía significativamente dependiendo del estado inicial de los datos:
  - Mejor caso $O(n)$: Ocurre cuando la lista ya está totalmente ordenada. En esta situación, el algoritmo solo hace una comparación por cada elemento ("¿es $x$ mayor que $y$?") y, al confirmar que sí, no necesita realizar ningún intercambio ni comparaciones adicionales.
  - Peor caso $O(n^2)$: Se presenta con una lista en orden inverso. Aquí, cada nuevo elemento debe compararse y moverse desde el final hasta el principio de la sección ordenada en cada iteración.
  - Caso promedio $O(n^2)$: En una lista aleatoria, el número de comparaciones e intercambios crece de forma exponencial respecto al tamaño del arreglo.
  - Complejidad Espacial $O(1)$: Es muy eficiente en términos de memoria, ya que no crea estructuras de datos adicionales; todo el proceso ocurre dentro del mismo arreglo.

## Ventajas y Casos de Uso

- El Insertion Sort destaca en situaciones donde otros algoritmos más avanzados (como Quick Sort o Merge Sort) pueden ser menos eficientes:
  - Datos "casi ordenados": Si se sabe que la lista ya está cerca de su orden final, el Insertion Sort es extremadamente rápido, superando incluso a algoritmos más complejos.
  - Estabilidad y naturaleza: Es un algoritmo destructivo, porque modifica el arreglo original, y puede ser estable, lo que significa que mantiene el orden relativo de elementos con valores iguales si se programa correctamente.

## Analogía

- Analogía para entender el Insertion Sort:
  - Imagina que estás jugando a las cartas y te van entregando una por una. Tomas la primera y la dejas en tu mano (ya está "ordenada"). Cuando recibes la segunda, la comparas con la primera y la colocas a su izquierda o derecha según corresponda. Al recibir la tercera, miras tu mano de derecha a izquierda y vas desplazando las cartas más altas hasta que encuentras el "hueco" exacto donde insertar tu nueva carta. Así continúas hasta que tienes toda tu mano organizada.

## Ingofrafia explicativa

![Bubble sort](./img/insercion%20sort.png)
