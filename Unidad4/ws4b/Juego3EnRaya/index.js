window.onload = () => {
    const btn = document.getElementsByTagName("button");

    var casillas = [
        document.getElementById("casilla1"),
        document.getElementById("casilla2"),
        document.getElementById("casilla3"),
        document.getElementById("casilla4"),
        document.getElementById("casilla5"),
        document.getElementById("casilla6"),
        document.getElementById("casilla7"),
        document.getElementById("casilla8"),
        document.getElementById("casilla9")
    ];

    casillas.forEach(casilla => casilla.addEventListener("click", () => colocarPiesas(casilla)));
    
    btn[0].addEventListener('click', () => {
        casillas.forEach(casilla => reiniciarJuego(casilla));
    });

    btn[1].addEventListener('click', () => {
        casillas.forEach(casilla => siguienteRonda(casilla))
    })
}

var jugador = true;
var jugadorX = 0;
var jugadorO = 0;

function colocarPiesas(casilla){
    if(casilla.innerText === "" && !document.getElementById("ganador").innerText){
        casilla.innerText = jugador ? "X" : "O";    

        if(ganador()){
            document.getElementById("ganador").innerText = `Ha ganado ${jugador ? "X" : "O"}`;
            
            if(jugador){
                jugadorX++;
                document.getElementById("jugadorX").innerText = `Jugador X = ${jugadorX}`;
            }else{
                jugadorO++;
                document.getElementById("jugadorO").innerText = `Jugador O = ${jugadorO}`;
            }
        }else{
        jugador = !jugador;
        }
    }
}


function ganador(){
    const combinacionesGanadoras = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const casillas = [
        document.getElementById("casilla1").innerText,
        document.getElementById("casilla2").innerText,
        document.getElementById("casilla3").innerText,
        document.getElementById("casilla4").innerText,
        document.getElementById("casilla5").innerText,
        document.getElementById("casilla6").innerText,
        document.getElementById("casilla7").innerText,
        document.getElementById("casilla8").innerText,
        document.getElementById("casilla9").innerText
    ];
    
    return combinacionesGanadoras.some(combinacion => 
        casillas[combinacion[0]] !== "" &&
        casillas[combinacion[0]] === casillas[combinacion[1]] &&
        casillas[combinacion[1]] === casillas[combinacion[2]]
    );
}

function siguienteRonda(casilla){
    casilla.innerText = "";
    document.getElementById("ganador").innerText = "";
    jugador = true;
}

function reiniciarJuego(casilla){
    casilla.innerText = "";
    document.getElementById("ganador").innerText = "";
    jugador = true;
    jugadorO = 0;
    jugadorX = 0;
}

