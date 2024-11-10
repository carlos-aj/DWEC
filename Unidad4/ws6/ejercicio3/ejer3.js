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

    //Al no definir cuando expira la cookie hace que esta sea de sesion, por lo tanto se eliminara al cerrar el navegador

    if (nombre) {
        document.cookie = "username=" + encodeURIComponent(nombre) + ";";
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


