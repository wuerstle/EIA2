var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Animal = (function () {
        //constructor
        function Animal(_x, _y) {
            this.setRandomPosition();
        }
        Animal.prototype.update = function () {
            this.draw();
        };
        Animal.prototype.setRandomPosition = function () {
            this.x = (Math.random() * (Abschlussaufgabe.context.canvas.width - 100) + 30);
            this.y = (Math.random() * (Abschlussaufgabe.context.canvas.height - 150) + 80);
        };
        //draw method
        Animal.prototype.draw = function () {
            //empty  
        };
        return Animal;
    }());
    Abschlussaufgabe.Animal = Animal;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=animal.js.map