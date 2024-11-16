window.onload = () =>{
    document.getElementById("start").addEventListener("click",start);
    document.getElementById("stop").addEventListener("click",stop);
    document.getElementById("reset").addEventListener("click",reset);
}

var segundos = 0;
var minutos = 0;
var interval;
var inicio = true;

function start(){
    if(inicio){
        inicio = false;
        interval = setInterval(() => {
            if (segundos === 60) {
                segundos = 0;
                minutos++;
                if(minutos < 10){
                    document.getElementById("minutos").innerText = "0" + minutos;
                }else{
                    document.getElementById("minutos").innerText = minutos;
                }
            }
            if(segundos < 10){
                document.getElementById("segundos").innerText = "0" + segundos;
            }else{
                document.getElementById("segundos").innerText = segundos;
            }
            segundos++;
            if(minutos == 59 && segundos == 59){
                clearInterval(interval);
            }
        }, 1000);
    }
}

function stop(){
    clearInterval(interval);
    interval = null;
    inicio = true;
}

function reset(){
    inicio = true;
    segundos = 0;
    minutos = 0;
    clearInterval(interval);
    interval = null;
    document.getElementById("minutos").innerText = "00";
    document.getElementById("segundos").innerText = "00";
}

