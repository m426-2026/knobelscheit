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

        if(this.hasDuplicates(numbers)){ 
            return false;
        }

        if(this.sum(numbers) !== diceSum){
            return false;
        }
        if(!this.allNumbersAreOpen(numbers)){
            return false;
        }

        this.openNumbers = this.openNumbers.filter((number) => {
            return !numbers.includes(number);
        });
        return true;
    }

    isFinished(): boolean {
        return this.openNumbers.length === 0;
    }


    private sum(numbers: number[]): number{
        let total = 0;
        for(const number of numbers){
            total += number;
        }
        return total;
    }


    private hasDuplicates(numbers: number[]): boolean {
        for(let i = 0; i<numbers.length; i++){
            for(let j = i + 1; j < numbers.length ; j++){
                if(numbers[i] === numbers[j]){
                    return true;
                }
            }
        }
        return false;
    }


    private allNumbersAreOpen(numbers: number[]): boolean {
        for(const number of numbers){
            if(!this.openNumbers.includes(number)){
                return false;
            }
        }
        return true;
    }


    hasMoveFor(diceSum: number): boolean{
        return this.canMakeSum(diceSum, 0);
    }


    show(): string{
        let result = "";
        for(let number = 1; number <= 9; number++){
            if(this.openNumbers.includes(number)){
                result += number + " ";
            } else {
                result += "[" + number + "] ";
            }
        }
        return result.trim();
    
    }


    private canMakeSum(targetSum: number, startIndex: number):boolean{
        if(targetSum === 0){
            return true;
        }
        if(targetSum < 0){
            return false;
        }

        for(let i = startIndex; i < this.openNumbers.length; i++){
            const number = this.openNumbers[i];
            if(this.canMakeSum(targetSum - number, i + 1)){
                return true;
            }
        }
        return false;
    }
}