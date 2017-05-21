//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//Code nicht vollständig funktionsfähig!

namespace L8_Inheritance {
    export class HoneyBee extends Bee { //HoneyBee gehört zu Bee
        xObjective: number;
        yObjective: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.06;
            this.setRandomFlowerObjective();
        }

        setRandomFlowerObjective(): void {
            let objectiveFlower: number = Math.round(Math.random() * (flowers.length - 1));
            this.xObjective = flowers[objectiveFlower].x; //x-Koordinaten
            this.yObjective = flowers[objectiveFlower].y; //y-Koordinaten
        }

        move(): void {
            let dx: number = this.xObjective - this.x;
            let dy: number = this.yObjective - this.y;
            //An dieser Stelle bin ich leider nicht weiter gekommen. 
            //Hier fehlt, dass die Biene zu einer bestimmten Blume fliegt. 
           
        }

        drawHoneyBee(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "grey";
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 5, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x + 8, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}