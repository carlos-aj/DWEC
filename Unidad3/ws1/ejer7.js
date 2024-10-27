function factorial(n){
    if(n==1){
        return n;
    }else{
        return n * factorial(n-1);
    }
}

document.write(factorial(prompt("introduzca un número")));

