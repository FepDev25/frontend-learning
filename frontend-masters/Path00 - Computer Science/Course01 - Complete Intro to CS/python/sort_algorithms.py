import math

def bubble_sort(array: list):
    n = len(array)
    cambios = True

    while(cambios):
        cambios = False
        for j in range(0, n-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
                cambios = True
        n -= 1 
    
    return array


def insertion_sort(array: list):
    n = len(array)

    for i in range(1, n):
        print(array)
        num = array[i]  # Almaceno el numero actual de la lista no-ordenada
        j = i - 1       # Almaceno posicion final de la lista ordenada
        
        # Recorrer la lista ordenada de derecha a izquierda, comparando con el numero actual
        # Condicion 1: j debe ser mayor o igual a 0, cuidando indices negativos
        # Condicion 2: El numero del bucle interno debe ser mayor al numero actual para que este vaya "bajando"
        while j >= 0 and array[j] > num:
            array[j + 1] = array[j]
            j -= 1
            print(array)
        
        # Cuando llegamos al final de la lista (numero menor que todos)
        # o encontramos un numero menor al numero actual, actualizamos la posicion del numero
        array[j + 1] = num

        print()
    
    return array

def mergse_sort(array: list):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left_half = mergse_sort(array[:mid])
    right_half = mergse_sort(array[mid:])

    return merge(left_half, right_half)

def merge(left: list, right: list):
    sorted_array = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            sorted_array.append(left[left_index])
            left_index += 1
        else:
            sorted_array.append(right[right_index])
            right_index += 1

    if left_index < len(left):
        sorted_array.extend(left[left_index:])
    if right_index < len(right):
        sorted_array.extend(right[right_index:])

    return sorted_array

def quick_sort(array: list):
    if len(array) <= 1:
        return array

    pivot = array[len(array)-1]
    left = []
    right = []

    for i in range(len(array) - 1):
        if array[i] < pivot:
            left.append(array[i])
        else:   
            right.append(array[i])

    return quick_sort(left) + [pivot] + quick_sort(right)


def obtener_digito(numero, lugar):
    # Obtiene el dígito en la posición 'lugar' (0 es unidades, 1 decenas, etc.)
    # Matemáticamente: (num // 10^lugar) % 10
    return (numero // (10 ** lugar)) % 10

def contar_digitos(numero):
    # Cuenta cuántos dígitos tiene un número usando logaritmo
    if numero == 0: return 1
    return int(math.log10(abs(numero))) + 1

def obtener_max_digitos(lista):
    # Encuentra cuántos dígitos tiene el número más grande
    max_digitos = 0
    for num in lista:
        max_digitos = max(max_digitos, contar_digitos(num))
    return max_digitos

def radix_sort(lista):
    if not lista:
        return lista

    # Saber cuántas rondas necesitamos (ej: si el mayor es 1000, son 4 rondas)
    max_k = obtener_max_digitos(lista)
    print(f"Número máximo de dígitos: {max_k}")
    print(f"Lista inicial: {lista}\n")

    for k in range(max_k):
        print(f"--- Pasada {k + 1} (analizando dígito en posición {k}) ---")
        
        # Creamos 10 cubetas vacías (buckets)
        buckets = [[] for _ in range(10)]
        
        # Llenar cubetas (Distribución)
        for numero in lista:
            digito = obtener_digito(numero, k)
            buckets[digito].append(numero)
            print(f"  Número {numero} -> dígito {digito} -> bucket[{digito}]")
        
        print(f"\nCubetas después de distribuir:")
        for i, bucket in enumerate(buckets):
            if bucket:  # Solo mostrar cubetas no vacías
                print(f"  Bucket[{i}]: {bucket}")
        
        # Reconstruir la lista (Recolección)
        # Aplanamos las cubetas de nuevo en una sola lista
        lista = []
        for bucket in buckets:
            lista.extend(bucket)
        
        print(f"Lista después de recolectar: {lista}\n")
            
    return lista
