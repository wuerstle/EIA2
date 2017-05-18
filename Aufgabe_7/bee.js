//Aufgabe: Nr. 7
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 18.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    var Bee = (function () {
        function Bee(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 4 + 2;
        }
        Bee.prototype.update = function () {
            this.move();
            this.drawBee();
        };
        Bee.prototype.drawBee = function () {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.color;
            L7_Classes.crc2.strokeStyle = "grey";
            L7_Classes.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#000000";
            L7_Classes.crc2.arc(this.x + 5, this.y, this.size, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.color;
            L7_Classes.crc2.arc(this.x + 8, this.y, this.size, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        };
        Bee.prototype.move = function () {
            this.x += Math.random() * 4 - 2.1;
            this.y += Math.random() * 7 - 3.5;
            if (this.x < 0) {
                this.x = L7_Classes.crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = L7_Classes.crc2.canvas.height;
            }
            if (this.y >= L7_Classes.crc2.canvas.height) {
                this.y = 0;
            }
        };
        return Bee;
    }());
    L7_Classes.Bee = Bee;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=bee.js.map