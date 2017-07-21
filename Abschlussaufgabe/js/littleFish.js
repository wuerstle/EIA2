/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class LittleFish extends Abschlussaufgabe.Animal {
        constructor(_x, _y) {
            super(_x, _y);
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //random Color
        }
        //draw method for littlefish
        draw() {
            Abschlussaufgabe.context.fillStyle = this.color;
            Abschlussaufgabe.context.strokeStyle = this.color;
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.arc(this.x + 24, this.y + 24, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.lineTo(this.x + 55, this.y + 15);
            Abschlussaufgabe.context.lineTo(this.x + 55, this.y + 35);
            Abschlussaufgabe.context.lineTo(this.x + 35, this.y + 25);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
            Abschlussaufgabe.context.fillStyle = "black";
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.arc(this.x + 20, this.y + 20, 2, 0, 2 * Math.PI);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
        }
    }
    Abschlussaufgabe.LittleFish = LittleFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=littleFish.js.map