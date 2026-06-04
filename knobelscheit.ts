import { Dice } from "./dice.ts";

export class Knobelscheit {
    numberBlocks: number[] = [1,2,3,4,5,6,7,8,9];
    rounds: number = 0;

    dice1: number = 0;
    dice2: number = 0;

    numberStillIn(number: number): boolean {
        return this.numberBlocks.includes(number);
    }

    isGameStillRunning(): boolean {
        return this.numberBlocks.length === 0;
    }

    removeNumber(number: number): void {
        const index = this.numberBlocks.indexOf(number);
        if (index !== -1) {
            this.numberBlocks.splice(index, 1);
        }
    }

    rollDiceRound() {
        this.rounds++;

        const dice1 = new Dice();
        this.dice1 = dice1.roll();

        const dice2 = new Dice();
        this.dice2 = dice2.roll();

        return(this.dice1, this.dice2)
    }

    printGameStats() : void {
        console.log("rounds:" + this.rounds)
        console.log("remaining numbers:" + this.numberBlocks)
        console.log(`rolls:" ${this.dice1} und ${this.dice2}, Summe: ${this.dice1 + this.dice2} `)
    }



}