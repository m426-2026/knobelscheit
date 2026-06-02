export function stringToArray(input: string): number[] { // input: "1 2 3"
    const inputAsArrayNumbers: number[] = []
    const inputAsArray: string[] = input.split(" "); // ["1", "2", "3"]

    for (let i = 0; i < inputAsArray.length; i++) {
        inputAsArrayNumbers[i] = parseInt(inputAsArray[i]);
    }

    return inputAsArrayNumbers; //return [1, 2, 3]

}

export function validateInput(input: string) {
    const Regex: RegExp = /[^1-9 && " "]/g;

    if (input.match(Regex)) {
        throw new Error(`Invalid input`);
    }

    const arrayNumber: number[] = stringToArray(input);

    for (let i = 0; i <= arrayNumber.length; i++) {
        for (let j = i+1; j <= arrayNumber.length; j++) {
            if (arrayNumber[i] === arrayNumber[j]) {
                throw new Error(`Invalid input`);
            }
        }
    }
}

export function calculateSumInput(input: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    return sum
}

export function calculateSumDice(roll1: number, roll2: number): number {
    return roll1 + roll2;
}

export function inputEqualsSumDice(sumInput: number, sumDice: number) {
    if (sumInput != sumDice) {
        throw new Error(`Sum of Input does not equal Sum of Dices`);
    }
}

export function SliceArray(defaultArray, input): number[] {
    for (let i = 0; i <= defaultArray.length; i++) {
        for (let j = 0; j <= input.length; j++) {
            if (defaultArray[i] === input[j]) {
                defaultArray.splice(i, 1)
            }
        }
    }

    return defaultArray;
}