//Aufgabe: Nr. 8 Inheritance
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);

    let imgData: ImageData;
    let z: number = 10; //10 Bienen
    let allBees: Bee[] = [];
    export let flowers: Flower[] = [];

    function init(_event: Event): void {
        let x: number = 0;
        let y: number = 0;
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        crc2.fillStyle = "#E0FFFF";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#008000";
        crc2.fillRect(0, 150, canvas.width, canvas.height);

        crc2.moveTo(0, 150);
        crc2.stroke();

        //Funktionsaufrufe
        drawSun(340, 80);
        drawLittleMountains(95, 98);
        drawLittleMountains(225, 98);
        drawLittleMountains(360, 98);
        drawBigMountains(50, 90);
        drawBigMountains(400, 90);
        drawBigMountains(280, 90);
        drawBigMountains(170, 90);
        drawCloud(180, 50, "#b6d7de");
        drawCloud(60, 15, "#7393a7");
        drawRainDrop(20, 60);
        drawRainDrop(30, 100);
        drawRainDrop(40, 80);
        drawRainDrop(40, 120);
        drawRainDrop(50, 135);
        drawRainDrop(55, 70);
        drawRainDrop(60, 100);
        drawRainDrop(70, 110);
        drawRainDrop(80, 60);
        randomPositionRain(); //Aufruf der Funktion für die zufälige Positionierung von Regentropfen
        drawBeehive(410, 210);

        //Zufallsblumen 50x
        for (let z: number = 0; z < 50; z++) {
            let n: number = Math.floor((Math.random() * 3) + 0);
            if (n == 0) {
                let f1: FlowerOne = new FlowerOne(x, y); 
                f1.setRandomPosition(); //zufällige Position
                f1.drawFlowerOne(); //FlowerOne wird gezeichnet
            }
            else {
                let f2: FlowerTwo = new FlowerTwo(x, y); 
                f2.setRandomPosition(); //zufällige Position
                f2.drawFlowerTwo(); //FlowerTwo wird gezeichnet
            }
            flowers.push(new Flower(x, y)); //wird dem Flower Array hinzugepusht
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild

        //Startposition der 10 Bienen
        for (let i: number = 0; i < z; i++) {
            let b: Bee = new Bee(400, 225);
            allBees.push(b); //wird dem Bienen Array hinzugepusht
        }

        //Honigbienen 6x
        for (let i: number = 0; i < 6; i++) {
            let h: HoneyBee = new HoneyBee(400, 225);
            allBees.push(h); //wird dem Bienen Array hinzugepusht
        }

        canvas.addEventListener("touchend", addBee); //Smartphone: hinzufügen einer Biene am Ende der Berührung mit dem Finger
        canvas.addEventListener("click", addBee); //Computer: hinzufügen einer Biene beim Klicken auf den Canvas

        //setTimeOut
        window.setTimeout(animate, 20);
    }

    //Animation
    function animate(): void {
        crc2.putImageData(imgData, 0, 0); //zurückschreiben
        for (let i: number = 0; i < allBees.length; i++) {
            let a: Bee = allBees[i];
            a.update();
        }
        window.setTimeout(animate, 20); //Time Out 20
    }

    //hinzufügen einer weiteren Biene
    function addBee(): void {
        let bee: Bee = new Bee(400, 225);
        allBees.push(bee); //werden dem Bienen Array hinzugepusht
        z++;
        console.log("added Bee");
    }

    //Sonne
    function drawSun(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#ffcd38";
        crc2.arc(_x, _y, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    //kleine Berge
    function drawLittleMountains(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#a9a9a9";
        crc2.strokeStyle = "#ffffff";
        crc2.moveTo(_x - 50, _y + 50);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x + 50, _y + 50);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    //große Berge
    function drawBigMountains(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#dcdcdc";
        crc2.strokeStyle = "#ffffff";
        crc2.moveTo(_x - 60, _y + 60);
        crc2.lineTo(_x, _y - 60);
        crc2.lineTo(_x + 60, _y + 60);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    //Wolken
    function drawCloud(_x: number, _y: number, _fillColor: string): void {
        crc2.fillStyle = _fillColor;
        crc2.beginPath();
        crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 40, _y + 10, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 35, _y + 10, 28, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    //Regentropfen
    function drawRainDrop(_x: number, _y: number): void {
        crc2.fillStyle = "#7393a7";
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    //random position rainDrops
    function randomPositionRain(): void {
        for (let i: number = 0; i < 5; i++) {
            let minWidth: number = 20;
            let minHeight: number = 60;
            let maxWidth: number = 80;
            let maxHeight: number = 130;
            let m: number = Math.floor((Math.random() * 2) + 0);
            let randomXPosition: number = Math.floor(Math.random() * (maxWidth - minWidth + 0) + minWidth);
            let randomYPosition: number = Math.floor(Math.random() * (maxHeight - minHeight + 0) + minHeight);

            drawRainDrop(randomXPosition, randomYPosition);
        }
    }

    //Bienenkorb
    function drawBeehive(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#DEB887";
        crc2.strokeStyle = "#D2B48C";
        crc2.moveTo(_x - 25, _y + 25);
        crc2.lineTo(_x, _y - 25);
        crc2.lineTo(_x + 25, _y + 25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(400, 225, 10, 10);
    }
}