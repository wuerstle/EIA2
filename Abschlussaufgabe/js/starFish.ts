//Aufgabe: Abschlussaufgabe
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {

    export class StarFish extends Animal { //StarFish is Subclass from Animal
    
        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        //draw method for starfish
        draw(): void {
            context.fillStyle = "orange";
            context.strokeStyle = "white";
            context.beginPath();
            context.moveTo(this.x + 25, this.y + 30);
            context.lineTo(this.x + 43, this.y + 30);
            context.lineTo(this.x + 50, this.y + 10);
            context.lineTo(this.x + 57, this.y + 30);
            context.lineTo(this.x + 75, this.y + 30);
            context.lineTo(this.x + 60, this.y + 40);
            context.lineTo(this.x + 65, this.y + 60);
            context.lineTo(this.x + 50, this.y + 45);
            context.lineTo(this.x + 35, this.y + 60);
            context.lineTo(this.x + 40, this.y + 40);
            context.lineTo(this.x + 25, this.y + 30);
            context.closePath();
            context.fill();
            context.stroke();
            
        }
    }
}