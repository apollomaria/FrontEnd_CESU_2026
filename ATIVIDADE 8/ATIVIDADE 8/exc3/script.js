const botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const paragrafo = document.getElementById("situacao");

    const media = ((nota1 + nota2 + nota3)/3);
    let situacao;

    if (media >= 7) {
        situacao = "APROVADO";
        paragrafo.classList.add("ap");
    } else if (media >= 4) {
        situacao = `EXAME (faltam: ${10-media.toFixed(2)} pontos)`;
        paragrafo.classList.add("ex");
    } else {
        situacao = "REPROVADO";
        paragrafo.classList.add("re");
    }

    paragrafo.innerHTML = `<span> Nome: ${nome}<br> Média: ${media.toFixed(2)}<br> Situação: ${situacao} </span>`;
}