var edad = parseInt(prompt("Introduzca su edad"));

if(edad <= 5){
    document.write("Debes de estar en el jardín de infancia");
}else if(edad >= 6 && edad <= 11){
    document.write("Debes de estar en primaria");
}else if(edad >= 12 && edad <= 16){
    document.write("Debes de estar en la ESO");
}else if(edad >=17 && edad <= 21){
    document.write("Debes de estar en Bachillerato o ciclos");
}else if(edad >21){
    document.write("Debes de estar en la Universidad");
}
