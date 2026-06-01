const ALL_NUMBERS =  [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

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
}




