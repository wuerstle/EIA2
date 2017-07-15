namespace Abschlussaufgabe {

    export class Bubble {
        x: number;
        y: number;
        radius: number;
        evil: boolean;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.radius = Math.random() * (5 - 5) + 5;
            this.evil = Math.round(Math.random()) == 1;
        }

        draw(): void {
            context.strokeStyle = "#00ffff";
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.stroke();
        }

        move(): void {
            if (this.evil) {
                this.y--;
                if (this.y + this.radius <= 0) {
                    this.y = context.canvas.height + this.radius;
                } 
            } else {
                this.y++;
                if (this.y - this.radius >= context.canvas.height) {
                    this.y = this.radius;
                } 
            }                        
        } 

        update(): void {
            this.move();
            this.draw();
        }

    }
}