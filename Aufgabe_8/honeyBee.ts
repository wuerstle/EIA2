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
            this.setRandomTargetPosition();
        }

        //Honigbienen sollen gezielt zu den Blumen fliegen, welche im Array flowers gespeichert sind
        setRandomTargetPosition(): void {
            let objectiveFlower: number = Math.round(Math.random() * (flowers.length - 1)); //steuer die ganzen Blumen im Array von der Position 0 bis flowers.length an
            this.xObjective = flowers[objectiveFlower].x; //x-Koordinate von der Blume - nimm dir das Array flowers und daraus die random Ziel-Blumen 
            this.yObjective = flowers[objectiveFlower].y; //y-Koordinaten von der Blume
        }

        //Flugbahn der Bienen zu den Blumen
        move(): void {
            let dx: number = this.xObjective - this.x;
            let dy: number = this.yObjective - this.y;
            if (Math.abs(dx) < 1 && Math.abs(dy) < 1) //Math.abs = Vorzeichen spielt keine Rolle
                this.setRandomTargetPosition();
            else {
                this.x += dx * this.speed;
                this.y += dy * this.speed;
            }

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