export class Dice {
    roll(): number{
        return Math.floor(Math.random() * 6) + 1;
    }
}

export class Board {
    private openNumbers: number[];

    constructor() {
        this.openNumbers = [1,2,3,4,5,6,7,8,9];
    }

    getOpenNumbers(): number[] {
        return this.openNumbers;
    }

    flipNumbers(numbers: number[], diceSum: number): boolean {
        if(numbers.length === 0){
            return false;
        }
        if(this.sum(numbers) !== diceSum){
            return false;
        }

        this.openNumbers = this.openNumbers.filter((number) => {
            return !numbers.includes(number);
        });
        return true;
    }

    private sum(numbers: number[]): number{
        let total = 0;
        for(const number of numbers){
            total += number;
        }
        return total;
    }
}

