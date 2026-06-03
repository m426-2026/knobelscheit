export class Dice {

    roll(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    rollTwo(): [number, number] {
        const die1 = this.roll();
        const die2 = this.roll();
        return [die1, die2];
    }

}