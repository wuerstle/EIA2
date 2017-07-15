namespace Abschlussaufgabe {

    window.addEventListener("load", init);
    export let context: CanvasRenderingContext2D;
    let imgData: ImageData;
    //click add 10 bubbles
    let click: number = 10; 

    let bubbles: Bubble[] = []; 

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        context = canvas.getContext("2d");

        //EventListener for click
        canvas.addEventListener("click", addBubble); 

        //background Canvas
        context.fillStyle = "#E0FFFF"; 
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        for (let i: number = 0; i < 20; i++) {
            new Bubble(Math.random() * canvas.width, Math.random() * canvas.height, "#bfcf00").draw();
        }

        imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        createBubbles(200);

        animate();
    }

    function animate(): void {
        context.putImageData(imgData, 0, 0);

        updateBubbles();

        //Timeout
        setTimeout(animate, 20); 
    }

    function updateBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].update();
        }
    }

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

    function createBubble(_x: number, _y: number, _color: string): void {
        let bubble: Bubble = new Bubble(_x, _y, _color);
        bubbles.push(bubble);
    }
    
    function random(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}