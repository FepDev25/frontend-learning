from search import linear_search, binary_search

def test_linear_search():
    data = [
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'},
        {'id': 3, 'name': 'Charlie'},
    ]

    assert linear_search(2, data) == {'id': 2, 'name': 'Bob'}
    assert linear_search(4, data) is None

def test_binary_search():
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    assert binary_search(5, data) == 5
    assert binary_search(11, data) is None
    assert binary_search(1, data) == 1