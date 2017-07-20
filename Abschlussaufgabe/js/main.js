/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    //variable um Hintergrund zu speichern
    var imgData;
    var click = 10;
    var z = 0;
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
        //loop for bubbles
        for (var i = 0; i < 20; i++) {
            new Abschlussaufgabe.Bubble(Math.random() * canvas.width, Math.random() * canvas.height).drawBubble();
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
        //250 bubbles on random positions
        createBubbles(250);
        //Loop for Parasites
        for (var i = 0; i <= 50; i++) {
            var p = new Abschlussaufgabe.Parasite(750, 225); //start
            parasites.push(p);
        }
        //EventListener for bubbles
        canvas.addEventListener("click", addBubble);
        //Smartphone and Tablet
        canvas.addEventListener("touchstart", addBubble);
        //EventListener for starFish
        var seeStern = document.getElementById("seestern");
        seeStern.addEventListener("click", showInfoSeestern);
        //Smartphone and Tablet
        seeStern.addEventListener("touchstart", showInfoSeestern);
        //EventListener for littleFish
        var kleinerFisch = document.getElementById("kleinerfisch");
        kleinerFisch.addEventListener("click", showInfoFisch);
        //Smartphone and Tablet
        kleinerFisch.addEventListener("touchstart", showInfoFisch);
        //EventListener for parasites
        var parasite = document.getElementById("parasite");
        parasite.addEventListener("click", showInfoParasite);
        //Smartphone and Tablet
        parasite.addEventListener("touchstart", showInfoParasite);
        //Animation
        window.setTimeout(animate, 100);
    }
    function animate() {
        Abschlussaufgabe.context.putImageData(imgData, 0, 0);
        //animation for bubbles
        for (var i = 0; i < bubbles.length; i++) {
            var b = bubbles[i];
            b.updateBubble();
        }
        //animation for animals
        for (var i = 0; i < Abschlussaufgabe.animals.length; i++) {
            var a = Abschlussaufgabe.animals[i];
            a.updateAnimal();
        }
        //animation for parasites
        for (var i = 0; i < parasites.length; i++) {
            var p = parasites[i];
            p.updateParasite();
        }
        //Timeout
        window.setTimeout(animate, 100);
    }
    //create bubbles
    function createBubbles(_amount) {
        for (var i = 0; i < _amount; i++) {
            var x = random(0, Abschlussaufgabe.context.canvas.width);
            var y = random(0, Abschlussaufgabe.context.canvas.height);
            createBubble(x, y);
        }
    }
    //add 10 bubbles 
    function addBubble(_event) {
        for (var i = 0; i < click; i++) {
            var x = random(_event.offsetX - 100, _event.offsetX + 100);
            var y = random(_event.offsetY - 100, _event.offsetY + 100);
            createBubble(x, y);
        }
        console.log("addedBubbles");
    }
    //create one bubble
    function createBubble(_x, _y) {
        var bubble = new Abschlussaufgabe.Bubble(_x, _y);
        bubbles.push(bubble);
    }
    //random position
    function random(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    //information starfish
    function showInfoSeestern() {
        console.log("testSeestern");
        document.getElementById("infoSeestern").style.display = "block";
        addStar();
    }
    //add one starfish on random position
    function addStar() {
        var sf = new Abschlussaufgabe.StarFish(this.x, this.y);
        sf.draw();
        Abschlussaufgabe.animals.push(sf);
        z++;
        console.log("addedStarfish");
    }
    //information fish
    function showInfoFisch() {
        console.log("testFisch");
        document.getElementById("infoFisch").style.display = "block";
        addFish();
    }
    //add one fisch on random position
    function addFish() {
        var lf = new Abschlussaufgabe.LittleFish(this.x, this.y);
        lf.draw();
        Abschlussaufgabe.animals.push(lf);
        z++;
        console.log("addedFish");
    }
    //information parasite
    function showInfoParasite() {
        console.log("testParasite");
        document.getElementById("infoParasite").style.display = "block";
        addParasite();
    }
    //add new parasites on fixed position
    function addParasite() {
        var para = new Abschlussaufgabe.Parasite(100, 425);
        parasites.push(para);
        z++;
        console.log("addedParasite");
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map