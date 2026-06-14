export class Knobelscheit {
  private state: Array<boolean> = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  public inspect(): Map<number, boolean> {
    const stateByNumber = new Map<number, boolean>();
    for (let i = 0; i < this.state.length; i++) {
      stateByNumber.set(i + 1, this.state[i]);
    }
    return stateByNumber;
  }

  public flip(number: number): boolean {
    if (this.state[number - 1]) {
      return false;
    } else {
      this.state[number - 1] = true;
      return true;
    }
  }

  public isAllFlipped(): boolean {
    for (const s of this.state) {
      if (!s) {
        return false;
      }
    }
    return true;
  }

  public isFlipped(num: number): boolean {
    return this.state[num - 1];
  }
}
