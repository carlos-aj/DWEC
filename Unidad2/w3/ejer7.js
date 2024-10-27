function invierteCadena(cad_arg){
    var cad = "";
    for(let i=cad_arg.length; i>=0;i--){
        cad += cad_arg.charAt(i);
    }
    return cad;
}

function palindromo(cad_arg){
    if(cad_arg==invierteCadena(cad_arg)){
        document.write("La palabra es un palindromo")
    }else{
        document.write("La palabra no es un palindromo")
    }
}

cadena = prompt("Introduzca una palabra");
palindromo(cadena);