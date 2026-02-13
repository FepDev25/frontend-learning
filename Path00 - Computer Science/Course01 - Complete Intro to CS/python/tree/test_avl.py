import pytest
from avl import Tree, Node


def test_creates_correct_tree():
    """Test that the AVL tree maintains correct structure after insertions"""
    nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8]
    tree = Tree()
    
    for num in nums:
        tree.add(num)
    
    root = tree.root
    
    # Root should be 4
    assert root.value == 4
    
    # Left subtree
    assert root.left.value == 2
    
    assert root.left.left.value == 1
    assert root.left.left.left is None
    assert root.left.left.right is None
    
    assert root.left.right.value == 3
    assert root.left.right.left is None
    assert root.left.right.right is None
    
    # Right subtree
    assert root.right.value == 7
    
    assert root.right.left.value == 6
    assert root.right.left.right is None
    
    assert root.right.left.left.value == 5
    assert root.right.left.left.left is None
    assert root.right.left.left.right is None
    
    assert root.right.right.value == 9
    
    assert root.right.right.left.value == 8
    assert root.right.right.left.left is None
    assert root.right.right.left.right is None
    
    assert root.right.right.right.value == 10
    assert root.right.right.right.left is None
    assert root.right.right.right.right is None


def test_single_node():
    """Test tree with single node"""
    tree = Tree()
    tree.add(5)
    
    assert tree.root.value == 5
    assert tree.root.left is None
    assert tree.root.right is None


def test_two_nodes_right():
    """Test adding node to the right"""
    tree = Tree()
    tree.add(5)
    tree.add(7)
    
    assert tree.root.value == 5
    assert tree.root.right.value == 7


def test_two_nodes_left():
    """Test adding node to the left"""
    tree = Tree()
    tree.add(5)
    tree.add(3)
    
    assert tree.root.value == 5
    assert tree.root.left.value == 3


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
