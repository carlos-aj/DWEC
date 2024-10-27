cadena = "HOLA";

document.write("<table  cellspacing= 2>");
for(let j = 1; j<=cadena.length; j++){
    document.write("<tr bgcolor= white height= 200 width= 200 >");
    for(let i = 1; i<=cadena.length; i++){
        if(i%2){
            document.write("<td bgcolor= white height= 200 width= 200 >" + j +"</td>");
        }else{
            document.write("<td bgcolor= white height= 200 width= 200 >" + (Math.sin(j)) +"</td>");
        }
    }
}

document.write("</tr>")
document.write("</table>")

function invierteCadena(cad_arg){
    for(let i=cad_arg.length-1; i>=0;i--){
        document.write(cad_arg.charAt(i));
    }
}

