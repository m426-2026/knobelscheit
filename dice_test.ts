import { assertEquals, assertGreaterOrEqual, assertLessOrEqual } from "@std/assert";
import { Dice } from "./dice.ts"

Deno.test("dice returns random number between 1-6", function addTest() {
    // Arrange
    const dice = new Dice();

    // Act
    const actual = dice.roll();

    // Assert
    assertLessOrEqual(actual, 6)
    assertGreaterOrEqual(actual,1)
});

Deno.test("adding two dices together gives back correct sum", function addTest() {
    // Arrange
    const dice1 = new Dice();
    const dice2 = new Dice();
    const expectedSum= dice1.roll() + dice2.roll();

    // Act
    const actual = Dice.sum(dice1,dice2)

    // Assert
    assertEquals(actual, expectedSum)
});