window.onload = () => {
    document.getElementById("ValidarMayus").addEventListener("input", validarMayusculas);
    document.getElementById("ValidarCarEsp").addEventListener("input", validarEspecial);
    document.getElementById("ValidarCorr").addEventListener("input", validarCorreo);
    document.getElementById("ValidarTarCre").addEventListener("input", validarTarjeta);
    document.getElementById("ValidarLong").addEventListener("input", validarLongitud);
    document.getElementById("ValidarNum").addEventListener("input", validarNumero);
}

const mayus = /[A-Z]+/;
const especial = /[!@#$%^&]+/;
const correo = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const tarjeta = /^(\d{4}[- ]?){3}\d{4}$/;
const longitud = /^.{8,}$/;
const numero = /^(?=.*\d).+$/;

function validarMayusculas(){

    const valorMayus = document.getElementById("ValidarMayus").value;

    if(mayus.test(valorMayus)){
        document.getElementById("Mayus").style.color = "green";
        document.getElementById("Mayus").innerText = "Válido";
    }else{
        document.getElementById("Mayus").style.color = "red";
        document.getElementById("Mayus").innerText = "No válido";
    }
}

function validarEspecial(){

    const valorEspecial = document.getElementById("ValidarCarEsp").value;

    if(especial.test(valorEspecial)){
        document.getElementById("Esp").style.color = "green";
        document.getElementById("Esp").innerText = "Válido";
    }else{
        document.getElementById("Esp").style.color = "red";
        document.getElementById("Esp").innerText = "No válido";
    }
}

function validarCorreo(){

    const valorCorreo = document.getElementById("ValidarCorr").value;

    if(correo.test(valorCorreo)){
        document.getElementById("corr").style.color = "green";
        document.getElementById("corr").innerText = "Válido";
    }else{
        document.getElementById("corr").style.color = "red";
        document.getElementById("corr").innerText = "No válido";
    }
}

function validarTarjeta(){

    const valorTajeta = document.getElementById("ValidarTarCre").value;

    if(tarjeta.test(valorTajeta)){
        document.getElementById("tarCre").style.color = "green";
        document.getElementById("tarCre").innerText = "Válido";
    }else{
        document.getElementById("tarCre").style.color = "red";
        document.getElementById("tarCre").innerText = "No válido";
    }
}

function validarLongitud(){

    const valorLongitud = document.getElementById("ValidarLong").value;

    if(longitud.test(valorLongitud)){
        document.getElementById("long").style.color = "green";
        document.getElementById("long").innerText = "Válido";
    }else{
        document.getElementById("long").style.color = "red";
        document.getElementById("long").innerText = "No válido";
    }
}

function validarNumero(){

    const valorNumero = document.getElementById("ValidarNum").value;

    if(numero.test(valorNumero)){
        document.getElementById("num").style.color = "green";
        document.getElementById("num").innerText = "Válido";
    }else{
        document.getElementById("num").style.color = "red";
        document.getElementById("num").innerText = "No válido";
    }
}

