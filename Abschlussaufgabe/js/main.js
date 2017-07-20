//Aufgabe: Abschlussaufgabe
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.07.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    //variable um Hintergrund zu speichern
    var imgData;
    //click add 10 bubbles
    var click = 10;
    //variable z für die add functions
    var z = 0;
    //50 Parasites
    var anzahl = 50;
    //Bubbles Class
    var bubbles = [];
    //Animal Superclass with Subclasses for StarFish and LittleFish
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
        //loop for starfish
        for (var i = 0; i < 10; i++) {
            var sf = new Abschlussaufgabe.StarFish(x, y);
            sf.setRandomPosition();
            sf.draw();
        }
        //loop for fish
        for (var i = 0; i < 10; i++) {
            var lf = new Abschlussaufgabe.LittleFish(x, y);
            lf.setRandomPosition();
            lf.draw();
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
            p.updateParasite();
        }
        for (var i = 0; i < Abschlussaufgabe.animals.length; i++) {
            var a = Abschlussaufgabe.animals[i];
            a.updateAnimal();
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
        var sf = new Abschlussaufgabe.StarFish(this.x, this.y);
        sf.draw();
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
        var lf = new Abschlussaufgabe.LittleFish(this.x, this.y);
        lf.draw();
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
    //update bubbles
    function updateBubbles() {
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].updateBubble();
        }
    }
    //create bubbles
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
    //create one bubble
    function createBubble(_x, _y, _color) {
        var bubble = new Abschlussaufgabe.Bubble(_x, _y, _color);
        bubbles.push(bubble);
    }
    //random position
    function random(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map