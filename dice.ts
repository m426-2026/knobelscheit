export function rollDie(random: () => number = Math.random): number {
    return Math.floor(random() * 6) + 1;
}

export function rollDice(random: () => number = Math.random): [number, number] {
    return [rollDie(random), rollDie(random)];
}

export function diceSum(dice: [number, number]): number {
    return dice[0] + dice[1];
}