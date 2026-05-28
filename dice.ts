export class Dice {
  value: number = 0

  roll(): number {
    this.value = Math.floor(Math.random() * 6) + 1;
    return this.value;
  }

  static sum(dice1: Dice, dice2: Dice): number {
    return dice1.value + dice2.value
  }
}