# Binary Search

- La búsqueda binaria (*Binary Search*) es un método eficiente para localizar un elemento específico dentro de un arreglo, comparándose directamente con la búsqueda lineal, que es el método más simple pero menos eficiente.

## El requisito fundamental: El orden

- A diferencia de la búsqueda lineal, que puede trabajar con cualquier lista, la búsqueda binaria solo funciona si el arreglo ya está ordenado. Si los datos no tienen un orden previo, el algoritmo no puede tomar las decisiones lógicas necesarias para descartar elementos.

## Mecanismo de "Dividir para Conquistar"

- El funcionamiento de la búsqueda binaria se basa en reducir el área de búsqueda a la mitad en cada paso:
  - Punto de partida: El algoritmo se dirige directamente al centro del arreglo.
  - Comparación: Se compara el elemento central con el valor que se está buscando.
  - Descarte:
    - Si el valor buscado es menor que el central, el algoritmo sabe con certeza que el elemento no puede estar en la mitad derecha, por lo que descarta esa mitad y repite el proceso en la izquierda.
    - Si el valor es mayor, descarta la mitad izquierda y busca en la derecha.
  - Finalización: Este proceso de ir "hacia la mitad de la mitad" continúa hasta que se encuentra el elemento o se agotan las posibilidades.

## Ejemplo Práctico

- Tomando el ejemplo de las fuentes para buscar el número 12 en el arreglo:

1. Se inicia en el medio: ¿Es 19 igual a 12? No, 12 es menor, así que vamos a la izquierda.
2. Se busca en el medio de la mitad pequeña: ¿Es 10 igual a 12? No, 12 es mayor, así que vamos a la derecha.
3. Se revisa el espacio restante (que en este caso es solo el número 12) y se encuentra el objetivo.

## Complejidad y Eficiencia

- Búsqueda Lineal: Tiene una complejidad de $O(n)$, ya que en el peor de los casos debe revisar cada elemento uno por uno.
- Búsqueda Binaria: Este proceso de "dividir a la mitad" repetidamente corresponde a una complejidad temporal de $O(\log n)$. Esto la hace extremadamente rápida para manejar grandes volúmenes de datos.

## Analogía

- Analogía para entender la Búsqueda Binaria:
  - Imagina que buscas un nombre en una guía telefónica (una lista ordenada de nombres). No empiezas desde la primera página leyendo nombre por nombre (eso sería búsqueda lineal). En lugar de eso, abres el libro por la mitad. Si el nombre que buscas empieza con "B" y el libro se abrió en la "M", sabes que no está en la segunda mitad del libro. Cierras esa mitad y repites el proceso con la primera parte, abriéndola de nuevo por la mitad hasta que llegas a la página exacta.

## Infografía

- ![Infografía de Búsqueda Binaria](./img/binary%20search.png)
