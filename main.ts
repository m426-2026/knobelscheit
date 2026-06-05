import { Dice } from './dice.ts';
import { GameBoard } from './gameboard.ts';


function displayBoard(state: boolean[]): void {
    console.log('Current Board State:');

    const display = state.map((flipped, index) => {
        return flipped ? `[${index + 1}]` : ` ${index + 1} `;
    }).join(' ');

    console.log(display);

    const unflipped = [];
    for (let i = 0; i < 9; i++) {
        if (!state[i]) {
            unflipped.push(i + 1);
        }
    }
    console.log('Unflipped Numbers:', unflipped);
}

async function readline(): Promise<string> {
    const buffer = new Uint8Array(1024);
    const n = await Deno.stdin.read(buffer);
    if (n === null) {
        return '';
    }
    return new TextDecoder().decode(buffer.subarray(0, n)).trim();
}


function getValidCombinations(
    target: number,
    unflipped: number[],
): number[][] {
    let combinations: number[][] = [];

    for (let mask = 1; mask < Math.pow(2, unflipped.length); mask++) {
        const combo: number[] = [];
        let sum = 0;

        for (let i = 0; i < unflipped.length; i++) {
            if (mask & (1 << i)) {
                combo.push(unflipped[i]);
                sum += unflipped[i];
            }
        }
        if (sum === target) {
            combinations.push(combo.sort((a, b) => a - b));
        }
    }

    return combinations;
}

async function playGame(): Promise<void> {
    const dice = new Dice();
    const board = new GameBoard();
    let rollCount = 0;

    console.log('Welcome to Knobelscheidt!');
    
    while (!board.isGameWon()) {
        displayBoard(board.getState());

        rollCount++;
        const [die1, die2] = dice.rollTwo();
        const rollSum = die1 + die2;
        console.log(`Roll ${rollCount}: You rolled a ${die1} and a ${die2} (Total: ${rollSum})`);

        const unflipped = board.getUnflippedNumbers();

        const validCombinations = getValidCombinations(rollSum, unflipped);

        if (validCombinations.length === 0) {
            console.log(`No valid combinations for "${rollSum}". Turn skipped.`);
            continue;
        }

        if (validCombinations.length === 1) {
            console.log(`Only one valid combination: ${validCombinations[0].join(', ')}. Automatically flipping.`);
            board.flipNumbers(validCombinations[0]);
            continue;
        } else {
            console.log('Valid combinations:');
            validCombinations.forEach((combo, index) => {
                console.log(`${index + 1}: ${combo.join(', ')}`);
            });

            let validChoice = false;
            while (!validChoice) {
                console.log('Enter the number of the combination you want to flip:');
                const choice = await readline();

                if (choice.toLowerCase() === 's') {
                    console.log('Skipping turn.');
                    validChoice = true;
                } else {
                    const choiceIndex = parseInt(choice);
                    if (choiceIndex >= 0 && choiceIndex < validCombinations.length) {
                        board.flipNumbers(validCombinations[choiceIndex]);
                        validChoice = true;
                    } else {
                        console.log('Invalid choice. Please try again.');
                    }
                }
            }
        }
    }

    displayBoard(board.getState());
    console.log(`Congratulations! You won the game in ${rollCount} rolls!`);
}

playGame().catch(console.error);
