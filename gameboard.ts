export class GameBoard {
  private flipped: boolean[] = [false, false, false, false, false, false, false, false, false];

  constructor() {
  }

  getState(): boolean[] {
    return [...this.flipped];
  }

  flipNumbers(numbers: number[]): void {
    for (const num of numbers) {
      if (num >= 1 && num <= 9) {
        this.flipped[num - 1] = !this.flipped[num - 1];
      }
    }
  }

  canFlip(numbers: number[], targetSum: number): boolean {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    if (sum !== targetSum) {
      return false;
    }

    for (const num of numbers) {
      if (num < 1 || num > 9 || this.flipped[num - 1]) {
        return false;
      }
    }
    return true;
  }

  isGameWon(): boolean {
    return this.flipped.every((f) => f === true);
  }

  getUnflippedNumbers(): number[] {
    const unflipped: number[] = [];
    for (let i = 0; i < 9; i++) {
      if (!this.flipped[i]) {
        unflipped.push(i + 1);
      }
    }
    return unflipped;
  }
}