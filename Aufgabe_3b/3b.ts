namespace Nr3b_MauMau {
window.onload = function(): void {
    let cards: string [] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"]; 
    let c = cards.length;
    let handCards: string [] = [];
    let discard: string [] = [];
    let h = handCards.length;

    document.getElementById("deckCards").textContent = "Kartenstapel" + " " + c;
    document.getElementById("discard").textContent = "Ablagestapel";
    
    
    document.getElementById("deckCards").addEventListener("click", function(): void {
        if (c > 0 && h < 5) {
            let random: number = Math.floor((Math.random() * c) + 0);
            handCards.push(cards[random]);
            let div: HTMLDivElement = document.createElement("div");
            document.getElementById("handCards").appendChild(div);
             
        }
    });  

};
}