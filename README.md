# Atividade4-ListaTarefas
# Lista de Tarefas - Projeto Simples

## Descrição
Este é um projeto simples de Lista de Tarefas, desenvolvido em HTML, CSS e JavaScript. O objetivo do aplicativo é permitir que os usuários adicionem, visualizem e excluam tarefas de forma interativa. Este projeto é ideal para iniciantes que desejam aprender como manipular o DOM com JavaScript.

---

## Funcionalidades
1. **Adicionar tarefas**: O usuário pode digitar o texto de uma tarefa e adicioná-la à lista.
2. **Excluir tarefas**: Cada tarefa tem um botão "Excluir" que a remove da lista.

---

## Estrutura do Projeto

### 1. **HTML**
Responsável pela estrutura do aplicativo:
- **Campo de entrada** (`<input>`): Permite ao usuário digitar o texto de uma nova tarefa.
- **Botão Adicionar** (`<button>`): Adiciona a tarefa à lista quando clicado.
- **Lista de tarefas** (`<ul>`): As tarefas são exibidas dinamicamente como itens (`<li>`).

### 2. **CSS**
Estiliza a interface do usuário:
- Design responsivo e centralizado.
- Bordas arredondadas e sombras para o contêiner principal.
- Diferenciação visual entre tarefas e botões interativos.

### 3. **JavaScript**
Adiciona interatividade:
- **Adicionar tarefas**:
  - Captura o texto do campo de entrada e cria um elemento `<li>`.
  - Adiciona um botão "Excluir" a cada tarefa.
- **Excluir tarefas**:
  - Remove a tarefa correspondente da lista ao clicar no botão "Excluir".

---

## Como Usar
1. **Baixe ou copie os arquivos**:
   - Um arquivo HTML contendo todo o código.
2. **Abra o arquivo HTML**:
   - Use qualquer navegador para abrir o arquivo e usar o aplicativo.
3. **Adicione tarefas**:
   - Digite o texto de uma tarefa no campo e clique em "Adicionar".
4. **Exclua tarefas**:
   - Clique no botão "Excluir" ao lado de uma tarefa para removê-la.

---

## Exemplo de Código

### HTML:
```html
<input type="text" id="taskInput" placeholder="Adicione uma nova tarefa">
<button id="addTaskButton">Adicionar</button>
<ul id="taskList"></ul>
```

### CSS:
```css
.container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
```

### JavaScript:
```javascript
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
```

---

## Melhorias Futuras
1. **Persistência de Dados**:
   - Armazenar as tarefas no `localStorage` para que não sejam perdidas ao recarregar a página.
2. **Função de Edição**:
   - Permitir que o usuário edite uma tarefa existente.
3. **Filtros de Tarefas**:
   - Adicionar opções para filtrar tarefas completas e pendentes.

---

## Conclusão
Este pro
jeto é uma excelente introdução à manipulação do DOM e à criação de aplicações interativas usando JavaScript. Experimente expandir as funcionalidades e estilizar a interface para personalizá-lo!
