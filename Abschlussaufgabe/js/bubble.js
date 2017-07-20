//Aufgabe: Abschlussaufgabe
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bubble = (function () {
        function Bubble(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.radius = Math.random() * (5 - 5) + 5;
            this.evil = Math.round(Math.random()) == 1;
        }
        Bubble.prototype.drawBubble = function () {
            Abschlussaufgabe.context.strokeStyle = "#00ffff";
            Abschlussaufgabe.context.fillStyle = "#00BFFF";
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
        };
        Bubble.prototype.moveBubble = function () {
            //bubbles go up
            this.y--;
            if (this.y + this.radius <= 0) {
                this.y = Abschlussaufgabe.context.canvas.height + this.radius;
            }
        };
        Bubble.prototype.updateBubble = function () {
            this.moveBubble();
            this.drawBubble();
        };
        return Bubble;
    }());
    Abschlussaufgabe.Bubble = Bubble;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bubble.js.map