window.onload = () => {
    document.getElementById("inpNombre").addEventListener("input", validarNombre);
    document.getElementById("inpApellidos").addEventListener("input",validarApellidos);
    document.getElementById("inpDNI").addEventListener("input",validarDNI);
    document.getElementById("inpEmail").addEventListener("input",validarEmail);
    document.getElementById("inpTelefono").addEventListener("input",validarTelefono);
    document.getElementById("inpNombreUser").addEventListener("input",validarNombreUser);
}

const nombreApellidoExp = /^[a-zA-Z\s]+$/;
const DNIExp = /^\d{8}[A-Za-z]$/;
const tlfExp = /^[0-9]{9}$/;
const emlExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nUserExp = /^(?=.*\d)(?=.*[\W_]).{8,}$/;

function validarNombre(){
    const nom = document.getElementById("inpNombre").value;

    if (nom === "") {
        document.getElementById("inpNombre").style.borderColor = "";
        document.getElementById("spnNombre").style.color = "red"
        document.getElementById("spnNombre").innerText = "Debes de introducir un nombre";
    }else if(nombreApellidoExp.test(nom)){
        document.getElementById("inpNombre").style.borderColor = "rgb(5, 255, 5)";
        document.getElementById("spnNombre").innerText = "";
    }else{
        document.getElementById("inpNombre").style.borderColor = "red";
        document.getElementById("spnNombre").style.color = "red"
        document.getElementById("spnNombre").innerText = " Nombre no válido";
    }
}

function validarApellidos(){
    const apll = document.getElementById("inpApellidos").value;

    if(apll === ""){
        document.getElementById("inpApellidos").style.borderColor = "";
        document.getElementById("spnApellidos").style.color = "red"
        document.getElementById("spnApellidos").innerText = "Debes de introducir tus apellidos";
    }else if(nombreApellidoExp.test(apll)){
        document.getElementById("inpApellidos").style.borderColor = "rgb(5, 255, 5)";
        document.getElementById("spnApellidos").innerText = "";
    }else{
        document.getElementById("inpApellidos").style.borderColor = "red";
        document.getElementById("spnApellidos").style.color = "red"
        document.getElementById("spnApellidos").innerText = " Apellido no válido";
    }
}

function validarDNI(){
    const dni = document.getElementById("inpDNI").value;

    if(dni === ""){
        document.getElementById("inpDNI").style.borderColor = "";
        document.getElementById("spnDNI").style.color = "red"
        document.getElementById("spnDNI").innerText = "Debes de introducir tu DNI";
    }else if(DNIExp.test(dni)){
        document.getElementById("inpDNI").style.borderColor = "rgb(5, 255, 5)";
        document.getElementById("spnDNI").innerText = "";
    }else{
        document.getElementById("inpDNI").style.borderColor = "red";
        document.getElementById("spnDNI").style.color = "red"
        document.getElementById("spnDNI").innerText = " DNI no válido";
    }
}

function validarTelefono(){
    const tlf = document.getElementById("inpTelefono").value;

    if(tlf === ""){
        document.getElementById("inpTelefono").style.borderColor = "";
        document.getElementById("spnTelefono").style.color = "red"
        document.getElementById("spnTelefono").innerText = "Debes de introducir tu telefono";
    }else if(tlfExp.test(tlf)){
        document.getElementById("inpTelefono").style.borderColor = "rgb(5, 255, 5)";
        document.getElementById("spnTelefono").innerText = "";
    }else{
        document.getElementById("inpTelefono").style.borderColor = "red";
        document.getElementById("spnTelefono").style.color = "red"
        document.getElementById("spnTelefono").innerText = "Telefono no válido";
    }

}

function validarEmail(){
    const eml = document.getElementById("inpEmail").value;

    if(eml === ""){
        document.getElementById("inpEmail").style.borderColor = "";
        document.getElementById("spnEmail").style.color = "red"
        document.getElementById("spnEmail").innerText = "Debes de introducir tu Email";
    }else if(emlExp.test(eml)){
        document.getElementById("inpEmail").style.borderColor = "rgb(5, 255, 5)";
        document.getElementById("spnEmail").innerText = "";
    }else{
        document.getElementById("inpEmail").style.borderColor = "red";
        document.getElementById("spnEmail").style.color = "red"
        document.getElementById("spnEmail").innerText = "Email no válido";
    }
}

function validarNombreUser(){
    const nUser = document.getElementById("inpNombreUser").value;

    if(nUser === ""){
        document.getElementById("inpNombreUser").style.borderColor = "";
        document.getElementById("spnNombreUser").style.color = "red"
        document.getElementById("spnNombreUser").innerText = "Debes de introducir tu nombre de usuario";
    }else if(nUserExp.test(nUser)){
        document.getElementById("inpNombreUser").style.borderColor = "rgb(5, 255, 5)";
        document.getElementById("spnNombreUser").innerText = "";
    }else{
        document.getElementById("inpNombreUser").style.borderColor = "red";
        document.getElementById("spnNombreUser").style.color = "red"
        document.getElementById("spnNombreUser").innerText = "Nombre de usuario no válido";
    }
}

