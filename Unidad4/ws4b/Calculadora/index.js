    window.onload = () => {
        let valor1 = "";
        let valor2 = "";
        let operacion = "";
        
        function iniciarCalculadora(){
            const escritura = [
                document.getElementById("siete"),
                document.getElementById("ocho"),
                document.getElementById("nueve"),
                document.getElementById("seis"),
                document.getElementById("cinco"),
                document.getElementById("cuatro"),
                document.getElementById("tres"),
                document.getElementById("dos"),
                document.getElementById("uno"),
                document.getElementById("cero"),
                document.getElementById("punto")
            ];

            const operaciones = [
                document.getElementById("suma"),
                document.getElementById("resta"),
                document.getElementById("multiplicacion"),
                document.getElementById("division"),
                document.getElementById("igual"),
                document.getElementById("vaciar")
            ];

            escritura.forEach(boton => boton.addEventListener('click', () => {
                if (operacion === "") {
                    valor1 = escribir(boton.id, valor1);
                    document.getElementById("resultado").innerText = valor1;
                } else {
                    valor2 = escribir(boton.id, valor2);
                    document.getElementById("resultado").innerText = valor2;
                }
            }));

            operaciones.forEach(boton => boton.addEventListener('click', () => {
                if (boton.id === "igual") {
                    const total = terminarOperacion(boton.id, valor1, valor2, operacion);
                    document.getElementById("resultado").innerText = total;
                    valor1 = total.toString();
                    valor2 = ""; 
                } else if (boton.id === "vaciar") {
                    valor1 = "";
                    valor2 = "";
                    operacion = "";
                    document.getElementById("resultado").innerText = "";
                } else {
                    operacion = seleccionarOperacion(boton.id);
                    if (valor1 !== "") {
                        valor2 = ""; 
                    }
                }
            }));
        }

        iniciarCalculadora();
    };

    function escribir(id, valor){
        switch(id){
            case "punto":
                valor += ".";
                break;
            case "uno":
                valor += "1";
                break;
            case "dos":
                valor += "2";
                break;
            case "tres":
                valor += "3";
                break;
            case "cuatro":
                valor += "4";
                break;
            case "cinco":
                valor += "5";
                break;
            case "seis":
                valor += "6";
                break;
            case "siete":
                valor += "7";
                break;
            case "ocho":
                valor += "8";
                break;
            case "nueve":
                valor += "9";
                break;
            case "cero":
                valor += "0";
                break;
        }
        return valor;
    }

    function seleccionarOperacion(id){
        switch(id){
            case "suma":
                return "+";
            case "resta":
                return "-";
            case "multiplicacion":
                return "*";
            case "division":
                return "/";
        }
        return "";
    }

    function terminarOperacion(id, valor1, valor2, operacion){
        if (id === "igual") {
            if (operacion === "/" && parseFloat(valor2) === 0) {
                return "Error: División por 0";
            } else {
                return eval(`${parseFloat(valor1)} ${operacion} ${parseFloat(valor2)}`);
            }
        }
    }