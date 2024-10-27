var edad = parseInt(prompt("Introduzca su edad"));
var ciudad = prompt("Introduzca la localidad en la que nació");

if(edad === 25 && ciudad == "Madrid" || edad === 25 && ciudad == "madrid"){
    document.write("Enhorabuena");
}