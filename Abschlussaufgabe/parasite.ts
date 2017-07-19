namespace Abschlussaufgabe {

    export class Parasite { //Class for Parasites
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        updateParasite(): void {
            this.moveParasite();
            this.drawParasite();
        }

        drawParasite(): void {
            context.strokeStyle = "#6B8e23";
            context.fillStyle = "#6B8e23";
            context.beginPath();
            context.arc(this.x, this.y, 1, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.stroke();
        }

        moveParasite(): void {
            this.x += Math.random() * 4 - 2.1;
            this.y += Math.random() * 7 - 3.5;

            if (this.x < 0) {
                this.x = context.canvas.width;
            }
            if (this.y < 0) {
                this.y = context.canvas.height;
            }
            if (this.y >= context.canvas.height) {
                this.y = 0;
            }
        }
    }
}