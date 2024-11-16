var barajaOrdeneada = ["red1", "red2", "blue1", "blue2", "green1", "green2", "yellow1", "yellow2", "pink1", "pink2"];
var barajaMezclada = mezclarBaraja(barajaOrdeneada);
var cartasSeleccionadas = [];
var cartasEmparejadas = [];
var segundos = 0;
var minutos = 0;
var interval;
var inicio = true; 

window.onload = () => {
    asignarColores();
    agregarEventosCartas();
}

function mezclarBaraja(baraja) {
    let barajaMezclada = baraja.slice();
    for (let i = barajaMezclada.length - 1; i > 0; i--) {
        let j = Math.trunc(Math.random() * (i + 1));
        [barajaMezclada[i], barajaMezclada[j]] = [barajaMezclada[j], barajaMezclada[i]];
    }
    return barajaMezclada;
}

function asignarColores() {
    let celdas = document.querySelectorAll("td");
    celdas.forEach((celda, i) => {
        celda.setAttribute("data-color", barajaMezclada[i].slice(0, -1));
        celda.style.backgroundColor = "white";
    });
}

function agregarEventosCartas() {
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.addEventListener("click", () => {
            if (cartasSeleccionadas.length < 2 && !cartasEmparejadas.includes(celda.id)) {
                if (inicio) start(); 
                voltearCarta(celda);
            }
        });
    });
}

function voltearCarta(carta) {
    let color = carta.getAttribute("data-color");
    carta.style.backgroundColor = color;
    cartasSeleccionadas.push(carta);

    if (cartasSeleccionadas.length === 2) {
        verificarPareja();
    }
}

function verificarPareja() {
    let [carta1, carta2] = cartasSeleccionadas;

    if (carta1.getAttribute("data-color") === carta2.getAttribute("data-color")) {
        cartasEmparejadas.push(carta1.id, carta2.id);

        if (cartasEmparejadas.length === barajaMezclada.length) {
            stop(); 
            document.getElementById("victoria").innerText = "¡Has encontrado todas las parejas!";
        }
    } else {
        setTimeout(() => {
            carta1.style.backgroundColor = "white";
            carta2.style.backgroundColor = "white";
        }, 1000);
    }

    cartasSeleccionadas = [];
}

function start() {
    inicio = false; 
    interval = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }

        document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
        document.getElementById("segundos").innerText = segundos < 10 ? "0" + segundos : segundos;
    }, 1000);
}

function stop() {
    clearInterval(interval); 
}
