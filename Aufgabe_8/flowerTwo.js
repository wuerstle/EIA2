//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Inheritance;
(function (L8_Inheritance) {
    var FlowerTwo = (function (_super) {
        __extends(FlowerTwo, _super);
        function FlowerTwo(_x, _y) {
            _super.call(this, _x, _y);
            this.x = _x;
            this.y = _y;
        }
        // male Blume 2
        FlowerTwo.prototype.drawFlowerTwo = function () {
            L8_Inheritance.crc2.strokeStyle = "#32Cd32";
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x, this.y + 25);
            L8_Inheritance.crc2.lineTo(this.x, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.fillStyle = "#ff0592";
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y, 10, 0, (Math.PI * 180) / 180, false);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x - 10, this.y + 1);
            L8_Inheritance.crc2.lineTo(this.x - 10, this.y - 13);
            L8_Inheritance.crc2.lineTo(this.x - 5, this.y - 5);
            L8_Inheritance.crc2.lineTo(this.x, this.y - 13);
            L8_Inheritance.crc2.lineTo(this.x + 5, this.y - 5);
            L8_Inheritance.crc2.lineTo(this.x + 10, this.y - 13);
            L8_Inheritance.crc2.lineTo(this.x + 10, this.y + 1);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        };
        return FlowerTwo;
    }(L8_Inheritance.Flower));
    L8_Inheritance.FlowerTwo = FlowerTwo;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flowerTwo.js.map