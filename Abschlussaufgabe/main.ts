namespace Abschlussaufgabe {

    window.addEventListener("load", init);
    export let context: CanvasRenderingContext2D;

    //variable um Hintergrund zu speichern
    let imgData: ImageData;

    //click add 10 bubbles
    let click: number = 10;
    //variable z für die add functions
    let z: number = 0;
    //50 Parasites
    let anzahl: number = 50;

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

        //Loop for bubbles
        for (let i: number = 0; i < 20; i++) {
            new Bubble(Math.random() * canvas.width, Math.random() * canvas.height, "#bfcf00").drawBubble();
        }
 
        //loop for starfish
        for (let i: number = 0; i < 10; i++) {
            let f1: StarFish = new StarFish(x, y);
            f1.setRandomPosition();
            f1.draw();
        }

        //loop for fish
        for (let i: number = 0; i < 10; i++) {
            let f2: LittleFish = new LittleFish(x, y);
            f2.setRandomPosition();
            f2.draw();
        }

        //save background
        imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        createBubbles(200);

        //Loop for Parasites
        for (let i: number = 0; i < anzahl; i++) {
            let p: Parasite = new Parasite(750, 225); //start
            parasites.push(p);
        }

        //EventListener for bubbles
        canvas.addEventListener("click", addBubble);

        //EventListener for starFish
        let seestern: HTMLElement = document.getElementById("seestern");
        seestern.addEventListener("click", showInfoSeestern);

        //EventListener for littleFish
        let kleinerFisch: HTMLElement = document.getElementById("kleinerfisch");
        kleinerFisch.addEventListener("click", showInfoFisch);

        //EventListener for parasites
        let parasite: HTMLElement = document.getElementById("parasite");
        parasite.addEventListener("click", showInfoParasite);

        //Animation
        window.setTimeout(animate, 100);
    }

    function animate(): void {
        context.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < parasites.length; i++) {
            let p: Parasite = parasites[i];
            p.update();
        }

        for (let i: number = 0; i < animals.length; i++) {
            let a: Animal = animals[i];
            a.update();
        }

        updateBubbles();

        //Timeout
        window.setTimeout(animate, 100);
    }

    function showInfoSeestern(): void {
        console.log("testSeestern");
        document.getElementById("infoSeestern").style.display = "block";
        addStar();
    }

    function addStar(): void {
        let sf: StarFish = new StarFish(50, 300);
        sf.draw();
        animals.push(sf);
        z++;
        console.log("addedStarfish");
    }

    function showInfoFisch(): void {
        console.log("testFisch");
        document.getElementById("infoFisch").style.display = "block";
        addFish();
    }

    function addFish(): void {
        let lf: LittleFish = new LittleFish(100, 100);
        lf.draw();
        animals.push(lf);
        z++;
        console.log("addedFish");
    }

    function showInfoParasite(): void {
        console.log("testParasite");
        document.getElementById("infoParasite").style.display = "block";
        addParasite();
    }

    //add new parasites 
    function addParasite(): void {
        let para: Parasite = new Parasite(100, 425);
        parasites.push(para);
        z++;
        console.log("addedParasite");
    }

    //update bubbles
    function updateBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].update();
        }
    }

    //create bubbles
    function createBubbles(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let x: number = random(0, context.canvas.width);
            let y: number = random(0, context.canvas.height);
            createBubble(x, y, "#ffffff");
        }
    }

    //add 10 bubbles 
    function addBubble(_event: MouseEvent): void {
        for (let i: number = 0; i < click; i++) {
            let x: number = random(_event.offsetX - 100, _event.offsetX + 100);
            let y: number = random(_event.offsetY - 100, _event.offsetY + 100);
            createBubble(x, y, "#ffffff");
        }
    }

    //create one bubble
    function createBubble(_x: number, _y: number, _color: string): void {
        let bubble: Bubble = new Bubble(_x, _y, _color);
        bubbles.push(bubble);
    }

    //random position
    function random(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}