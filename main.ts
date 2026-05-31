import { StringifyOptions } from "node:querystring";
import { diceSum, rollDice, } from "./dice.ts";
import { Knobelscheit } from "./knobelscheit.ts";
import { isContext } from "node:vm";

function brettAnzeigen(offene: number[]): void {
    const anzeige = Array.from({ length: 9}, (_, i) => {
        const n = i + 1;
        return offene.includes(n) ? String(n) : "_";
    });
    console.log(`\nBrett: [ ${anzeige.join("  ")}]`);
}

function eingabeParsen(text: string): number[] {
    return text
    .trim()
    .split(/[\s,]+/)
    .map(Number)
    .filter((n) => n >= 1 && n <= 9);
}

const brett = new Knobelscheit()
let wurfAnzahl = 0;

console.log("===KNOBELSCHEIT===");
console.log("Alle Zahlen von 1-9 umklappen!\n");

while(!brett.isComplete()) {
    brettAnzeigen(brett.getUpTiles());

    const wuerfel = rollDice();
    const summe = diceSum(wuerfel);
    wurfAnzahl++

    console.log(`\nWurf #${wurfAnzahl}: [ ${wuerfel[0]}] + [ ${wuerfel[1]}] = ${summe}`)

    if (!brett.hasValidMoves(summe)) {
        console.log("Kein gültiger Zug möglich. Spiel beendet!");
        break;
    }

    const moegliche = brett
    .getCombinations(summe)
    .map((k)=> `[${k.join("+")}]`)
    .join(", ")
console.log(`Mögliche Kombinantionen: ${moegliche}`);

let gueltig = false;
while (!gueltig) {
    const eingabe = prompt("Welche Zahlen umklappen?");
    if (!eingabe) continue;

    const auswahl = eingabeParsen(eingabe);
    const auswahlSumme = auswahl.reduce((a, b) => a + b, 0);

    if (auswahlSumme !== summe) {
        console.log(`Summe ${auswahlSumme} passt nicht zu ${summe}. Nochmal!`);
        continue;
    }
    if (!brett.flip(auswahl))   {
        console.log("Eine oder mehrere Kacheln sind bereits umgeklappt!");
        continue;
    }
    gueltig = true;

    }
}

brettAnzeigen(brett.getUpTiles());

if (brett.isComplete()) {
    console.log(`\nGewonnen! Du hast ${wurfAnzahl} mal geworfenl.`);
} else {
    const umgeklappt = 9 - brett.getUpTiles().length;
    console.log(`\nSpiel vorbei. ${umgeklappt} / 9 Kacheln umgeklappt nach ${wurfAnzahl} Würfen.`,);
}