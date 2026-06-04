import { assertEquals } from "@std/assert";
import { formattedAddition } from "./demo.ts";

export class Dice {
  public rollTwoDice(): [number, number] {
    return [
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6)
    ];
  }
}

Deno.test("3 + 5 = 8", function addTest() {
  // Arrange
  const a = 3;
  const b = 5;

  // Act
  const actual = formattedAddition(a, b);

  // Assert
  assertEquals(actual, "3 + 5 = 8");
});

Deno.test("3 + -5 = -2", function addTest() {
  // Given
  const a = 3;
  const b = -5;

  // When
  const actual = formattedAddition(a, b);

  // Then
  assertEquals(actual, "3 + -5 = -2");
});

Deno.test("Dice range check", function () {
  const dice = new Dice();
  const [d1, d2] = dice.rollTwoDice();
  assertEquals(d1 >= 1 && d1 <= 6, true);
});