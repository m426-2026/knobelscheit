import { assertEquals } from "@std/assert";
import { formattedAddition, rollDice, calculateDice, createBoard, flipNumbers, validateInput, validateInputBoard, flip, checkFinished } from "./demo.ts";

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

Deno.test("calculatedice 2-12", function calculateDiceTest(){
  //When
  const calculatenumber = calculateDice();
  //Then
  assertEquals(calculatenumber >= 2 && calculatenumber <= 12, true)
});

Deno.test("createborad numbers from 1-9", function createBoardTest(){
  //When
  const board = createBoard();
  //Then
  assertEquals(board, [1,2,3,4,5,6,7,8,9])
});

Deno.test("create Flipednumbers", function flipNumbersTest(){
//When
const flipedNumber = flipNumbers();
//Then
assertEquals(flipedNumber, [])
});

Deno.test("validate input -> input == Würfelzahl", function validateInputTest(){
  //Given
  const calculatedNumber = 12;
  const input = [5, 7]
  //When
  const result = validateInput(calculatedNumber, input);
  //Then
  assertEquals(result, true);
})

Deno.test("validate input -> input == Würfelzahl", function validateInputNegativeTest(){
  //Given
  const calculatedNumber = 12;
  const input = [5, 6]
  //When
  const result = validateInput(calculatedNumber, input);
  //Then
  assertEquals(result, false);
})

Deno.test("validate input -> input is in Board", function validateInputBoardTest(){
  //Given
  const board = createBoard();
  const input = [5, 7];
  //When
  const result = validateInputBoard(board, input);
  //Then
  assertEquals(result, true)
})

Deno.test("validate input -> input is in Board", function validateInputBoardTest(){
  //Given
  const board = [1,2,3,4,6,8,9];
  const input = [5, 7];
  //When
  const result = validateInputBoard(board, input);
  //Then
  assertEquals(result, false)
})

Deno.test("flip", function flipTest(){
  //Given
  const input = [5, 7];
  const board = createBoard();
  const flipedNumbers = flipNumbers();
  //When
  const result = flip(input, board, flipedNumbers);
  //Then
  assertEquals(result, true);
})

Deno.test("checkFinished -> board == []", function checkFinishedTest(){
  //Given
  const board: number[] = [];
  const flipedNumber = [1,2,3,4,5,6,7,8,9];
  //When
  const result = checkFinished(board, flipedNumber);
  //Then
  assertEquals(result, true);
})

Deno.test("checkFinished -> board == []", function checkFinishednegativeTest(){
  //Given
  const board: number[] = [1];
  const flipedNumber = [1,2,3,4,5,6,7,8,9];
  //When
  const result = checkFinished(board, flipedNumber);
  //Then
  assertEquals(result, false);
})