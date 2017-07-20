//Aufgabe: Abschlussaufgabe
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var LittleFish = (function (_super) {
        __extends(LittleFish, _super);
        function LittleFish(_x, _y) {
            _super.call(this, _x, _y);
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //random Color
        }
        //draw method for littlefish
        LittleFish.prototype.draw = function () {
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
        };
        return LittleFish;
    }(Abschlussaufgabe.Animal));
    Abschlussaufgabe.LittleFish = LittleFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=littleFish.js.map