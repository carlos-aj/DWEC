var vidas = 10;
var palabraSeleccionada = "";
var categoriaSeleccionada = "";

window.onload = () => {
    categoriaSeleccionada = seleccionarCategoria();
    palabraSeleccionada = seleccionarPalabra(categoriaSeleccionada);
    introducirPalabra(palabraSeleccionada);

    document.getElementById("pista").addEventListener("click", () => {
        document.getElementById("categoria").innerText = "The Chosen Category Is " + categoriaSeleccionada;
    });

    document.getElementById("vidas").innerText = "You have " + vidas + " lives";
    botones(); 
}

var categorias = {
    Cities: ["LONDON", "MADRID", "BERLIN", "LISBON"],
    Countries: ["SPAIN", "GERMANY", "FRANCE", "PORTUGAL"]
};

function seleccionarCategoria(){
    let indice = Object.keys(categorias);
    let n = Math.trunc((Math.random() * indice.length));
    return indice[n];
}

function seleccionarPalabra(categoriaSeleccionada){
    let palabras = categorias[categoriaSeleccionada];
    let m = Math.trunc(Math.random() * palabras.length);
    return palabras[m];
}

function introducirPalabra(palabra){
    let contenedor = document.getElementById("letras");

    for (let i = 0; i < palabra.length; i++) {
        var nuevoDiv = document.createElement("div"); 
        nuevoDiv.id = "letra-" + i; 
        contenedor.appendChild(nuevoDiv);
    }
}

function botones(){
    let tabla = document.getElementsByTagName("table")[0];

    tabla.addEventListener("click", (e) => {
        if(vidas <= 0){
            document.getElementById("derrota").innerText = "Game Over! You've run out of lives";
        }else{
            let letra = e.target.innerText.toUpperCase();
            comprobarLetra(letra); 
        }
    });
}

function comprobarLetra(letra){
    let letraEncontrada = false;

    for (let i = 0; i < palabraSeleccionada.length; i++) {
        if (palabraSeleccionada[i] === letra) {
            letraEncontrada = true;
            document.getElementById("letra-" + i).innerText = letra;
        }
    }

    if (!letraEncontrada) {
        vidas--;
        document.getElementById("vidas").innerText = "You have " + vidas + " lives";
    }

    if (vidas <= 0) {
        document.getElementById("derrota").innerText = "Game Over! You've run out of lives";
    }
}


