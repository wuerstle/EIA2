var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var StarFish = (function (_super) {
        __extends(StarFish, _super);
        function StarFish(_x, _y) {
            _super.call(this, _x, _y);
            this.setRandomPosition();
        }
        //draw method for starfish
        StarFish.prototype.draw = function () {
            Abschlussaufgabe.context.fillStyle = "orange";
            Abschlussaufgabe.context.strokeStyle = "white";
            Abschlussaufgabe.context.beginPath();
            Abschlussaufgabe.context.moveTo(this.x + 25, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 43, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 50, this.y + 10);
            Abschlussaufgabe.context.lineTo(this.x + 57, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 75, this.y + 30);
            Abschlussaufgabe.context.lineTo(this.x + 60, this.y + 40);
            Abschlussaufgabe.context.lineTo(this.x + 65, this.y + 60);
            Abschlussaufgabe.context.lineTo(this.x + 50, this.y + 45);
            Abschlussaufgabe.context.lineTo(this.x + 35, this.y + 60);
            Abschlussaufgabe.context.lineTo(this.x + 40, this.y + 40);
            Abschlussaufgabe.context.lineTo(this.x + 25, this.y + 30);
            Abschlussaufgabe.context.closePath();
            Abschlussaufgabe.context.fill();
            Abschlussaufgabe.context.stroke();
        };
        return StarFish;
    }(Abschlussaufgabe.Animal));
    Abschlussaufgabe.StarFish = StarFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=starFish.js.map