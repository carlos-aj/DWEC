function dado(){
    contador1=0;
    contador2=0;
    contador3=0;
    contador4=0;
    contador5=0;
    contador6=0;
    n = 0;
    for(i = 1; i <=6000; i++){
    n = parseInt(Math.random() * (6)+1);
    switch(n){
        case 1:
            contador1++;
        break;

        case 2:
            contador2++;
        break;

        case 3:
            contador3++;
        break;

        case 4:
            contador4++;
        break;

        case 5:
            contador5++;
        break;

        case 6:
            contador6++;
        break;
    }

    }
    document.write("<p>El 1 ha salido " + contador1 + " veces");
    document.write("<p>El 2 ha salido " + contador2 + " veces");
    document.write("<p>El 3 ha salido " + contador3 + " veces");
    document.write("<p>El 4 ha salido " + contador4 + " veces");
    document.write("<p>El 5 ha salido " + contador5 + " veces");
    document.write("<p>El 6 ha salido " + contador6 + " veces");
}

dado();