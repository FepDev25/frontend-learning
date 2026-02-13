# Heap Sort

Este algoritmo es un método de ordenamiento que requiere comprender previamente la estructura de datos de "árboles", aunque su implementación se realiza, curiosamente, sobre un arreglo (array).

Aquí te presento la explicación teórica detallada basada en las fuentes:

## ¿Qué es un "Heap" (Montículo Binario)?

- El concepto central de este algoritmo es el Binary Heap (Montículo Binario). Es una estructura que simula un árbol binario pero vive dentro de un arreglo. Para entenderlo, es crucial diferenciarlo del *Binary Search Tree* (BST) que vimos anteriormente:
  - Orden: A diferencia del BST (donde izquierda < padre < derecha), en un Binary Heap la única garantía es que el padre es mayor que sus hijos (en un Max Heap). No existe ninguna relación de orden garantizada entre nodos "hermanos".
  - Estructura Completa: Un Heap es un "árbol binario completo", lo que significa que es lo más compacto posible. Todos los niveles del árbol están llenos y, si falta algún nodo, los huecos solo pueden estar en la extrema derecha del último nivel.
  - Tipos: Existen Max Heaps (el número mayor está en la raíz) y Min Heaps (el menor está en la raíz). El Heap Sort utiliza generalmente el Max Heap para ordenar.

## Representación Matemática en Array

- El algoritmo no utiliza nodos y punteros como una lista enlazada, sino matemáticas simples para navegar por el arreglo como si fuera un árbol. Dado un elemento en el índice $n$:
  - Su hijo izquierdo está en la posición $2n + 1$.
  - Su hijo derecho está en la posición $2n + 2$.
  - La raíz siempre está en el índice 0.

## Concepto Clave: La Cola de Prioridad (Priority Queue)

- El texto utiliza la analogía de una Cola de Prioridad para explicar la lógica del Heap.
  - Imagina el tráfico de tu internet: los datos de Netflix tienen alta prioridad (si se pierden, el video se traba), mientras que la sincronización de Dropbox tiene baja prioridad. Una cola de prioridad procesa primero lo más importante.
  - El Heap es la forma perfecta de implementar esto porque siempre mantiene el elemento de mayor valor (prioridad) accesible en la cima.

## El Algoritmo: Pasos de Funcionamiento

El Heap Sort funciona en dos fases principales: construcción y extracción.

### Fase 1: Construir el Max Heap (Heapify)

- Primero, se debe transformar el arreglo desordenado en un Max Heap válido.
  - Se utiliza un proceso llamado "heapify".
  - Para construirlo, se recorre el arreglo hacia atrás, comenzando desde la mitad (`Math.floor(array.length / 2) - 1`) hasta el inicio (índice 0).
  - Al terminar este paso, el número más grande de todo el arreglo queda garantizado en la posición 0 (la raíz).

### Fase 2: Ordenar (Extracción y Re-balanceo)

- Una vez que el arreglo es un Heap, comienza el ordenamiento real:
  1. Intercambio (Swap): Tomas la raíz (que es el número más grande) y lo intercambias con el último elemento del arreglo. Ahora, el número más grande está en su posición final correcta al final de la lista.
  2. Reducción: Consideras que el arreglo es ahora un elemento más corto (el final ya está "fijo").
  3. Heapify de nuevo: Al hacer el intercambio, pusiste un número pequeño en la raíz, rompiendo la regla del Heap. Debes ejecutar `heapify` nuevamente sobre la raíz para que el siguiente número más grande "flote" hasta el tope.
  4. Repetición: Repites este ciclo (sacar raíz, mover al final, arreglar el Heap) hasta que te quedas sin elementos.

## Ejemplo Práctico Paso a Paso

Veamos cómo ordenar el array `[3, 8, 1, 5]` usando Heap Sort:

### Fase 1: Construir Max Heap

**Array inicial:** `[3, 8, 1, 5]`

Visualización como árbol:
```
    3
   / \
  8   1
 /
5
```

**Heapify desde el último padre hacia la raíz:**

1. Heapify índice 1 (valor 8):
   - Hijo: 5
   - 8 > 5 ✓ (ya está bien)

2. Heapify índice 0 (valor 3):
   - Hijos: 8 y 1
   - Mayor: 8
   - Intercambia 3 ↔ 8

**Resultado:** `[8, 3, 1, 5]`
```
    8
   / \
  3   1
 /
5
```

Heapify nuevamente posición donde cayó el 3:
- Hijo: 5
- 5 > 3 → Intercambia

**Max Heap construido:** `[8, 5, 1, 3]`
```
    8
   / \
  5   1
 /
3
```

### Fase 2: Ordenar (Extraer y Re-heapify)

**Iteración 1:**
- Intercambia raíz (8) con último (3): `[3, 5, 1, | 8]`
- El 8 está en su posición final ✓
- Tamaño del heap ahora es 3
- Heapify en la raíz: `[5, 3, 1, | 8]`

**Iteración 2:**
- Intercambia raíz (5) con último (1): `[1, 3, | 5, 8]`
- El 5 está en su posición final ✓
- Tamaño del heap: 2
- Heapify en la raíz: `[3, 1, | 5, 8]`

**Iteración 3:**
- Intercambia raíz (3) con último (1): `[1, | 3, 5, 8]`
- El 3 está en su posición ✓

**Array ordenado:** `[1, 3, 5, 8]` ✓

### Proceso de Heapify Detallado

Cuando un elemento está en la posición incorrecta, debe "hundirse" hasta encontrar su lugar:

**Ejemplo:** Array `[3, 19, 36, 17, 100, 25]` (NO es heap válido)

Como árbol:
```
       3           ← ❌ Es menor que sus hijos
      / \
    19   36
   / \   /
  17 100 25
```

**Proceso Heapify en índice 0 (el 3):**

1. Compara con hijos (19 y 36) → Mayor es 36
2. ¿36 > 3? Sí → Intercambia
```
[36, 19, 3, 17, 100, 25]
       36
      / \
    19   3         ← 3 bajó
   / \   /
  17 100 25
```

3. Ahora compara 3 con sus nuevos hijos (100 y 25) → Mayor es 100
4. ¿100 > 3? Sí → Intercambia
```
[36, 19, 100, 17, 3, 25]
       36
      / \
    19   100
   / \   /
  17  3  25        ← 3 llegó a su lugar correcto
```

## Resumen del Proceso Completo

```
Array desordenado
      ↓
Construir Max Heap 
(heapify desde último padre hasta raíz)
      ↓
Mientras queden elementos en el heap:
  1. Intercambia raíz ↔ último elemento del heap
  2. Reduce tamaño del heap (ignorar elementos al final)
  3. Heapify en la raíz (para restaurar propiedad de Max Heap)
  4. El siguiente mayor valor sube a la raíz
  5. Repetir
      ↓
Array ordenado (de menor a mayor)
```

**La clave:** El Max Heap siempre mantiene el número más grande en la raíz. Lo extraes, colocas al final, arreglas el heap, y repites. Es un proceso sistemático que garantiza el ordenamiento.

## Analogía para entender Heap Sort

Imagina un grupo de personas. Primero, organizas a todos en una estructura piramidal donde cada jefe es más alto que sus subordinados (construcción del Heap). El más alto de todos queda en la punta.
Tomas a esa persona más alta, la sacas de la pirámide y la pones al final de una fila. Luego, tomas a la última persona de la pirámide (probablemente bajita) y la pones temporalmente en la punta. Como esto es incorrecto, esa persona baja empieza a intercambiar lugar con sus subordinados más altos hasta encontrar su nivel adecuado. Ahora, una nueva persona alta ha llegado a la punta. Repites el proceso hasta que todos estén en la fila.

## Infografía

![Heap Sort Infographic](./img/heap-sort.png)
