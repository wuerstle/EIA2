var L5_Animation;
(function (L5_Animation) {
    window.addEventListener("load", init);
    var crc2;
    var imgData;
    var x = [];
    var y = [];
    var z = 10; //10 Bienen
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#E0FFFF";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#008000";
        crc2.fillRect(0, 150, canvas.width, canvas.height);
        crc2.moveTo(0, 150);
        crc2.stroke();
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
        drawFlowerOne(100, 210, "#ff0592");
        drawFlowerOne(370, 160, "#ff0592");
        drawFlowerOne(215, 135, "#ff0592");
        drawFlowerOne(270, 180, "#800080");
        drawFlowerOne(30, 160, "#800080");
        drawFlowerOne(400, 140, "#800080");
        drawFlowerOne(8, 148, "#ff0592");
        //        drawFlowerOne(425, 210, "#ff0592");
        drawFlowerTwo(85, 185, 10, "#DC143C");
        drawFlowerTwo(120, 170, 10, "#8B0000");
        //        drawFlowerTwo(410, 210, 10, "#FF4500");
        //        drawFlowerTwo(430, 180, 10, "#DC143C");
        drawFlowerTwo(20, 210, 10, "#FF4500");
        drawFlowerThree(200, 195);
        drawFlowerThree(330, 145);
        drawFlowerThree(350, 190);
        drawRainDrop(20, 60);
        drawRainDrop(30, 100);
        drawRainDrop(40, 80);
        drawRainDrop(40, 120);
        drawRainDrop(50, 135);
        drawRainDrop(55, 70);
        drawRainDrop(60, 100);
        drawRainDrop(70, 110);
        drawRainDrop(80, 60);
        randomPositionFlowers(); //Aufruf der Funktion für die zufällige Positionierung von Blumen
        randomPositionRain(); //Aufruf der Funktion für die zufälige Positionierung von Regentropfen
        drawBeehive(410, 210);
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        //Startposition der 10 Bienen
        for (var i = 0; i < z; i++) {
            x[i] = 400; //x-Koordinate der Öffnung des Bienenkorbs
            y[i] = 225; //y-Koordinate der Öffnung des Bienenkorbs
        }
        canvas.addEventListener("touchend", addBee); //Smartphone: hinzufügen einer Biene am Ende der Berührung mit dem Finger
        canvas.addEventListener("click", addBee); //Computer: hinzufügen einer Biene beim Klicken auf den Canvas
        window.setTimeout(animate, 100);
    }
    //Animation
    function animate() {
        crc2.putImageData(imgData, 0, 0); //zurückschreiben
        var maxWidth = 450;
        var minWidth = 0;
        var maxHeight = 250;
        var minHeight = 0;
        for (var i = 0; i < z; i++) {
            x[i] += Math.floor(Math.random() * (maxWidth - minWidth + 0) + minWidth);
            y[i] += Math.floor(Math.random() * (maxHeight - minHeight + 0) + minHeight);
            drawBee(x[i], y[i]);
            window.setTimeout(animate, 100);
        }
    }
    function addBee() {
        x.push(400);
        y.push(225);
        z++;
    }
    //Sonne
    function drawSun(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#ffcd38";
        crc2.arc(_x, _y, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //kleine Berge
    function drawLittleMountains(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#a9a9a9";
        crc2.strokeStyle = "#ffffff";
        crc2.moveTo(_x - 50, _y + 50);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x + 50, _y + 50);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //große Berge
    function drawBigMountains(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#dcdcdc";
        crc2.strokeStyle = "#ffffff";
        crc2.moveTo(_x - 60, _y + 60);
        crc2.lineTo(_x, _y - 60);
        crc2.lineTo(_x + 60, _y + 60);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //Wolken
    function drawCloud(_x, _y, _fillColor) {
        crc2.fillStyle = _fillColor;
        crc2.beginPath();
        crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 40, _y + 10, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 35, _y + 10, 28, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //Blume 1
    function drawFlowerOne(_x, _y, _fillColor) {
        crc2.fillStyle = _fillColor;
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 10, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 18, _y + 18, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 25, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 2, _y + 18, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#FFD700";
        crc2.arc(_x + 10, _y + 17, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //Blume 2
    function drawFlowerTwo(_x, _y, _r, _fillColor) {
        crc2.strokeStyle = "#32Cd32";
        crc2.beginPath();
        crc2.moveTo(_x, _y + 25);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.fillStyle = _fillColor;
        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, (Math.PI * 180) / 180, false);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x - 10, _y + 1);
        crc2.lineTo(_x - 10, _y - 13);
        crc2.lineTo(_x - 5, _y - 5);
        crc2.lineTo(_x, _y - 13);
        crc2.lineTo(_x + 5, _y - 5);
        crc2.lineTo(_x + 10, _y - 13);
        crc2.lineTo(_x + 10, _y + 1);
        crc2.closePath();
        crc2.fill();
    }
    //Blume 3
    function drawFlowerThree(_x, _y) {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 10, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 18, _y + 18, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 25, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 2, _y + 18, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#FF8C00";
        crc2.arc(_x + 10, _y + 17, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //random position flowers
    function randomPositionFlowers() {
        for (var z_1 = 0; z_1 < 8; z_1++) {
            var minWidth = 50;
            var minHeight = 150; //Beginn der Wiese
            var maxWidth = 380;
            var maxHeight = 220;
            var n = Math.floor((Math.random() * 2) + 0);
            var randomXPosition = Math.floor(Math.random() * (maxWidth - minWidth + 0) + minWidth);
            var randomYPosition = Math.floor(Math.random() * (maxHeight - minHeight + 0) + minHeight);
            if (n == 0) {
                drawFlowerOne(randomXPosition, randomYPosition, "#800080");
            }
            else {
                drawFlowerTwo(randomXPosition, randomYPosition, 10, "#DC143C");
            }
        }
    }
    //Regentropfen
    function drawRainDrop(_x, _y) {
        crc2.fillStyle = "#7393a7";
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
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
        crc2.beginPath();
        crc2.fillStyle = "#DEB887";
        crc2.strokeStyle = "#D2B48C";
        crc2.moveTo(_x - 25, _y + 25);
        crc2.lineTo(_x, _y - 25);
        crc2.lineTo(_x + 25, _y + 25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(400, 225, 10, 10);
    }
    //Biene
    function drawBee(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#ffcd38";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
})(L5_Animation || (L5_Animation = {}));
//# sourceMappingURL=aufgabe_5.js.map