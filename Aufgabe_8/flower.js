//Aufgabe: Nr. 8
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    var Flower = (function () {
        function Flower(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }
        //random Position der Blumen
        Flower.prototype.setRandomPosition = function () {
            this.x = (Math.random() * (L8_Inheritance.crc2.canvas.width - 100) + 50);
            this.y = (Math.random() * (L8_Inheritance.crc2.canvas.height - 150) + 130);
        };
        Flower.prototype.draw = function () {
            //empty  
        };
        return Flower;
    }());
    L8_Inheritance.Flower = Flower;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flower.js.map