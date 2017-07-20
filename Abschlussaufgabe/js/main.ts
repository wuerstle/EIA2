/*
Aufgabe: Abschlussaufgabe
Name: Lisa Würstle
Matrikel: 254072
Datum: 20.07.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {

    window.addEventListener("load", init);
    export let context: CanvasRenderingContext2D;

    //variable um Hintergrund zu speichern
    let imgData: ImageData;

    let click: number = 10;
    let z: number = 0;

    //Bubbles Class
    let bubbles: Bubble[] = [];
    
    //Animal Superclass with Subclasses for StarFish and LittleFish
    export let animals: Animal[] = [];
    
    //Parasite Class
    let parasites: Parasite[] = [];

    function init(): void {
        let x: number = 0;
        let y: number = 0;

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        context = canvas.getContext("2d");

        //background canvas
        context.fillStyle = "#00BFFF";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        //loop for bubbles
        for (let i: number = 0; i < 20; i++) {
            new Bubble(Math.random() * canvas.width, Math.random() * canvas.height).drawBubble();
        }
 
        //loop for starfish
        for (let i: number = 0; i < 10; i++) {
            let sf: StarFish = new StarFish(x, y);
            sf.setRandomPosition();
            sf.draw();
        }

        //loop for fish
        for (let i: number = 0; i < 10; i++) {
            let lf: LittleFish = new LittleFish(x, y);
            lf.setRandomPosition();
            lf.draw();
        }

        //save background
        imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        
        //250 bubbles on random positions
        createBubbles(250);
        
        //Loop for Parasites
        for (let i: number = 0; i <= 50; i++) {
            let p: Parasite = new Parasite(750, 225); //start
            parasites.push(p);
        }

        //EventListener for bubbles
        canvas.addEventListener("click", addBubble);
        //Smartphone and Tablet
        canvas.addEventListener("touchstart", addBubble);

        //EventListener for starFish
        let seeStern: HTMLElement = document.getElementById("seestern");
        seeStern.addEventListener("click", showInfoSeestern);
        //Smartphone and Tablet
        seeStern.addEventListener("touchstart", showInfoSeestern);

        //EventListener for littleFish
        let kleinerFisch: HTMLElement = document.getElementById("kleinerfisch");
        kleinerFisch.addEventListener("click", showInfoFisch);
        //Smartphone and Tablet
        kleinerFisch.addEventListener("touchstart", showInfoFisch);

        //EventListener for parasites
        let parasite: HTMLElement = document.getElementById("parasite");
        parasite.addEventListener("click", showInfoParasite);
        //Smartphone and Tablet
        parasite.addEventListener("touchstart", showInfoParasite);

        //Animation
        window.setTimeout(animate, 100);
    }

    function animate(): void {
        context.putImageData(imgData, 0, 0);
        
        //animation for bubbles
        for (let i: number = 0; i < bubbles.length; i++) {
            let b: Bubble = bubbles[i];
            b.updateBubble();
        }
        
        //animation for animals
        for (let i: number = 0; i < animals.length; i++) {
            let a: Animal = animals[i];
            a.updateAnimal();
        }
        
        //animation for parasites
        for (let i: number = 0; i < parasites.length; i++) {
            let p: Parasite = parasites[i];
            p.updateParasite();
        }

        //Timeout
        window.setTimeout(animate, 100);
    }
    
    //create bubbles
    function createBubbles(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let x: number = random(0, context.canvas.width);
            let y: number = random(0, context.canvas.height);
            createBubble(x, y);
        }
    }

    //add 10 bubbles 
    function addBubble(_event: MouseEvent): void {
        for (let i: number = 0; i < click; i++) {
            let x: number = random(_event.offsetX - 100, _event.offsetX + 100);
            let y: number = random(_event.offsetY - 100, _event.offsetY + 100);
            createBubble(x, y);
        }
        console.log("addedBubbles");
    }

    //create one bubble
    function createBubble(_x: number, _y: number): void {
        let bubble: Bubble = new Bubble(_x, _y);
        bubbles.push(bubble);
    }

    //random position
    function random(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }

    //information starfish
    function showInfoSeestern(): void {
        console.log("testSeestern");
        document.getElementById("infoSeestern").style.display = "block";
        addStar();
    }

    //add one starfish on random position
    function addStar(): void {
        let sf: StarFish = new StarFish(this.x, this.y);
        sf.draw();
        animals.push(sf);
        z++;
        console.log("addedStarfish");
    }

    //information fish
    function showInfoFisch(): void {
        console.log("testFisch");
        document.getElementById("infoFisch").style.display = "block";
        addFish();
    }

    //add one fisch on random position
    function addFish(): void {
        let lf: LittleFish = new LittleFish(this.x, this.y);
        lf.draw();
        animals.push(lf);
        z++;
        console.log("addedFish");
    }

    //information parasite
    function showInfoParasite(): void {
        console.log("testParasite");
        document.getElementById("infoParasite").style.display = "block";
        addParasite();
    }

    //add new parasites on fixed position
    function addParasite(): void {
        let para: Parasite = new Parasite(100, 425);
        parasites.push(para);
        z++;
        console.log("addedParasite");
    }

}