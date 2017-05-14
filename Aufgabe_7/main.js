//Aufgabe: Nr. 7
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 14.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    window.addEventListener("load", init);
    var imgData;
    var z = 10; //10 Bienen
    var bees = [];
    var flowers = [];
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = canvas.getContext("2d");
        L7_Classes.crc2.fillStyle = "#E0FFFF";
        L7_Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
        L7_Classes.crc2.fillStyle = "#008000";
        L7_Classes.crc2.fillRect(0, 150, canvas.width, canvas.height);
        L7_Classes.crc2.moveTo(0, 150);
        L7_Classes.crc2.stroke();
        //Funktionsaufrufe
        drawSun(340, 80);
        drawLittleMountains(95, 98);
        drawLittleMountains(225, 98);
        drawLittleMountains(360, 98);
        drawBigMountains(50, 90);
        drawBigMountains(400, 90);
        drawBigMountains(280, 90);
        drawBigMountains(170, 90);
        drawCloud(180, 50, "#b6d7de");
        drawCloud(60, 15, "#7393a7");
        drawRainDrop(20, 60);
        drawRainDrop(30, 100);
        drawRainDrop(40, 80);
        drawRainDrop(40, 120);
        drawRainDrop(50, 135);
        drawRainDrop(55, 70);
        drawRainDrop(60, 100);
        drawRainDrop(70, 110);
        drawRainDrop(80, 60);
        randomPositionRain(); //Aufruf der Funktion für die zufälige Positionierung von Regentropfen
        drawBeehive(410, 210);
        var f = new L7_Classes.Flower(this.x, this.y);
        f.drawRandomFlowers();
        imgData = L7_Classes.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        //Startposition der 10 Bienen
        for (var i = 0; i < z; i++) {
            var b = new L7_Classes.Bee(400, 225, this.color, this.size);
            bees[i] = b;
        }
        canvas.addEventListener("touchend", addBee); //Smartphone: hinzufügen einer Biene am Ende der Berührung mit dem Finger
        canvas.addEventListener("click", addBee); //Computer: hinzufügen einer Biene beim Klicken auf den Canvas
        //setTimeOut
        window.setTimeout(animate, 10);
    }
    //Animation
    function animate() {
        L7_Classes.crc2.putImageData(imgData, 0, 0); //zurückschreiben
        for (var i = 0; i < z; i++) {
            var b = bees[i];
            b.move();
            b.drawBee();
        }
        window.setTimeout(animate, 10);
    }
    function addBee() {
        var bee = new L7_Classes.Bee(400, 225, this.color, this.size);
        bees.push(bee);
        z++;
        console.log("added Bee");
    }
    //Sonne
    function drawSun(_x, _y) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#ffcd38";
        L7_Classes.crc2.arc(_x, _y, 50, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
    }
    //kleine Berge
    function drawLittleMountains(_x, _y) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#a9a9a9";
        L7_Classes.crc2.strokeStyle = "#ffffff";
        L7_Classes.crc2.moveTo(_x - 50, _y + 50);
        L7_Classes.crc2.lineTo(_x, _y - 50);
        L7_Classes.crc2.lineTo(_x + 50, _y + 50);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    //große Berge
    function drawBigMountains(_x, _y) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#dcdcdc";
        L7_Classes.crc2.strokeStyle = "#ffffff";
        L7_Classes.crc2.moveTo(_x - 60, _y + 60);
        L7_Classes.crc2.lineTo(_x, _y - 60);
        L7_Classes.crc2.lineTo(_x + 60, _y + 60);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    //Wolken
    function drawCloud(_x, _y, _fillColor) {
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x - 40, _y + 10, 25, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x + 35, _y + 10, 28, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
    }
    //Regentropfen
    function drawRainDrop(_x, _y) {
        L7_Classes.crc2.fillStyle = "#7393a7";
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
    }
    //random position rainDrops
    function randomPositionRain() {
        for (var i = 0; i < 5; i++) {
            var minWidth = 20;
            var minHeight = 60;
            var maxWidth = 80;
            var maxHeight = 130;
            var m = Math.floor((Math.random() * 2) + 0);
            var randomXPosition = Math.floor(Math.random() * (maxWidth - minWidth + 0) + minWidth);
            var randomYPosition = Math.floor(Math.random() * (maxHeight - minHeight + 0) + minHeight);
            drawRainDrop(randomXPosition, randomYPosition);
        }
    }
    //Bienenkorb
    function drawBeehive(_x, _y) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#DEB887";
        L7_Classes.crc2.strokeStyle = "#D2B48C";
        L7_Classes.crc2.moveTo(_x - 25, _y + 25);
        L7_Classes.crc2.lineTo(_x, _y - 25);
        L7_Classes.crc2.lineTo(_x + 25, _y + 25);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fillStyle = "#8B4513";
        L7_Classes.crc2.fillRect(400, 225, 10, 10);
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=main.js.map