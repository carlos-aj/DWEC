var n = parseInt(prompt("Introduzca un numero"));

for(var i = 1; i<=n; i++){
    if(n%i==0){
        document.write("<br>"+i);   
    }
}