import { wuerfeln } from "./wuerfeln.ts";
import { Spielbrett } from "./spielbrett.ts";

let b = new Spielbrett();
let wuerfe = 0;

while (!b.isGameOver()){
    wuerfe ++;
    let w1 = wuerfeln();
    let w2 = wuerfeln();
    let total = w1 + w2;

    console.log(`Wurf 1 ${wuerfe}: offen sind ${b.getroffene().join(", ")}`);
    console.log(`Gewürfelt: ${total}`);

    let isValid = false;
    while(!isValid) {
    let input = prompt("Zahlen eingeben (mit Leerschlag)");
    if (!input) continue;

    let chosen = input.split(" ").map(Number);
    
    isValid = b.macheZug(chosen, total);
    if (!isValid) console.log("Fehler: Summe falsch oder Zahl weg.")
    }
}
console.log("Gewonnen!");