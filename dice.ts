export class Dice {

    rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;        
    }

    checkSumoverflow(Sum:number): boolean {
        if(Sum > 12) {
            return false;
        } else if(Sum < 2) {
            return false;
        } else {
            return true;
        }
    }

    diceSum(firstRoll:number, secondRoll:number): number {
        const sum = firstRoll + secondRoll;
        this.checkSumoverflow(sum);
        return sum;
    }
}