//Aufgabe: Nr. 3a
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 09.04.2017
//Dieser Code enstand in Zusammenarbeit mit Bersu Inanir und dem Code aus dem Tutorium.
//Leider tat ich mir bei dieser Aufgabe sehr schwer. Dadurch funktioniert der Code auch nur teilweise.

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
    for (let i: number = 0; i < 9; i++) {
        divs[i].addEventListener("click", handleEvent);
        console.log(Math.pow(2, i).toString(16));
    }


    let selected: any;
    function handleEvent(event: MouseEvent): void {
        selected = <HTMLDivElement>event.target;
        selected.classList.toggle("selected");
        if (selected.length > 1) {
            document.getElementById("field").style.display = "inline";
            }
        else {
            document.getElementById("field").style.display = "none";
            }
        console.log(selected.textContent);
    }

    function moveDiv(event: MouseEvent): void {
        let style: CSSStyleDeclaration = selected.style;
        style.position = "absolute";
        style.left = event.clientX.toString() + "px";
        style.top = event.clientY.toString() + "px";
    }
    };
};