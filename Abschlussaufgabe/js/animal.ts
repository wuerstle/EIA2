//Aufgabe: Abschlussaufgabe
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {

    export class Animal { //Superclass for starfish and littlefish
        x: number;
        y: number;
        color: string; //random color for fish

        //constructor
        constructor(_x: number, _y: number) {
            this.setRandomPosition();
        }
        
        updateAnimal(): void {
            this.draw();
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (context.canvas.width - 100) + 30);
            this.y = (Math.random() * (context.canvas.height - 150) + 80);
        }

        //draw method
        draw(): void {
            //empty  
        }

    }
} 