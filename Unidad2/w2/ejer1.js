document.write(Math.random());
document.write("<br>Entre 100 y 200:" + (Math.random() * (200 - 100) + 100));

max = parseInt(prompt("Introduzca el maximo"));
min = parseInt(prompt("Introduzca el minimo"));

document.write("<br>Entre " + max + " y " + min + ": " + (Math.random() * (max - min) + min));