const criatura = document.getElementById("b");
const botao = document.getElementById("btn");

const estados = {
    normal: "b_n.png",
    alimentado: "b_a.png",
    bravo: "b_b.png",
    comendo: "b_c.png",
    morto: "b_m.png"
}

let contador = 0;
let intervalo = null;
let time_out = null;
let time_click = null;

function controlador() {
    if (intervalo) clearInterval(intervalo) 
        
        intervalo = setInterval(() => {
            contador++;
            console.log("Tempo: ", contador);

            if (contador == 30) {
                criatura.src = estados.bravo;
            }
            if (contador == 60) {
                criatura.src = estados.morto;
            }
        }, 1000)

        // setInterval() = função do JavaScript
}

controlador();