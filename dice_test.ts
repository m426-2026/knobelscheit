import { assertEquals } from "@std/assert";
import { rollDice, sumDice } from "./dice.ts";

Deno.test("3 + 5 = 8", function sumDiceTest() {
  // Arrange
  const a = 3;
  const b = 5;

  // Act
  const actual = sumDice(a, b);

  // Assert
  assertEquals(actual, a + b);
});

Deno.test("Value of dice is between 1 - 6", function rollDiceRange() {
  for (let i = 0; i < 10; i++) {
    // Arrange, Act
    const actual = rollDice();

    // Assert
    assertEquals(actual >= 1 && actual <= 6, true);
  }
});
