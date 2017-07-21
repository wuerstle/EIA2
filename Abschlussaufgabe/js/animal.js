/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Animal {
        //constructor
        constructor(_x, _y) {
            this.setRandomPosition();
        }
        updateAnimal() {
            this.draw();
        }
        setRandomPosition() {
            this.x = (Math.random() * (Abschlussaufgabe.context.canvas.width - 100) + 30);
            this.y = (Math.random() * (Abschlussaufgabe.context.canvas.height - 150) + 80);
        }
        //draw method
        draw() {
            //empty  
        }
    }
    Abschlussaufgabe.Animal = Animal;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=animal.js.map