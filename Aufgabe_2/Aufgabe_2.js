//Aufgabe: Nr. 2
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 02.04.2017
//In Zusammenarbeit mit Bersu Inanir und Elyssia Dürr
//    let table: HTMLTableElement = document.createElement("table");
//    let row: HTMLTableRowElement = document.createElement("tr");
//    let column: HTMLTableCellElement = document.createElement("td");
//    
//    table.appendChild(row);
//    row.appendChild(column);
//    
//    document.body.appendChild(table);
//};
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
//# sourceMappingURL=Aufgabe_2.js.map