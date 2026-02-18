package com.felipe;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class MyArrayListTest {

    private MyArrayList list;

    @BeforeEach
    void setUp() {
        list = new MyArrayList();
    }

    @Test
    @DisplayName("Debe crear una lista vacía")
    void testConstructor() {
        assertNotNull(list);
        assertEquals(0, list.getSize());
    }

    @Test
    @DisplayName("Push debe agregar elementos al final")
    void testPush() {
        // Agregar 26 elementos (como en el test de JS)
        for (int i = 0; i < 26; i++) {
            list.push(i);
        }
        assertEquals(26, list.getSize());
    }

    @Test
    @DisplayName("Push debe expandir la capacidad automáticamente")
    void testPushExpandsCapacity() {
        // Agregar más de la capacidad inicial (10)
        for (int i = 0; i < 15; i++) {
            list.push(i * 10);
        }
        assertEquals(15, list.getSize());
        assertEquals(140, list.get(14));
    }

    @Test
    @DisplayName("Pop debe eliminar y retornar el último elemento")
    void testPop() {
        // Agregar 13 elementos
        for (int i = 0; i < 13; i++) {
            list.push(i);
        }
        assertEquals(13, list.getSize());
        
        // Hacer pop 10 veces
        for (int i = 0; i < 10; i++) {
            list.pop();
        }
        assertEquals(3, list.getSize());
        assertEquals(2, list.pop());
    }

    @Test
    @DisplayName("Pop debe lanzar excepción en lista vacía")
    void testPopOnEmptyList() {
        assertThrows(NoSuchElementException.class, () -> list.pop());
    }

    @Test
    @DisplayName("Get debe retornar el valor correcto en el índice")
    void testGet() {
        list.push(100); // first
        assertEquals(100, list.get(0));
        
        list.push(200); // second
        assertEquals(200, list.get(1));
        assertEquals(100, list.get(0));
        
        // Agregar 26 elementos más
        for (int i = 0; i < 26; i++) {
            list.push(i);
        }
        assertEquals(25, list.get(27)); // último elemento agregado (25)
        assertEquals(100, list.get(0)); // first
        assertEquals(7, list.get(9));
        
        list.pop();
        assertEquals(24, list.get(list.getSize() - 1));
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
    @DisplayName("Delete debe eliminar elemento y colapsar el array")
    void testDelete() {
        // Agregar 26 elementos (0 a 25)
        for (int i = 0; i < 26; i++) {
            list.push(i);
        }
        
        // Eliminar elemento en índice 13
        list.delete(13);
        assertEquals(25, list.getSize());
        assertEquals(12, list.get(12));
        assertEquals(14, list.get(13)); // el 14 ahora está en posición 13
        
        // Eliminar el primer elemento
        list.delete(0);
        assertEquals(24, list.getSize());
        assertEquals(1, list.get(0)); // el 1 ahora está en posición 0
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
    @DisplayName("Delete debe funcionar en el último elemento")
    void testDeleteLastElement() {
        list.push(10);
        list.push(20);
        list.push(30);
        
        int removed = list.delete(2);
        
        assertEquals(30, removed);
        assertEquals(2, list.getSize());
        assertEquals(20, list.get(1));
    }

    @Test
    @DisplayName("Debe manejar una secuencia compleja de operaciones")
    void testComplexOperationSequence() {
        // Push múltiples elementos
        for (int i = 1; i <= 10; i++) {
            list.push(i * 10);
        }
        
        // Delete en el medio
        assertEquals(50, list.delete(4));
        assertEquals(9, list.getSize());
        
        // Pop algunos elementos
        list.pop();
        list.pop();
        assertEquals(7, list.getSize());
        
        // Delete del primero
        assertEquals(10, list.delete(0));
        
        // Agregar más elementos
        list.push(110);
        list.push(120);
        
        assertEquals(8, list.getSize());
        assertEquals(20, list.get(0));
        assertEquals(120, list.get(7));
    }

    @Test
    @DisplayName("Debe manejar valores grandes")
    void testLargeValues() {
        list.push(1000000);
        list.push(2000000);
        list.push(3000000);
        
        assertEquals(1000000, list.get(0));
        assertEquals(2000000, list.get(1));
        assertEquals(3000000, list.get(2));
    }

    @Test
    @DisplayName("Debe manejar valores negativos")
    void testNegativeValues() {
        list.push(-10);
        list.push(-20);
        list.push(-30);
        
        assertEquals(-10, list.get(0));
        assertEquals(-20, list.get(1));
        assertEquals(-30, list.pop());
    }

    @Test
    @DisplayName("Debe manejar el valor cero")
    void testZeroValue() {
        list.push(0);
        list.push(1);
        list.push(0);
        
        assertEquals(0, list.get(0));
        assertEquals(1, list.get(1));
        assertEquals(0, list.get(2));
    }

    @Test
    @DisplayName("GetSize debe retornar el tamaño correcto")
    void testGetSize() {
        assertEquals(0, list.getSize());
        
        list.push(10);
        assertEquals(1, list.getSize());
        
        list.push(20);
        list.push(30);
        assertEquals(3, list.getSize());
        
        list.pop();
        assertEquals(2, list.getSize());
        
        list.delete(0);
        assertEquals(1, list.getSize());
    }
}
