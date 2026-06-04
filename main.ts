import { Knobelscheit, Dice } from "../knobelscheit/demo.ts";

function main() {
    const game = new Knobelscheit();
    const dice = new Dice();

    console.log("--- KNOBELSCHEIT --- \n");
    
    while (!game.getIsGameOver()) {
        game.incrementRollCount();
        console.log(`Spielfeld: [ ${game.getBoardDisplay().join(' ')} ]`);

        const [d1, d2] = dice.rollTwoDice();
        const sum = d1 + d2;
        console.log(`Wurf ${game.getRollCount()}: ${d1} + ${d2} = ${sum}`);

        let validMove = false;
while(!validMove) {
    const input = prompt("Welche klappen möchtest du schliessen? (Zahlen mit Kommas trennen)");
    if (!input) continue;

    if (input.trim().toLowerCase() === "skip") {
        console.log("Runde übersprungen\n");
        validMove = true;
    } else {
    const chosenTiles = input.split(',').map(num => parseInt(num.trim()));
    const inputSum = chosenTiles.reduce((a, b) => a + b, 0);

    if (inputSum === sum) {
        const success = game.shutTiles(chosenTiles);
    if (success) {
        console.log("Klappen erfolgreich geschlossen");
        validMove = true;
    } else { 

        console.log("Fehler: Klappen bereits geschlossen")
     }
    
    } else {
        console.log(`Falsche Summe: Deine zahlen ergeben ${inputSum}`)

    }
    }
}
    }
    console.log("\n*** Glückwunsch Du hast gewonnen! ***");
    console.log(`Du hast insgesammt ${game.getRollCount()} Würfe gebraucht`);
}





main();