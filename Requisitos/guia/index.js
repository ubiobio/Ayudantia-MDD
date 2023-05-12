const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let list = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
];

// Como usuario quiero poder leer las tareas
app.get('/tasks', function (request, response) {
  response.status(200).json(list);
});

//Como usuario quiero poder crear una tarea
app.post('/tasks', function (request, response) {
  const task = request.body;
  list.push(task);
  response.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
