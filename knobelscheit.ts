export class Knobelscheit {
  private flipped: Set<Number> = new Set();

  flip(toFlip: number[], diceResult: number): boolean {
    let totalToFlip = 0;
    toFlip.forEach((elementToFlip) => {
      totalToFlip += elementToFlip;
    });

    if (totalToFlip === diceResult) {
      toFlip.forEach((elementToFlip) => {
        this.flipped.add(elementToFlip);
      });
      return true;
    } else {
      return false;
    }
  }

  checkWin() {
    if (this.flipped.size === 9) {
      return true;
    } else {
      return false;
    }
  }

  checkIfLost(diceTotal: number): boolean {
    const open: number[] = [];
    for (let i = 1; i <= 9; i++) {
      if (!this.flipped.has(i)) {
        open.push(i);
      }
    }
    let canContinue: boolean = false;
    open.forEach((number) => {
      if (diceTotal === number) {
        canContinue = true;
      }
      open.forEach((otherNumber) => {
        if (number !== otherNumber && diceTotal === (number + otherNumber)) {
          canContinue = true;
        }
      });
    });
    if (canContinue) {
      return false;
    } else {
      return true;
    }
  }

  notFlipped(): Array<number> {
    const open: number[] = [];
    for (let i = 1; i <= 9; i++) {
      if (!this.flipped.has(i)) {
        open.push(i);
      }
    }
    return open;
  }
}
