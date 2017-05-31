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

    //Preis für Eissorte
    let flavourPrice: number = 1;
    //Preis für Extras
    let toppingPrice: number = 0.5;
    //boxes are free

    //FieldSet in dem alle Inputs angeordnet werden
    let fieldSet: HTMLFieldSetElement;

    function init(_event: Event): void {
        fieldSet = document.getElementsByTagName("fieldset")[0]; //FieldSet 1
        createCheckbox();
        fieldSet = document.getElementsByTagName("fieldset")[2, 4]; //FieldSet 3
        createRadio();
        fieldSet.addEventListener("change", handleChange);
    }

    function createCheckbox(): void {
        //erstellt pro Eissorte einen Input
        for (let i: number = 0; i < flavours.length; i++) {
            console.log(flavours[i]);
            createInputCheckbox(flavours[i]);
        }
    }

    function createInputCheckbox(_flavours: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _flavours;
        label.appendChild(input);
        input.type = "checkbox"; //Art des Inputs
        input.name = "CheckboxFlavours"; //Name des Inputs
        input.value = "flavours";
        input.id = "checkbox1";
        fieldSet.appendChild(label);
        inputFlavour.push(input);
    }

    function createRadio(): void {
        //erstellt pro Box einen Input
        for (let i: number = 0; i < boxes.length; i++) {
            console.log(boxes[i]);
            createInputRadio(boxes[i]);
        }
    }

    function createInputRadio(_boxes: string): void {
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

    function handleChange(_event: Event): void {
        let sum: number = 0;
        for (let i: number = 0; i < inputFlavour.length; i++) {
            if (inputFlavour[i].checked) { 
            sum += 1; }
        }

        console.log(); //gib das Ergenbis auf der Konsole aus
    }
}