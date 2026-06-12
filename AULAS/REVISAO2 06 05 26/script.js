const taskInput = document.getElementById("taskInput");  
const taskList = document.getElementById("taskList");

function addTask() {
    const textInput = taskInput.value.trim();
    if (textInput !== '') {
        const newTask = document.createElement('li');
      
        newTask.innerHTML = `<span> ${textInput} </span>
        <button onclick="editTask(this)"> Editar </button>
        <button onclick="removeTask(this)"> Remover </button>
        <button onclick="concludeTask(this)"> Concluir </button>`;
        taskList.appendChild(newTask);
    }
}


function editTask(button) {
    const itemToEdit = button.parentElement;
    const text = itemToEdit.querySelector('span');
    
    const newText = prompt('Editar a Tarefa', text.textContent);
    text.textContent = newText;
}


function removeTask(button) {
    const itemToRemove = button.parentElement;
    taskList.removeChild(itemToRemove);
}


function concludeTask(button) {
    const itemToConclude = button.parentElement;
    if (itemToConclude.classList.toggle('completed')){
        button.innerHTML = `Desmarcar`;  
    } else {
        button.innerHTML = `Completar`;
    }
}
