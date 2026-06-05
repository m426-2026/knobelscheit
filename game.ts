import { rollDice, sumDice } from "./dice.ts";
import { Knobelscheit } from "./knobelscheit.ts";

let gameIsRunning = true;
const knobelscheit = new Knobelscheit();
let dice1 = 0;
let dice2 = 0;
let skipRollingDice = false;

console.log("Hello, welcome to the game Knobelscheit");

while (gameIsRunning) {
  if (!skipRollingDice) {
    prompt("Please roll the dice by pressing enter");
    console.log("Rolling dice");
    dice1 = rollDice();
    dice2 = rollDice();
    console.log("Dice 1: " + dice1);
    console.log("Dice 2: " + dice2);
    console.log("Currently open: " + knobelscheit.notFlipped());

    if (knobelscheit.checkIfLost(dice1 + dice2)) {
      console.log("Sadly you don't have any way to win anymore, you lost.. :(");
      gameIsRunning = false;
      break;
    }
  }

  let numberString = prompt(
    "Enter the numbers you wish to flip (1-9), seperated by commas",
  );
  const stringArray: string[] | undefined = numberString?.split(",");

  if (stringArray === undefined) {
    console.log(
      "Error, please enter the numbers you want to flip comma seperated",
    );
  } else {
    const numberArray: number[] = stringArray.map((i) => (Number(i)));
    const worked = knobelscheit.flip(numberArray, dice1 + dice2);
    if (!worked) {
      skipRollingDice = true;
    } else {
      skipRollingDice = false;
    }
  }

  if (knobelscheit.checkWin()) {
    console.log("Congratulations you won!");
    gameIsRunning = false;
  }
}
