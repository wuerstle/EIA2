//Aufgabe: Nr. 3b
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 09.04.2017
//Dieser Code enstand in Zusammenarbeit mit Bersu Inanir.
//Leider tat ich mir bei dieser Aufgabe sehr schwer. Daher ist der Code auch nicht vollständig. 
var Nr3b_MauMau;
(function (Nr3b_MauMau) {
    var stapel = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"];
    var hand = [];
    var ablage = [];
    window.onload = function () {
        createFeld();
    };
    function createFeld() {
        var div;
        for (var i = 0; i < 7; i++) {
            div = document.createElement("div");
            switch (i) {
                case 0:
                    div.id = "stapel";
                    div.textContent = "Stapel";
                    div.addEventListener("click", ziehen);
                    break;
                case 6:
                    div.id = "ablage";
                    break;
                default:
                    div.className = "hand";
                    div.addEventListener("click", ablegen);
            }
            document.body.appendChild(div);
        }
    }
    function ziehen() {
        if (hand.length < 5) {
            var n = Math.round(Math.random() * (stapel.length - 1));
            hand.push(stapel.splice(n, 1)[0]);
        }
        update();
    }
    function ablegen(event) {
        var div = event.target;
        var card = div.textContent;
        var index = hand.indexOf(card);
        ablage.push(hand.splice(index, 1)[0]);
        update();
    }
    function update() {
        var hands = document.getElementsByClassName("hand");
        for (var i = 0; i < hands.length; i++) {
            hands[i].textContent = hand[i];
        }
        var ablageStapel = document.getElementById("ablage");
        ablageStapel.textContent = ablage[ablage.length - 1];
    }
})(Nr3b_MauMau || (Nr3b_MauMau = {}));
;
//# sourceMappingURL=3b.js.map