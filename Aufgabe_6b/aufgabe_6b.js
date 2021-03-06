//Aufgabe: Nr. 6b
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 07.05.2017
//In Zusammenarbeit mit Bersu Inanir
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für male oder 1 für female) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    //neues Objekt vom Typ StudentData füllen und in students ablegen
    function saveData(_input) {
        var data = _input.split(", "); //split a string into an array and returns the new array
        var s = {
            registrationnr: parseInt(data[0]),
            name: data[1],
            firstname: data[2],
            age: parseInt(data[3]),
            sex: parseInt(data[4]) == 1,
            comment: data[5]
        };
        students.push(s);
        var sex = s.sex ? "female" : "male";
        //Ausgabe für gespeicherte Daten
        return "Ihre Eingabe wurde gespeichert:" + "\n" + "\n MATRIKELNUMMER: " + s.registrationnr + "\n NAME: " + s.name + "\n VORNAME: " + s.firstname + "\n ALTER: " + s.age + "\n GESCHLECHT: " + sex + "\n KOMMENTAR: " + s.comment;
    }
    //liefert gefundenen Datensatz als string zurück
    function queryData(_matrikel) {
        var i = 0;
        for (i = 0; i < students.length; i++) {
            if (_matrikel == students[i].registrationnr) {
                var sex = students[i].sex ? "female" : "male";
                //Ausgabe für einen Treffer
                return "Ihre Suche in StudiVZ ergab folgenden Treffer:" + "\n" + "\n MATRIKELNUMMER: " + students[i].registrationnr + "\n NAME: " + students[i].name + "\n VORNAME: " + students[i].firstname + "\n ALTER: " + students[i].age + "\n GESCHLECHT: " + sex + "\n KOMMENTAR: " + students[i].comment;
            }
        }
        //Ausgabe für keinen Treffer
        return "Leider konnten wir keine Daten finden. Überprüfen Sie bitte Ihre Angaben!";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe_6b.js.map