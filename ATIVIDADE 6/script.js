const criatura = document.getElementById("b");
const botao = document.getElementById("btn");

const estados = {
    normal: "normal.png",
    alimentado: "feliz.png",
    bravo: "bravo.png",
    comendo: "comendo.png",
    morto: "morto.png"
}

let contador = 0;
let intervalo = null;
let time_out = null;
let time_click = null;
const fundoDia = "background.png";
const fundoNoite = "background_noite.png";
let horas = 0;

function controlador() {
    if (intervalo) clearInterval(intervalo) 
        
        intervalo = setInterval(() => {
            contador++;
            console.log("Tempo: ", contador);

            if (contador == 5) {
                criatura.src = estados.bravo;
            }
            if (contador == 7) {
                criatura.src = estados.morto;
            }
        }, 1000)

}

function alimentar() {
    criatura.src = estados.comendo; 
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);
    
    time_click = setTimeout(() => {
        criatura.src = estados.alimentado;

        time_out = setTimeout(() => {
            criatura.src = estados.normal;
        }, 2000);

    }, 1000);
}


function atualizarFundo() {
    if (horas) clearInterval(horas);

    horas = setInterval(() => {
    horas++;
    
    if (horas >= 12) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
    }
    // if(horas >=24) horas =0;

    }, 100);
}

function toggleFundo() {
    checked = document.body.style.backgroundImage = `url('${fundoNoite}')`;
}


controlador();
