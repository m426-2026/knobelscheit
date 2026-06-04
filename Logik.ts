import { rolldice } from "./dice.ts";
import { knobelscheit } from "./knobelscheit.ts";

const Spiel = new knobelscheit();
let versuche = 0;

while(!Spiel.istgewonnen() && !Spiel.istverloren())
{
console.log("Unumgeklappte Zahlen:")
for(let i = 0; i < Spiel.unumgeklappt.length; i++)
    {
        if (Spiel.unumgeklappt[i] !== 0)
            console.log(Spiel.unumgeklappt[i])
    }

console.log("Umgeklappte Zahlen:")
for(let i = 0; i < Spiel.umgeklappt.length; i++)
    {
        console.log(Spiel.umgeklappt[i])
    }

    const roll = rolldice();
    console.log("Gewürfelte Zahl:")
    console.log(roll)

    versuche++;

    let summe = roll;
    while(summe > 0)
        {
            const Auswahl = prompt("Zahl eingeben, 0 für neu Würfeln:")
            const Zahl = parseInt(Auswahl!)

            if(Zahl > 0 && Zahl < 10 && Spiel.istfrei(Zahl))
            {
                summe -= Zahl;
               
                Spiel.umklappen(Zahl)
            }
            else
                {
                    break;
                }
        }
    }
    console.log("Spiel beendet, Anzahl versuche:")
    console.log(versuche);
    if(Spiel.istgewonnen())
        console.log("Du hast gewonnen!")
    else
        {
            console.log("Du hast verloren (1 nicht würfelbar)")
        }