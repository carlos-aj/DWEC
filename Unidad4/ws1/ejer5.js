document.write("<table>");
for (let i = 0; i < 200; i++) {
    document.write("<tr>");
    for (let j = 0; j < 200; j++) {
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

const btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", () => {
  for (let celda of cell){
    celda.style.backgroundColor = 'white'; 
  }
});




