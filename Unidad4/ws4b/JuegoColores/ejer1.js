window.onload = () =>{
    let modoJuego = true;
    const btn = document.getElementsByTagName("button");


    btn[0].addEventListener("click", () => {
        iniciarJuego();
        document.getElementById("resultado").innerText = ("");
    });

    btn[1].addEventListener("click", () => {
        modoJuego = false;
        iniciarJuego();
        document.getElementById("resultado").innerText = ("");
    });
   
    btn[2].addEventListener("click", () => {
        modoJuego = true;
        iniciarJuego();
        document.getElementById("resultado").innerText = ("");
    });

    function iniciarJuego(){
        var cuadros = [
            document.getElementById("cuadro1"),
            document.getElementById("cuadro2"),
            document.getElementById("cuadro3"),
            document.getElementById("cuadro4"),
            document.getElementById("cuadro5"),
            document.getElementById("cuadro6")];

        if(modoJuego){
            cuadros.forEach(cuadro => cuadro.style.display="block");
        }else{
            cuadros.slice(0,3).forEach(cuadro => cuadro.style.display = "block");
            cuadros.slice(3).forEach(cuadro => cuadro.style.display = "none");
            cuadros = cuadros.slice(0,3);
        }

        let ganador = colorAleatorio();
        let idGanador = seleccionarGanador(cuadros);
        document.getElementById("cCorrecto").innerText = ("RGB(" + ganador + ")");   

        cuadros.forEach(cuadro => {
            cuadro.style.opacity = "1";
            rellenarJuego(cuadro);
            cuadro.addEventListener("click", () => jugar(cuadro,document.getElementById(idGanador)));
        });

        introducirGanador(document.getElementById(idGanador),ganador);

    }

    iniciarJuego();

}

function colorAleatorio(){
    let arrayColor = [];
    for(let i = 0;i<3;i++){
        arrayColor[i] = Math.trunc((Math.random() * 255));
    }
    let color = arrayColor.join()
    return color;
}

function rellenarJuego(id){
    id.style.backgroundColor = "rgb(" + colorAleatorio() + ")";
}

function seleccionarGanador(cuadros){
    let aleatorio = Math.trunc((Math.random() * cuadros.length));
    id = "cuadro" + aleatorio;
    return id;
}

function introducirGanador(id,ganador){
    id.style.backgroundColor = "rgb(" + ganador + ")";
}

function jugar(id,ganador){
    if(id.style.backgroundColor === ganador.style.backgroundColor){
        document.getElementById("resultado").innerText = ("HAS ACERTADO");
        id.style.opacity = "1";
    }else{
        document.getElementById("resultado").innerText = ("HAS FALLADO");
        id.style.opacity = "0";
    }
}

