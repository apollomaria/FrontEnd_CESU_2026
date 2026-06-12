const input = document.getElementById("nome");
const listaNome = document.getElementById("lista");

function addName() {
    const nome = input.value.trim();

    if (nome !== "") {
        const novoNome = document.createElement("li");

        novoNome.innerHTML =   
        `<span> ${nome} <br> <br> </span> 
            <button id="botaoConclude" onclick="concludeName(this)"> Presente </button>
            <button id="botaoEdit" onclick="editName(this)"> Editar </button>
            <button id="botaoDelete" onclick="deleteName(this)"> Excluir </button>
        `;

        listaNome.appendChild(novoNome);
    }
}

function concludeName(button) {
    const nameToConclude = button.parentElement;

    if (nameToConclude.classList.toggle('completed')) {
        button.innerHTML = `Ausente`;
    } else {
        button.innerHTML = `Presente`;
    }

}

function editName(button) {
    const nameToEdit = button.parentElement;

    const nameTyped = nameToEdit.querySelector('span');
    
    const newText = prompt('Editar nome', nameTyped.textContent);
    text.textContent = newText;

}


function deleteName(button) {
    const nameToDelete = button.parentElement;
    listaNome.removeChild(nameToDelete); 
}