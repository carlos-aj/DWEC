var n1 = parseInt(prompt("Introduzca un numero"));
var n2 = parseInt(prompt("Introduzca otro numero"));
var opcion = prompt("¿Que operacion quiere realizar (+,-,*,/)?")

switch(opcion){
    case "+":
        document.write("El resultado de la suma es: " + (n1 + n2));
    break;

    case "-":
        document.write("El resultado de la resta es: " + (n1 - n2));
    break;

    case "*":
        document.write("El resultado de la multiplicacion es: " + (n1 * n2));
    break;

    case "/":
        document.write("El resultado de la division es: " + (n1 / n2));
    break;

    default:
        document.write("Operacion no valida");
}