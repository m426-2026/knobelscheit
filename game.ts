import { Dice } from "./dice.ts";
import { stringToArray, validateInput, calculateSumInput, calculateSumDice, inputEqualsSumDice, SliceArray } from "./knobelscheit.ts";

function game() {
    let defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const dice = new Dice();
    let count: number = 0;
    let dices: number[] = rollDices(dice)

    console.log("Rules: \n - Die Summe von dem Input muss genau gleich gross sein wie die Summe der Zahlen " +
        "\n - Wenn keine Kombination mögilich ist drücke Enter \n")

    while(defaultArray.length !== 0) {


        console.log("Verfügbare Zahlen: " + defaultArray.toString());
        console.log("Du hast die Zahlen " + dices[0] + " " + dices[1] + " gewürfelt");
        console.log("Summe: " + calculateSumDice(dices[0], dices[1]) + "\n")

        let input = prompt("Was willst du entfernen?: (Schreibe: Zahl1 Zahl2 Zahl3...):");

        if(input !== ""){
            try {
                validateInput(input);

                const inputAsArray = stringToArray(input);
                const sumInput = calculateSumInput(inputAsArray);
                try {
                    inputEqualsSumDice(sumInput, calculateSumDice(dices[0], dices[1]))
                    defaultArray = SliceArray(defaultArray, inputAsArray);

                    count++;
                    dices = rollDices(dice)
                } catch (error) {
                    console.error(error.message);
                }
            } catch(error) {
                console.error(error.message);
            }
        } else {
            count++;
            dices = rollDices(dice)
        }
        console.log("Versuche: " + count.toString());
    }

    console.log("Du hast " + count + " versuche gebraucht!")


}

function rollDices(dice): number[] {
    let dice1 = dice.roll();
    let dice2 = dice.roll();
    return [dice1, dice2]
}


game();