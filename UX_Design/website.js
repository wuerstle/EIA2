document.addEventListener('DOMContentLoaded', function () {
    /* Konditionale if-else Anweisung */
    var menuOpen = false;
    document.getElementById("hamburger_menu").addEventListener("click", function () {
        /* Umschalter für Klappmenü */
        if (menuOpen) {
            document.getElementById("normal_menu").style.display = "none";
            menuOpen = false;
        }
        else {
            document.getElementById("normal_menu").style.display = "block";
            menuOpen = true;
        }
    });
});
//# sourceMappingURL=website.js.map