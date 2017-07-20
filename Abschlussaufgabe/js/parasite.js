/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Parasite = (function () {
        function Parasite(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Parasite.prototype.updateParasite = function () {
            this.moveParasite();
            this.drawParasite();
        };
        Parasite.prototype.drawParasite = function () {
            Abschlussaufgabe.context.strokeStyle = "#6B8e23";
            Abschlussaufgabe.context.fillStyle = "#6B8e23";
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.arc(this.x, this.y, 1, 0, 2 * Math.PI);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
        };
        Parasite.prototype.moveParasite = function () {
            this.x += Math.random() * 4 - 2.1;
            this.y += Math.random() * 7 - 3.5;
            if (this.x < 0) {
                this.x = Abschlussaufgabe.context.canvas.width;
            }
            if (this.y < 0) {
                this.y = Abschlussaufgabe.context.canvas.height;
            }
            if (this.y >= Abschlussaufgabe.context.canvas.height) {
                this.y = 0;
            }
        };
        return Parasite;
    }());
    Abschlussaufgabe.Parasite = Parasite;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=parasite.js.map