import unittest
from bst import Tree, Node


class TestBST(unittest.TestCase):
    
    def test_create_empty_tree(self):
        # Test that a new tree is created with no root
        tree = Tree()
        self.assertIsNone(tree.root)
    
    def test_add_first_node_creates_root(self):
        # Test that adding the first value creates the root node
        tree = Tree()
        tree.add(5)
        self.assertIsNotNone(tree.root)
        self.assertEqual(tree.root.value, 5)
        self.assertIsNone(tree.root.left)
        self.assertIsNone(tree.root.right)
    
    def test_add_smaller_value_goes_left(self):
        # Test that values smaller than root go to the left
        tree = Tree()
        tree.add(10)
        tree.add(5)
        self.assertEqual(tree.root.value, 10)
        self.assertIsNotNone(tree.root.left)
        self.assertEqual(tree.root.left.value, 5)
        self.assertIsNone(tree.root.right)
    
    def test_add_larger_value_goes_right(self):
        # Test that values larger than root go to the right
        tree = Tree()
        tree.add(10)
        tree.add(15)
        self.assertEqual(tree.root.value, 10)
        self.assertIsNone(tree.root.left)
        self.assertIsNotNone(tree.root.right)
        self.assertEqual(tree.root.right.value, 15)
    
    def test_add_multiple_values(self):
        # Test adding multiple values creates correct BST structure
        tree = Tree()
        tree.add(10)
        tree.add(5)
        tree.add(15)
        tree.add(3)
        tree.add(7)
        tree.add(12)
        tree.add(17)
        
        # Check root
        self.assertEqual(tree.root.value, 10)
        
        # Check left subtree
        self.assertEqual(tree.root.left.value, 5)
        self.assertEqual(tree.root.left.left.value, 3)
        self.assertEqual(tree.root.left.right.value, 7)
        
        # Check right subtree
        self.assertEqual(tree.root.right.value, 15)
        self.assertEqual(tree.root.right.left.value, 12)
        self.assertEqual(tree.root.right.right.value, 17)
    
    def test_add_returns_self_for_chaining(self):
        # Test that add() returns self to allow method chaining
        tree = Tree()
        result = tree.add(10)
        self.assertIs(result, tree)
    
    def test_add_method_chaining(self):
        # Test that multiple adds can be chained
        tree = Tree()
        tree.add(10).add(5).add(15).add(3).add(7)
        
        self.assertEqual(tree.root.value, 10)
        self.assertEqual(tree.root.left.value, 5)
        self.assertEqual(tree.root.right.value, 15)
        self.assertEqual(tree.root.left.left.value, 3)
        self.assertEqual(tree.root.left.right.value, 7)
    
    def test_add_deep_left_chain(self):
        # Test adding values in descending order creates left chain
        tree = Tree()
        tree.add(10).add(9).add(8).add(7).add(6)
        
        current = tree.root
        expected_values = [10, 9, 8, 7, 6]
        for expected in expected_values:
            self.assertEqual(current.value, expected)
            if expected != 6:
                current = current.left
    
    def test_add_deep_right_chain(self):
        # Test adding values in ascending order creates right chain
        tree = Tree()
        tree.add(1).add(2).add(3).add(4).add(5)
        
        current = tree.root
        expected_values = [1, 2, 3, 4, 5]
        for expected in expected_values:
            self.assertEqual(current.value, expected)
            if expected != 5:
                current = current.right
    
    def test_add_duplicate_values(self):
        # Test that duplicate values go to the right (>= logic)
        tree = Tree()
        tree.add(10).add(10).add(10)
        
        self.assertEqual(tree.root.value, 10)
        self.assertIsNone(tree.root.left)
        self.assertIsNotNone(tree.root.right)
        self.assertEqual(tree.root.right.value, 10)
        self.assertEqual(tree.root.right.right.value, 10)
    
    def test_add_negative_values(self):
        # Test that negative values work correctly
        tree = Tree()
        tree.add(0).add(-5).add(5).add(-3).add(-7)
        
        self.assertEqual(tree.root.value, 0)
        self.assertEqual(tree.root.left.value, -5)
        self.assertEqual(tree.root.right.value, 5)
        self.assertEqual(tree.root.left.left.value, -7)
        self.assertEqual(tree.root.left.right.value, -3)
    
    def test_node_initialization(self):
        # Test that Node is initialized correctly
        node = Node(42)
        self.assertEqual(node.value, 42)
        self.assertIsNone(node.left)
        self.assertIsNone(node.right)


if __name__ == '__main__':
    unittest.main()
