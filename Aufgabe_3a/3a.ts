window.onload = function(): void {
    let rice: number = 1; 
    let row: number = 0; 
    for (let i: number = 0; i < 64; i++) { //For-Schleife
        let element: HTMLElement = document.createElement("div"); //Create Divs
        if (((i + row) % 2) == 0) { //Modulo
            element.className = "board white"; 
        } else {
            element.className = "board black"; 
        }
        if (((i + 1) % 8) == 0) { //Modulo
            row++;
            }

        element.innerText = "" + rice;
        rice *= 2; 
        document.body.appendChild(element);
    }
};

