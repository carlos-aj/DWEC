const btn = document.getElementsByTagName("button");

function cambiarColor(){
    document.body.style.backgroundColor = "red";
}

btn[0].addEventListener("click", cambiarColor);
btn[1].addEventListener("click", ()=> document.body.style.backgroundColor="blue");
btn[2].addEventListener("click", () => btn[0].removeEventListener("click",cambiarColor))
