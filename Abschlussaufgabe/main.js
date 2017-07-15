var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var imgData;
    var z = 10;
    var allBubbles = [];
    function init(_event) {
        var x = 0;
        var y = 0;
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "#E0FFFF"; //Hintergrundfarbe
        Abschlussaufgabe.crc2.fillRect(0, 0, canvas.width, canvas.height);
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < z; i++) {
            var b = new Abschlussaufgabe.Bubble(700, 400);
            allBubbles.push(b);
        }
        //setTimeOut
        window.setTimeout(animate, 300);
    }
    function animate() {
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0); //zurückschreiben
        for (var i = 0; i < allBubbles.length; i++) {
            var a = allBubbles[i];
            a.update();
        }
        window.setTimeout(animate, 300); //Time Out 20
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map