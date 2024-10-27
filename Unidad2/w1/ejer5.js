function reloj(){
    var fecha = new Date();
    document.write("<p>" + fecha.getHours() + " : " + fecha.getMinutes() + " : " + fecha.getSeconds());
    setTimeout(reloj,1000);
}

setTimeout(reloj,1000);
