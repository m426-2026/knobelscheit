export function roll(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollTwo(): number {
  return roll() + roll();
}
