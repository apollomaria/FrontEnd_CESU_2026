/* Crie um conversor de temperatura entre Celsius (C) e Fahrenheit (F) que funcione nos dois sentidos e em tempo real.
Utilize o evento oninput ou addEventListener('input');
Ao digitar em Celsius, o campo Fahrenheit deve atualizar sozinho e vice-versa;
Formate os resultados para exibirem sempre 2 casas decimais. */

function calcularCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheitInput").value;
    const celsiusValue = ((fahrenheitInput - 32) * 5/9);

    document.getElementById("celsiusInput").value = celsiusValue;
}

function calcularFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const fahrenheitValue = ((celsiusInput * 9/5) + 32);

    document.getElementById("fahrenheitInput").value = fahrenheitValue;
}