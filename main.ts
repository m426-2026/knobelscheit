import { privateEncrypt } from "node:crypto";
import { Knobelscheit } from "./knobelscheit.ts";
import { Wuerfel } from "./wuerfel.ts";

const wuerfel1 = new Wuerfel();
const wuerfel2 = new Wuerfel();
const spiel = new Knobelscheit();

console.log("=== Knobelscheit ===")

while (!spiel.istGewonnen()) {
    console.log("Offene Zahlen: " + spiel.offeneZahlen.join(", "))

    wuerfel1.werfen();
    wuerfel2.werfen();
    const ergebnis1 = wuerfel1.ergebnis
    const ergebnis2 = wuerfel2.ergebnis
    const summe = wuerfel1.ergebnis + wuerfel2.ergebnis;

    console.log("Gewürfelt: " + ergebnis1 + " + " + ergebnis2 + " = " + summe);

    if (!spiel.zugMoeglich(summe)) {
        console.log("Kein Zug mehr möglich. Du hast verloren!");
        break;
    }

    let zugErfolg = false;
    while (!zugErfolg) {
        const eingabe = prompt("Welche Zahlen umdrehen? (z.B. 3,4): ");
        if (eingabe === null) {
            break;
        }

        const zahlen = eingabe.split(",").map((t) => parseInt(t));

        if  (spiel.istGueltigerZug(zahlen, summe)) {
            spiel.umdrehen(zahlen);
            zugErfolg = true;
        } else {
            console.log("Ungültiger Zug! Versuch es nochmal.");
        }
    }
    
    if (spiel.istGewonnen()) {
        console.log("Glückwunsch! Du hast gewonnen!")
    }
} 