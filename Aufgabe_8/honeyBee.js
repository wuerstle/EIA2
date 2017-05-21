//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//Code nicht vollständig funktionsfähig!
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Inheritance;
(function (L8_Inheritance) {
    var HoneyBee = (function (_super) {
        __extends(HoneyBee, _super);
        function HoneyBee(_x, _y) {
            _super.call(this, _x, _y);
            this.speed = 0.06;
            this.setRandomFlowerObjective();
        }
        HoneyBee.prototype.setRandomFlowerObjective = function () {
            var objectiveFlower = Math.round(Math.random() * (L8_Inheritance.flowers.length - 1));
            this.xObjective = L8_Inheritance.flowers[objectiveFlower].x; //x-Koordinaten
            this.yObjective = L8_Inheritance.flowers[objectiveFlower].y; //y-Koordinaten
        };
        HoneyBee.prototype.move = function () {
            var dx = this.xObjective - this.x;
            var dy = this.yObjective - this.y;
            //An dieser Stelle bin ich leider nicht weiter gekommen. 
            //Hier fehlt, dass die Biene zu einer bestimmten Blume fliegt. 
        };
        HoneyBee.prototype.drawHoneyBee = function () {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.strokeStyle = "grey";
            L8_Inheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.arc(this.x + 5, this.y, this.size, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.arc(this.x + 8, this.y, this.size, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        };
        return HoneyBee;
    }(L8_Inheritance.Bee));
    L8_Inheritance.HoneyBee = HoneyBee;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=honeyBee.js.map