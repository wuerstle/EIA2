var Nr3a_Schachbrett;
(function (Nr3a_Schachbrett) {
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
        var divs = document.getElementsByTagName("div");
        for (var i = 0; i < 8; i++) {
            divs[i].addEventListener("click", select);
            console.log(Math.pow(2, i).toString(16));
        }
        document.addEventListener("click", moveDiv);
    };
    var selected;
    function select(event) {
        selected = event.target;
    }
    function moveDiv(event) {
        var style = selected.style;
        style.position = "absolute";
        style.left = event.clientX.toString() + "px";
        style.top = event.clientY.toString() + "px";
    }
})(Nr3a_Schachbrett || (Nr3a_Schachbrett = {}));
//# sourceMappingURL=3a.js.map