import {Board, Dice} from "./game.ts";

function readNumbers(input: string): number[]{
    const parts = input.split(",");
    const numbers: number[] = [];
    for(const part of parts){
        const number = Number(part.trim());
        if(!Number.isInteger(number)) return [];
        numbers.push(number);
    }
    return numbers
}

function main(){
    const board = new Board();
    const dice1 = new Dice();
    const dice2 = new Dice();

    let rolls = 0;

    console.log("Herzlich wilokommen bei Knobelscheit!");
    console.log("Gib Zahlen mit Komma ein, zum Beispiel: 3,4")
    console.log("");

    while(!board.isFinished()){
        let anyMovePossible = false;
        for(let sum = 2; sum <= 12; sum++){
            if(board.hasMoveFor(sum)){
                anyMovePossible = true;
                break;
            }
        }
        if(!anyMovePossible){
            console.log("----------------------------------");
            console.log("Board: " + board.show());
            console.log("Es gibt keine Züge mehr möglich! Das Spiel ist vorbei. Du hast verloren");
            return;
        }

        const roll1 = dice1.roll();
        const roll2 = dice2.roll();
        const diceSum = roll1 + roll2;
        rolls++;

        console.log("---------------------------------");
        console.log("Board:" + board.show());

        console.log("Wurf: " + roll1 + " + " + roll2 + " = " + diceSum);

        if(!board.hasMoveFor(diceSum)){
            console.log("Für diese Summe hat es keinen möglichen Zug.");
            console.log("Es wird neu gewürfelt.");
            continue;
        }

        let validMove = false;
        while(!validMove){
            const input = prompt("Welche Zahl/en möchtest du umklappen?");
            if(input === null){
                console.log("Spiel beendet.");
                return;
            }
            const numbers = readNumbers(input);
            if(board.flipNumbers(numbers, diceSum)){
                console.log("Gültiger Zug!");
                validMove = true;
            } else {
                console.log("Ungültiger Zug, versuche es nochmal.")

            }
        }
    }
    console.log("---------------------------------");
    console.log("Fertig!");

    console.log("Du hast " + rolls + " Würfe gebraucht.");

}

main();