namespace Abschlussaufgabe {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);

    let imgData: ImageData;
    let z: number = 10;
    let allBubbles: Bubble[] = [];

    function init(_event: Event): void {
        let x: number = 0;
        let y: number = 0;
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#E0FFFF"; //Hintergrundfarbe
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < z; i++) {
            let b: Bubble = new Bubble(700, 400);
            allBubbles.push(b); 
        }

        //setTimeOut
        window.setTimeout(animate, 300);
    }
    function animate(): void {
        crc2.putImageData(imgData, 0, 0); //zurückschreiben
        for (let i: number = 0; i < allBubbles.length; i++) {
            let a: Bubble = allBubbles[i];
            a.update();
        }
        window.setTimeout(animate, 300); //Time Out 20
    }

}