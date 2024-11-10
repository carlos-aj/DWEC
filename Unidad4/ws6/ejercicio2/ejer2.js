window.onload = () => {
    
    document.getElementById("inpNombre").addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            guardarNombre();
        }
    })

    document.getElementById("inpColor").addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            guardarColor();
        }
    })

    document.getElementById("inpColorParrafo").addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            guardarColorParrafo();
        }
    })

    document.getElementById("inpTamano").addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            guardarTamanoLetra();
        }
    })

    iniciar();
}

function duracion(){
    let duracion = new Date();
    duracion.setMinutes(duracion.getMinutes() + 5);
    let expira = duracion.toUTCString();
    return expira;
}

function guardarNombre() {
    let nombre = document.getElementById("inpNombre").value;

    let expira = duracion();

    if (nombre) {
        document.cookie = "username=" + encodeURIComponent(nombre) + "; expires=" + expira;
        document.getElementById("saludo").innerText = "Hola " + nombre;
    }
}


function guardarColor(){
    let color =  document.getElementById("inpColor").value;

    let expira = duracion();

    if(color){
        document.cookie = "colorFondo=" + encodeURIComponent(color) + "; expires=" + expira;
        document.body.style.backgroundColor = color;
    }
}

function guardarColorParrafo(){
    let colorParrafo = document.getElementById("inpColorParrafo").value;

    let expira = duracion();

    if(colorParrafo){
        document.cookie = "colorParrafo=" + encodeURIComponent(colorParrafo) + "; expires=" + expira;
        let parrafos = document.getElementsByTagName("p");
        for (let i = 0; i < parrafos.length; i++){
            parrafos[i].style.color = colorParrafo;
        }
    }
}

function guardarTamanoLetra(){
    let tamano = document.getElementById("inpTamano").value;

    let expira = duracion();
    
    if(tamano){
        document.cookie = "tamano=" + encodeURIComponent(tamano) + "; expires=" + expira;
        document.body.style.fontSize = tamano + "px";
    }
}

function iniciar(){
    let cookies = document.cookie.split("; ");
    let username = cookies.find(cookie => cookie.startsWith("username="));
    let colorFondo = cookies.find(cookie => cookie.startsWith("colorFondo="));
    let colorParrafo = cookies.find(cookie => cookie.startsWith("colorParrafo="));
    let tamano = cookies.find(cookie => cookie.startsWith("tamano="));

    if(username){
        username = username.split("=")[1];
        document.getElementById("saludo").innerText = "Hola " + decodeURIComponent(username);
    }
    if(colorFondo){
        colorFondo = colorFondo.split("=")[1];
        document.body.style.backgroundColor = decodeURIComponent(colorFondo);
    }
    if(colorParrafo){
        colorParrafo = colorParrafo.split("=")[1];
        let parrafos = document.getElementsByTagName("p");
        for (let i = 0; i < parrafos.length; i++){
            parrafos[i].style.color = colorParrafo;
        }
    }
    if(tamano){
        tamano = tamano.split("=")[1];
        document.body.style.fontSize = decodeURIComponent(tamano) + "px";
    }
}

