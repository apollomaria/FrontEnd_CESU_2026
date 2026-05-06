const taskInput = document.getElementById("taskInput");  
const taskList = document.getElementById("taskList");

function addTask() {
    const textInput = taskInput.value.trim();
    if (textInput !== '') {
        const newTask = document.createElement('li');
      
        newTask.innerHTML = `<span> ${textInput} </span>`;
        taskList.appendChild(newTask);
    }
}