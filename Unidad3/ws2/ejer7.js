var lista = [];
lista.length = 10;

console.log(establecerACero(lista));
console.log(añadirUno(lista));
console.log(espacio(lista));

function establecerACero(array){
    return array.fill(0);
}

function añadirUno(array){
    return array.fill(1);
 }

function espacio(array){
    return array.join(" ");
}