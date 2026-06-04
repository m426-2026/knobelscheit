import { Knobelscheit } from "./knobelscheit.ts";

const game = new Knobelscheit();

while(!game.isGameStillRunning()) {
    game.rollDiceRound();
    game.printGameStats();

    const input = prompt("what number do you wanna remove?")
    const number = Number(input)
    if (game.numberStillIn(number)) {
        game.removeNumber(number)
    } else {
        console.log("number not availible anymore")
    }
}

console.log("rounds passed: " + game.rounds)