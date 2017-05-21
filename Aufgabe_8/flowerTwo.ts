//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export class FlowerTwo extends Flower { //FlowerTwo gehört zu Flower
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        
        // male Blume 2
        drawFlowerTwo(): void {
            crc2.strokeStyle = "#32Cd32";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 25);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.fillStyle = "#ff0592";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, (Math.PI * 180) / 180, false);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y + 1);
            crc2.lineTo(this.x - 10, this.y - 13);
            crc2.lineTo(this.x - 5, this.y - 5);
            crc2.lineTo(this.x, this.y - 13);
            crc2.lineTo(this.x + 5, this.y - 5);
            crc2.lineTo(this.x + 10, this.y - 13);
            crc2.lineTo(this.x + 10, this.y + 1);
            crc2.closePath();
            crc2.fill();
        }
    }
}