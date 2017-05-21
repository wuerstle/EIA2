//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export class Flower { //Klasse der Blumen
        x: number;
        y: number;
     
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }

        //random Position der Blumen
        setRandomPosition(): void {
            this.x = (Math.random() * (crc2.canvas.width - 100) + 50);
            this.y = (Math.random() * (crc2.canvas.height - 150) + 130);
        }
        
        draw(): void {
            //empty  
        }
    }
}