import { Knobelscheit  } from "./knobelscheit.ts";
import { rollTwoDice } from "./dice.ts";


function parseSelection(input: string) {

    const parts = input.trim().split(/[ ,]+/);
    const numbers: number[] = [];

    for (const part of parts){
        const num = Number.parseInt(part, 10);
        if (Number.isNaN(num)) {
            return null
        }
        numbers.push(num);
    }

    return numbers;
    
}

function buildBoard(remainingList: number[]){
    let listvalueString = ''

    for (let i = 0; i < 9; i++){
        if(remainingList.includes(i+1)){
            listvalueString += `${i+1},`
        }
        else{
            listvalueString += `[${i+1}],`

        }

        
    }
    return listvalueString;
}

function main() {

    console.log('Welcome to the Knobelscheit game!');

    const game = new Knobelscheit();
    let rolls = 0;
    while (!game.gameOver()) {
        console.log(`Remaining numbers: ${game.remainingNumbers().join(',')}`)
        // roll the dices
        

        rolls++;

        
        
        const {one, two, sum} = rollTwoDice(game.remainingNumbers())
        console.log(`Rolled: ${one} + ${two} = ${sum}`);
        console.log(buildBoard(game.remainingNumbers()));
        const input = prompt('Which Numbers do you want to flip:')
        if (input === null || input === '') {
            return // redo action
        }
        const parsedSelection = parseSelection(input)
        if (parsedSelection === null) {
            return; // redo action
        }
        if (!game.flip(parsedSelection, sum)){
            console.log("Invalid selection. Next roll")
        }
             
            
        
        

        
        
    }

    console.log(`Game finished after ${rolls} rolls.`)
    
}
main()