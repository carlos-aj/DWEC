window.onload = () => {
    
    document.getElementById("inpNombre").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            guardarNombre();
        }
    })

    saludo();
}

function guardarNombre() {
    var nombre = document.getElementById("inpNombre").value;

    var duracion = new Date();
    duracion.setMinutes(duracion.getMinutes() + 5);
    var expira = duracion.toUTCString();

    if (nombre) {
        document.cookie = "username=" + encodeURIComponent(nombre) + "; expires=" + expira;
        document.getElementById("saludo").innerText = "Hola " + nombre;
    }
}

function saludo() {
    let cookies = document.cookie.split("; ");
    let username = cookies.find(cookie => cookie.startsWith("username="));

    if(username){
        username = username.split("=")[1];
        document.getElementById("saludo").innerText = "Hola " + decodeURIComponent(username);
    }
}


