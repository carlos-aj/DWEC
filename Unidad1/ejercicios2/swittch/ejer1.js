var mes = prompt("Introduzca un mes");
mes = mes.toLowerCase();
var x = null;

if(mes == "enero" || mes == "marzo" || mes =="mayo" || mes =="julio" || mes =="agosto" || mes =="octubre" || mes =="diciembre"){
    x = 1;
}else if(mes == "abril" || mes == "junio" || mes =="septiembre" || mes == "noviembre"){
    x = 2;
}else if(mes == "febrero"){
    x = 3;
}


switch(x){
    case 1:
        document.write("Tiene 31 dias");
    break;

    case 2:
        document.write("Tiene 30 dias");
    break;

    case 3: 
        document.write("Tiene 28 o 29 dias")
    break;

    default:
        document.write("Mes no existente");
}