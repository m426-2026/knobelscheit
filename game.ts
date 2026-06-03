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
}

