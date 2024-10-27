var numero = parseInt(prompt("Introduzca un número"));

switch(numero){
    case(numero%2==0):
        document.write("Es par");
    break;
             
    case(numero%3==0):
        document.write("Es multiplo de 3");    
    break;

    case(numero%5==0):
        document.write("Es multiplo de 5");
    break;

    default:
        document.write("no cumple ninguna de las tres opciones");
}

