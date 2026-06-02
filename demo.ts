export function formattedAddition(a: number, b: number): string {
  return `${a} + ${b} = ${a + b}`;
}

console.log(formattedAddition(3, 2));

export function rollDie(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollDice(): number {
  return rollDie() + rollDie();
}

export function createBoard(): number[] {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

export function tryFlip(
  board: number[],
  numbers: number[],
  diceSum: number,
): number[] {
  const sum = numbers.reduce((a, b) => a + b, 0);
  if (sum !== diceSum) return board;
  const allAvailable = numbers.every((n) => board.includes(n));
  if (!allAvailable) return board;
  return board.filter((n) => !numbers.includes(n));
}

export function isGameFinish(board: number[]): boolean {
  return board.length === 0;
}

export function hasPossibleMove(board: number[], targetSum: number): boolean {
  if (targetSum === 0) return true;
  if (targetSum < 0 || board.length === 0) return false;
  const ersteZahl = board[0];
  const restlicheZahlen = board.slice(1);
  return hasPossibleMove(restlicheZahlen, targetSum - ersteZahl) || hasPossibleMove(restlicheZahlen, targetSum);
}

export function renderBoard(board: number[]): string {
  const alleZahlen = [1,2,3,4,5,6,7,8,9];
  return alleZahlen.map((n) => board.includes(n)?n.toString():"[x]").join(" ");
}