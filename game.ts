import {roll} from "./dice.ts";
import { Board } from "./board.ts";

const board = new Board();
let rounds = 0;

console.log("__Knobelscheit__")

while(!board.isGameOver()) {
    rounds++;
    console.log(`Remaining numbers: ${board.getRemaining().join()}`);

    const[d1, d2] = roll();
    const sum = d1 + d2;
    console.log(`rolled ${d1} and ${d2} (sum: ${sum})`);

    const choice = prompt("which numbers do you want to flip (ex. 3,2 or 5):");
    if (!choice) {
        console.log("No luck");
        continue;
    }

    const choices = choice.split(",").map((x) => parseInt(x.trim(), 10));

    if (board.flip(choices, sum)) {
        console.log("Successful flip");

    } else {
        console.log("Invalid! Try again");
        rounds--;
    }
}

console.log(`Good job! You flipped all the numbers in ${rounds} rolls`);