import { rollTwo } from "./wuerfel.ts"
import { Knobelscheit } from "./knobelscheit.ts"

function anzeigeBrett(brett: Knobelscheit): void {
    console.log("Brett:" , brett.getActive().join(" "));
}

const brett = new Knobelscheit();

let wuerfe = 0;

console.log("Knobelscheit Leo & Ramon")

while (!brett.isWon()){
    anzeigeBrett(brett);

    const augensumme = rollTwo();
    wuerfe++;
    console.log(`Wurf ${wuerfe}: ${augensumme}`)

    const kombinationen = brett.findCombinations(augensumme)

    if (kombinationen.length === 0){
        console.log(`Keine Kombination möglich. Game over nach ${wuerfe} Würfe`);
        break
    }

    console.log("Kombinationen:", kombinationen.map((k) => k.join("+")).join(", "));

    const input = prompt("Zahlen eingeben (z.b 3 6):");
    console.log("------------------")
    const zahlen = input!.split(" ").map(Number);
    const summe = zahlen.reduce((a, b) => a + b, 0);

    if (summe === augensumme && brett.canFlip(zahlen)){
        brett.flip(zahlen)
    }
    else {
        console.log("Ungültige Eingabe");
    }

    if(brett.isWon()){
        console.log(`Gewonnen nach ${wuerfe} Würfen`)
    }
}