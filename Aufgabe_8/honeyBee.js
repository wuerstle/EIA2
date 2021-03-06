//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 25.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//Code verbessert
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
            this.speed = 0.05; //Geschwindigkeit
            this.setRandomTargetPosition();
        }
        //Honigbienen sollen gezielt zu den Blumen fliegen, welche im Array flowers gespeichert sind
        HoneyBee.prototype.setRandomTargetPosition = function () {
            var objectiveFlower = Math.round(Math.random() * (L8_Inheritance.flowers.length - 1)); //steuer die ganzen Blumen im Array von der Position 0 bis flowers.length an
            this.xObjective = L8_Inheritance.flowers[objectiveFlower].x; //x-Koordinate von der Blume - nimm dir das Array flowers und daraus die random Ziel-Blumen 
            this.yObjective = L8_Inheritance.flowers[objectiveFlower].y; //y-Koordinaten von der Blume
        };
        //Flugbahn der Bienen zu den Blumen
        HoneyBee.prototype.move = function () {
            var dx = this.xObjective - this.x; //Berechnung der Differenz
            var dy = this.yObjective - this.y;
            if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += dx * this.speed;
                this.y += dy * this.speed;
            }
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