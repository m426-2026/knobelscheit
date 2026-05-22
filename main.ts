import { Knobelscheit } from "./knobelscheit.ts";

console.clear();

const knobelscheit = new Knobelscheit();

while (!knobelscheit.beendet()) {
  console.clear();
  console.log(knobelscheit.anzeige());
  const cubeSum = knobelscheit.getCubeSum();
  console.log(`You rolled a total of ${cubeSum}.`);
  let numbersToFlip = prompt("Select numbers to flip (separated by spaces): ");
  while (
    numbersToFlip === null ||
    numbersToFlip
      .split(" ")
      .map((n) => parseInt(n, 10))
      .some((n) => isNaN(n)) ||
    !knobelscheit.umklappen(
      numbersToFlip.split(" ").map((n) => parseInt(n, 10)),
      cubeSum,
    )
  ) {
    console.clear();
    console.log(knobelscheit.anzeige());
    numbersToFlip = prompt(
      "Please enter a valid number for your starting balance.",
    );
  }
  const numbers = numbersToFlip.split(" ").map((n) => parseInt(n, 10));
  console.log(`Flipping numbers: ${numbers.join(", ")}`);
  console.log("Press Enter to continue...");
  prompt("");
}
