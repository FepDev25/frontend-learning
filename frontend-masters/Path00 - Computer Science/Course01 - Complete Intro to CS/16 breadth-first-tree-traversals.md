# Breadth-First Tree Traversal

El Breadth-First Tree Traversal (Recorrido en Anchura) representa un cambio fundamental de estrategia con respecto a los recorridos en profundidad (*Depth-First*) que vimos anteriormente. En lugar de sumergirse hasta el fondo de una rama antes de volver atrás, este método procesa el árbol una capa a la vez.

Aquí te presento la explicación teórica basada en las nuevas fuentes:

## Concepto y Estrategia

- La idea central es moverse "hacia abajo" en el árbol nivel por nivel.
  - Procesamiento Horizontal: Primero se procesa la raíz, luego todos los hijos inmediatos de la raíz (segundo nivel), luego todos los nietos (tercer nivel), y así sucesivamente.
  - Resultado Visual: Si tienes un árbol numérico, el resultado final será una lista ordenada por niveles (ej. `[8, 3, 10, 1, 6, 14...]`), en contraposición a seguir una sola línea genealógica hasta el final.

## La Herramienta Clave: La Cola (Queue)

- Mientras que los recorridos en profundidad dependen de la recursión (y por ende de la "pila" o *stack* de llamadas), el recorrido en anchura utiliza una estructura de datos diferente: la Cola (Queue).
  - Principio FIFO: La cola opera bajo el principio *First In, First Out* (Primero en entrar, primero en salir). El elemento que lleva más tiempo esperando es el próximo en ser atendido.
  - Función: La cola sirve para mantener un registro de los nodos que hemos descubierto pero que aún no hemos procesado, asegurando que los hermanos se procesen antes que los descendientes.

## El Algoritmo (Paso a Paso)

- Aunque se puede resolver recursivamente, las fuentes indican que la solución iterativa es la preferida. El flujo de trabajo es el siguiente:
  1. Inicio: Se coloca el nodo raíz en la cola.
  2. Ciclo: Mientras queden elementos en la cola, se repite el proceso:
     - Desencolar (Dequeue): Se saca el primer elemento de la cola.
     - Procesar: Se guarda ese elemento en la lista final de resultados.
     - Encolar Hijos: Se agregan los hijos de ese nodo (primero el izquierdo, luego el derecho) al final de la cola.
  3. Finalización: El proceso termina cuando la cola queda vacía, lo que significa que se han visitado todos los nodos.

## Casos de Uso y Trade-offs

- ¿Por qué elegir este método sobre el Depth-First? La decisión depende de la ubicación esperada de lo que buscas:
  - Cercanía a la Raíz: Es ideal si sabes o sospechas que la respuesta que buscas está cerca de la parte superior del árbol.
  - Menos "Saltos" (Least Hops): Se utiliza para encontrar el nodo "más cercano" en términos de conexiones. Un ejemplo clásico mencionado es una red social: si quieres recomendar a quién seguir, buscas en los contactos de tus amigos (2 grados de separación). Un recorrido en anchura es perfecto para esto, ya que explora primero el círculo inmediato antes de ir a los amigos de los amigos.
  - Búsqueda de Rutas (Path-finding): Es un algoritmo esencial para encontrar caminos, priorizando las rutas más cortas desde el origen.

## En resumen

Si el *Depth-First* es como explorar un laberinto tocando siempre la pared izquierda hasta llegar al final, el Breadth-First es como una onda expansiva de agua que llena el laberinto, cubriendo todo el suelo cercano antes de fluir hacia los pasillos más lejanos.

## Infografía

![Breadth first](img/Breadth.png)
