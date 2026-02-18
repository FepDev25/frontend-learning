# Este script tiene ejemplos de algoritmos con las diferentes notaciones existentes de Big O.

## O(1) - Tiempo constante
def obtener_primero_elemento(lista):
    if lista:
        return lista[0]
    return None

## O(log n) - Tiempo logarítmico
def busqueda_binaria(lista, objetivo):
    izquierda, derecha = 0, len(lista) - 1
    
    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2  # Cortamos la lista a la mitad
        if lista[medio] == objetivo:
            return medio
        elif lista[medio] < objetivo:
            izquierda = medio + 1
        else:
            derecha = medio - 1
    return -1

## O(n) - Tiempo lineal
def suma_elementos(lista):
    suma = 0
    for elemento in lista:
        suma += elemento
    return suma

## O(n log n) - Tiempo linealítmico 
def ordenar_lista(lista):
    # La función .sort() de Python usa Timsort, que es O(n log n)
    return sorted(lista)

## O(n^2) - Tiempo cuadrático
def imprimir_pares(lista):
    for i in range(len(lista)):
        for j in range(len(lista)):
            print(f"Par: ({lista[i]}, {lista[j]})")

## O(2^n) - Tiempo exponencial
def fibonacci_exponencial(n):
    if n <= 1:
        return n
    return fibonacci_exponencial(n - 1) + fibonacci_exponencial(n - 2)

## O(n!) - Tiempo factorial
def permutaciones(lista):
    if len(lista) == 0:
        return [[]]
    
    resultado = []
    for i in range(len(lista)):
        elemento_actual = lista[i]
        elementos_restantes = lista[:i] + lista[i+1:]
        for p in permutaciones(elementos_restantes):
            resultado.append([elemento_actual] + p)
    return resultado


# Ejemplos de uso
if __name__ == "__main__":
    lista_ejemplo = [1, 2, 3, 4, 5]
    
    print("O(1):", obtener_primero_elemento(lista_ejemplo))
    print("O(log n):", busqueda_binaria(sorted(lista_ejemplo), 3))
    print("O(n):", suma_elementos(lista_ejemplo))
    print("O(n log n):", ordenar_lista([5, 3, 1, 4, 2]))
    print("O(n^2):")
    imprimir_pares([1, 2, 3])
    print("O(2^n):", fibonacci_exponencial(8))
    print("O(n!):", permutaciones([1, 2, 3]))