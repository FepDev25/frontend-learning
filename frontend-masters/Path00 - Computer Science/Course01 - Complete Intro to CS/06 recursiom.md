# Recursión

- La recursión es, en términos fundamentales, una función que se llama a sí misma. Esta técnica se utiliza para resolver problemas grandes y complejos dividiéndolos en versiones más pequeñas del mismo problema, repitiendo este proceso hasta llegar a una unidad que sea lo suficientemente simple como para resolverse directamente.

## El Caso Base (Base Case)

- Es el componente más crítico de una función recursiva. El caso base es la condición en la cual la recursión se detiene.
  - Importancia: Casi siempre debe ser la primera línea de la función.
  - Consecuencia de su ausencia: Sin un caso base adecuado, la recursión continuará indefinidamente hasta agotar la memoria disponible, lo que provoca un error conocido como stack overflow (desbordamiento de pila).

## Ejemplos Clásicos de Aplicación

- Escenarios donde la recursión define el problema de forma natural:
  - Sucesión de Fibonacci: Se define como la suma de los dos números anteriores ($fib(n) = fib(n-1) + fib(n-2)$). Para que funcione, requiere casos base como $fib(2) = 1$ y $fib(1) = 1$.
  - Factoriales: El factorial de un número ($n!$) se define como $n * (n-1)!$ (por ejemplo, $5! = 5 * 4 * 3 * 2 * 1$).
  - Arreglos Anidados: Es ideal para sumar números dentro de arreglos que contienen otros arreglos, sin importar qué tan profunda sea la estructura.
  - Algoritmos de Ordenamiento: Como el Merge Sort, que divide un arreglo grande en listas más pequeñas hasta que cada lista tiene un solo elemento (que, por definición, ya está ordenado).

## El Intercambio (*Trade-off*) entre Elegancia y Rendimiento

- El uso de recursión implica una decisión de diseño importante:
  - Legibilidad: El código recursivo suele ser muy elegante y fácil de leer, ya que describe el problema de forma matemática y directa.
  - Desempeño: A menudo tiene un perfil de rendimiento pobre en comparación con las soluciones iterativas (como los bucles `for`). Por ejemplo, calcular un número de Fibonacci alto de forma recursiva puede requerir millones de llamadas adicionales, sumando "1" repetidamente hasta llegar al resultado, lo que es ineficiente en términos de tiempo y memoria.

- Si el problema puede definirse fácilmente como "versiones más pequeñas de sí mismo", la recursión es una herramienta poderosa, siempre que se considere si el tamaño de los datos de entrada no causará un colapso del sistema.

## Anología

- Analogía para entender la recursión:
  - Imagina que quieres abrir una muñeca Matrioshka (muñeca rusa) para encontrar un caramelo que está en la muñeca más pequeña posible. El proceso recursivo es: "Si la muñeca que tengo en la mano contiene otra muñeca, la abro y repito el proceso con la nueva". El caso base ocurre cuando llegas a la muñeca más pequeña que ya no se puede abrir; ahí es donde encuentras el caramelo y dejas de intentar abrir más muñecas.

## Infrografía sobre la recursion

- ![Recursion](./img/recursion.png)
