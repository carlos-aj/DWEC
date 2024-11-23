window.onload = () => {
    var barra1 = new Barra(10, 250, 0,150,40); 
    var barra2 = new Barra(1480, 250, 0,150,40);
    var pelota = new Pelota(755, 350,6 * direccionAleatoria(),3 * direccionAleatoria(44), 25); 
    

    setInterval(() => {
        pelota.mover(barra1,barra2);
        barra1.mover();
        barra2.mover();
    }, 10);

    document.addEventListener("keydown", (e) => {
        if(e.key === "w"){
             barra1.velocidadY = -5;
            }
        if(e.key === "s"){
            barra1.velocidadY = 5;
            }
        if(e.key === "ArrowUp"){
            barra2.velocidadY = -5;
            }
        if(e.key === "ArrowDown"){
            barra2.velocidadY = 5;
            }
    });

    document.addEventListener("keyup", (e) => {
        if(e.key === "w" || e.key === "s"){
            barra1.velocidadY = 0;
            }
        if(e.key === "ArrowUp" || e.key === "ArrowDown"){
            barra2.velocidadY = 0;
        }
    });
};

function direccionAleatoria(){
    return Math.random() < 0.5 ? -1 : 1;
}

    var jugador1 = 0;
    var jugador2 = 0;
    var contadorRebotes = 0;
    var pelotaCentro = false;

class Barra{
    constructor(posicionX, posicionY, velocidadY,alto,ancho){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.velocidadY = velocidadY;
        this.alto = alto;
        this.ancho = ancho;
    }

    mover(){
        this.posicionY += this.velocidadY;

        if(this.posicionY < 0){
            this.posicionY = 0;
        }
        if(this.posicionY + this.alto > 700){
            this.posicionY = 550; 
        }
        if(this.posicionX === 10){
            document.getElementById("barra1").setAttribute("y", this.posicionY);
        }if(this.posicionX === 1480){
            document.getElementById("barra2").setAttribute("y", this.posicionY);
        }
    }
}

class Pelota{
    constructor(posicionX, posicionY, velocidadX, velocidadY, radio){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
        this.radio = radio;
    }

    mover(barra1, barra2){
        if(pelotaCentro){
            document.getElementById("pelota").setAttribute("cx",755);
            document.getElementById("pelota").setAttribute("cy",350);
            return;
        }

        this.posicionX += this.velocidadX;
        this.posicionY += this.velocidadY;

        if(this.posicionX - this.radio < 0){
            jugador1++;
            document.getElementById("jugador1").textContent = jugador1;
            pelotaCentro = true;
            setTimeout(()=>{
                pelotaCentro = false;
            },500);
                this.posicionX = 755;
                this.posicionY = 350;
                this.velocidadX = 6 * direccionAleatoria();
                this.velocidadY = 3 * direccionAleatoria();
                contadorRebotes = 0;
        }
        if(this.posicionX + this.radio > 1510){
            jugador2++;
            document.getElementById("jugador2").textContent = jugador2;
            pelotaCentro = true;
            setTimeout(()=>{
                pelotaCentro = false;
            },500);
                this.posicionX = 755;
                this.posicionY = 350;
                this.velocidadX = 6 * direccionAleatoria();
                this.velocidadY = 3 * direccionAleatoria();
                contadorRebotes = 0;
        }
        if(this.posicionY + this.radio > 700 || this.posicionY - this.radio < 0){
            this.velocidadY *= -1;
        }

        if(this.posicionX - this.radio <= barra1.posicionX + barra1.ancho && this.posicionY + this.radio >= barra1.posicionY && this.posicionY - this.radio <= barra1.posicionY + barra1.alto){
            this.posicionX = this.posicionX + barra1.ancho;
            contadorRebotes++;
            if(contadorRebotes >=3){
                this.velocidadX = -8;
            }
            if(contadorRebotes>=6){
                this.velocidadX = -10;
            }
            if(contadorRebotes>=9){
                this.velocidadX = -12;
            }
            if(contadorRebotes>=12){
                this.velocidadX = -14;
            }
            this.velocidadX *= -1; 
        }
        if(this.posicionX + this.radio >= barra2.posicionX - barra2.ancho && this.posicionY + this.radio >= barra2.posicionY && this.posicionY - this.radio <= barra2.posicionY + barra2.alto){
            this.posicionX = this.posicionX - barra2.ancho;
            contadorRebotes++;
            if(contadorRebotes >=3){
                this.velocidadX = 8;
            }
            if(contadorRebotes>=6){
                this.velocidadX = 10;
            }
            if(contadorRebotes>=9){
                this.velocidadX = 12;
            }
            if(contadorRebotes>=12){
                this.velocidadX = 14;
            }
            this.velocidadX *= -1; 
        }
        
        document.getElementById("pelota").setAttribute("cx", this.posicionX);
        document.getElementById("pelota").setAttribute("cy", this.posicionY);
    }
}

