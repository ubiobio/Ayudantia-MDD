
## Tecnologias a utilizar en el lado del servidor

### JavaScript

JavaScript es un lenguaje de programación de interpretado y orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico. Originalmente, fue creado para mejorar la interactividad en el navegador web y permitir a los desarrolladores crear páginas web dinámicas. A lo largo de los años, JavaScript ha evolucionado y se ha convertido en uno de los lenguajes de programación más ampliamente utilizados y versátiles.

- Documentación recomendada de JavaScript:
    - [**https://developer.mozilla.org/es/docs/Web/JavaScript**](https://developer.mozilla.org/es/docs/Web/JavaScript)

Aquí hay algunas características clave de JavaScript:

1. **Interactividad en el Navegador**:
    - JavaScript es conocido por su capacidad para manipular el contenido de las páginas web en tiempo real. Puede ser utilizado para cambiar el contenido, responder a eventos del usuario y actualizar la interfaz de usuario de una página web sin necesidad de recargarla.
2. **Lenguaje de Programación del Lado del Cliente**:
    - JavaScript se ejecuta en el navegador del usuario, lo que lo convierte en un lenguaje del lado del cliente. Es fundamental para la creación de aplicaciones web interactivas y dinámicas.
3. **Sintaxis Sencilla**:
    - La sintaxis de JavaScript es similar a la de otros lenguajes de programación, como Java o C, lo que facilita su aprendizaje para aquellos que ya están familiarizados con la programación.
4. **Orientado a Objetos**:
    - JavaScript es un lenguaje orientado a objetos, lo que significa que utiliza objetos para organizar y estructurar el código. Sin embargo, también es un lenguaje versátil que admite paradigmas de programación funcional y procedural.
5. **Plataforma Independiente**:
    - JavaScript se puede ejecutar en diferentes plataformas y navegadores, lo que lo hace independiente de la plataforma. Los navegadores modernos tienen motores JavaScript incorporados que interpretan y ejecutan el código.
6. **Amplio Ecosistema**:
    - JavaScript tiene un amplio ecosistema de bibliotecas y frameworks, como React, Angular y Vue.js, que facilitan el desarrollo de aplicaciones más complejas y eficientes.
7. **Node.js**:
    - Node.js es un entorno de ejecución de JavaScript del lado del servidor, lo que permite a los desarrolladores usar JavaScript para construir aplicaciones en el servidor, no solo en el navegador.
8. **Asincronía**:
    - JavaScript utiliza un modelo de ejecución asíncrona basado en eventos, lo que significa que puede manejar múltiples operaciones simultáneamente sin bloquear la ejecución del programa.
9. **APIs del Navegador**:
    - JavaScript tiene acceso a APIs del navegador que permiten interactuar con funciones específicas del navegador, como manipular el DOM, realizar solicitudes HTTP, y trabajar con almacenamiento local.

### Express

Express.js es un framework utilizado con Node.js que facilita la creación de aplicaciones web y APIs. Proporciona una serie de características y funcionalidades que permiten construir aplicaciones de manera eficiente y rápida.

- Documentación oficial de Express.js: [**https://expressjs.com/**](https://expressjs.com/)

Aquí hay algunas cosas que puedes hacer con Express.js:

1. Creación de Aplicaciones Web:
    - Puedes construir aplicaciones web completas utilizando Express.js para manejar las rutas, renderizar vistas y gestionar la lógica del servidor
2. Desarrollo de APIs RESTful:
    - Express.js es muy utiizadp para construir APIs RESTful que pueden ser consumidas por aplicaciones front-end, móviles u otros servicios.
3. Manejo de Rutas:
    - Express facilita la definición de rutas para diferentes recursos dentro de tu aplicación. Puedes manejar solicitudes HTTP GET, POST, PUT, PATCH, DELETE y otros métodos.
4. Middleware:
    - Express utiliza el concepto de middleware, lo que significa que puedes ejecutar funciones en el flujo de la solicitud antes de que llegue a la ruta final. Esto es útil para la autenticación, manejo de errores, registro, entre otros.
5. Plantillas de Vistas:
    - Express puede integrarse como motores de plantillas como EJS, Pug (antes llamado Jade), Handlebars, etc., para renderizar vistas del lado del servidor.
6. Manejo de Archivos Estáticos:
    - Puedes servir archivos estáticos (CSS, imágenes, JavaScript) de manera sencilla utilizando Express.
7. Integración de Bases de Datos:
    - Express no impone una base de datos específica, por lo que puedes integrar fácilmente bases de datos como MongoDB, MySQL, PostgreSQL, entre otras.
8. Sesiones y Cookies:
    - Express proporciona soporte para manejar sesiones y cookies, lo que es esencial para muchas aplicaciones web.
9. Middleware de Terceros:
    - Puedes usar middleware de terceros para agregar funcionalidades adicionales a tu aplicación, como autenticación con Passport, compresión con Gzip, entre otros.
10. Seguridad:
    - Express incluye características de seguridad integradas, pero también puedes agregar middleware adicional para mejorar la seguridad de tu aplicación.
11. WebSockets:
    - Aunque Express no tiene soporte nativo para WebSockets, puedes integrar fácilmente bibliotecas como Socket.io para habilitar comunicación en tiempo real.
12. Pruebas Unitarias e integración:
    - Express.js facilita las pruebas unitarias e integración de tu aplicación mediante la creación de rutas y controladores de manera modular.

### Nodejs

Node.js es un **entorno de ejecución de JavaScript del lado del servidor** que permite ejecutar código JavaScript fuera del navegador. Es un entorno basado en el motor V8 de Google Chrome, que es un motor de JavaScript de código abierto y de alto rendimiento. Node.js fue creado por Ryan Dahl y lanzado por primera vez en 2009.

Las características clave de Node.js incluyen:

1. **JavaScript del Lado del Servidor**:
    - Node.js permite a los desarrolladores ejecutar código JavaScript en el lado del servidor, lo que significa que pueden utilizar el mismo lenguaje de programación tanto en el lado del cliente como en el servidor.
2. **Event-Driven y Asíncrono**:
    - Node.js utiliza un modelo de E/S no bloqueante y basado en eventos, lo que significa que las operaciones de entrada/salida no bloquean la ejecución del programa. Esto facilita la construcción de aplicaciones rápidas y escalables.
3. **Módulos y NPM**:
    - Node.js utiliza un sistema de módulos que permite a los desarrolladores organizar su código de manera modular y reutilizable. NPM (Node Package Manager) es el sistema de gestión de paquetes de Node.js, que facilita la instalación y gestión de dependencias.
4. **Amplia Comunidad y Ecosistema**:
    - Node.js tiene una comunidad activa y un extenso ecosistema de módulos y bibliotecas de terceros que pueden ser fácilmente integrados en las aplicaciones.
5. **Rendimiento y Escalabilidad**:
    - Node.js es conocido por su rendimiento y escalabilidad. Es eficiente en el manejo de conexiones concurrentes y es adecuado para aplicaciones en tiempo real y altamente escalables.
6. **Aplicaciones en Tiempo Real**:
    - Node.js es muy adecuado para construir aplicaciones en tiempo real, como chats, juegos en línea y sistemas de colaboración en tiempo real, gracias a su capacidad para manejar múltiples conexiones simultáneas de manera eficiente.
7. **Desarrollo Rápido**:
    - Node.js facilita el desarrollo rápido de aplicaciones gracias a su diseño simple y a la posibilidad de compartir código entre el lado del cliente y el servidor.
8. **Soporte Multiplataforma**:
    - Node.js es compatible con múltiples plataformas, incluyendo Windows, macOS y Linux, lo que facilita su implementación en diferentes entornos.

Node.js es utilizado en una variedad de aplicaciones, desde servidores web y aplicaciones API hasta herramientas de desarrollo de frontend. Es especialmente popular en el desarrollo de aplicaciones web en tiempo real y en situaciones donde la escalabilidad y el rendimiento son cruciales.

### MongoDB

MongoDB es un sistema de gestión de **bases de datos NoSQL** (Not Only SQL) de código abierto que se caracteriza por ser orientado a documentos. Fue desarrollado por MongoDB Inc. y está diseñado para ser escalable y flexible, permitiendo almacenar y gestionar grandes cantidades de datos de manera eficiente.

- **Documentaciones recomendadas**:
    - [**https://www.mongodb.com/es**](https://www.mongodb.com/es)
    - [**https://mongoosejs.com/**](https://mongoosejs.com/)

#### Algunas características clave de MongoDB

1. **Modelo de Datos Orientado a Documentos**:
    - MongoDB almacena los datos en formato BSON (Binary JSON), que es similar a JSON (JavaScript Object Notation). Los datos se organizan en documentos, que son estructuras de datos flexibles y anidadas.
2. **Esquemas Dinámicos**:
    - A diferencia de las bases de datos relacionales que requieren un esquema predefinido, MongoDB utiliza un modelo de esquema dinámico, lo que significa que no es necesario definir la estructura completa de los datos de antemano.
3. **Escalabilidad Horizontal**:
    - MongoDB es altamente escalable y admite la escalabilidad horizontal. Puedes distribuir los datos en múltiples servidores para manejar grandes volúmenes de datos y tráfico.
4. **Almacenamiento de Datos Jerárquico**:
    - Los documentos de MongoDB pueden contener arreglos y otros documentos anidados, lo que permite representar datos jerárquicos de manera natural.
5. **Consultas y Índices**:
    - MongoDB proporciona potentes capacidades de consulta que incluyen filtrado, proyección y ordenamiento. También admite la creación de índices para mejorar el rendimiento de las consultas.
6. **Replicación y Alta Disponibilidad**:
    - MongoDB es capaz de replicar datos en varios nodos, proporcionando redundancia y alta disponibilidad. En caso de fallo de un nodo, otro puede tomar su lugar.
7. **Transacciones**:
    - A partir de versiones más recientes, MongoDB admite transacciones, lo que permite realizar operaciones en varios documentos de manera atómica.
8. **Aggregation Framework**:
    - MongoDB ofrece un marco de agregación que permite realizar operaciones de transformación y análisis de datos directamente en la base de datos.
9. **Adaptabilidad a Desarrollo Ágil**:
    - La flexibilidad de MongoDB es particularmente beneficiosa para entornos de desarrollo ágil, donde los esquemas pueden cambiar con frecuencia durante el desarrollo del proyecto.
10. **Comunidad Activa y Documentación Abundante**:
    - MongoDB cuenta con una comunidad activa de desarrolladores y una documentación extensa, lo que facilita el aprendizaje y la resolución de problemas.

MongoDB es utilizado en una variedad de aplicaciones, desde aplicaciones web hasta sistemas de análisis de datos. Su capacidad para manejar datos no estructurados y cambiar esquemas lo hace especialmente adecuado para entornos donde la flexibilidad y la escalabilidad son fundamentales.