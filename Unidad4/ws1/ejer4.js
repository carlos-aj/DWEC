document.write("<table>");
for (let i = 0; i < 100; i++) {
    document.write("<tr>");
    for (let j = 0; j < 100; j++) {
        document.write("<td width='5' height='3'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");

const cell = document.getElementsByTagName("td");

for(let celda of cell){
  celda.addEventListener("mousemove", (e) =>{
    if(e.ctrlKey){
      celda.style.backgroundColor = 'red';
    } else if (e.shiftKey) {
      celda.style.backgroundColor = 'blue';
    }else if (e.altKey){
      celda.style.backgroundColor = 'white';
    }
  })
}