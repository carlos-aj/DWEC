function invierteCadena(cad_arg){
    for(let i=cad_arg.length; i>=0;i--){
        document.write(cad_arg.charAt(i));
    }
}

function inviertePalabras(cad_arg){
    var n = cad_arg.split(" ");
    for(let i = 0; i<n.length; i++){
        for(let j=n[i].length; j>=0;j--){
            document.write(n[i].charAt(j));
        }
        document.write(" ");
    }
}

function encuentraPalabraMasLarga(cad_arg){
    var n = cad_arg.split(" ");
    var resultado = n[0];

    for(var i = 0; i<n.length; i++){
        if(n[i].length > resultado.length){
            resultado = n[i];
        }
    }
    document.write(resultado);
}

function filtraPalabraMasLarga(cad_arg, i){
    var n = cad_arg.split(" ");
    var contador = 0;
    for(var j = 0; j<n.length; j++){
            if(n[j].length>i){
                contador++
            }
    }
    return contador;
}

function cadenaBienFormada(cad_arg){
    for(let i = 0; i <= cadena.length; i++){
        if(i==0){
            let x = cadena.charAt(i);
            document.write(x.toUpperCase());
        }else{
            document.write(cadena.charAt(i));
        }
    }
}

cadena = prompt("Introduzca una cadena de texto");

invierteCadena(cadena);
document.write("<br>");
inviertePalabras(cadena);
document.write("<br>");
encuentraPalabraMasLarga(cadena);
document.write("<br>");

n = prompt("Introduzca la longitud la palabra que desees");
filtraPalabraMasLarga(cadena, n);
document.write("<br>");
cadenaBienFormada(cadena);