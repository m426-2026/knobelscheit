import { Knobelscheit } from "./knobelscheit.ts";
import { Wuerfel } from "./wuerfel.ts";

function spielen() : void{
    const knobelscheit = new Knobelscheit();
    const wuerfel = new Wuerfel();

    let wuerfe = 0;

    while(!knobelscheit.istFertig() && !knobelscheit.istBlockiert()){
        zeigeStand(knobelscheit)

        const auge1 = wuerfel.wuerfeln();
        const auge2 = wuerfel.wuerfeln();
        const augensumme = auge1 + auge2
        wuerfe++;

        console.log(`Wuerfe: ${wuerfe}: ${auge1} + ${auge2} = ${augensumme}`)

        if(!knobelscheit.hatGueltigenZug(augensumme)){
            console.log(`Diese Augensumme lässt sich nicht abbilden, neuer Wurf\n`)
            continue;
        }

        klappeUm(knobelscheit, augensumme)
        console.log("")
    }

    if(knobelscheit.istFertig()){
        console.log(`Geschafft: In ${wuerfe} Würfen`)
    }else{
        console.log(`Es gibt noch offene Zahlen ${knobelscheit.offeneZahlen()}`)
    }
}

function zeigeStand(knobelscheit: Knobelscheit) : void{
    const offen = knobelscheit.offeneZahlen();
    const zeile = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((zahl) => (offen.includes(zahl) ? zahl : '_')).join(" ")
    console.log(`Stand: ${zeile}`)
}

function klappeUm(knobelscheit: Knobelscheit, augensumme: number) : void{
    while(true){
        const eingabe = prompt("Welche Zahlen umklappen?: ")
        const zahlen = leseZahlen(eingabe);

        if(knobelscheit.umklappen(zahlen, augensumme)) return;

        console.log("Umgültig: Die zahlen müssen offen sein.")
    }
}

function leseZahlen(eingabe: string | null)  : number[] {
    if(eingabe === null) return []

    return eingabe.split(' ').filter((teil) => teil.length > 0).map(Number)
}

if(import.meta.main){
    spielen()
}