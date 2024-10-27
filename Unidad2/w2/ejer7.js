var n = parseInt(prompt("Introduzca un numero"));


document.write("<table border="+0+" cellspacing= 2 bgcolor=black >");
for(let j = 1; j<=n; j++){
    document.write("<tr bgcolor= white height= 200 width= 200 >");
    for(let i = 1; i<=2; i++){
        if(i%2){
            document.write("<td bgcolor= white height= 200 width= 200 >" + j +"</td>");
        }else{
            document.write("<td bgcolor= white height= 200 width= 200 >" + (Math.sin(j)) +"</td>");
        }
    }
}

document.write("</tr>")
document.write("</table>")