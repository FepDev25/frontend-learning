import pytest
from sort_algorithms import *

@pytest.mark.parametrize("entrada, esperado", [
    
    ([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
    
    ([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
    
    ([3, 1, 2, 3, 1], [1, 1, 2, 3, 3]),
    
    ([], []),

    ([1], [1]),
    
    ([7, 7, 7], [7, 7, 7]),

    ([170, 45, 75, 90, 802, 24, 2, 66], [2, 24, 45, 66, 75, 90, 170, 802])
])

def test_sort_varios_casos(entrada, esperado):

    #resultado = bubble_sort(entrada.copy())
    
    #resultado = insertion_sort(entrada.copy())

    #resultado = mergse_sort(entrada.copy())

    #resultado = quick_sort(entrada.copy())

    resultado = radix_sort(entrada.copy())

    assert resultado == esperado