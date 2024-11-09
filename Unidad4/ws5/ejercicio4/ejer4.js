window.onload = () => {
    document.getElementById("inpFirstName").addEventListener("input",validarFirstName);
    document.getElementById("inpLastName").addEventListener("input", validarLastName);
    document.getElementById("inpPhone").addEventListener("input", validarPhone);
    document.getElementById("").addEventListener("input",);
    document.getElementById("").addEventListener("input",);
    document.getElementById("").addEventListener("input",);
}

const firstLastNameExp = /^[a-zA-Z\s]+$/;
const phoneExp = /^[0-9]{9}$/;

function validarFirstName(){
    const fNam = document.getElementById("inpFirstName").value;

    if(fNam === ""){
        document.getElementById("spnFirstName").innerText = "Debes de introducir un nombre";
    }else if(firstLastNameExp.test(fNam)){
        document.getElementById("spnFirstName").innerText = "";
    }else{
        document.getElementById("spnFirstName").innerText = "Debes de introducir un nombre válido";
    }
}

function validarLastName(){
    const lNam = document.getElementById("inpLastName").value;

    if(lNam === ""){
        document.getElementById("spnLastName").innerText = "Debes de introducir un apellido";
    }else if(firstLastNameExp.test(lNam)){
        document.getElementById("spnLastName").innerText = "";
    }else{
        document.getElementById("spnLastName").innerText = "Debes de introducir un apellido válido";
    }
}

function validarPhone(){
    const phn = document.getElementById("inpPhone").value;

    if(phn === ""){
        document.getElementById("spnPhone").innerText = "Debes de introducir un numero de telefono";
    }else if(phoneExp.test(phn)){
        document.getElementById("spnPhone").innerText = "";
    }else{
        document.getElementById("spnPhone").innerText = "Debes de introducir un numero de telefono válido";
    }
}


