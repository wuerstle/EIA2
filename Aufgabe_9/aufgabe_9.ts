//Aufgabe: Nr. 9 Form Elements
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 18.06.2017
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

    //Array für Toppings
    let toppings: string[] = ["Chocolate Sauce", "Vanilla Sauce", "White Cream", "Dark Cream"];
    let inputToppings: HTMLInputElement[] = [];

    //FieldSet in dem alle Inputs angeordnet werden
    let fieldSet: HTMLFieldSetElement;

    let order: HTMLElement;

    //Kugel Eis: 2 Euro, Toppings: 0.5 Euro, Boxes: 1 Euro, Versand: 3 Euro

    function init(_event: Event): void {
        fieldSet = document.getElementsByTagName("fieldset")[0]; //FieldSet 1
        createFlavour();
        fieldSet.addEventListener("change", handleChange); //EventListener Flavour

        fieldSet = document.getElementsByTagName("fieldset")[1]; //FieldSet 2
        createToppings();
        fieldSet.addEventListener("change", handleChange);

        fieldSet = document.getElementsByTagName("fieldset")[2]; //FieldSet 3
        createBoxes();
        fieldSet.addEventListener("change", handleChange); //EventListener Boxes

        fieldSet = document.getElementsByTagName("fieldset")[4]; //Fieldset 5
        createDelivery();
        fieldSet.addEventListener("change", handleChange); //EventListener Delivery

        fieldSet = document.getElementsByTagName("fieldset")[5]; //Fieldset 6
        fieldSet.addEventListener("change", handleChange);

        order = document.getElementById("send"); //Send Button
        order.addEventListener("click", clickButton);

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
        label.innerHTML = _flavours;
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
        label.innerHTML = _boxes;
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
        label.innerHTML = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes2";
        input.value = "boxes";
        input.id = "radiobutton1";
        fieldSet.appendChild(label);
        inputDelivery.push(input);
    }

    function createToppings(): void {
        for (let i: number = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputToppings(toppings[i]);
        }
    }

    function createInputToppings(_toppings: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerHTML = _toppings;
        label.appendChild(input);
        input.type = "checkbox";
        input.name = "Toppings";
        input.value = "toppings";
        input.id = "Checkbox";
        fieldSet.appendChild(label);
        inputToppings.push(input);
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
        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                sum += 0.5;
                fieldSet.innerHTML += toppings[i] + " 0.5€" + "\n";
            }
        }

        console.log(sum); //gib das Ergenbis auf der Konsole aus

    }

    function clickButton(): void { //überprüft, ob alles ausgewählt bzw. richtig angegeben wurde
        let validate: string[] = ["Something wrong: \n"];
        let a: number = 0;
        let b: number = 0;
        let c: number = 0;

        //Wurde eine Sorte gewählt?
        for (let i: number = 0; i < inputFlavour.length; i++) {
            if (parseInt(inputFlavour[i].value) > 0)
                a += 1;
        }
        
        if (a == 0) {
            validate.push("Which Flavour?\n");
        }

        //Wurde eine Box ausgewählt?
        for (let i: number = 0; i < inputBoxes.length; i++) {
            if (inputBoxes[i].checked)
                b += 1;
        }
        
        if (b == 0) {
            validate.push("Waffle, Cup, Grab Bag, or Wonder Waffle?\n");
        }
        
        //Wurde eine Lieferoption gewählt?
        for (let i: number = 0; i < inputDelivery.length; i++) {
            if (inputDelivery[i].checked)
                c += 1;
        }
        
        if (c == 0) {
            validate.push("Express, Standard or Premium?");
        }

        //Wurde ein Nachname angegeben?
        let nachname: HTMLInputElement = <HTMLInputElement>document.getElementById("nachname");
        if (nachname.validity.valid == false) {
            nachname.style.backgroundColor = "red";
            validate.push("Name\n");
        }
        else {
            nachname.style.backgroundColor = "green";
        }

        //Wurde ein Vorname angegeben?
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("vorname");
        if (vorname.validity.valid == false) {
            vorname.style.backgroundColor = "red";
            validate.push("Firstname\n");
        }
        else {
            vorname.style.backgroundColor = "green";
        }

        //Wurde eine Straße angegeben?
        let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("straße");
        if (straße.validity.valid == false) {
            straße.style.backgroundColor = "red";
            validate.push("Street\n");
        }
        else {
            straße.style.backgroundColor = "green";
        }

        //Wurde eine Postleitzahl angegeben?
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("postleitzahl");
        if (postleitzahl.validity.valid == false) {
            postleitzahl.style.backgroundColor = "red";
            validate.push("Post Code\n");
        }
        else {
            postleitzahl.style.backgroundColor = "green";
        }

        //Wurde eine Stadt angegeben?
        let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("stadt");
        if (stadt.validity.valid == false) {
            stadt.style.backgroundColor = "red";
            validate.push("City\n");
        }
        else {
            stadt.style.backgroundColor = "green";
        }

        //Wurde eine Email angegeben?
        let mail: HTMLInputElement = <HTMLInputElement>document.getElementById("mail");
        if (mail.validity.valid == false) {
            mail.style.backgroundColor = "red";
            validate.push("Email\n");
        }
        else {
            mail.style.backgroundColor = "green";
        }

        if (validate.length > 1) {
            for (let i: number = 0; i < validate.length; i++)
            validate.push;
            alert(validate.join(""));
        }
        else {
            alert("Dein Eis ist unterwegs!");
        }

    }
}