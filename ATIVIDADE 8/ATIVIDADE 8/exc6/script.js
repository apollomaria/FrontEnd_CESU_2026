
function calcular() {

    const bandeira = document.getElementById("bandeiras").value;
    const qtdPessoa = document.getElementById("qtdPessoa").value;

    const lugarCusto = document.getElementById("lugarCusto");
    const lugarTaxa = document.getElementById("lugarTaxa");
    const lugarDesconto = document.getElementById("lugarDesconto");
    const lugarFinal = document.getElementById("lugarFinal");

    let custoBruto = 0;
    let taxaServico = 0;
    let desconto = 0;
    let custoTotal = 0;

    switch (bandeira) {
        case "standard": 
            console.log("standard");
            custoBruto = (qtdPessoa * 50);

            break;

        case "premium":
            console.log("premium");
            custoBruto = (qtdPessoa * 80);
            break;

        case "infinity":
            console.log("infinity");
            custoBruto = (qtdPessoa * 120); 
            break;

    }

    taxaServico = custoBruto * 0.1;

    if (qtdPessoa > 100) {
        desconto = (custoBruto + taxaServico) * 0.05;
    }

    lugarCusto.innerHTML = `Custo Bruto: R$ ${custoBruto.toFixed(2)}`;
    lugarTaxa.innerHTML = `Taxa de Serviço: R$ ${taxaServico.toFixed(2)}`;
    lugarDesconto.innerHTML = `Desconto: R$ ${desconto.toFixed(2)}`;
    lugarFinal.innerHTML = `Custo Final: R$ ${(custoBruto + taxaServico - desconto).toFixed(2)}`;
}