import { assert, assertEquals, assertThrows } from "@std/assert";
import { Dice } from "./dice.ts";
import { stringToArray, validateInput, calculateSumInput, calculateSumDice, inputEqualsSumDice, SliceArray } from "./knobelscheit.ts";



Deno.test("String to Array formatation", function addTest(){
    // Arrange
    const input: string = "1 3 4"
    const target: number[] = [1, 3, 4]

    // Act
    const inputAsArrayNumbers = stringToArray(input);

    // Assert
    assertEquals(inputAsArrayNumbers, target)
});


Deno.test("Dice-sum between 2 and 12", function addTest() {
    // Arrange
    const dice = new Dice();

    // Act
    const roll1 = dice.roll();
    const roll2 = dice.roll();

    const sum = calculateSumDice(roll1, roll2);

    // Assert
    assert(sum <= 12);
    assert(sum >= 2);
})

Deno.test("InputCheck Input == Numbers", function addTest() {
    // Arrange
    const input = "1 2 n 3"
    const defaultArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Act & Assert
    assertThrows(() => validateInput(input, defaultArray), Error, "Schreibe bitte nur Zahlen im angegebenen Vormat (zahl1 zahl2 zhal3..)");

});

Deno.test("InputCheck Input not double", function addTest() {
    // Arrange
    const input = "1 2 3 3"
    const defaultArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Act & Assert
    assertThrows(() => validateInput(input, defaultArray), Error, "Schreibe keine doppelten Zahlen");

});

Deno.test("InputCheck Input is not in Array", function addTest() {
    // Arrange
    const input = "1 2 3"
    const defaultArray: number[] = [1, 3, 5];

    // Act & Assert
    assertThrows(() => validateInput(input, defaultArray), Error, "Schreibe bitte nur verfügbare Zahlen");

});

Deno.test("InputSum is correct", function addTest() {
    // Arrange
    const input = [1, 3, 7];
    const targetSum = 11

    // Act
    const sumInput = calculateSumInput(input);

    // Assert
    assertEquals(targetSum, sumInput);
});

Deno.test("Sum dice is correct", function addTest() {
    // Arrange
    const roll1 = 6;
    const roll2 = 3;
    const targetSum = 9;

    // Act
    const sum = calculateSumDice(roll1, roll2);

    // Assert
    assertEquals(targetSum, sum);
});

Deno.test("Validate SumInput == SumDice", function addTest() {
    // Arrange
    const sumInput = 11;
    const sumDice = 9;

    // Assert
    assertThrows(() => inputEqualsSumDice(sumInput, sumDice), Error, "Sum of Input does not equal Sum of Dices");

});

Deno.test("Slice Array with Input", function addTest() {
    // Arrange
    const defaultArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectetArray: number[] = [1, 2, 3, 6, 7, 8, 9];  // expectedArray = defaultArray - input - 4 && - 5
    const input = [4, 5]

    // Act
    const newDefaultArray = SliceArray(defaultArray, input);

    // Assert
    assertEquals(newDefaultArray, expectetArray);
})


