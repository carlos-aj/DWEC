var n = parseInt(prompt("Introduzca un numero"));
var total = 0;
 
for(var i = 1; i<n; i++){
    if(n%i==0){
        total += i;
    }
}

if(total == n){
    document.write("El numero introducido es perfecto");
}else{
    document.write("El numero introducido no es perfecto");
}