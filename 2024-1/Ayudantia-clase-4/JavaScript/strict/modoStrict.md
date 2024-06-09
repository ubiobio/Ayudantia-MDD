
## Modo estricto

El modo estricto de `ECMAScript 5` es una forma de elegir una variante restringida de JavaScript, así implícitamente se deja de lado el modo poco riguroso.

El modo estricto tiene varios cambios en la semántica normal de JavaScript:

1. Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
2. Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones. A veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
3. Prohíbe cierta sintaxis que probablemente sea definida en futuras versionas de `ECMAScript`.

### Invocar al modo estricto

El modo estricto se aplica a un script completo o a funciones individuales. No se aplica a bloques entre corchetes; intentar aplicarlo en tales contextos no hace nada.

### Ejemplo de uso de modo estricto

```javascript
"use strict";

const edad = 20;
console.log(edad);
```