import {calculateDice, createBoard, flipNumbers, validateInput, validateInputBoard, flip, checkFinished} from "./demo.ts";

const board = createBoard();
const flipedNumbers = flipNumbers();
let würfe = 0;

console.log("Knobelscheidt");

while(!checkFinished(board,flipedNumbers)){
    würfe++;
    const eyeNumber = calculateDice();
    console.log("Numbers: " + board);
    console.log("Fliped Numbers: " + flipedNumbers);
    console.log("EyeNumber: " + eyeNumber + " | 6Anzahl Würfe: " + würfe);
    const input = prompt("gib 1 oder 2 Zahlen ein(z.B. 1 2)")??"";
    const zahlen = input.split(" ").map(Number);

    if(validateInput(eyeNumber, zahlen) && validateInputBoard(board, zahlen)){
        flip(zahlen, board, flipedNumbers);
    }
    else
    {
        console.log("ungültige Eingabe");
        continue;
    }

    if (checkFinished(board, flipedNumbers))
    {
        console.log("geschafft, nach " + würfe + " würfen")
    }
}