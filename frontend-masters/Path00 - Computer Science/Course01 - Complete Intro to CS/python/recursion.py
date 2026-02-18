import time

# Ejemplos de recursion

def fibonacci(n: int):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

def fibonacci_loop(n: int):
    a, b = 0, 1
    ans = a + b

    for _ in range(2, n):
        a = b
        b = ans
        ans = a + b

    return ans

def comparar_rendimiento(n: int):
    # Medir fibonacci recursivo
    inicio = time.time()
    resultado_recursivo = fibonacci(n)
    tiempo_recursivo = time.time() - inicio
    
    # Medir fibonacci iterativo
    inicio = time.time()
    resultado_iterativo = fibonacci_loop(n)
    tiempo_iterativo = time.time() - inicio
    
    print(f"\nComparación para n={n}:")
    print(f"Recursivo: {resultado_recursivo} - Tiempo: {tiempo_recursivo:.6f}s")
    print(f"Iterativo: {resultado_iterativo} - Tiempo: {tiempo_iterativo:.6f}s")
    print(f"Diferencia: {tiempo_recursivo/tiempo_iterativo:.2f}x más rápido el iterativo")

def factorial(n: int):
    if n == 0:
        return 1
    return n * factorial(n-1)

if __name__ == "__main__":
    #fib = fibonacci(12)
    #print(fib)

    #fac_loop = fibonacci_loop(12)
    #print(fac_loop)

    comparar_rendimiento(30)

    fac = factorial(6)
    print(fac)

    
