var fechaHoy = new Date();
document.write("<p>Fecha hoy: " + fechaHoy);

var fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate() + 85);
document.write("<p>Fecha + 85: " + fecha85);

var fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate() - 187);
document.write("<p> Fecha - 187: " + fecha187);


fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write("<p> Fecha + 2 años: " + fecha85);


fecha187.setDate(fecha187.getHours() - 24);
document.write("<p> Fecha - 24 horas: " + fecha187);

var fechaResto = new Date(fecha85 - fecha187);
document.write("<p>Fecha resto: " + fechaResto);