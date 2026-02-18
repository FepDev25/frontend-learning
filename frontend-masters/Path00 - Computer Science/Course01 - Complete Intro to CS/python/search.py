import math

def linear_search(id, array):
    for item in array:
        if item['id'] == id:
            return item
    return None

def binary_search(id, array):
    izq = 0
    der = len(array) - 1

    while(izq <= der):
        print(array[izq:der])

        mitad = math.floor((izq + der) / 2)

        if array[mitad] == id:
            return array[mitad]
        elif array[mitad] < id:
            izq = mitad + 1
        else:
            der = mitad - 1

    return None

