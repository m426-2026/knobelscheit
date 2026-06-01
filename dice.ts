 export function rollDie(): number {
    return Math.floor(Math.random() * 6) + 1;
 }

 export function rollDice(): [number, number] {
    return [rollDie(), rollDie()];
 }

 export function diceSum(dice:  [number, number]): number {
    return dice[0] + dice[1];
} 