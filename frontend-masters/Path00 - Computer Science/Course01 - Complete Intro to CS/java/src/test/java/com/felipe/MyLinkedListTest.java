package com.felipe;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class MyLinkedListTest {

    private MyLinkedList list;

    @BeforeEach
    void setUp() {
        list = new MyLinkedList();
    }

    @Test
    @DisplayName("Debe crear una lista vacía")
    void testCreateEmptyList() {
        assertNotNull(list);
    }

    @Test
    @DisplayName("Debe agregar un elemento con push")
    void testPushSingleElement() {
        list.push(10);
        assertEquals(10, list.get(0));
    }

    @Test
    @DisplayName("Debe agregar múltiples elementos con push")
    void testPushMultipleElements() {
        list.push(10);
        list.push(20);
        list.push(30);
        
        assertEquals(10, list.get(0));
        assertEquals(20, list.get(1));
        assertEquals(30, list.get(2));
    }

    @Test
    @DisplayName("Get debe lanzar excepción con índice negativo")
    void testGetWithNegativeIndex() {
        list.push(10);
        assertThrows(IndexOutOfBoundsException.class, () -> list.get(-1));
    }

    @Test
    @DisplayName("Get debe lanzar excepción con índice fuera de rango")
    void testGetWithIndexOutOfBounds() {
        list.push(10);
        assertThrows(IndexOutOfBoundsException.class, () -> list.get(1));
    }

    @Test
    @DisplayName("Get debe lanzar excepción en lista vacía")
    void testGetOnEmptyList() {
        assertThrows(IndexOutOfBoundsException.class, () -> list.get(0));
    }

    @Test
    @DisplayName("Pop debe eliminar el último elemento")
    void testPopLastElement() {
        list.push(10);
        list.push(20);
        list.push(30);
        
        int removed = list.pop();
        
        assertEquals(30, removed);
        assertEquals(20, list.get(1));
    }

    @Test
    @DisplayName("Pop debe funcionar con un solo elemento")
    void testPopSingleElement() {
        list.push(10);
        
        int removed = list.pop();
        
        assertEquals(10, removed);
        assertThrows(IndexOutOfBoundsException.class, () -> list.get(0));
    }

    @Test
    @DisplayName("Pop debe lanzar excepción en lista vacía")
    void testPopOnEmptyList() {
        assertThrows(NoSuchElementException.class, () -> list.pop());
    }

    @Test
    @DisplayName("Delete debe eliminar el primer elemento (head)")
    void testDeleteFirstElement() {
        list.push(10);
        list.push(20);
        list.push(30);
        
        int removed = list.delete(0);
        
        assertEquals(10, removed);
        assertEquals(20, list.get(0));
        assertEquals(30, list.get(1));
    }

    @Test
    @DisplayName("Delete debe eliminar un elemento en el medio")
    void testDeleteMiddleElement() {
        list.push(10);
        list.push(20);
        list.push(30);
        
        int removed = list.delete(1);
        
        assertEquals(20, removed);
        assertEquals(10, list.get(0));
        assertEquals(30, list.get(1));
    }

    @Test
    @DisplayName("Delete debe eliminar el último elemento (tail)")
    void testDeleteLastElement() {
        list.push(10);
        list.push(20);
        list.push(30);
        
        int removed = list.delete(2);
        
        assertEquals(30, removed);
        assertEquals(10, list.get(0));
        assertEquals(20, list.get(1));
        assertThrows(IndexOutOfBoundsException.class, () -> list.get(2));
    }

    @Test
    @DisplayName("Delete debe funcionar con un solo elemento")
    void testDeleteSingleElement() {
        list.push(10);
        
        int removed = list.delete(0);
        
        assertEquals(10, removed);
        assertThrows(IndexOutOfBoundsException.class, () -> list.get(0));
    }

    @Test
    @DisplayName("Delete debe lanzar excepción con índice negativo")
    void testDeleteWithNegativeIndex() {
        list.push(10);
        assertThrows(IndexOutOfBoundsException.class, () -> list.delete(-1));
    }

    @Test
    @DisplayName("Delete debe lanzar excepción con índice fuera de rango")
    void testDeleteWithIndexOutOfBounds() {
        list.push(10);
        assertThrows(IndexOutOfBoundsException.class, () -> list.delete(1));
    }

    @Test
    @DisplayName("Delete debe lanzar excepción en lista vacía")
    void testDeleteOnEmptyList() {
        assertThrows(IndexOutOfBoundsException.class, () -> list.delete(0));
    }

    @Test
    @DisplayName("Debe manejar una secuencia compleja de operaciones")
    void testComplexOperationSequence() {
        // Agregar elementos
        list.push(10);
        list.push(20);
        list.push(30);
        list.push(40);
        list.push(50);
        
        // Eliminar del medio
        assertEquals(30, list.delete(2));
        
        // Hacer pop
        assertEquals(50, list.pop());
        
        // Eliminar del principio
        assertEquals(10, list.delete(0));
        
        // Verificar estado final
        assertEquals(20, list.get(0));
        assertEquals(40, list.get(1));
        
        // Agregar más elementos
        list.push(60);
        list.push(70);
        
        assertEquals(20, list.get(0));
        assertEquals(40, list.get(1));
        assertEquals(60, list.get(2));
        assertEquals(70, list.get(3));
    }

    @Test
    @DisplayName("Debe manejar múltiples push y pop")
    void testMultiplePushAndPop() {
        for (int i = 1; i <= 5; i++) {
            list.push(i * 10);
        }
        
        assertEquals(50, list.pop());
        assertEquals(40, list.pop());
        
        assertEquals(30, list.get(2));
    }

    @Test
    @DisplayName("Debe manejar valores negativos")
    void testNegativeValues() {
        list.push(-10);
        list.push(-20);
        list.push(-30);
        
        assertEquals(-10, list.get(0));
        assertEquals(-20, list.get(1));
        assertEquals(-30, list.get(2));
    }

    @Test
    @DisplayName("Debe manejar el valor cero")
    void testZeroValue() {
        list.push(0);
        list.push(1);
        
        assertEquals(0, list.get(0));
        assertEquals(1, list.get(1));
    }
}
