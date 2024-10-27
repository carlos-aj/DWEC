var temperaturaC = parseInt(prompt("Introduzca la temperatura en celius"));
var temperaturaF = temperaturaC * 1.8 + 32;

document.write("<p>" + temperaturaC + "ºC es " + temperaturaF + "ºF</p>");

temperaturaF = parseInt(prompt("Introduzca la temperatura en fahrenheit"));
temperaturaC = (temperaturaF -32) * 0.56;

document.write("<p>" + temperaturaF + "ºF es " + temperaturaC + "ºC</p>")
