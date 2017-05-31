var A9_FormElements;
(function (A9_FormElements) {
    window.addEventListener("load", init);
    //Array für alle Sorten, die in meiner Online-Eisdiele angeboten werden
    var flavours = ["Chocolate", "Vanilla", "Strawberry", "Raspberry", "Bubblegum", "Dark Chocolate", "White Chocolate", "Yogurt", "Kiddy Chocolate", "Banana", "Blueberry"];
    //Array für alle Behälter, in denen das Eis bestellt werden kann
    var boxes = ["Waffle", "Cup", "Grab Bag", "Wonder Waffle"];
    var delivery = ["Express", "Standard", "Premium"];
    //Preis für Eissorte
    var flavourPrice = 1;
    //Preis für Extras
    var toppingPrice = 0.5;
    //boxes are free
    //FieldSet in dem alle Inputs angeordnet werden
    var fieldSet;
    //Array 
    var inputs = [];
    function init(_event) {
        fieldSet = document.getElementsByTagName("fieldset")[0]; //FieldSet 1
        createFlavour();
        fieldSet = document.getElementsByTagName("fieldset")[2]; //FieldSet 3
        createBoxes();
        fieldSet = document.getElementsByTagName("fieldset")[4]; //FieldSet 5
        createDelivery();
        fieldSet.addEventListener("change", handleChange);
    }
    function createFlavour() {
        //erstellt pro Eissorte einen Input
        for (var i = 0; i < flavours.length; i++) {
            console.log(flavours[i]);
            createInput1(flavours[i]);
        }
    }
    function createInput1(_flavours) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _flavours;
        label.appendChild(input);
        input.type = "checkbox"; //Art des Inputs
        input.name = "CheckboxFlavours"; //Name des Inputs
        input.value = "flavours";
        input.id = "checkbox1";
        fieldSet.appendChild(label);
        inputs.push(input);
    }
    function createBoxes() {
        //erstellt pro Box einen Input
        for (var i = 0; i < boxes.length; i++) {
            console.log(boxes[i]);
            createInput3(boxes[i]);
        }
    }
    function createInput3(_boxes) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes";
        input.value = "boxes";
        input.id = "radiobutton1";
        fieldSet.appendChild(label);
        inputs.push(input);
    }
    function createDelivery() {
        //erstellt pro Lieferungsmöglichkeit einen Input
        for (var i = 0; i < delivery.length; i++) {
            console.log(delivery[i]);
            createInput5(delivery[i]);
        }
    }
    function createInput5(_delivery) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _delivery;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioDelivery";
        input.value = "delivery";
        input.id = "radiobutton2";
        fieldSet.appendChild(label);
        inputs.push(input);
    }
    function handleChange(_event) {
        var sum = 0;
        for (var i = 0; i < inputs.length; i++) {
            sum += parseInt(inputs[i].value);
        }
        console.log(sum); //gib das Ergenbis auf der Konsole aus
    }
})(A9_FormElements || (A9_FormElements = {}));
//# sourceMappingURL=aufgabe_9.js.map