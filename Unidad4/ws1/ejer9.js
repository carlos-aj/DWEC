const imagen = document.getElementsByTagName("img")[0];
var desplazamientoX = 0;
var desplazamientoY = 0;
var movimiento = false;

imagen.style.position = "absolute";

imagen.addEventListener("mousedown", (e) => {
    movimiento = true;
    desplazamientoX = e.clientX - imagen.offsetLeft;
    desplazamientoY = e.clientY - imagen.offsetTop; 
});

document.addEventListener("mousemove", (e) =>{
    if(movimiento){
        imagen.style.left =  (e.clientX - desplazamientoX) + "px";
        imagen.style.top = (e.clientY - desplazamientoY) + "px";
    }
});

document.addEventListener('mouseup', () =>{
    movimiento = false;
});

imagen.ondragstart = function() {
    return false;
  }