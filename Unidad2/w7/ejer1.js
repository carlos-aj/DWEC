function muestaPosicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}

function funcionerror(error){
    console.log("Se ha producido un error");
    console.log("Error numero " +error.code);
    console.log(error.message);
}

function calcularDistancia(pos){
    

}
if(navigator.geolocation){
    console.log("Soporta geolocalización");
    //navigator.geolocation.getCurrentPosition(muestaPosicion,funcionerror);
    navigator.geolocation.watchPosition(muestaPosicion,funcionerror);
}else{
    console.log("No soporta geolocalización");

}



