function funcion(cad_arg){
    if(cad_arg === cad_arg.toLowerCase()){
        document.write("La cadena está en minuscula");
    }else if(cad_arg === cad_arg.toUpperCase()){
        document.write("La cadena está en mayuscula");
    }else{
        document.write("La cadena está en mayuscula y minuscula")
    }
}

var cadena = prompt("Introduzca una cadena de texto");
funcion(cadena);