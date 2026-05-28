import { assertEquals } from "@std/assert";
import { formattedAddition, rollDice } from "./demo.ts";

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

Deno.test("roledice 1-6", function rollDiceTest() {
  //When
  const number = rollDice();
  //Then
  assertEquals(number >= 1 && number <= 6, true)
});





