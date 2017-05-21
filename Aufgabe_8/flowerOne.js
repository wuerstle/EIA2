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
    var FlowerOne = (function (_super) {
        __extends(FlowerOne, _super);
        function FlowerOne(_x, _y) {
            _super.call(this, _x, _y);
            this.x = _x;
            this.y = _y;
        }
        //male Blume 1
        FlowerOne.prototype.drawFlowerOne = function () {
            L8_Inheritance.crc2.fillStyle = "#8B0000";
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x + 18, this.y + 18, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x + 10, this.y + 25, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x + 2, this.y + 18, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#FFD700";
            L8_Inheritance.crc2.arc(this.x + 10, this.y + 17, 3, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        };
        return FlowerOne;
    }(L8_Inheritance.Flower));
    L8_Inheritance.FlowerOne = FlowerOne;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flowerOne.js.map