//Aufgabe: Nr. 9 Form Elements
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 18.06.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//mit Hilfe von Saschas Code aus dem Tutorium
var A10_ClientServer;
(function (A10_ClientServer) {
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
    //Array für Toppings
    var toppings = ["Chocolate Sauce", "Vanilla Sauce", "White Cream", "Dark Cream"];
    var inputToppings = [];
    //FieldSet in dem alle Inputs angeordnet werden
    var fieldSet;
    var order;
    //Kugel Eis: 2 Euro, Toppings: 0.5 Euro, Boxes: 1 Euro, Versand: 3 Euro
    function init(_event) {
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
    function createFlavour() {
        //erstellt pro Eissorte einen Input
        for (var i = 0; i < flavours.length; i++) {
            console.log(flavours[i]);
            createInputFlavour(flavours[i]);
        }
    }
    function createInputFlavour(_flavours) {
        var label = document.createElement("label");
        var input = document.createElement("input");
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
    function createBoxes() {
        //erstellt pro Box einen Input
        for (var i = 0; i < boxes.length; i++) {
            console.log(boxes[i]);
            createInputBoxes(boxes[i]);
        }
    }
    function createInputBoxes(_boxes) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerHTML = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes";
        input.value = "boxes";
        input.id = "radiobutton1";
        input.required = true;
        fieldSet.appendChild(label);
        inputBoxes.push(input);
    }
    function createDelivery() {
        for (var i = 0; i < delivery.length; i++) {
            console.log(delivery[i]);
            createInputDelivery(delivery[i]);
        }
    }
    function createInputDelivery(_boxes) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerHTML = _boxes;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "RadioBoxes2";
        input.value = "boxes";
        input.id = "radiobutton1";
        input.required = true;
        fieldSet.appendChild(label);
        inputDelivery.push(input);
    }
    function createToppings() {
        for (var i = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputToppings(toppings[i]);
        }
    }
    function createInputToppings(_toppings) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerHTML = _toppings;
        label.appendChild(input);
        input.type = "checkbox";
        input.name = "Toppings";
        input.value = "toppings";
        input.id = "Checkbox";
        fieldSet.appendChild(label);
        inputToppings.push(input);
    }
    function handleChange(_event) {
        var sum = 0;
        fieldSet.innerHTML = "";
        for (var i = 0; i < inputFlavour.length; i++) {
            sum += parseInt(inputFlavour[i].value);
            if (parseInt(inputFlavour[i].value) > 0) {
                fieldSet.innerHTML += flavours[i] + " " + (parseInt(inputFlavour[i].value) * 2) + "€" + "\n";
            }
        }
        for (var i = 0; i < inputBoxes.length; i++) {
            if (inputBoxes[i].checked) {
                sum += 1;
                fieldSet.innerHTML += boxes[i] + " 1€" + "\n";
            }
        }
        for (var i = 0; i < inputDelivery.length; i++) {
            if (inputDelivery[i].checked) {
                sum += 3;
                fieldSet.innerHTML += delivery[i] + " 3€" + "\n";
            }
        }
        for (var i = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                sum += 0.5;
                fieldSet.innerHTML += toppings[i] + " 0.5€" + "\n";
            }
        }
        console.log(sum); //gib das Ergenbis auf der Konsole aus
    }
    function clickButton() {
        var validate = ["Something wrong: \n"];
        var a = 0;
        var b = 0;
        var c = 0;
        //Wurde eine Sorte gewählt?
        for (var i = 0; i < inputFlavour.length; i++) {
            if (parseInt(inputFlavour[i].value) > 0)
                a += 1;
        }
        if (a == 0) {
            validate.push("Which Flavour?\n");
        }
        //Wurde eine Box ausgewählt?
        for (var i = 0; i < inputBoxes.length; i++) {
            if (inputBoxes[i].checked)
                b += 1;
        }
        if (b == 0) {
            validate.push("Waffle, Cup, Grab Bag, or Wonder Waffle?\n");
        }
        //Wurde eine Lieferoption gewählt?
        for (var i = 0; i < inputDelivery.length; i++) {
            if (inputDelivery[i].checked)
                c += 1;
        }
        if (c == 0) {
            validate.push("Express, Standard or Premium?");
        }
        //Wurde ein Nachname angegeben?
        var nachname = document.getElementById("nachname");
        if (nachname.validity.valid == false) {
            nachname.style.backgroundColor = "red";
            validate.push("Name\n");
        }
        else {
            nachname.style.backgroundColor = "green";
        }
        //Wurde ein Vorname angegeben?
        var vorname = document.getElementById("vorname");
        if (vorname.validity.valid == false) {
            vorname.style.backgroundColor = "red";
            validate.push("Firstname\n");
        }
        else {
            vorname.style.backgroundColor = "green";
        }
        //Wurde eine Straße angegeben?
        var straße = document.getElementById("straße");
        if (straße.validity.valid == false) {
            straße.style.backgroundColor = "red";
            validate.push("Street\n");
        }
        else {
            straße.style.backgroundColor = "green";
        }
        //Wurde eine Postleitzahl angegeben?
        var postleitzahl = document.getElementById("postleitzahl");
        if (postleitzahl.validity.valid == false) {
            postleitzahl.style.backgroundColor = "red";
            validate.push("Post Code\n");
        }
        else {
            postleitzahl.style.backgroundColor = "green";
        }
        //Wurde eine Stadt angegeben?
        var stadt = document.getElementById("stadt");
        if (stadt.validity.valid == false) {
            stadt.style.backgroundColor = "red";
            validate.push("City\n");
        }
        else {
            stadt.style.backgroundColor = "green";
        }
        //Wurde eine Email angegeben?
        var mail = document.getElementById("mail");
        if (mail.validity.valid == false) {
            mail.style.backgroundColor = "red";
            validate.push("Email\n");
        }
        else {
            mail.style.backgroundColor = "green";
        }
        if (validate.length > 1) {
            for (var i = 0; i < validate.length; i++)
                validate.push;
            alert(validate.join(""));
        }
        else {
            alert("Dein Eis ist unterwegs!");
        }
    }
})(A10_ClientServer || (A10_ClientServer = {}));
//# sourceMappingURL=aufgabe_10.js.map