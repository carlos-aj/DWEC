var edad = parseInt(prompt("Introduzca su edad"));
var ciudad = prompt("Introduzca la localidad en la que nació");

if(edad >= 18 && edad <= 30 && ciudad == "Madrid" || edad >= 18 && edad <= 30 && ciudad == "madrid"){
    document.write("Puede acceder al carnet de empresarios emprendedores");
}