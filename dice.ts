export function sumDice(a: number, b: number): number {
  return a + b;
}

export function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}
