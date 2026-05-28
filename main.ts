import {Puzzle} from "./puzzle.ts";
import {Dice} from "./dice.ts";

const puzzle = new Puzzle()
const dice1 = new Dice()
const dice2 = new Dice()
let numberOfRolls = 0

while (!puzzle.completed()) {
  console.log(`Rolls:       ${numberOfRolls}`);
  console.log("----------------------");
  console.log(`Flipped:     ${puzzle.flippedNumbersString()}`);
  console.log(`Not Flipped: ${puzzle.notFlippedNumbersString()}`);
  prompt("Press [ENTER] to roll the Dices...");
  dice1.roll();
  dice2.roll();

  console.log(`You rolled a ${dice1.value} and a ${dice2.value}.`);
  const userInput = prompt("Which Numbers do you want to Flip? (Separated by ',')\n");
  const userStringChoice = userInput?.split(",") || [];
  const userChoice = userStringChoice.map((str) => parseInt(str)) ;
  if(puzzle.validateUserChoice(userChoice, Dice.sum(dice1, dice2))) {
    userChoice.forEach((num) => puzzle.flip(num));
  }
  else {
    console.log("Wrong input. Try again next roll");
  }
  console.log()

  numberOfRolls++
}
console.log("---------------------------------------------------")
console.log(`You completed the game with ${numberOfRolls} rolls.`)
console.log("---------------------------------------------------")
