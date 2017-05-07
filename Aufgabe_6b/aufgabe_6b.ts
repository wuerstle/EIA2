//Aufgabe: Nr. 6b
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 07.05.2017
//In Zusammenarbeit mit Bersu Inanir

namespace StudiVZ {
    interface StudentData {
        registrationnr: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
    }
    let students: StudentData[] = [];
    let stop: boolean = false;

    while (!stop) {
        let action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                let input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                let matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    //neues Objekt vom Typ StudentData füllen und in students ablegen
    function saveData(_input: string): string {
        let data: string[] = _input.split(", ");
        let s: StudentData = {
            registrationnr: parseInt(data[0]),
            name: data[1],
            firstname: data[2],
            age: parseInt(data[3]),
            sex: parseInt(data[4]) == 1,
            comment: data[5]
        };
        students.push(s);
        let sex: string = s.sex ? "female" : "male";

        //Ausgabe für gespeicherte Daten
        return "Ihre Eingabe wurde gespeichert:" + "\n" + "\n MATRIKELNUMMER: " + s.registrationnr + "\n NAME: " + s.name + "\n VORNAME: " + s.firstname + "\n ALTER: " + s.age + "\n GESCHLECHT: " + sex + "\n KOMMENTAR: " + s.comment;
    }

    //liefert gefundenen Datensatz als string zurück
    function queryData(_matrikel: number): string {
        let i: number = 0;
        for (i = 0; i < students.length; i++) { //durchsucht gespeicherten Daten
            if (_matrikel == students[i].registrationnr) { //eingegebene Matrikelnummer stimmt mit gespeicherten überein
                let sex: string = students[i].sex ? "female" : "male";
                //Ausgabe für einen Treffer
                return "Ihre Suche in StudiVZ ergab folgenden Treffer:" + "\n" + "\n MATRIKELNUMMER: " + students[i].registrationnr + "\n NAME: " + students[i].name + "\n VORNAME: " + students[i].firstname + "\n ALTER: " + students[i].age + "\n GESCHLECHT: " + sex + "\n KOMMENTAR: " + students[i].comment;
            }
        }
        //Ausgabe für keinen Treffer
        return "Leider konnten wir keine Daten finden. Überprüfen Sie bitte Ihre Angaben!";
    }
}
