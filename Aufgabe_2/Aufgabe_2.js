window.onload = function () {
    for (var i = 0; i < 64; i++) {
        var element = document.createElement("div");
        if (i % 2 == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        document.body.appendChild(element);
    }
};
//# sourceMappingURL=Aufgabe_2.js.map