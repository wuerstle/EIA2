//    let table: HTMLTableElement = document.createElement("table");
//    let row: HTMLTableRowElement = document.createElement("tr");
//    let column: HTMLTableCellElement = document.createElement("td");
//    
//    table.appendChild(row);
//    row.appendChild(column);
//    
//    document.body.appendChild(table);
//};
    
    
window.onload = function (): void {  
    let rice: number = 1;
    for (let i: number = 0; i < 64; i++) {
        let element: HTMLElement = document.createElement("div");
        if (i % 2 == 0) {
            element.className = "board white";
        } else {
            element.className = "board black";
        }
        
        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
     }
};   

// position absolute (entsprechend der Bildschirmkante definieren), i mal die Breite bis Zeile zuende ist, Modulo