var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var imgData;
    //click add 10 bubbles
    var click = 10;
    var z = 0;
    //50 Parasites
    var anzahl = 50;
    //Bubbles Class
    var bubbles = [];
    //Animal Class with Subclasses for StarFish and LittleFish
    Abschlussaufgabe.animals = [];
    //Parasite Class
    var parasites = [];
    function init() {
        var x = 0;
        var y = 0;
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.context = canvas.getContext("2d");
        //background canvas
        Abschlussaufgabe.context.fillStyle = "#00BFFF";
        Abschlussaufgabe.context.fillRect(0, 0, Abschlussaufgabe.context.canvas.width, Abschlussaufgabe.context.canvas.height);
        //Loop for bubbles
        for (var i = 0; i < 20; i++) {
            new Abschlussaufgabe.Bubble(Math.random() * canvas.width, Math.random() * canvas.height, "#bfcf00").drawBubble();
        }
        //StarFish and LittleFish random position 
        for (var z_1 = 0; z_1 < 15; z_1++) {
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
        //Loop for Parasites
        for (var i = 0; i < anzahl; i++) {
            var p = new Abschlussaufgabe.Parasite(750, 225); //start
            parasites.push(p);
        }
        //EventListener for bubbles
        canvas.addEventListener("click", addBubble);
        //EventListener for starFish
        var seestern = document.getElementById("seestern");
        seestern.addEventListener("click", showInfoSeestern);
        //EventListener for littleFish
        var kleinerFisch = document.getElementById("kleinerfisch");
        kleinerFisch.addEventListener("click", showInfoFisch);
        //EventListener for parasites
        var parasite = document.getElementById("parasite");
        parasite.addEventListener("click", showInfoParasite);
        //Animation
        window.setTimeout(animate, 100);
    }
    function animate() {
        Abschlussaufgabe.context.putImageData(imgData, 0, 0);
        for (var i = 0; i < parasites.length; i++) {
            var p = parasites[i];
            p.update();
        }
        for (var i = 0; i < Abschlussaufgabe.animals.length; i++) {
            var a = Abschlussaufgabe.animals[i];
            a.update();
        }
        updateBubbles();
        //Timeout
        window.setTimeout(animate, 100);
    }
    function showInfoSeestern() {
        console.log("testSeestern");
        document.getElementById("infoSeestern").style.display = "block";
        addStar();
    }
    function addStar() {
        var sf = new Abschlussaufgabe.StarFish(200, 200);
        sf.drawStarFish();
        Abschlussaufgabe.animals.push(sf);
        z++;
        console.log("addedStarfish");
    }
    function showInfoFisch() {
        console.log("testFisch");
        document.getElementById("infoFisch").style.display = "block";
        addFish();
    }
    function addFish() {
        var lf = new Abschlussaufgabe.LittleFish(100, 100);
        lf.drawLittleFish();
        Abschlussaufgabe.animals.push(lf);
        z++;
        console.log("addedFish");
    }
    function showInfoParasite() {
        console.log("testParasite");
        document.getElementById("infoParasite").style.display = "block";
        addParasite();
    }
    //add new parasites 
    function addParasite() {
        var para = new Abschlussaufgabe.Parasite(100, 425);
        parasites.push(para);
        z++;
        console.log("addedParasite");
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