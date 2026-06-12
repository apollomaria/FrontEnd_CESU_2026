const produtos = {
	"123": {"nome": "Suco", "preco": 12.50},
	"456": {"nome": "Agua", "preco": 1.50},
	"789": {"nome": "Leite", "preco": 5.00},
	"000": {"nome": "Refrigerante", "preco": 3.90}
};

let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () => {
	document.getElementById("cod").focus();
};


function addProduto(){
	const codElement = document.getElementById("cod");
	const qtdElement = document.getElementById("qtd");

	const codValue = codElement.value;
	const qtdValue = qtdElement.value;

	if(!produtos[codValue]) {
		alert("Produto não cadastrado!");
		return;
	}

	const produtoBase = produtos[codValue];

	const item = {
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		quantidade: qtdValue,
		subTotal: produtoBase.preco * qtdValue,
	};

	carrinho.push(item);
	audio.currentTime = 0;
	audio.play();
 
	codElement.value = "";
	qtdElement.value = 1;

	atualizaTela();
};

function atualizaTela() {
	
	const list = document.getElementById("lista");

	let total = 0;

	carrinho.forEach((item, index) => {
		total += item.subTotal;

		const li = document.createElement("li");
		li.className = "list-group-item";

		li.innerHTML = `<div class="d-flex"> <strong>${item.nome} 
		</strong> <small>${item.quantidade} X ${item.preco} = 
		<strong> ${item.subTotal} </strong></small></div>`;
		list.appendChild(li);
	});
}