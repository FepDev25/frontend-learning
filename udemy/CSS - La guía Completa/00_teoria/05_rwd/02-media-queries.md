# Responsive Web Design - Parte 2: Introducción a Media Queries

## ¿Qué son las Media Queries?

Las **Media Queries** permiten aplicar estilos CSS **condicionales**, según características del dispositivo o del entorno de visualización (como ancho, altura, resolución, orientación, etc.).

Son fundamentales para el **Responsive Web Design**, ya que permiten adaptar el diseño al tamaño de pantalla sin cambiar el contenido HTML.

---

## Sintaxis básica

```css
@media (condición) {
  /* reglas CSS aquí */
}
```

- Ejemplo común:

```css
@media (max-width: 600px) {
  /* estilos para pantallas pequeñas */
}
```

---

## Ejemplo 1: Media Query simple (max-width)

```css
.oferta {
  background-color: #00446e;
  padding: 2rem;
  text-align: center;
  max-width: 80rem;
  margin: 0 auto;
}

.precio {
  font-size: 6rem;
  margin: 0;
}

@media (max-width: 600px) {
  .oferta {
    width: 30rem;
  }

  .precio {
    font-size: 4rem;
  }
}
```

- En pantallas menores a 600px:
  - `.oferta` se reduce a 30rem.
  - `.precio` disminuye su tamaño de fuente.
- En pantallas más grandes, se mantienen los estilos principales.

---

## Ejemplo 2: Mobile First

```css
.oferta {
  background-color: #00446e;
  padding: 2rem;
  text-align: center;
}

.precio {
  font-size: 4rem;
  margin: 0;
}

@media (min-width: 600px) {
  .oferta {
    max-width: 40rem;
    margin: 0 auto;
  }
}

@media (min-width: 800px) {
  .oferta {
    max-width: 60rem;
  }
}
```

- Se define el diseño base para **móviles primero**.
- A medida que la pantalla se ensancha, se añaden mejoras.
- En pantallas ≥600px y ≥800px, `.oferta` aumenta su ancho.

---

## Ejemplo 3: Desktop First

```css
.oferta {
  background-color: #00446e;
  padding: 2rem;
  text-align: center;
  max-width: 60rem;
  margin: 0 auto;
}

.precio {
  font-size: 6rem;
  margin: 0;
}

@media (max-width: 800px) {
  .oferta {
    max-width: 40rem;
  }
}

@media (max-width: 600px) {
  .oferta {
    max-width: 100%;
  }
}
```

- Se diseña primero para **pantallas grandes**.
- A medida que la pantalla se reduce, se aplican correcciones.
- Requiere "reparar" lo que ya estaba definido, a diferencia del enfoque Mobile First.

---

## Comparación: Mobile First vs Desktop First

| Característica         | Mobile First                     | Desktop First                    |
|------------------------|----------------------------------|----------------------------------|
| Orden de desarrollo    | Estilos base para móviles        | Estilos base para escritorio     |
| Media Queries          | `min-width`                      | `max-width`                      |
| Rendimiento            | Mejor para dispositivos pequeños | Puede cargar más de lo necesario |
| Mantenimiento          | Escalable, moderno               | Más complejo en grandes proyectos|
| Recomendación          | ✅ Recomendado                   | ⚠️ Menos recomendado actualmente |

---

## Conclusión

**Media Queries** son la herramienta clave para adaptar interfaces a múltiples dispositivos.  
El enfoque **Mobile First** es el estándar actual por su eficiencia, escalabilidad y compatibilidad con mejores prácticas de rendimiento y SEO.
