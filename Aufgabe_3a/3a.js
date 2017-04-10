//Aufgabe: Nr. 3a
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 10.04.2017
//Verbesserter Code
var sum = 0;
var div;
document.addEventListener("DOMContentLoaded", function () {
    var rice = 1;
    var line = 0;
    for (var n = 0; n < 64; n++) {
        var element = document.createElement("div");
        if (n < 8) {
            element.addEventListener("click", selectDiv);
        }
        if (((n + line) % 2) == 0) {
            element.className = "board black";
        }
        else {
            element.className = "board white";
        }
        if (((n + 1) % 8) == 0) {
            line++;
        }
        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
    div = document.createElement("div");
    div.id = "move";
    document.addEventListener("mousemove", updateBox);
    document.body.appendChild(div);
});
function selectDiv(event) {
    var clickedDiv = event.target;
    if (clickedDiv.classList.toggle("selected")) {
        sum += parseInt(clickedDiv.textContent);
    }
    else {
        sum -= parseInt(clickedDiv.textContent);
    }
    updateSum();
}
function updateSum() {
    var selectedDivs = document.getElementsByClassName("selected");
    sum = 0;
    for (var i = 0; i < selectedDivs.length; i++) {
        sum += parseInt(selectedDivs[i].textContent);
    }
}
function updateBox(event) {
    div.style.top = event.clientY + 10 + "px";
    div.style.left = event.clientX + 10 + "px";
    div.textContent = "Summe zur Basis 10 = " + sum + " Summe zur Basis 16 = " + sum.toString(16);
}
//# sourceMappingURL=3a.js.map