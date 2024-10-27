var p;
do{ 
    p = prompt("Introduzca palabras, para finalizar escriba salir");
    
    if(p.toLowerCase() != "salir"){
    document.write(p+ "<br>");
    } 
}while(p.toLowerCase()!="salir")

    