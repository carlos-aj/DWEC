class Juego{
    constructor(){
        this.jugador = "X";
        this.tablero = [[null,null,null],
                        [null,null,null],
                        [null,null,null]];
        this.contador = 0;
    }

    monstrarTablero(){
        this.tablero.forEach(fila => console.log(fila.join(" | ")));
    }

    cambiarJugador(){
        if(this.jugador == "X"){
            this.jugador = "O";
        }else{
            this.jugador = "X";
        }
    }

    colocarPieza(fila,columna){
        if(this.contador <6){
            if(this.tablero[fila - 1][columna - 1] == null){
                this.tablero[fila - 1][columna - 1] = this.jugador;
                this.contador++;
                this.cambiarJugador();
            }else{
                console.log("Posicion ocupada");
            }
        }else{
            console.log("El juego ha finalizado");
        }
    }

    reiniciarJuego(){
        this.tablero = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ];
        this.jugador = "X";
        this.movimientos = 0;
    }

}