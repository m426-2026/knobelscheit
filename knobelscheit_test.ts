import { assertEquals } from "@std/assert/equals";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("inspect state", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();

  // Act
  const state: Map<number, boolean> = knobelscheit.inspect();

  // Assert
  assertEquals(
    state,
    new Map([
      [1, false],
      [2, false],
      [3, false],
      [4, false],
      [5, false],
      [6, false],
      [7, false],
      [8, false],
      [9, false],
    ]),
  );
});

Deno.test("flip numbers randomly", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();

  for (let i = 0; i < 20; i++) {
    // Act
    const random = Math.floor(Math.random() * 9) + 1;
    const before = knobelscheit.inspect().get(random);
    const turned = knobelscheit.flip(random);
    const after = knobelscheit.inspect().get(random);

    // Arrange
    if (turned) {
      assertEquals(before, false);
      assertEquals(after, true);
    } else {
      assertEquals(before, true);
      assertEquals(after, true);
    }
  }
});

Deno.test("Test: inital state not finished.", () => {
  //Arrange
  const scheit = new Knobelscheit();

  //Act
  const finished = scheit.isAllFlipped();

  //Assert
  assertEquals(finished, false);
});

Deno.test("Test: final state finished.", () => {
  //Arrange
  const scheit = new Knobelscheit();
  for (let i = 1; i <= 9; i++) {
    scheit.flip(i);
  }

  //Act
  const finished = scheit.isAllFlipped();

  //Assert
  assertEquals(finished, true);
});

Deno.test("Check if flipped.", () => {
  //Arrange
  const scheit = new Knobelscheit();

  //Act
  scheit.flip(5);

  //Assert
  assertEquals(scheit.isFlipped(5), true);
  assertEquals(scheit.isFlipped(6), false);
});
