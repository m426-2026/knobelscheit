import { Dice } from "./dice.ts";
import { Knobelscheit } from "./knobelscheit.ts";

const dice = new Dice();
const game = new Knobelscheit();

console.log("Start of the Game");
console.log("Flip all numbers by choosing them of your dice roll.");

while(!game.isGameOver()) {
    const firstRoll = dice.rollDice();
    const secondRoll = dice.rollDice();
    const total = dice.diceSum(firstRoll, secondRoll);

    console.log(`\nOpen numbers: ${game.getOpenNumbers().join(", ")}`);
    console.log(`Dice roll: ${firstRoll} + ${secondRoll} = ${total}`);
    const open = game.getOpenNumbers();

    const canPlay = open.some(n=> n === total || 
        open.some((a, i) => open.slice(i + 1).some(b => a + b === total)));
    
    if(!canPlay) {
        console.log("No valid moves available. Game over!");
        break;
    }

    const userInput = prompt("Enter numbers to flip (seperated by comma):");
    if(!userInput) {
        console.log("No input. Game over!");
        break;
    }

    const chosenNumbers = userInput.split(",").map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));

    if(!game.flip(chosenNumbers, total)) {
        console.log("Invalid move. Game over!");
        break;
    }

    console.log(`Flipped: ${chosenNumbers.join(", ")}`);
}

if(game.isGameOver()) {
    console.log(`\nCongratulations! You flipped all numbers. gg & wp!`);
} else {
    const remaining = game.getOpenNumbers();
    console.log(`\nGame over. Remaining open numbers:${remaining.join(", ")}`);
}