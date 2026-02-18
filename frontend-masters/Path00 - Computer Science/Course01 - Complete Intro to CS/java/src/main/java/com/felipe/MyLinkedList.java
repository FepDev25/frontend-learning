package com.felipe;

import java.util.NoSuchElementException;

public class MyLinkedList {

    private Node head;
    private Node tail;
    private int length;

    public MyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public void push(int value) {
        Node newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }

        this.length += 1;
    }

    private Node getNode(int index) {
        if (index < 0 || index >= this.length) {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }

        Node current = this.head;

        for (int i = 0; i < index; i++) {
            current = current.getNext();
        }

        return current;
    }

    public int pop() {
        if (this.length == 0) {
            throw new NoSuchElementException("La lista está vacía");
        }
        return delete(this.length - 1);
    }

    public int get(int index) {
        return getNode(index).getValue();
    }

    public int delete(int index) {
        if (index < 0 || index >= this.length) {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }

        Node deletedNode;

        // Caso 1: Borrar el Head
        if (index == 0) {
            deletedNode = head;
            this.head = this.head.getNext();
            if (this.length == 1) {
                this.tail = null;
            }
        } // Caso 2: Borrar cualquier otro
        else {
            Node prevNode = getNode(index - 1);
            deletedNode = prevNode.getNext();

            // puntear el nodo eliminado
            prevNode.setNext(deletedNode.getNext());

            // actualizar tail si borramos el último
            if (index == this.length - 1) {
                this.tail = prevNode;
            }
        }

        this.length--;
        return deletedNode.getValue();
    }

}
