window.onload = () => {
    document.getElementById("username").addEventListener("input",validar)
}

const lowerCase = /[a-z]/;
const upperCase = /[A-Z]/;
const mCharacters = /.{6,}/

function validar(){
    const user = document.getElementById("username").value;

    if(lowerCase.test(user)){
        document.getElementById("lower").style.textDecoration = "line-through";
    }
    if(upperCase.test(user)){
        document.getElementById("upper").style.textDecoration = "line-through";
    }
    if(mCharacters.test(user)){
        document.getElementById("minimun").style.textDecoration = "line-through"
    }
}
