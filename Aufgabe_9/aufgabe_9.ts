//Aufgabe: Nr. 9 Form Elements
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 02.06.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//mit Hilfe von Saschas Code aus dem Tutorium

namespace A9_FormElements {
    window.addEventListener("load", init);

    //Array für alle Sorten, die in meiner Online-Eisdiele angeboten werden
    let flavours: string[] = ["Chocolate", "Vanilla", "Strawberry", "Raspberry", "Bubblegum", "Dark Chocolate", "White Chocolate", "Yogurt", "Kiddy Chocolate", "Banana", "Blueberry"];
    let inputFlavour: HTMLInputElement[] = [];

    //Array für alle Behälter, in denen das Eis bestellt werden kann
    let boxes: string[] = ["Waffle", "Cup", "Grab Bag", "Wonder Waffle"];
    let inputBoxes: HTMLInputElement[] = [];

    //Array für Lieferoptionen
    let delivery: string[] = ["Express", "Standard", "Premium"];
    let inputDelivery: HTMLInputElement[] = [];

    //FieldSet in dem alle Inputs angeordnet werden
    let fieldSet: HTMLFieldSetElement;

    //Kugel Eis: 2 Euro, Toppings: aufs Haus, Boxes: 1 Euro, Versand: 3 Euro

    function init(_event: Event): void {
        fieldSet = document.getElementsByTagName("fieldset")[0]; //FieldSet 1
        createFlavour();
        fieldSet.addEventListener("change", handleChange); //EventListener Flavour

        fieldSet = document.getElementsByTagName("fieldset")[2]; //FieldSet 3
        createBoxes();
        fieldSet.addEventListener("change", handleChange); //EventListener Boxes

        fieldSet = document.getElementsByTagName("fieldset")[4]; //Fieldset 5
        createDelivery();
        fieldSet.addEventListener("change", handleChange); //EventListener Delivery

        fieldSet = document.getElementsByTagName("fieldset")[5]; //Fieldset 6
        fieldSet.addEventListener("change", handleChange);

    }

    function createFlavour(): void {
        //erstellt pro Eissorte einen Input
        for (let i: number = 0; i < flavours.length; i++) {
            console.log(flavours[i]);
            createInputFlavour(flavours[i]);
        }
    }

    function createInputFlavour(_flavours: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _flavours;
        label.appendChild(input);
        input.type = "number"; //Art des Inputs
        input.name = "NumberFlavours"; //Name des Inputs
        input.value = "0";
        input.min = "0";
        input.max = "10";
        input.id = "number";
        fieldSet.appendChild(label);
        inputFlavour.push(input);
    }

    function createBoxes(): void {
        //erstellt pro Box einen Input
        for (let i: number = 0; i < boxes.length; i++) {
            console.log(boxes[i]);
            createInputBoxes(boxes[i]);
        }
    }

    function createInputBoxes(_boxes: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes";
        input.value = "boxes";
        input.id = "radiobutton1";
        fieldSet.appendChild(label);
        inputBoxes.push(input);
    }

    function createDelivery(): void {
        for (let i: number = 0; i < delivery.length; i++) {
            console.log(delivery[i]);
            createInputDelivery(delivery[i]);
        }
    }

    function createInputDelivery(_boxes: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes2";
        input.value = "boxes";
        input.id = "radiobutton1";
        fieldSet.appendChild(label);
        inputDelivery.push(input);
    }

    function handleChange(_event: Event): void {
        let sum: number = 0;
        fieldSet.innerHTML = "";
        for (let i: number = 0; i < inputFlavour.length; i++) {
            sum += parseInt(inputFlavour[i].value);
            if (parseInt(inputFlavour[i].value) > 0) {
                fieldSet.innerHTML += flavours[i] + " " + (parseInt(inputFlavour[i].value) * 2) + "€" + "\n";
            }
        }
        for (let i: number = 0; i < inputBoxes.length; i++) {
            if (inputBoxes[i].checked) {
                sum += 1;
                fieldSet.innerHTML += boxes[i] + " 1€" + "\n";
            }
        }
        for (let i: number = 0; i < inputDelivery.length; i++) {
            if (inputDelivery[i].checked) {
                sum += 3;
                fieldSet.innerHTML += delivery[i] + " 3€" + "\n";
            }
        }


        console.log(sum); //gib das Ergenbis auf der Konsole aus
    }

    function clickButton(): void {
        //Funktion für den Bestell-Button 
    }
}