export class Board {
    private remaining: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    getRemaining(): number[] {
        return this.remaining;
    }

    flip(numbers: number[], target: number): boolean {
        for (const num of numbers) {
            if (!this.remaining.includes(num)) {
                return false;
            }
        }

        let sum = 0;
        for (const num of numbers) {
            sum += num;
        }

        if (sum !== target) {
            return false
        }

        this.remaining = this.remaining.filter((num) => !numbers.includes(num));
        return true;
    }

    isGameOver(): boolean {
        return this.remaining.length == 0;
    }

}