namespace Nr3a_Schachbrett {
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

    let divs: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    for (let i: number = 0; i < 8; i++) {
        divs[i].addEventListener("click", handleEvent);
        console.log(Math.pow(2, i).toString(16));
    }

    document.addEventListener("click", moveDiv);
    
};

    let selected: HTMLDivElement;
    function handleEvent(event: MouseEvent): void {
        selected = <HTMLDivElement>event.target;
    }

    function moveDiv(event: MouseEvent): void {
        let style: CSSStyleDeclaration = selected.style;
        style.position = "absolute";
        style.left = event.clientX.toString() + "px";
        style.top = event.clientY.toString() + "px";
    }
}

//namespace L3_FirstEvents {
//    let h1List: NodeListOf<HTMLHeadingElement> = document.getElementsByTagName("h1");
//
//    for (let i: number = 0; i < h1List.length; i++) {
//        let h1: HTMLHeadingElement = h1List[i];
//        h1.addEventListener("click", handleEvent);
        //document.addEventListener("mousemove", handleEvent);
//    }
//
//    function handleEvent(_event: Event): void {
//        let h1: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
//        console.log(h1.textContent);
//    }
//}