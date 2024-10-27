var hermanos = parseInt(prompt("Introduzca la cantidad de hermanos que tenga"));
var numero = parseInt(prompt("Introduzca el número que desee"));

if(isNaN(hermanos) || isNaN(numero)){
    document.write("Debes introducir numeros");
    
}else{
    if(hermanos > 3){
        document.write(numero*0.85);
    }else if(hermanos <= 3 && hermanos > 0){
        document.write(numero*0.95);
    }else if(hermanos == 0){
        document.write(numero);
    }
}