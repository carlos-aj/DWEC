var a = parseInt(prompt("Introduzca el primer valor"));
var b = parseInt(prompt("Introduce el segundo valor"));
var c = parseInt(prompt("Introduce el tercer valor"));

var raiz = Math.sqrt(Math.pow(b, 2)-(4*a*c));

var total1 = ((-b + raiz) / (2*a));
var total2 = ((-b - raiz) / (2*a));

document.write("Resultado usando +: " + total1);
document.write("<br>Resultado usando -: " + total2);


