export class Knobelscheit {
    private flipped: boolean[];

    constructor() {
        this.flipped = new Array(9).fill(false);
    }

    isFlipped(num: number): boolean {
        return this.flipped[num - 1];
    }

    getOpenNumbers(): number[] {
        return this.flipped.map((f, i) => (f ? 0 : i + 1)).filter((n) => n !== 0);
    }

    getFlippedNumbers(): number[] {
        return this.flipped.map((f, i) => (f ? i + 1 : 0)).filter((n) => n !== 0);
    }

    isMoveValid(numbers: number[]): boolean {
        if(numbers.length === 0) {
            return false;

        }
        const uniqueNumber = new Set(numbers);
        if(uniqueNumber.size !== numbers.length) {
            return false;
        }
        for(const num of numbers) {
            this.flipped[num - 1] = true;
        }
        return true;
    }

    flip(numbers: number[], targetSum: number): boolean {
        if(!this.isMoveValid(numbers)) {
            return false;
        }
        const sum = numbers.reduce((a, b) => a + b, 0);
        if(sum !== targetSum) {
            return false;
        }
        for(const num of numbers) {
            this.flipped[num - 1] = true;
        }
        return true;
    }

    isGameOver(): boolean {
        return this.flipped.every((f) => f);
    }

    
}