
## Estructuras de Control

### Condicionales

- `if`:

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
}
```

- `if-else`:

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `if-else if-else`:

```js
if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else if (condicion) {
  // Codigo a ejecutar si la condicion es verdadera
} else {
  // Codigo a ejecutar si la condicion es falsa
}
```

- `switch`:

```js
switch (expresion) {
  case valor1:
    // Codigo a ejecutar si la expresion es igual a valor1
    break;
  case valor2:
    // Codigo a ejecutar si la expresion es igual a valor2
    break;
  default:
    // Codigo a ejecutar si la expresion no es igual a ninguno de los valores anteriores
}
```

### Ciclos

- `for`: Ejecuta el código un número determinado de veces.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
}
```

Ejemplo:

```js
// Imprime los numeros del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- `for-each`: Recorre los elementos de un arreglo.


```js
const array1 = [1, 2, 3, 4];

array1.forEach((elemento) => {
	console.log(`Elementos del array: ${elemento}`);
})
```


- `while`: Ejecuta el código mientras la condición sea verdadera.

```js
while (condicion) {
  // Codigo a ejecutar
}
```

Ejemplo:

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

- `do-while`: Ejecuta el código al menos una vez y luego mientras la condición sea verdadera.

```js
do {
  // Codigo a ejecutar
} while (condicion);
```

- `for-in`: Recorre las propiedades de un objeto.

```js
for (variable in objeto) {
  // Codigo a ejecutar
}
```

- `for-of`: Recorre los valores de un objeto iterable.

```js
for (variable of objeto) {
  // Codigo a ejecutar
}
```

- `break`: Termina la ejecución de un ciclo.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    break;
  }
}
```

- `continue`: Salta a la siguiente iteración de un ciclo.

```js
for (inicializacion; condicion; incremento) {
  // Codigo a ejecutar
  if (condicion) {
    continue;
  }
}
```