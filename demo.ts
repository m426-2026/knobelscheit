export function formattedAddition(a: number, b: number): string {
  return `${a} + ${b} = ${a + b}`;
}

export class Dice {
  public rollTwoDice(): [number, number] {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    return [d1, d2];
    
    
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
  public shutTiles(tiles: number[]): boolean {
    for (const tile of tiles) {
      const index = tile - 1;
      if (index < 0 || index >= this.board.length || !this.board[index]) {
        return false;
      }
    }
    for (const tile of tiles) {
      this.board[tile - 1] = false;
    }
    return true;
  }
}


console.log(formattedAddition(3, 2));
