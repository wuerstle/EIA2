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
    }
};
//# sourceMappingURL=3a.js.map