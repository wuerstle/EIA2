namespace Abschlussaufgabe {

    export class Bubble {
        x: number;
        y: number;
        size: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.size = Math.random() * 4 + 2; //random bubble size
        }

        update(): void {
            this.move();
            this.drawBubble();
        }

        drawBubble(): void {
            crc2.fillStyle = "white";
            crc2.strokeStyle = "lightblue";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        
        move(): void {
            this.x += Math.random() * -5 - 1;
            this.y += Math.random() * -10 - 3;

            if (this.x < 0) {
                this.x = crc2.canvas.width;
            }
            if (this.x >= crc2.canvas.width) {
                this.x = 0;
            }

            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }

            
        }
    }
}