do{
var n = parseInt(prompt("Introduzca un numero"));
}while(n<2);

for(var i = 2; i<=n; i++){
    if(n%i==0){
        document.write("El numero no es primo");
    }else{
        document.write("El numero es primo");
    }
}