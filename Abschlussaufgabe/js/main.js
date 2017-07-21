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
    let imgData;
    let click = 10;
    let z = 0;
    //Bubbles Class
    let bubbles = [];
    //Animal Superclass with Subclasses for StarFish and LittleFish
    Abschlussaufgabe.animals = [];
    //Parasite Class
    let parasites = [];
    function init() {
        let x = 0;
        let y = 0;
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.context = canvas.getContext("2d");
        //background canvas
        Abschlussaufgabe.context.fillStyle = "#00BFFF";
        Abschlussaufgabe.context.fillRect(0, 0, Abschlussaufgabe.context.canvas.width, Abschlussaufgabe.context.canvas.height);
        //loop for bubbles
        for (let i = 0; i < 20; i++) {
            new Abschlussaufgabe.Bubble(Math.random() * canvas.width, Math.random() * canvas.height).drawBubble();
        }
        //loop for starfish
        for (let i = 0; i < 10; i++) {
            let sf = new Abschlussaufgabe.StarFish(x, y);
            sf.setRandomPosition();
            sf.draw();
        }
        //loop for fish
        for (let i = 0; i < 10; i++) {
            let lf = new Abschlussaufgabe.LittleFish(x, y);
            lf.setRandomPosition();
            lf.draw();
        }
        //save background
        imgData = Abschlussaufgabe.context.getImageData(0, 0, canvas.width, canvas.height);
        //250 bubbles on random positions
        createBubbles(250);
        //Loop for Parasites
        for (let i = 0; i <= 50; i++) {
            let p = new Abschlussaufgabe.Parasite(750, 225); //start
            parasites.push(p);
        }
        //EventListener for bubbles
        canvas.addEventListener("click", addBubble);
        //Smartphone and Tablet
        canvas.addEventListener("touchstart", addBubble);
        //EventListener for starFish
        let seeStern = document.getElementById("seestern");
        seeStern.addEventListener("click", showInfoSeestern);
        //Smartphone and Tablet
        seeStern.addEventListener("touchstart", showInfoSeestern);
        //EventListener for littleFish
        let kleinerFisch = document.getElementById("kleinerfisch");
        kleinerFisch.addEventListener("click", showInfoFisch);
        //Smartphone and Tablet
        kleinerFisch.addEventListener("touchstart", showInfoFisch);
        //EventListener for parasites
        let parasite = document.getElementById("parasite");
        parasite.addEventListener("click", showInfoParasite);
        //Smartphone and Tablet
        parasite.addEventListener("touchstart", showInfoParasite);
        //Animation
        window.setTimeout(animate, 100);
    }
    function animate() {
        Abschlussaufgabe.context.putImageData(imgData, 0, 0);
        //animation for bubbles
        for (let i = 0; i < bubbles.length; i++) {
            let b = bubbles[i];
            b.updateBubble();
        }
        //animation for animals
        for (let i = 0; i < Abschlussaufgabe.animals.length; i++) {
            let a = Abschlussaufgabe.animals[i];
            a.updateAnimal();
        }
        //animation for parasites
        for (let i = 0; i < parasites.length; i++) {
            let p = parasites[i];
            p.updateParasite();
        }
        //Timeout
        window.setTimeout(animate, 100);
    }
    //create bubbles
    function createBubbles(_amount) {
        for (let i = 0; i < _amount; i++) {
            let x = random(0, Abschlussaufgabe.context.canvas.width);
            let y = random(0, Abschlussaufgabe.context.canvas.height);
            createBubble(x, y);
        }
    }
    //add 10 bubbles 
    function addBubble(_event) {
        for (let i = 0; i < click; i++) {
            let x = random(_event.offsetX - 100, _event.offsetX + 100);
            let y = random(_event.offsetY - 100, _event.offsetY + 100);
            createBubble(x, y);
        }
        console.log("addedBubbles");
    }
    //create one bubble
    function createBubble(_x, _y) {
        let bubble = new Abschlussaufgabe.Bubble(_x, _y);
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
        let sf = new Abschlussaufgabe.StarFish(this.x, this.y);
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
        let lf = new Abschlussaufgabe.LittleFish(this.x, this.y);
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
        let para = new Abschlussaufgabe.Parasite(100, 425);
        parasites.push(para);
        z++;
        console.log("addedParasite");
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map