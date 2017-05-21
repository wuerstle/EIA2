//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export class FlowerOne extends Flower { //FlowerOne gehört zu Flower
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        
        //male Blume 1
        drawFlowerOne(): void {
            crc2.fillStyle = "#8B0000";
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 18, this.y + 18, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y + 25, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 2, this.y + 18, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#FFD700";
            crc2.arc(this.x + 10, this.y + 17, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}