class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1

    def add (self, value):
        if value > self.value:
            if self.right:
                self.right.add(value)
            else:
                self.right = Node(value)

            if self.left is None or self.right.height > self.left.height:
                self.height = self.right.height + 1
            
        else:
            if self.left:
                self.left.add(value)
            else:
                self.left = Node(value)

            if self.right is None or self.left.height > self.right.height:
                self.height = self.left.height + 1

        self.balance()

    def balance(self):
        left_height = self.left.height if self.left else 0
        right_height = self.right.height if self.right else 0

        if left_height > right_height + 1:
            left_right_height = self.left.right.height if self.left.right else 0
            left_left_height = self.left.left.height if self.left.left else 0

            if left_right_height > left_left_height:
                self.left.rotateRR()

            self.rotateLL()

        elif right_height > left_height + 1:

            right_right_height = self.right.right.height if self.right.right else 0
            right_left_height = self.right.left.height if self.right.left else 0

            if right_left_height > right_right_height:
                self.right.rotateLL()

            self.rotateRR()

    def rotateLL(self):
        value_before = self.value
        right_before = self.right
        self.value = self.left.value
        self.right = self.left
        self.left = self.left.left
        self.right.left = self.right.right
        self.right.right = right_before
        self.right.value = value_before

        left_height = self.left.height if self.left else 0
        right_height = self.right.height if self.right else 0
        self.height = max(left_height, right_height) + 1

        right_left_height = self.right.left.height if self.right.left else 0
        right_right_height = self.right.right.height if self.right.right else 0
        self.right.height = max(right_left_height, right_right_height) + 1

    def rotateRR(self):
        value_before = self.value
        left_before = self.left
        self.value = self.right.value
        self.left = self.right
        self.right = self.right.right
        self.left.right = self.left.left
        self.left.left = left_before
        self.left.value = value_before

        left_height = self.left.height if self.left else 0
        right_height = self.right.height if self.right else 0
        self.height = max(left_height, right_height) + 1

        left_left_height = self.left.left.height if self.left.left else 0
        left_right_height = self.left.right.height if self.left.right else 0
        self.left.height = max(left_left_height, left_right_height) + 1

class Tree:
    def __init__(self):
        self.root = None

    def add(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self.root.add(value)

