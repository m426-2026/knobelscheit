export function formattedAddition(a: number, b: number): string {
  return `${a} + ${b} = ${a + b}`;
}

export class Dice {
  public rollTwoDice(): [number, number] {
    return [
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6)
    ];
  }
}

export class Knobelscheit {
  public board: boolean[] = Array(9).fill(true);
  public rollCount = 0;

  public getBoardDisplay(): string[] {
    return this.board.map((open, i) => open ? String(i + 1) : "_");
  }

  public getRollCount(): number {
    return this.rollCount;
  }

  public getIsGameOver(): boolean {
    return this.board.every(open => !open);
  }

  public incrementRollCount(): void {
    this.rollCount++;
  }

}


console.log(formattedAddition(3, 2));
