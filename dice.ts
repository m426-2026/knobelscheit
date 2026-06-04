export class Dice {

    roll(): number {
        const number = Math.floor(Math.random() * 6 + 1)
        return number;
    }
}