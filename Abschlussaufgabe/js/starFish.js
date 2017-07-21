/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class StarFish extends Abschlussaufgabe.Animal {
        constructor(_x, _y) {
            super(_x, _y);
        }
        //draw method for starfish
        draw() {
            Abschlussaufgabe.context.fillStyle = "orange";
            Abschlussaufgabe.context.strokeStyle = "white";
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.moveTo(this.x + 25, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 43, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 50, this.y + 10);
            Abschlussaufgabe.context.lineTo(this.x + 57, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 75, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 60, this.y + 40);
            Abschlussaufgabe.context.lineTo(this.x + 65, this.y + 60);
            Abschlussaufgabe.context.lineTo(this.x + 50, this.y + 45);
            Abschlussaufgabe.context.lineTo(this.x + 35, this.y + 60);
            Abschlussaufgabe.context.lineTo(this.x + 40, this.y + 40);
            Abschlussaufgabe.context.lineTo(this.x + 25, this.y + 30);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
        }
    }
    Abschlussaufgabe.StarFish = StarFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=starFish.js.map