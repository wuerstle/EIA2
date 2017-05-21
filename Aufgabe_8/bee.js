//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    var Bee = (function () {
        function Bee(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //random Color
            this.size = Math.random() * 4 + 2; //random Size
        }
        Bee.prototype.update = function () {
            this.move();
            this.drawBee();
        };
        Bee.prototype.drawBee = function () {
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
        Bee.prototype.move = function () {
            this.x += Math.random() * 4 - 2.1;
            this.y += Math.random() * 7 - 3.5;
            if (this.x < 0) {
                this.x = L8_Inheritance.crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = L8_Inheritance.crc2.canvas.height;
            }
            if (this.y >= L8_Inheritance.crc2.canvas.height) {
                this.y = 0;
            }
        };
        return Bee;
    }());
    L8_Inheritance.Bee = Bee;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=bee.js.map