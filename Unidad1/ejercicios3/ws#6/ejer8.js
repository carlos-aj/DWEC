var nColum = 8;
var nFilas = 8;
var alto = parseInt(prompt("Introduzca la medida del cuadro"));
var ancho = alto;


document.write("<table border="+0+" cellspacing="+2+" bgcolor=black>");

for(let j = 1; j<=nFilas; j++){
    document.write("<tr height=" + alto +">");
    for(let i = 1; i<=nColum; i++){
        if(j%2 != 0){
            if(i%2 != 0){
                document.write("<td bgcolor= black width=" + ancho + ">&nbsp;</td>");
            }else{
                document.write("<td bgcolor= white width=" + ancho + ">&nbsp;</td>");
            }
        }else{
            if(i%2 != 0){
                document.write("<td bgcolor= white width=" + ancho + ">&nbsp;</td>");
            }else{
                document.write("<td bgcolor= black width=" + ancho + ">&nbsp;</td>");
            }
        }
    }
}

document.write("</tr>")
document.write("</table>")


