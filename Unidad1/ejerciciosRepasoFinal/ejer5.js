var total = 0;
var numero = prompt("Introduzca un numero");

if(isNaN(parseInt(numero))){
    document.write("Debes de introducir numero");
}else{ 
for(i of numero){
    total += parseInt(i);
}
document.write(total);
}
