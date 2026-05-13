const botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
    const nome = document.getElementById("nome");
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const situ = document.getElementById("situacao");

    const media = ((nota1 + nota2 + nota3)/3);

    situ.innerHTML = media.toFixed(2);
}