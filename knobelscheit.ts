export class Knobelscheit {
  private tiles: Set<number>;

  constructor() {
    this.tiles = new Set([1,2,3,4,5,6,7,8,9]);
  }

  getUpTiles(): number[] {
    return [...this.tiles].sort((a, b) => a - b);
  }

  isComplete(): boolean {
    return this.tiles.size === 0;
  }

  flip(numbers: number[]): boolean {
    if (!numbers.every((n) => this.tiles.has(n))) {
      return false;
    }
    for (const n of numbers) {
      this.tiles.delete(n);
    }
    return true;
  }

  getCombinations(sum: number): number[][] {
    const upTiles = this.getUpTiles();
    const result: number[][] = [];

    const suche = (
      index: number,
      aktuelle: number[],
      rest: number,
    ) => {
      if (rest === 0) {
        result.push([...aktuelle]);
      return;
    }
    if (rest < 0 || index >= upTiles.length) return;

    suche(index + 1, [...aktuelle, upTiles[index]], rest - upTiles[index]);
    suche(index + 1, aktuelle, rest);
  };

  suche(0, [], sum);
  return result;
}

    hasValidMoves(sum: number): boolean {
    return this.getCombinations(sum).length > 0;
  }
}