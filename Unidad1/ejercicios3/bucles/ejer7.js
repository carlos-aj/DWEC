var n = parseInt(prompt("Introduzca un numero"));
var adivina;

while(n!=adivina){
    adivina = parseInt(prompt("Intenta adivinar el numero"));
    if(n<adivina){
        document.write("<br> El número es mas pequeño");
        console.log("El número es mas pequeño");
    }
    if(n>adivina){
        document.write("<br> El número es mas grande");
        console.log("El número es mas grande");
    }
}
if(n == adivina){
    document.write("<br>Lo has adivinado");
}