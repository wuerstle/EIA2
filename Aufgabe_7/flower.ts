//Aufgabe: Nr. 7
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 14.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L7_Classes {
    export class Flower {
        x: number;
        y: number;
        flowers: Flower[] = [];

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        drawRandomFlowers(): void {
            for (let z: number = 0; z < 25; z++) {
                let n: number = Math.floor((Math.random() * 3) + 0);
                this.x = (Math.random() * (crc2.canvas.width - 100) + 50);
                this.y = (Math.random() * (crc2.canvas.height - 150) + 130);
                if (n == 0) {
                    this.drawFlowerOne();
                }
                else {
                    this.drawFlowerTwo();
                }
                this.flowers.push(new Flower(this.x, this.y));
            }
            console.log(this.flowers);
        }

        //Blume 1
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

        //Blume 2
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