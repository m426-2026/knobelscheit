import { roll, getCombinations, Knobelscheit } from "./knobelscheit.ts";

function displayBoard(game: Knobelscheit): void {
    const availableNumbers = game.getAvailableNumbers();
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(tileNumber => availableNumbers.includes(tileNumber) ? `[${tileNumber}]` : `x`)
    console.log(tiles.join(" "));
}

function parseInput(input: string): number[] {
    return input.trim().split(/[\s,]+/).map(Number).filter(number => !isNaN(number) && number > 0);
}

async function readLine(): Promise<string> {
    const inputBuffer = new Uint8Array(1024);
    const bytesRead = await Deno.stdin.read(inputBuffer);
    if (bytesRead === null) {
        return "";
    }
    return new TextDecoder().decode(inputBuffer.subarray(0, bytesRead)).trim();
}


async function main() {
    const game = new Knobelscheit();
    let rollCount = 0;

    console.log("======KNOBELSCHEIT======")

    while (!game.isComplete()) {
        displayBoard(game);

        const firstRoll = roll();
        const secondRoll = roll();
        const diceSum = firstRoll + secondRoll;
        rollCount++;

        console.log(`Gewürfelt: ${firstRoll} + ${secondRoll} = ${diceSum}`)

        const possibleCombinations = getCombinations(diceSum, game.getAvailableNumbers());
        if (possibleCombinations.length === 0) {
            console.log("Keine weiteren Kombinationen möglich. Spiel verloren!!!!");
            break;
        }

        let flipAccepted = false;
        while (!flipAccepted) {
            console.log("Welche Zahlen möchtest du umklappen?");
            const userInput = await readLine();
            const chosenNumbers = parseInput(userInput);

            if (chosenNumbers.length === 0) {
                console.log("Ungültige Eingabe.");
                continue;
            }

            if (game.isValidFlip(chosenNumbers, diceSum)) {
                game.flip(chosenNumbers);
                flipAccepted = true;
            } else {
                console.log(`Ungültig: ${chosenNumbers.join(", ")} ergibt nicht ${diceSum} oder enthält bereits umgeklappte zahlen`)
            }
        }
        console.log()
    }
    displayBoard(game);
    if (game.isComplete()) {
        console.log(`Gratuliere, alle Zahlen wurden in ${rollCount} Würfen umgeklappt.`)
    }
}

main();