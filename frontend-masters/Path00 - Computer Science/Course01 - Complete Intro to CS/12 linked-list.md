# Linked List

- La LinkedList (o lista enlazada) es una estructura de datos fundamental que se presenta como la alternativa directa al ArrayList, ofreciendo un conjunto de intercambios (*trade-offs*) opuestos en cuanto a rendimiento y gestión de memoria.

## Estructura y Memoria

- A diferencia del ArrayList, donde los datos están uno al lado del otro, en una LinkedList los elementos no son secuenciales en la memoria.
  - Nodos: La lista está compuesta por "nodos". Cada nodo tiene dos propiedades básicas: el valor que almacena y un puntero (referencia) al siguiente nodo de la lista.
  - Acceso: El sistema solo tiene acceso directo al nodo cabeza (*head*), que es el primer elemento. Para llegar a cualquier otro punto, debe seguir la cadena de punteros uno por uno.

## Operaciones y Complejidad

- El diseño de la LinkedList define su eficiencia en diferentes tareas:
  - Búsquedas (Lookups) - $O(n)$: Debido a que no hay una ubicación física predecible en la memoria para cada índice, si deseas encontrar el elemento número 10,000, el algoritmo debe realizar 10,000 saltos desde la cabeza. Por lo tanto, el tiempo de búsqueda crece linealmente con el tamaño de la lista.
  - Inserciones y Eliminaciones - $O(1)$: Esta es su mayor ventaja. Para borrar un nodo, simplemente se localiza el nodo anterior y se cambia su puntero para que apunte al nodo que seguía después del eliminado. No es necesario realizar la costosa "compactación" o desplazamiento de elementos que requiere un ArrayList. Una vez localizado el punto de cambio, la operación es constante ($O(1)$).

## Variaciones: Lista Doblemente Enlazada

- Existe una variante llamada Doubly LinkedList (lista doblemente enlazada). En esta versión, cada nodo posee tres propiedades: el valor, un puntero al siguiente nodo y un puntero al anterior. Esto permite recorrer la lista en ambas direcciones y facilita las búsquedas si se empieza desde el final (*tail*) o desde la cabeza (*head*).

## Criterio de Elección (*Trade-off*)

- Como hemos visto en los intercambios en el software, la elección de esta estructura depende del contexto:
  - Usa LinkedList cuando tu prioridad sea realizar muchas escrituras y eliminaciones frecuentes.
  - Prefiere ArrayList para la mayoría de los casos generales, ya que la velocidad de búsqueda suele ser más útil en el desarrollo cotidiano.

## Analogía para entender la LinkedList

- Imagina una búsqueda del tesoro. No sabes dónde están todos los premios de antemano; solo tienes la primera pista (la cabeza). Esa pista te dice dónde está el siguiente sobre, y ese sobre te da la ubicación del siguiente. Si quieres llegar al décimo premio, tienes que pasar por los nueve anteriores obligatoriamente. Sin embargo, si quieres agregar un nuevo premio en medio del camino, solo tienes que reescribir una pista para que apunte al nuevo lugar y que el nuevo lugar apunte al siguiente, sin tener que mover de sitio todos los tesoros que ya habías escondido.

## Infografía

## Infogrfafía

- ![Infografía ArrayList vs LinkedList](./img/linkedlist.png)
