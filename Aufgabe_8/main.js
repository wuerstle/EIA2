//Aufgabe: Nr. 8 Inheritance
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    window.addEventListener("load", init);
    var imgData;
    var z = 10; //10 Bienen
    var allBees = [];
    L8_Inheritance.flowers = [];
    function init(_event) {
        var x = 0;
        var y = 0;
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L8_Inheritance.crc2 = canvas.getContext("2d");
        L8_Inheritance.crc2.fillStyle = "#E0FFFF";
        L8_Inheritance.crc2.fillRect(0, 0, canvas.width, canvas.height);
        L8_Inheritance.crc2.fillStyle = "#008000";
        L8_Inheritance.crc2.fillRect(0, 150, canvas.width, canvas.height);
        L8_Inheritance.crc2.moveTo(0, 150);
        L8_Inheritance.crc2.stroke();
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
        //Zufallsblumen 50x
        for (var z_1 = 0; z_1 < 50; z_1++) {
            var n = Math.floor((Math.random() * 3) + 0);
            if (n == 0) {
                var f1 = new L8_Inheritance.FlowerOne(x, y);
                f1.setRandomPosition(); //zufällige Position
                f1.drawFlowerOne(); //FlowerOne wird gezeichnet
            }
            else {
                var f2 = new L8_Inheritance.FlowerTwo(x, y);
                f2.setRandomPosition(); //zufällige Position
                f2.drawFlowerTwo(); //FlowerTwo wird gezeichnet
            }
            L8_Inheritance.flowers.push(new L8_Inheritance.Flower(x, y)); //wird dem Flower Array hinzugepusht
        }
        imgData = L8_Inheritance.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        //Startposition der 10 Bienen
        for (var i = 0; i < z; i++) {
            var b = new L8_Inheritance.Bee(400, 225);
            allBees.push(b); //wird dem Bienen Array hinzugepusht
        }
        //Honigbienen 6x
        for (var i = 0; i < 6; i++) {
            var h = new L8_Inheritance.HoneyBee(400, 225);
            allBees.push(h); //wird dem Bienen Array hinzugepusht
        }
        canvas.addEventListener("touchend", addBee); //Smartphone: hinzufügen einer Biene am Ende der Berührung mit dem Finger
        canvas.addEventListener("click", addBee); //Computer: hinzufügen einer Biene beim Klicken auf den Canvas
        //setTimeOut
        window.setTimeout(animate, 20);
    }
    //Animation
    function animate() {
        L8_Inheritance.crc2.putImageData(imgData, 0, 0); //zurückschreiben
        for (var i = 0; i < allBees.length; i++) {
            var a = allBees[i];
            a.update();
        }
        window.setTimeout(animate, 10); //Time Out 20
    }
    //hinzufügen einer weiteren Biene
    function addBee() {
        var bee = new L8_Inheritance.Bee(400, 225);
        allBees.push(bee); //werden dem Bienen Array hinzugepusht
        z++;
        console.log("added Bee");
    }
    //Sonne
    function drawSun(_x, _y) {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.fillStyle = "#ffcd38";
        L8_Inheritance.crc2.arc(_x, _y, 50, 0, 2 * Math.PI);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
    }
    //kleine Berge
    function drawLittleMountains(_x, _y) {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.fillStyle = "#a9a9a9";
        L8_Inheritance.crc2.strokeStyle = "#ffffff";
        L8_Inheritance.crc2.moveTo(_x - 50, _y + 50);
        L8_Inheritance.crc2.lineTo(_x, _y - 50);
        L8_Inheritance.crc2.lineTo(_x + 50, _y + 50);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
    }
    //große Berge
    function drawBigMountains(_x, _y) {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.fillStyle = "#dcdcdc";
        L8_Inheritance.crc2.strokeStyle = "#ffffff";
        L8_Inheritance.crc2.moveTo(_x - 60, _y + 60);
        L8_Inheritance.crc2.lineTo(_x, _y - 60);
        L8_Inheritance.crc2.lineTo(_x + 60, _y + 60);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
    }
    //Wolken
    function drawCloud(_x, _y, _fillColor) {
        L8_Inheritance.crc2.fillStyle = _fillColor;
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.arc(_x - 40, _y + 10, 25, 0, 2 * Math.PI);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.arc(_x + 35, _y + 10, 28, 0, 2 * Math.PI);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
    }
    //Regentropfen
    function drawRainDrop(_x, _y) {
        L8_Inheritance.crc2.fillStyle = "#7393a7";
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
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
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.fillStyle = "#DEB887";
        L8_Inheritance.crc2.strokeStyle = "#D2B48C";
        L8_Inheritance.crc2.moveTo(_x - 25, _y + 25);
        L8_Inheritance.crc2.lineTo(_x, _y - 25);
        L8_Inheritance.crc2.lineTo(_x + 25, _y + 25);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
        L8_Inheritance.crc2.fillStyle = "#8B4513";
        L8_Inheritance.crc2.fillRect(400, 225, 10, 10);
    }
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=main.js.map