var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bubble = (function () {
        function Bubble(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.radius = Math.random() * (5 - 5) + 5;
            this.evil = Math.round(Math.random()) == 1;
        }
        Bubble.prototype.drawBubble = function () {
            Abschlussaufgabe.context.strokeStyle = "#00ffff";
            Abschlussaufgabe.context.fillStyle = "#E0FFFF";
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
        };
        Bubble.prototype.move = function () {
            if (this.evil) {
                this.y--;
                if (this.y + this.radius <= 0) {
                    this.y = Abschlussaufgabe.context.canvas.height + this.radius;
                }
            }
            else {
                this.y++;
                if (this.y - this.radius >= Abschlussaufgabe.context.canvas.height) {
                    this.y = this.radius;
                }
            }
        };
        Bubble.prototype.update = function () {
            this.move();
            this.drawBubble();
        };
        return Bubble;
    }());
    Abschlussaufgabe.Bubble = Bubble;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bubble.js.map