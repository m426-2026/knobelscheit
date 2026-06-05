export function rollDie(): number{
    const random = Math.random();
    return Math.floor((random * 6) + 1);
}

export function rollDice(): number[] {
    return [rollDie(), rollDie()];
}

export function sumDice(dice : number[]): number{
    return dice[0] + dice[1];
}