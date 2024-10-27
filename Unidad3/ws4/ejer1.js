class Puzzle{
    constructor(dimension){
        this.dimension = dimension;
        this.tiempo = 0;
        this.nMovimientos = 0;
    }

    dibujar(){
        document.write("<table border=1>");
        for(let i = 0; i < this.dimension; i++){
            document.write("<tr>")
            for(let j = 0; j<this.dimension; j++){
            document.write("<td>&nbsp</td>");
            }
            document.write("</tr>")
        }
        document.write("</table>");
    }

    
}

