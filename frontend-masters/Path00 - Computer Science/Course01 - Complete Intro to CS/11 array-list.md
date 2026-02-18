# ArrayList

- El ArrayList marca el inicio del estudio de las estructuras de datos en las fuentes, desplazando el enfoque desde cómo ordenar elementos hacia cómo se almacenan realmente en la memoria. Aunque en lenguajes como JavaScript los desarrolladores no suelen elegir el tipo de arreglo, en otros lenguajes esta elección es crítica y depende totalmente de la carga de trabajo esperada.

## Almacenamiento Secuencial en Memoria

- La característica fundamental de un ArrayList es que todos sus elementos se disponen de forma secuencial en la memoria. Esto significa que los datos están "uno al lado del otro" físicamente. Gracias a esta disposición, si el sistema conoce la ubicación inicial del arreglo y el índice que buscas, puede saltar directamente a la posición de memoria exacta sin tener que recorrer los elementos anteriores.

## Ventaja: Búsquedas de Alta Velocidad ($O(1)$)

- Debido a su naturaleza secuencial, la operación de búsqueda por índice (look-up) es extremadamente eficiente:
  - Tiene una complejidad de $O(1)$.
  - Esto significa que no importa si el ArrayList tiene 10 o 10,000,000 de elementos; obtener un dato por su posición tomará exactamente la misma cantidad de tiempo.
  - Las fuentes sugieren que elegir un ArrayList es, esencialmente, realizar una optimización prematura para las búsquedas.

## Desventaja: El Costo de la "Compactación"

- El punto débil de esta estructura aparece cuando se intenta modificar su contenido, ya sea insertando o eliminando elementos que no estén al final de la lista:
  - Eliminación: Si tienes una lista de 15,000 elementos y eliminas el que está en el índice 1, el sistema debe realizar un proceso llamado compactación, donde los 14,998 elementos restantes deben "moverse" una posición en la memoria para cerrar el hueco.
  - Inserción: Funciona de manera similar; para insertar un elemento al inicio, todos los demás deben desplazarse una posición hacia adelante para hacer espacio.
  - Este proceso de desplazamiento hace que las inserciones y eliminaciones sean operaciones "dolorosas" y costosas en términos de rendimiento para un ArrayList.

## Criterio de Elección (*Trade-off*)

- Basado en los principios de *trade-offs* que hemos discutido anteriormente, la decisión de usar un ArrayList se reduce al tipo de operaciones que dominarán tu programa:
  - Usa ArrayList si tu aplicación necesita realizar muchas consultas y búsquedas rápidas por índice.
  - Evita ArrayList (o considera otras opciones como LinkedList) si tu aplicación requiere insertar o borrar elementos constantemente en medio de la lista.

## Analogía para entender el ArrayList

- Imagina que el ArrayList es una fila de casilleros numerados en un pasillo estrecho. Si quieres saber qué hay en el casillero 500, puedes caminar directamente hacia él porque sabes exactamente dónde está (búsqueda $O(1)$). Sin embargo, si decides quitar el casillero número 1, para mantener el orden tendrías que empujar físicamente todos los otros 499 casilleros un espacio hacia adelante para cerrar el vacío, lo cual requiere un esfuerzo enorme (compactación).

## Infogrfafía

- ![Infografía ArrayList vs LinkedList](./img/arraylist.png)
