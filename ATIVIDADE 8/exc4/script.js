
function calcular() {

    const bandeira = document.getElementById("bandeiras").value;
    const parcela = document.getElementById("parcelas").value;
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);

    const lugarTaxa = document.getElementById("lugarTaxa");
    const lugarJuros = document.getElementById("lugarJuros");
    const lugarParcela = document.getElementById("lugarParcela");
    const lugarTotal = document.getElementById("lugarTotal");

    switch (bandeira) {
        case "visa":
            valorTaxa = parseFloat(valorVenda * 0.02);
            break;

        case "master":
            valorTaxa = parseFloat(valorVenda * 0.0185);
            break;

        case "elo":
            valorTaxa = parseFloat(valorVenda * 0.03);
            break;
    }

    valorTaxa = parseFloat(valorTaxa + 12.50 * parseFloat(parcela));
    valorJuros = parseFloat(valorVenda * (0.015 * parseFloat(parcela)));
    valorTotal = parseFloat(valorVenda + valorTaxa + valorJuros);
    valorParcela = parseFloat(valorTotal / parseFloat(parcela));

    lugarTaxa.innerHTML = "Valor da Taxa: R$ " + `${valorTaxa.toFixed(2)}`;
    lugarJuros.innerHTML = "Valor dos Juros: R$ " + `${valorJuros.toFixed(2)}`;
    lugarParcela.innerHTML = "Valor de cada Parcela: R$ " + `${valorParcela.toFixed(2)}`;
    lugarTotal.innerHTML = "Valor Total da Compra: R$ " + `${valorTotal.toFixed(2)}`;

}