import { assertEquals } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("numbers get flipped if they add up to dice", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();

  // Act
  const worked = knobelscheit.flip([2, 3], 5);

  // Assert
  assertEquals(worked, true);
});

Deno.test("numbers dont get flipped if they add up to dice", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();

  // Act
  const worked = knobelscheit.flip([2, 3], 6);

  // Assert
  assertEquals(worked, false);
});

Deno.test("if flipped numbers = 9, return win true", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();
  knobelscheit.flip([1, 2, 3, 4, 5, 6, 7, 8, 9], 45);

  // Act
  const won = knobelscheit.checkWin();

  // Assert
  assertEquals(won, true);
});

Deno.test("if flipped numbers != 9, return win false", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();
  knobelscheit.flip([1, 2, 3, 4], 10);

  // Act
  const won = knobelscheit.checkWin();

  // Assert
  assertEquals(won, false);
});

Deno.test("Checks if lost case lost", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();
  knobelscheit.flip([1, 2, 3, 4, 5, 6, 7, 8], 36);

  // Act
  const lost = knobelscheit.checkIfLost(10);

  // Assert
  assertEquals(lost, true);
});

Deno.test("Checks if lost case lost (when doesn't have the numbers for it anymore)", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();
  knobelscheit.flip([1, 2, 5, 6, 7, 8], 29);

  // Act
  const lost = knobelscheit.checkIfLost(5);

  // Assert
  assertEquals(lost, true);
});

Deno.test("Checks if lost case won", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();
  knobelscheit.flip([1, 2, 3, 4, 5, 6, 7, 8], 36);

  // Act
  const lost = knobelscheit.checkIfLost(9);

  // Assert
  assertEquals(lost, false);
});

Deno.test("Returns array of not flipped numbers", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();
  knobelscheit.flip([2, 3, 4, 5, 6, 7, 8], 35);

  // Act
  const notFlippedNumbers: number[] = knobelscheit.notFlipped();

  // Assert
  assertEquals(notFlippedNumbers, [1, 9]);
});

Deno.test("Returns array of not flipped numbers", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();
  knobelscheit.flip([2, 3, 4, 5, 6, 7, 8], 35);

  // Act
  const notFlippedNumbers: number[] = knobelscheit.notFlipped();

  // Assert
  assertEquals(notFlippedNumbers, [1, 9]);
});
