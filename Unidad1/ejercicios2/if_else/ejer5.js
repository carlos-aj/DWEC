var notaExa1 = parseInt(prompt("Introduzca la nota del primer examen"));
var notaExa2 = parseInt(prompt("Introduzca la nota del segundo examen"));
var notaTra1 = parseInt(prompt("Introduzca la nota del primer trabajo"));
var notaTra2 = parseInt(prompt("Introduzca la nota del primer trabajo"));
var media = (((notaExa1 + notaExa2) / 2) *0.75 + ((notaTra1 + notaTra2) / 2) *0.25);


if(notaExa1 < 4.5 || notaExa2 < 4.5 || notaTra1 < 4.5 || notaTra2 < 4.5){
    document.write("No puedes aprobar con menos de 4.5 en cualquier nota");
}else if(media >= 5){
    document.write("<br>La media es: " + media + ", estás aprobado");
}else if(media < 5){
    document.write("<br>La media es: " + media + ", estás suspenso");
}