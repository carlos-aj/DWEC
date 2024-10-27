var nColum = parseInt(prompt("Introduzca el numero de columnas"));
var alto = parseInt(prompt("Introduzca el alto"));
var ancho = parseInt(prompt("Introduzca el ancho"));

document.write("<table border="+0+" cellspacing="+2+" bgcolor=black width="+ancho+">");
document.write("<tr bgcolor= white height=" + alto +">");

for(let i = 1; i<=nColum; i++){
    document.write("<td width=" + ancho + ">&nbsp;</td>");
}

document.write("</tr>")
document.write("</table>")