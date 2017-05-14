//Aufgabe: Nr. 7
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 14.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    var Flower = (function () {
        function Flower(_x, _y) {
            this.flowers = [];
            this.x = _x;
            this.y = _y;
        }
        Flower.prototype.drawRandomFlowers = function () {
            for (var z = 0; z < 25; z++) {
                var n = Math.floor((Math.random() * 3) + 0);
                this.x = (Math.random() * (L7_Classes.crc2.canvas.width - 100) + 50);
                this.y = (Math.random() * (L7_Classes.crc2.canvas.height - 150) + 130);
                if (n == 0) {
                    this.drawFlowerOne();
                }
                else {
                    this.drawFlowerTwo();
                }
                this.flowers.push(new Flower(this.x, this.y));
            }
            console.log(this.flowers);
        };
        //Blume 1
        Flower.prototype.drawFlowerOne = function () {
            L7_Classes.crc2.fillStyle = "#8B0000";
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 18, this.y + 18, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 10, this.y + 25, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 2, this.y + 18, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#FFD700";
            L7_Classes.crc2.arc(this.x + 10, this.y + 17, 3, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        };
        //Blume 2
        Flower.prototype.drawFlowerTwo = function () {
            L7_Classes.crc2.strokeStyle = "#32Cd32";
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.moveTo(this.x, this.y + 25);
            L7_Classes.crc2.lineTo(this.x, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.fillStyle = "#ff0592";
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x, this.y, 10, 0, (Math.PI * 180) / 180, false);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.moveTo(this.x - 10, this.y + 1);
            L7_Classes.crc2.lineTo(this.x - 10, this.y - 13);
            L7_Classes.crc2.lineTo(this.x - 5, this.y - 5);
            L7_Classes.crc2.lineTo(this.x, this.y - 13);
            L7_Classes.crc2.lineTo(this.x + 5, this.y - 5);
            L7_Classes.crc2.lineTo(this.x + 10, this.y - 13);
            L7_Classes.crc2.lineTo(this.x + 10, this.y + 1);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        };
        return Flower;
    }());
    L7_Classes.Flower = Flower;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=flower.js.map