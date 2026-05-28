import { assertEquals, assert, assertFalse } from "@std/assert";
import { Puzzle } from "./puzzle.ts"

Deno.test("puzzle state flipped numbers gets correctly outputed as a string", function addTest() {
    // Arrange
    const puzzle = new Puzzle()
    const expectedString = "         "

    // Act
    const actual = puzzle.flippedNumbersString()

    // Assert
    assertEquals(actual, expectedString);
});

Deno.test("puzzle state not flipped numbers gets correctly outputed as a string", function addTest() {
    // Arrange
    const puzzle = new Puzzle()
    const expectedString = "123456789"

    // Act
    const actual = puzzle.notFlippedNumbersString()

    // Assert
    assertEquals(actual, expectedString);
});

Deno.test("puzzle state returns correctly after flipping a number", function addTest() {
    // Arrange
    const puzzle = new Puzzle()
    const expectedFlipped = [5]
    const expectedNotFlipped = [1, 2, 3, 4, 6, 7, 8, 9]

    // Act
    puzzle.flip(5)
    const actualFlipped = puzzle.flippedNumbers;
    const actualNotFlipped = puzzle.notFlippedNumbers;

    // Assert
    assertEquals(actualFlipped, expectedFlipped);
    assertEquals(actualNotFlipped, expectedNotFlipped);
});

Deno.test("puzzle state flipped numbers gets correctly outputed as a string after flipping a number", function addTest() {
    // Arrange
    const puzzle = new Puzzle()
    puzzle.flip(2);
    const expectedString = " 2       "

    // Act
    const actual = puzzle.flippedNumbersString()

    // Assert
    assertEquals(actual, expectedString);
});

Deno.test("puzzle state not flipped numbers gets correctly outputed as a string after flipping a number", function addTest() {
    // Arrange
    const puzzle = new Puzzle()
    puzzle.flip(7);
    const expectedString = "123456 89"

    // Act
    const actual = puzzle.notFlippedNumbersString()

    // Assert
    assertEquals(actual, expectedString);
});

Deno.test("Given dice sum 9 when user want to flip 4 and 5 then puzzle returns true", function addTest() {
    // Arrange
    const puzzle = new Puzzle();
    const diceSum = 9;
    const userChoice = [4, 5]

    // Act
    const actual = puzzle.validateUserChoice(userChoice, diceSum)

    // Assert
    assert(actual)
})

Deno.test("Given dice sum 9 and already flipped 5 when user want to flip 4 and 5 then puzzle returns false", function addTest() {
    // Arrange
    const puzzle = new Puzzle();
    puzzle.flip(5)
    const diceSum = 9;
    const userChoice = [4, 5]

    // Act
    const actual = puzzle.validateUserChoice(userChoice, diceSum)

    // Assert
    assertFalse(actual)
})

Deno.test("Given dice sum 6 when user wants to flip 4 and 5 then puzzle returns false", function addTest() {
    // Arrange
    const puzzle = new Puzzle();
    const diceSum = 6;
    const userChoice = [4, 5]

    // Act
    const actual = puzzle.validateUserChoice(userChoice, diceSum)

    // Assert
    assertFalse(actual)
})

Deno.test("Given dice sum 8 when user wants to flip 4 and 4 then puzzle returns false", function addTest() {
    // Arrange
    const puzzle = new Puzzle();
    const diceSum = 8;
    const userChoice = [4, 4]

    // Act
    const actual = puzzle.validateUserChoice(userChoice, diceSum)

    // Assert
    assertFalse(actual)
})

Deno.test("When puzzle completed it returns true", function addTest() {
    // Arrange
    const puzzle = new Puzzle();
    for(let i = 1; i <= 9; i++) {
        puzzle.flip(i);
    }

    // Act
    const actual = puzzle.completed()

    // Assert
    assert(actual)
})


Deno.test("When puzzle isn't completed it returns false", function addTest() {
    // Arrange
    const puzzle = new Puzzle();
    for(let i = 1; i <= 8; i++) {
        puzzle.flip(i);
    }

    // Act
    const actual = puzzle.completed()

    // Assert
    assertFalse(actual)
})