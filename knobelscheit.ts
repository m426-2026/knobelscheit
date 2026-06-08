const ALL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export class Knobelscheit {
  private readonly flipped: Set<number>;

  constructor() {
    this.flipped = new Set();
  }

  isFlipped(n: number): boolean {
    return this.flipped.has(n);
  }

  getAvailable(): number[] {
    return ALL_NUMBERS.filter((n) => !this.flipped.has(n));
  }

  getFlipped(): number[] {
    return ALL_NUMBERS.filter((n) => this.flipped.has(n));
  }

  isComplete(): boolean {
    return this.flipped.size === ALL_NUMBERS.length;
  }

  canFlip(numbers: number[], target: number): boolean {
    if (numbers.length === 0) return false;
    if (new Set(numbers).size !== numbers.length) return false;
    for (const n of numbers) {
      if (!Number.isInteger(n) || n < 1 || n > 9) return false;
      if (this.flipped.has(n)) return false;
    }
    return numbers.reduce((acc, n) => acc + n, 0) === target;
  }

  flip(numbers: number[], target: number): boolean {
    if (!this.canFlip(numbers, target)) return false;
    for (const n of numbers) this.flipped.add(n);
    return true;
  }

  getDisplay(): string {
    return ALL_NUMBERS.map((n) =>
      this.flipped.has(n) ? `[${n}]` : ` ${n} `,
    ).join(" ");
  }
}
