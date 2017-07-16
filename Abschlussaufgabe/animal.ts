namespace Abschlussaufgabe {

    export class Animal { 
        x: number;
        y: number;
     
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (context.canvas.width - 100) + 30);
            this.y = (Math.random() * (context.canvas.height - 150) + 80);
        }
        
        drawAnimal(): void {
            //empty  
        }
    }
} 