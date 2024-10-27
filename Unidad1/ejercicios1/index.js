document.write("Esto se escribe desde JS");
document.write("<p>Y esta es otra sentencia</p>");

//DEFINICION VARIABLES

mivariable = 0;                     //<---- ASI NO
document.write("<p>El contenido de la variable es " + mivariable + "</p>");

var mivariablevar = 0;              //puede acceder a otros bloques
document.write("<p>El contenido de la variable es " + mivariablevar + "</p>");

let mivariablelet = 0;              //no puede acceder a otros bloques
document.write("<p>El contenido de la variable es " + mivariablelet + "</p>");

const mivariableconst = 0;          //constantes 
document.write("<p>El contenido de la variable es " + mivariableconst + "</p>");


let valor = parseInt(prompt("dame un numero"));
valor = valor + 1;   
document.write("<p>El numero introducido es " + valor + "</p>");

console.log(valor);

let resultadoOpercaion = true;

if(resultadoOpercaion){
    document.write("Es verdad");
}else{
    document.write("Es falso");
}


