var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var imgData;
    //click add 10 bubbles
    var click = 10;
    //Bubbles Class
    var bubbles = [];
    //Animal Class with Subclasses for StarFish and LittleFish
    Abschlussaufgabe.animals = [];
    function init() {
        var x = 0;
        var y = 0;
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.context = canvas.getContext("2d");
        //background canvas
        Abschlussaufgabe.context.fillStyle = "#E0FFFF";
        Abschlussaufgabe.context.fillRect(0, 0, Abschlussaufgabe.context.canvas.width, Abschlussaufgabe.context.canvas.height);
        //Loop for bubbles
        for (var i = 0; i < 20; i++) {
            new Abschlussaufgabe.Bubble(Math.random() * canvas.width, Math.random() * canvas.height, "#bfcf00").drawBubble();
        }
        //StarFish and LittleFish random position 
        for (var z = 0; z < 12; z++) {
            var n = Math.floor((Math.random() * 3) + 0);
            if (n == 0) {
                var f1 = new Abschlussaufgabe.StarFish(x, y);
                f1.setRandomPosition();
                f1.drawStarFish();
            }
            else {
                var f2 = new Abschlussaufgabe.LittleFish(x, y);
                f2.setRandomPosition();
                f2.drawLittleFish();
            }
            Abschlussaufgabe.animals.push(new Abschlussaufgabe.Animal(x, y));
        }
        //save background
        imgData = Abschlussaufgabe.context.getImageData(0, 0, canvas.width, canvas.height);
        createBubbles(200);
        //EventListener for click
        canvas.addEventListener("click", addBubble);
        //Animation
        window.setTimeout(animate, 20);
    }
    function animate() {
        Abschlussaufgabe.context.putImageData(imgData, 0, 0);
        updateBubbles();
        //Timeout
        window.setTimeout(animate, 20);
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