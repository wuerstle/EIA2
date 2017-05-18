//Aufgabe: Nr. 7
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 18.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L7_Classes {
    export class Bee {
        x: number;
        y: number;
        color: string;
        size: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 4 + 2;
        }

        update(): void {
            this.move();
            this.drawBee();
        }

        drawBee(): void {
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

        move(): void {
            this.x += Math.random() * 4 - 2.1;
            this.y += Math.random() * 7 - 3.5;

            if (this.x < 0) {
                this.x = crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }
            if (this.y >= crc2.canvas.height) {
                this.y = 0;
            }
        }
    }
}