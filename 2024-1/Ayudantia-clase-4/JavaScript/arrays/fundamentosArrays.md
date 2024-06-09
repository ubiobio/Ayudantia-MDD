
## Fundamentos de Arrays

Un array es una estructura de datos que nos permite almacenar y organizar una colección de elementos. Estos elementos pueden ser de cualquier tipo, como números strings, booleanos, objetos, etc.

### ¿Cómo se crean los Arrays?

1. Con la palabra reservada new Array()

```javascript
const frutas = new Array('manzana', 'pera', 'uva');
console.log(frutas); // ['manzana', 'pera', 'uva']
console.log(typeof frutas); // object
```

2. Con la palabra reservada Array()

```javascript
const frutas2 = Array('manzana', 'pera', 'uva');
console.log(frutas2); // ['manzana', 'pera', 'uva']
console.log(typeof frutas2); // object
```

3. Con los corchetes [].

```javascript
const frutas3 = ['manzana', 'pera', 'uva'];
console.log(frutas3); // ['manzana', 'pera', 'uva']
console.log(typeof frutas3); // object
```

### Ejemplo

```javascript
const ingredientes = [
    'huevos',
    {
        tipo: 'carne',
        cantidad: 2
    },
    true,
    ['sal', 'pimienta']
]

// Acceder a los elementos de un array
console.log(ingredientes[0]); // huevos
console.log(ingredientes[1]); // { tipo: 'carne', cantidad: 2 }
console.log(ingredientes[1].tipo); // carne
console.log(ingredientes[1]['tipo']); // carne
console.log(ingredientes[1].cantidad); // 2
console.log(ingredientes[1]['cantidad']); // 2
console.log(ingredientes[2]); // true
console.log(ingredientes[3]); // ['sal', 'pimienta']
console.log(ingredientes[3][0]); // sal
console.log(ingredientes[3][1]); // pimienta
console.log(ingredientes.length); // 4
```

### Mutabilidad de los Arrays

Los arrays son mutables, es decir, podemos modificar su contenido.

```javascript
const frutas4 = ['manzana', 'pera', 'uva']; // ['manzana', 'pera', 'uva']
frutas4.push('fresa');
console.log(frutas4); // ['manzana', 'pera', 'uva', 'fresa']
```

### Inmutabilidad de los Arrays

La inmutabilidad en los arrays se refiere a que no podemos modificar el array original, pero si podemos crear un nuevo array con los cambios que necesitemos.

```javascript
const frutas4 = ['manzana', 'pera', 'uva']; // ['manzana', 'pera', 'uva']
const nuevaFruta = frutas4.concat('mango');
console.log(frutas4); // ['manzana', 'pera', 'uva', 'fresa']
console.log(nuevaFruta); // ['manzana', 'pera', 'uva', 'fresa', 'mango']
```

### Comprobar que un array sea en verdad un array

```javascript
const frutas4 = ['manzana', 'pera', 'uva']; // ['manzana', 'pera', 'uva']
const arreglo = Array.isArray(frutas4); // isArray se utiliza para saber si es un arreglo
console.log(isArray); // true
```