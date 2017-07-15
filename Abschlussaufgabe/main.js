var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var imgData;
    //click add 10 bubbles
    var click = 10;
    var bubbles = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.context = canvas.getContext("2d");
        //EventListener for click
        canvas.addEventListener("click", addBubble);
        //background Canvas
        Abschlussaufgabe.context.fillStyle = "#E0FFFF";
        Abschlussaufgabe.context.fillRect(0, 0, Abschlussaufgabe.context.canvas.width, Abschlussaufgabe.context.canvas.height);
        for (var i = 0; i < 20; i++) {
            new Abschlussaufgabe.Bubble(Math.random() * canvas.width, Math.random() * canvas.height, "#bfcf00").draw();
        }
        imgData = Abschlussaufgabe.context.getImageData(0, 0, canvas.width, canvas.height);
        createBubbles(200);
        animate();
    }
    function animate() {
        Abschlussaufgabe.context.putImageData(imgData, 0, 0);
        updateBubbles();
        //Timeout
        setTimeout(animate, 20);
    }
    function updateBubbles() {
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].update();
        }
    }
    function createBubbles(_amount) {
        for (var i = 0; i < _amount; i++) {
            var x = random(0, Abschlussaufgabe.context.canvas.width);
            var y = random(0, Abschlussaufgabe.context.canvas.height);
            createBubble(x, y, "#ffffff");
        }
    }
    //add 10 bubbles 
    function addBubble(_event) {
        for (var i = 0; i < click; i++) {
            var x = random(_event.offsetX - 100, _event.offsetX + 100);
            var y = random(_event.offsetY - 100, _event.offsetY + 100);
            createBubble(x, y, "#ffffff");
        }
    }
    function createBubble(_x, _y, _color) {
        var bubble = new Abschlussaufgabe.Bubble(_x, _y, _color);
        bubbles.push(bubble);
    }
    function random(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map