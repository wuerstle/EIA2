var A9_FormElements;
(function (A9_FormElements) {
    window.addEventListener("load", init);
    //Array für alle Sorten, die in meiner Online-Eisdiele angeboten werden
    var flavours = ["Chocolate", "Vanilla", "Strawberry", "Raspberry", "Bubblegum", "Dark Chocolate", "White Chocolate", "Yogurt", "Kiddy Chocolate", "Banana", "Blueberry"];
    var inputFlavour = [];
    //Array für alle Behälter, in denen das Eis bestellt werden kann
    var boxes = ["Waffle", "Cup", "Grab Bag", "Wonder Waffle"];
    var inputBoxes = [];
    //Array für Lieferoptionen
    var delivery = ["Express", "Standard", "Premium"];
    var inputDelivery = [];
    //Preis für Eissorte
    var flavourPrice = 1;
    //Preis für Extras
    var toppingPrice = 0.5;
    //boxes are free
    //FieldSet in dem alle Inputs angeordnet werden
    var fieldSet;
    function init(_event) {
        fieldSet = document.getElementsByTagName("fieldset")[0]; //FieldSet 1
        createCheckbox();
        fieldSet = document.getElementsByTagName("fieldset")[2, 4]; //FieldSet 3
        createRadio();
        fieldSet.addEventListener("change", handleChange);
    }
    function createCheckbox() {
        //erstellt pro Eissorte einen Input
        for (var i = 0; i < flavours.length; i++) {
            console.log(flavours[i]);
            createInputCheckbox(flavours[i]);
        }
    }
    function createInputCheckbox(_flavours) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _flavours;
        label.appendChild(input);
        input.type = "checkbox"; //Art des Inputs
        input.name = "CheckboxFlavours"; //Name des Inputs
        input.value = "flavours";
        input.id = "checkbox1";
        fieldSet.appendChild(label);
        inputFlavour.push(input);
    }
    function createRadio() {
        //erstellt pro Box einen Input
        for (var i = 0; i < boxes.length; i++) {
            console.log(boxes[i]);
            createInputRadio(boxes[i]);
        }
    }
    function createInputRadio(_boxes) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes";
        input.value = "boxes";
        input.id = "radiobutton1";
        fieldSet.appendChild(label);
        inputBoxes.push(input);
    }
    function handleChange(_event) {
        var sum = 0;
        for (var i = 0; i < inputFlavour.length; i++) {
            if (inputFlavour[i].checked) {
                sum += 1;
            }
        }
        console.log(); //gib das Ergenbis auf der Konsole aus
    }
})(A9_FormElements || (A9_FormElements = {}));
//# sourceMappingURL=aufgabe_9.js.map