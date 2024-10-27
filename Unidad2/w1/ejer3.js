var n = 5;

function contador(){
    document.write("<p>"+n);
    n--;
    if(n>0){
    setTimeout(contador,1000);
    }
}

setTimeout(contador,1000);
