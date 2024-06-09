
## Utilizando req.status

### Utilizando req.status con Express.js

Requisitos:

- Tener instalado **Visual Studio Code**.
- Dentro de **Visual Studio Code** instalar la extensión llamada **Thunder Client**.
- Tener instalada la versión actualizada de **Node.js 20.11.0 LTS.**
- Tener las ganas de aprender y programar! 🚀🚀🚀

### Código

```javascript

import express from 'express';

const app = express();
const port = 3000;

app.get('/error', (req, res) => {
  res.status(404).send('Página no encontrada');
});
  

app.get('/exito', (req, res) => {
  res.status(200).send('Operación exitosa');
});
  
app.get('/fallo', (req, res) => {
  res.status(500).send('Error interno del servidor');
});
  
// Metodo de express para levantar un servidor y que escuche en un puerto determinado.
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})
```

### Resultados al realizar la petición con Thunder Client a la ruta http://localhost:3000/error

- Se debe levantar el servidor antes con el comando: `node <nombreArchivo.js>`.

![status1.png](../images/status1.png)

### Resultados al realizar la petición con Thunder Client a la ruta http://localhost:3000/exito

- Se debe levantar el servidor antes con el comando: `node <nombreArchivo.js>`.

![status2.png](../images/status2.png)

### Resultados al realizar la petición con Thunder Client a la ruta http://localhost:3000/fallo

- Se debe levantar el servidor antes con el comando: `node <nombreArchivo.js>`.

![status3.png](../images/status3.png)