
## Creación y Concatenación de Strings

### Creación de Strings

```javascript
const primeraOpcion = 'Hola' //Con comillas simples
const segundaOpcion = "Hola" //Con comillas dobles
const tercerOpcion = `Hola` //Con comillas invertidas

console.log(primeraOpcion, segundaOpcion, tercerOpcion) //Hola Hola Hola
```

### Concatenación de strings - Opción +

```javascript
const nombre = 'Diego'
const apellido = 'Salazar'
const nombreCompleto = nombre + ' ' + apellido
console.log("Mi nombre es:",nombreCompleto) //Diego Salazar
```

### Concatenación de strings - Opción Template Literals

```javascript
const nombres = 'Diego Alexis'
const apellidos = 'Salazar Jara'
const nombreCompleto2 =  `Hola, soy ${nombres} ${apellidos}`
console.log(nombreCompleto2) //Hola, soy Diego Alexis Salazar Jara
```

### Concatenación de strings - Opción join()

```javascript
const primeraParte = 'Hola'
const segundaParte = 'Soy'
const terceraParte = 'Diego Salazar Jara'
const presentacion = [primeraParte, segundaParte, terceraParte].join(' ')
console.log(presentacion) //Hola Soy Diego Salazar Jara
```

### Concatenación de strings - Opción concat()

```javascript
const hobbie1 = 'Jugar'
const hobbie2 = 'Leer'
const hobbie3 = 'Programar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3)
console.log(hobbies) //Mis hobbies son: Jugar, Leer, Programar
```