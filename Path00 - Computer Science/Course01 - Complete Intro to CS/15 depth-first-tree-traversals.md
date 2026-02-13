# Depth-First Tree Traversals

Los Recorridos en Profundidad (o *Depth-First Tree Traversals*) son métodos fundamentales para recorrer y procesar todos los nodos de un árbol. Aunque los árboles están diseñados para ser estructuras de búsqueda eficientes, a menudo surge la necesidad de serializarlos, es decir, "aplanar" esa estructura jerárquica para convertirla en una lista lineal simple (como un arreglo).

Lo que distingue a estos recorridos es el orden en que se visita el nodo actual en relación con sus subárboles (hijos). Todos utilizan la recursión como motor principal.

A continuación, presento la explicación teórica de las tres variantes mencionadas en las fuentes:

## Pre-order Traversal (Pre-orden)

En este método, la prioridad es procesar el nodo actual antes de descender a sus hijos.

- Lógica:
    1. Procesar el nodo actual (ej. guardarlo en un array).
    2. Llamar recursivamente al subárbol izquierdo.
    3. Llamar recursivamente al subárbol derecho.
- Resultado: En el ejemplo de las fuentes, el recorrido produce ``. Observa cómo el 8 (raíz) aparece al principio,.
- Caso de uso ideal: Es extremadamente útil para hacer una copia profunda (*deep copy*) del árbol. Al copiar primero el nodo padre, puedes crear la estructura y luego agregarle sus hijos izquierdo y derecho progresivamente.

## In-order Traversal (En-orden)

Este método respeta el orden natural de los elementos (de izquierda a derecha).

- Lógica:
    1. Llamar recursivamente al subárbol izquierdo.
    2. Procesar el nodo actual.
    3. Llamar recursivamente al subárbol derecho,.
- Resultado: Si el árbol es un BST válido, este recorrido produce una lista perfectamente ordenada de menor a mayor (ej. `[1, 3, ... 6, 7, 8, 10...]`).
- Caso de uso ideal: Se utiliza cuando necesitas extraer una lista ordenada de un Árbol de Búsqueda Binaria (BST).

## Post-order Traversal (Post-orden)

Aquí, el procesamiento del nodo se pospone hasta el final, después de haber visitado a todos sus descendientes.

- Lógica:
    1. Llamar recursivamente al subárbol izquierdo.
    2. Llamar recursivamente al subárbol derecho.
    3. Procesar el nodo actual.
- Resultado: La raíz del árbol (8) aparecerá hasta el final de la lista (ej. `[..., 10, 8]`) porque es el último elemento en ser procesado después de todos sus hijos.
- Caso de uso ideal: Es fundamental para eliminar un árbol. Dado que procesas a los hijos antes que al padre, te aseguras de borrar las hojas y ramas inferiores antes de borrar el nodo que las sostiene, evitando errores de referencia o nodos huérfanos.

## Resumen teórico

La diferencia entre estos tres métodos es simplemente cuándo realizas la operación ("procesar el nodo") dentro de la función recursiva. Si lo haces antes de las llamadas recursivas, es *Pre-order*; si lo haces en medio, es *In-order*; y si lo haces al final, es *Post-order*.

## Infografía

![Deepth first](img/depth-first.png)
