package com.felipe;

import java.util.NoSuchElementException;

public class MyArrayList{
    int[] data;
    int size;
    private static final int INITIAL_CAPACITY = 10;

    public MyArrayList() {
        data = new int[INITIAL_CAPACITY];
        size = 0;
    }

    public void push(int value) {
        ensureCapacity();
        this.data[size] = value;
        size++;
    }

    public int pop(){
        if (size == 0) {
            throw new NoSuchElementException("La lista está vacía");
        }
        int lastItem = this.data[size - 1];
        size--;
        return lastItem;
    }

    public int get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        return this.data[index];
    }

    public int delete(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        int item = this.data[index];
        collapseTo(index);
        return item;
    }

    private void collapseTo(int index) {
        for (int i = index; i < size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        size--;
    }

    private void ensureCapacity() {
        if (size >= data.length) {
            int newCapacity = data.length * 2;
            int[] newData = new int[newCapacity];
            System.arraycopy(data, 0, newData, 0, data.length);
            data = newData;
        }
    }

    public int getSize() {
        return size;
    }
}