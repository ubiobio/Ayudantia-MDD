const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());

// Generar un ID aleatorio
const randomId = uuidv4();

// Array para almacenar las tareas
let tasks = [
  {
    id: randomId,
    title: 'Aprender Node.js',
    description: 'Aprender Node.js en la ayudantia',
    completed: false,
  },
];

// Ruta para obtener todas las tareas
app.get('/tasks', function (request, response) {
  response.json(tasks);
});

// Ruta para obtener una tarea por su ID
app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(task);
});

// Ruta para agregar una nueva tarea
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    id: randomId,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Ruta para editar una tarea existente
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  task.title = title;
  task.description = description;
  task.completed = completed;
  res.json(task);
});

// Ruta para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  tasks.splice(index, 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
