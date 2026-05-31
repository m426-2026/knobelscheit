export class Knobelscheit {
  private flipped: Set<number>;

  constructor() {
    this.flipped = new Set();
  }

  getActive(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => !this.flipped.has(n));
  }

  canFlip(numbers: number[]): boolean {
    return numbers.every((n) => !this.flipped.has(n));
  }

  flip(numbers: number[]): void{
    for(const n of numbers){
        this.flipped.add(n);
    }
  }

  isWon(): boolean {
    return this.flipped.size === 9;
  }

  findCombinations(target: number): number[][] {
    const active = this.getActive();
    const results: number[][] = [];

    const search = (index: number, current: number[], sum:number) => {

        if(sum == target){
            results.push([...current])
            return;
        }

        for(let i = index; i < active.length; i++) {
            const next = active[i];
            if(sum + next > target) break;
            current.push(next)
            search(i + 1, current, sum+next)
            current.pop()
        }
    }

    search(0, [], 0)
    return results;
  }
}
