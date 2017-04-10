//Aufgabe: Nr. 3a
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 10.04.2017
//Verbesserter Code
var Nr3a_Schachbrett;
(function (Nr3a_Schachbrett) {
    var sum = 0;
    var div;
    window.onload = function () {
        var rice = 1;
        var row = 0;
        for (var i = 0; i < 64; i++) {
            var element = document.createElement("div"); //Create Divs
            if (((i + row) % 2) == 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
            if (((i + 1) % 8) == 0) {
                row++;
            }
            element.innerText = "" + rice;
            rice *= 2;
            document.body.appendChild(element);
            div = document.createElement("div");
            div.id = "move";
            document.addEventListener("mousemove", updateBox);
            document.body.appendChild(div);
        }
    };
    function selectDiv(event) {
        var clickedDiv = event.target;
        if (clickedDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }
    function updateBox(event) {
        div.style.top = event.clientY + 10 + "px";
        div.style.left = event.clientX + 10 + "px";
        div.textContent = "Summe zur Basis 10 = " + sum + " Summe zur Basis 16 = " + sum.toString(16);
    }
})(Nr3a_Schachbrett || (Nr3a_Schachbrett = {}));
//# sourceMappingURL=3a.js.map