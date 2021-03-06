/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {

    export class LittleFish extends Animal { //LittleFish is Subclass from Animal
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //random Color
            
        }

        //draw method for littlefish
        draw(): void {
            context.fillStyle = this.color;
            context.strokeStyle = this.color;
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
            context.stroke();
            context.fillStyle = "black";
            context.beginPath();
            context.arc(this.x + 20, this.y + 20, 2, 0, 2 * Math.PI);
            context.closePath();
            context.fill();

        }
    }
}