var nColum = parseInt(prompt("Introduzca el numero de columnas"));
var alto = parseInt(prompt("Introduzca el alto"));
var ancho = parseInt(prompt("Introduzca el ancho"));
var aux = 1;

document.write("<table border="+0+" cellspacing="+2+" bgcolor=black width="+ancho+">");
document.write("<tr height=" + alto +">");

while(aux<=nColum){
    aux++  
    if(aux%2 != 0){
        document.write("<td bgcolor= black width=" + ancho + ">&nbsp;</td>");
    }else{
        document.write("<td bgcolor= white width=" + ancho + ">&nbsp;</td>");
    }
}

document.write("</tr>")
document.write("</table>")