export class Puzzle {
  flippedNumbers: number[] = [];
  notFlippedNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  flippedNumbersString(): string {
    let string = "";
    for (let i = 1; i <= 9; i++) {
      if (this.flippedNumbers.includes(i)) {
        string += i.toString();
      } else {
        string += " ";
      }
    }
    return string;
  }

  notFlippedNumbersString(): string {
    let string = "";
    for (let i = 1; i <= 9; i++) {
      if (this.notFlippedNumbers.includes(i)) {
        string += i.toString();
      } else {
        string += " ";
      }
    }
    return string;
  }

  flip(number: number) {
    this.notFlippedNumbers = this.notFlippedNumbers.filter((num) =>
      num != number
    );
    this.flippedNumbers.push(number);
  }

  validateUserChoice(userChoice: number[], diceSum: number): boolean {
    const userChoiceSum: number = userChoice.reduce((a, b) => a + b);
    const oldNumbers:number[] = [];
    let returnValue = false;
    if (userChoiceSum === diceSum) {
      userChoice.forEach((number) => {
        if (!this.notFlippedNumbers.includes(number)) {
          returnValue = false;
          return;
        }
        if(oldNumbers.includes(number)){
          returnValue = false;
          return;
        }
        oldNumbers.push(number);
        returnValue = true;
      });
    }
    return returnValue;
  }

  completed():boolean{
    return this.notFlippedNumbers.length == 0;
  }
}
