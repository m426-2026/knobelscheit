export function formattedAddition(a: number, b: number): string {
  return `${a} + ${b} = ${a + b}`;
}

console.log(formattedAddition(3, 2));
 
export function rollDice(): number{
  return Math.floor(Math.random()* 6)+ 1
}

export function calculateDice(): number{
  return rollDice() + rollDice();
}

export function createBoard(): number[]{
  return [1,2,3,4,5,6,7,8,9];
}

export function flipNumbers(): number[]{
  return [];
}

//2. Teil(sven)
export function validateInput(calculatedNumber: number, input: number[]): boolean{
  let calculatedInput = 0;
input.forEach((entry) => {
  calculatedInput += entry;
})

if (calculatedInput == calculatedNumber)
{
  return true;
}
else
{
  return false;
}

}