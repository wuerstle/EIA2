var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Animal = (function () {
        function Animal(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }
        Animal.prototype.update = function () {
            this.setRandomPosition();
            this.drawAnimal();
        };
        Animal.prototype.setRandomPosition = function () {
            this.x = (Math.random() * (Abschlussaufgabe.context.canvas.width - 100) + 30);
            this.y = (Math.random() * (Abschlussaufgabe.context.canvas.height - 150) + 80);
        };
        Animal.prototype.drawAnimal = function () {
            //empty  
        };
        return Animal;
    }());
    Abschlussaufgabe.Animal = Animal;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=animal.js.map