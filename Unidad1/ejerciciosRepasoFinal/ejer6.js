var n = parseInt(prompt("Introduzca un numero"));
var m = parseInt(prompt("Introduzca otro numero"));
var total = 0;

for(; n<=m;n++){
    if(!(n%2)){
        total+=n;
    }
}

document.write(total);