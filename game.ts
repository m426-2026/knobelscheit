import { Dice } from "./dice.ts";
import { stringToArray, validateInput, calculateSumInput, calculateSumDice, inputEqualsSumDice, SliceArray } from "./knobelscheit.ts";

function game() {
    let defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const dice = new Dice();


    console.log(defaultArray.toString());

    let dice1 = dice.roll();
    let dice2 = dice.roll();

    console.log("Du hast die Zahlen " + dice1 + " " + dice2 + " gewürfelt");
    console.log("Sum:" + calculateSumDice(dice1, dice2) + "\n")
    console.log("Was willst du entfernen?: (Schreibe: Zahl1 Zahl2 Zahl3...")
    let inputData = process.stdin.on('data', (data) => {
        if (data.length > 0) {
            console.log("Null")
        } else {
            return data;
        }
    });

    let inputArray = stringToArray(inputData)
    const InputAsArray = validateInput(InputEvent)

    defaultArray = SliceArray(defaultArray, InputArray);

}


game();