<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        input {
            width: 80%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            padding: 10px 15px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #218838;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            margin: 5px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .delete {
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            padding: 5px;
        }

        .delete:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lista de Tarefas</h1>
        <input type="text" id="taskInput" placeholder="Adicione uma nova tarefa">
        <button id="addTaskButton">Adicionar</button>
        <ul id="taskList"></ul>
    </div>

    <script>
        const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const taskList = document.getElementById('taskList');

        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Por favor, insira uma tarefa.');
                return;
            }

            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            deleteButton.textContent = 'Excluir';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.textContent = taskText;
            li.appendChild(deleteButton);

            taskList.appendChild(li);
            taskInput.value = '';
        });
    </script>
</body>
</html>
