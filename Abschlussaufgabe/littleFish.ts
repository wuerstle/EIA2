namespace Abschlussaufgabe {

    export class LittleFish extends Animal {
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }

        drawAnimal(): void {
            context.fillStyle = "#BDB76B";
            context.beginPath();
            context.arc(this.x + 24, this.y + 24, 20, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.stroke();
            context.beginPath();
            context.lineTo(this.x + 55, this.y + 15);
            context.lineTo(this.x + 55, this.y + 35);
            context.lineTo(this.x + 35, this.y + 25);
            context.closePath();
            context.fill();
            context.fillStyle = "black";
            context.beginPath();
            context.arc(this.x + 20, this.y + 20, 2, 0, 2 * Math.PI);
            context.closePath();
            context.fill();

        }
    }
}