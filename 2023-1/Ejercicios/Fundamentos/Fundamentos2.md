## Listado para practicar los fundamentos de la programacion y JS parte 2

_[Documentacion en el repositorio](../../JavaScript/Fundamentos/Fundamentos.md)_

### Ejercicios 1 ( Funciones )

- Crea una funcion que reciba como parametro un numero y retorne el cuadrado de ese numero.
- Crea una funcion que reciba como parametro un numero y retorne el factorial de ese numero.
- Crea una funcion que reciba un string y retorne el string en mayusculas.
- Crea una funcion que reciba un string y retorne el string en minusculas.
- Crea una función que tome un número como parámetro y devuelva "par" si el número es par o "impar" si el número es impar.
- Crea una función que tome dos números como parámetros y devuelva la suma de esos dos números.
- Crea una función que tome un string como parámetro y devuelva la longitud del string.
- Crea una función que tome dos números como parámetros y devuelva true si ambos números son iguales, de lo contrario devolver false.

#### Tips:

- Usar el return como en el siguiente ejemplo:
  ```js
  function suma (numero1, numero2) {
    return numero1 + numero2
  }
  
    const resultado = suma(10, 20)
    console.log(resultado)
  ```
- Tabien recuerden que los numeros y strings tienen metodos que pueden usar para resolver los ejercicios.
- Ejemplo:
  ```js
  const numero1 = 10
  const numero2 = 20
  // Transformar un numero a string
  console.log(numero1.toString())
  console.log(numero2.toString())
  ```

### Ejercicios 2 ( Arrays )

- Crea una funcion que reciba como parametro un array de numeros y retorne la suma de todos los numeros del array.
- Crea una funcion ( o varias) que reciba como parametro un array de numeros y retorne el promedio de todos los numeros del array.
- Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
- Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

#### Tips:

- Recordar que los arreglos tienen metodos que pueden usar para resolver los ejercicios.
- Ejemplo:
  ```js
  const numeros = [1, 2, 3, 4, 5]
  // Agregar un elemento al final del arreglo
  numeros.push(6)
  console.log(numeros) // [1, 2, 3, 4, 5, 6]
  
  // Eliminar el ultimo elemento del arreglo
  numeros.pop()
  console.log(numeros) // [0, 1, 2, 3, 4, 5]
  ```
  
___

- [Volver al indice](../Ejercicios.md)
