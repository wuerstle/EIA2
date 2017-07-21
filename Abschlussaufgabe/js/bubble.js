/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bubble {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.radius = Math.random() * (5 - 5) + 5;
            this.b = Math.round(Math.random()) == 1;
        }
        drawBubble() {
            Abschlussaufgabe.context.strokeStyle = "#00ffff";
            Abschlussaufgabe.context.fillStyle = "#00BFFF";
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
        }
        moveBubble() {
            //bubbles go up
            this.y--;
            if (this.y + this.radius <= 0) {
                this.y = Abschlussaufgabe.context.canvas.height + this.radius;
            }
        }
        updateBubble() {
            this.moveBubble();
            this.drawBubble();
        }
    }
    Abschlussaufgabe.Bubble = Bubble;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bubble.js.map