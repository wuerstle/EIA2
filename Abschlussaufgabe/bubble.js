var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bubble = (function () {
        function Bubble(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.size = Math.random() * 4 + 2; //random bubble size
        }
        Bubble.prototype.update = function () {
            this.move();
            this.drawBubble();
        };
        Bubble.prototype.drawBubble = function () {
            Abschlussaufgabe.crc2.fillStyle = "white";
            Abschlussaufgabe.crc2.strokeStyle = "lightblue";
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.stroke();
        };
        Bubble.prototype.move = function () {
            this.x += Math.random() * -5 - 1;
            this.y += Math.random() * -10 - 3;
            if (this.x < 0) {
                this.x = Abschlussaufgabe.crc2.canvas.width;
            }
            if (this.x >= Abschlussaufgabe.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = Abschlussaufgabe.crc2.canvas.height;
            }
        };
        return Bubble;
    }());
    Abschlussaufgabe.Bubble = Bubble;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bubble.js.map