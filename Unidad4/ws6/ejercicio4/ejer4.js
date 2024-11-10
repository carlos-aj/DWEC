function crearCookie(identificador,valor,fechaExpiracion){
    document.cookie = identificador + "=" + encodeURIComponent(valor) + "; expires=" + fechaExpiracion.toUTCString();
}

function leerCookie(identificador){
    let cookies = document.cookie.split("; ");
    let cookie = cookies.find(cookie => cookie.startsWith(identificador + "="));
    
    if(cookie){
        let valor = cookie.split("=")[1];
         return decodeURIComponent(valor);
    }else{
        return null;
    }
}

function borrarCookie(){
    let nombreCookie = "miCookie"; 
    document.cookie = nombreCookie + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
}