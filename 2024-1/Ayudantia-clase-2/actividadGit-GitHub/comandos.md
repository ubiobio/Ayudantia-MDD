
## Comandos

### Ciclo básico de subida de archivos a GitHub!

![subida.gif](../images/Subida_archivo.gif)

### Pasos a seguir

1. Nos alojamos en la ruta de nuestro escritorio y verificamos que estemos efectivamente en la ruta deseada:

![paso1.png](../images/paso1.png)

2. Creamos un directorio con `mkdir <nombre_directorio>`, nos movemos a nuestro directorio con el comando `cd <nombre_directorio>`:

![paso2.png](../images/paso2.png)

3. Creamos un archivo README.md con el comando `touch README.md`:

![paso3.png](../images/paso3.png)

4. Abrimos nuestro **Visual Studio Code** con el comando `code .` y luego `ENTER`:

![paso4.png](../images/paso4.png)

5. Clickeamos nuestro archivo `README.md` y luego procedemos a modificar a nustro gusto el archivo:

![paso5.png](../images/paso5.png)

6. Abrir la terminal y hacer un `git init`, para iniciar nuestro repositorio de git:

![paso6.png](../images/paso6.png)

7. Hacer un `git status`, para verificar el estado de nuestro archivo **README.md**:

![paso7.png](../images/paso7.png)

8. Agregar nuestro archivo **README.md** al área de preparación (staging) con el comando `git add <archivo>` y verificar el estado del archivo de nuevo con `git status`:

![paso8.png](../images/paso8.png)

9. Hacer un commit para subir nuestro archivo al repositorio de git con el comando `git commit -m "msj"`:

![paso9.png](../images/paso9.png)

10. Con el comando `git remote add origin <URL_Repositorio_GitHub>` apuntamos a nuestro repositorio en GitHub:

![paso10.png](../images/paso10.png)

11. Seguimos con el comando `git branch -M main`, que nos sirve para modificar el nombre de la rama que se crea por defecto. Por lo que pasa de `master` a `main`.

![paso11.png](../images/paso11.png)

12. Por ultimo colocamos el comando `git push -u origin main`, para empujar nuestros cambios que tenemos en nuestro repositorio de git hacia nuestro repositorio remoto en GitHub:

![paso12.png](../images/paso12.png)


13. Si vamos a nuestro repositorio en GitHub y le damos `refresh` a la página, nos encontramos con nuestro archivo **README.md** subido:

![paso13.png](../images/paso13.png)

