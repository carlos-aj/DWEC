var nColum = parseInt(prompt("Introduzca el numero de columnas"));
var nFilas = parseInt(prompt("Introduzca el numero de filas"));
var alto = parseInt(prompt("Introduzca el alto"));
var ancho = parseInt(prompt("Introduzca el ancho"));


document.write("<table border="+0+" cellspacing="+2+" bgcolor=black >");

for(let j = 1; j<=nFilas; j++){
    document.write("<tr bgcolor= white height=" + alto + "width=" + ancho + ">");
    for(let i = 1; i<=nColum; i++){
        document.write("<td width=" + ancho + "height=" + alto + ">&nbsp;</td>");
    }
}

document.write("</tr>")
document.write("</table>")