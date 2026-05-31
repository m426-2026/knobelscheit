export class Dice{
    roll(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
}


export class DicePair{
    constructor(
        private readonly firstDice : Dice = new Dice(),
        private readonly secondDice : Dice = new Dice()
    ) {}

    roll(): [number, number] {
        return [this.firstDice.roll(), this.secondDice.roll()]
    }
}