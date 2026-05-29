export function rollDie(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollDice(): [number, number] {
  return [rollDie(), rollDie()];
}

export function diceSum(dice: [number, number]): number {
  return dice[0] + dice[1];
}

export class Knobelscheit {
  private flippedNumbers: number[] = [];
  getNumbers(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  getFlippedNumbers(): number[] {
    return [...this.flippedNumbers];
  }
  getOpenNumbers(): number[] {
    return this.getNumbers().filter(
      (number) => !this.flippedNumbers.includes(number)
    );
  }
  isFlipped(number: number): boolean {
    return this.flippedNumbers.includes(number);
  }

  canFlip(numbers: number[], diceSum: number): boolean {
    if (numbers.length === 0) { return false; }
    const hasInvalidNumber = numbers.some(
      (number) => number < 1 || number > 9
    );
    if (hasInvalidNumber) { return false; }
    const hasDuplicate = new Set(numbers).size !== numbers.length;
    if (hasDuplicate) { return false; }
    const hasAlreadyFlipped = numbers.some((number) => this.isFlipped(number));
    if (hasAlreadyFlipped) { return false; }
    const sum = numbers.reduce((total, number) => total + number, 0);
    return sum === diceSum;
  }

  flip(numbers: number[], diceSum: number): boolean {
    if (!this.canFlip(numbers, diceSum)) { return false; }

    this.flippedNumbers.push(...numbers);
    this.flippedNumbers.sort((a, b) => a - b);
    return true;

  }
  isFinished(): boolean {
    return this.flippedNumbers.length === 9;
  }
  toString(): string {
    return this.getNumbers()
    .map((number) => this.isFlipped(number) ? "X":number.toString())
    .join(" ");
  }
}
  export function parseInput(input: string): number[] {
    return input
    .split(" ")
    .map((value) => Number(value))
    .filter((value) => !Number.isNaN(value));
  }
  
if (import.meta.main) {
  const game = new Knobelscheit();
  let rolls = 0;
  console.log("Willkommen zum Knobelscheit!");
  while (!game.isFinished()) {
    const dice = rollDice();
    const sum = diceSum(dice);
    rolls++;

    console.log(game.toString());
    console.log(`Du hast eine ${dice[0]} und eine ${dice[1]} gewürfelt (Summe: ${sum})`);
    const input = prompt("Welche Zahlen möchtest du umklappen? (Leer lassen zum Überspringen)");
    const numbers = parseInput(input || "null");
    const success = game.flip(numbers, sum);
    if (success) {
      console.log("Gültige Auswahl! Die Zahlen wurden umgeklappt.");
    } else {
      console.log("Ungültige Auswahl! Bitte versuche es erneut.");
    }
    console.log("Spiel bendet! Du hast alle Zahlen umgeklappt in " + rolls + " Würfen.");
  }
}