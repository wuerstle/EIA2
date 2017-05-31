namespace A9_FormElements {
    window.addEventListener("load", init);

    //Array für alle Sorten, die in meiner Online-Eisdiele angeboten werden
    let flavours: string[] = ["Chocolate", "Vanilla", "Strawberry", "Raspberry", "Bubblegum", "Dark Chocolate", "White Chocolate", "Yogurt", "Kiddy Chocolate", "Banana", "Blueberry"];
    //Array für alle Behälter, in denen das Eis bestellt werden kann
    let boxes: string[] = ["Waffle", "Cup", "Grab Bag", "Wonder Waffle"];
    let delivery: string[] = ["Express", "Standard", "Premium"];

    //Preis für Eissorte
    let flavourPrice: number = 1;
    //Preis für Extras
    let toppingPrice: number = 0.5;
    //boxes are free

    //FieldSet in dem alle Inputs angeordnet werden
    let fieldSet: HTMLFieldSetElement;
    //Array 
    let inputs: HTMLInputElement[] = [];

    function init(_event: Event): void {
        fieldSet = document.getElementsByTagName("fieldset")[0]; //FieldSet 1
        createFlavour();
        fieldSet = document.getElementsByTagName("fieldset")[2]; //FieldSet 3
        createBoxes();
        fieldSet = document.getElementsByTagName("fieldset")[4]; //FieldSet 5
        createDelivery();
        fieldSet.addEventListener("change", handleChange);
    }

    function createFlavour(): void {
        //erstellt pro Eissorte einen Input
        for (let i: number = 0; i < flavours.length; i++) {
            console.log(flavours[i]);
            createInput1(flavours[i]);
        }
    }

    function createInput1(_flavours: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _flavours;
        label.appendChild(input);
        input.type = "checkbox"; //Art des Inputs
        input.name = "CheckboxFlavours"; //Name des Inputs
        input.value = "flavours";
        input.id = "checkbox1";
        fieldSet.appendChild(label);
        inputs.push(input);
    }

    function createBoxes(): void {
        //erstellt pro Box einen Input
        for (let i: number = 0; i < boxes.length; i++) {
            console.log(boxes[i]);
            createInput3(boxes[i]);
        }
    }

    function createInput3(_boxes: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes";
        input.value = "boxes";
        input.id = "radiobutton1";
        fieldSet.appendChild(label);
        inputs.push(input);
    }

    function createDelivery(): void {
        //erstellt pro Lieferungsmöglichkeit einen Input
        for (let i: number = 0; i < delivery.length; i++) {
            console.log(delivery[i]);
            createInput5(delivery[i]);
        }
    }

    function createInput5(_delivery: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _delivery;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioDelivery";
        input.value = "delivery";
        input.id = "radiobutton2";
        fieldSet.appendChild(label);
        inputs.push(input);
    }

    function handleChange(_event: Event): void {
        let sum: number = 0;
        for (let i: number = 0; i < inputs.length; i++) {
            sum += parseInt(inputs[i].value);
        }
        
        console.log(sum); //gib das Ergenbis auf der Konsole aus
    }
}