export class Knobelscheit {
    private available: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    getAvailableNumbers(): number[] {
        return [...this.available]
    }

    flip(flippedNumbers: number[]): void {
        this.available = this.available.filter(number => !flippedNumbers.includes(number))
    }

    isComplete(): boolean {
        return this.available.length === 0;
    }

    isValidFlip(chosenNumbers: number[], diceSum: number): boolean {
        const chosenSum = chosenNumbers.reduce((total, number) => total + number, 0);
        if(chosenSum != diceSum) {
            return false;
        }
        return chosenNumbers.every(number => this.available.includes(number));
    }
}

export function roll() {
    return Math.floor(Math.random() * 6) + 1;;
}

export function getCombinations(target: number, availableNumbers: number[]): number[][] {
    const results: number[][] = [];

    function backtrack(startIndex: number, currentCombination: number[], remainingNumbers: number): void {
        if (remainingNumbers === 0) {
            results.push([...currentCombination]);
            return;
        }
        for (let index = startIndex; index < availableNumbers.length; index++) {
            if (availableNumbers[index] <= remainingNumbers) {
                currentCombination.push(availableNumbers[index]);
                backtrack(index + 1, currentCombination, remainingNumbers - availableNumbers[index]);
                currentCombination.pop();
            }
        }
    }
    backtrack(0, [], target)
    return results;
}
