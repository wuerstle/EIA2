/*
Aufgabe: Nr. 0
Name: Lisa Würstle
Matrikel: 254072
Datum: 18.03.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


document.addEventListener ("DOMContentLoaded", function (): void {
    var answer: string = "Ich wünsche dir einen schönen Tag ";
    var yourName: string = prompt ("Möchtest du mir deinen Namen verraten?");
    document.body.innerHTML = answer + yourName + " :)";
});

