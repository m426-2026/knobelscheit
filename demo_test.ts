import { assertEquals } from "@std/assert";
import {
  formattedAddition,
  rollDie,
  rollDice,
  createBoard,
  tryFlip,
  isGameFinish,
  hasPossibleMove,
  renderBoard,
} from "./demo.ts";

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

Deno.test("Würfel liefert eine Zahl zwischen 1 bis 6", function () {
  const result = rollDie();
  const actual = result >= 1 && result <= 6;
  assertEquals(actual, true);
});

Deno.test("Zwei Würfel ergeben eine Summe zwischen 2 und 12", function () {
  const result = rollDice();
  const actual = result >= 2 && result <= 12;
  assertEquals(actual, true);
});

Deno.test("Knobelscheit startet mit Board 1 bis 9", function () {
  const board = createBoard();
  assertEquals(board, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test(
  "Zahlen dürfen nur umgeklappt werden, wenn die Summe stimmt",
  function () {
    const board = createBoard();
    const actual = tryFlip(board, [2, 3], 6);
    assertEquals(actual, board);
  },
);

Deno.test(
  "Zahl darf nicht verwendet werden, wenn sie nicht mehr im Board ist",
  function () {
    const board = [1, 2, 4, 5, 6, 7, 8, 9];
    const actual = tryFlip(board, [3], 3);
    assertEquals(actual, board);
  },
);

Deno.test("Gültiger Zug entfernt die Zahlen aus dem Board", function () {
  const board = createBoard();
  const actual = tryFlip(board, [1, 5], 6);
  assertEquals(actual, [2, 3, 4, 6, 7, 8, 9]);
});

Deno.test("Spiel ist fertig, wenn alle Zahlen umgeklappt sind", function () {
  const board: number[] = [];
  const actual = isGameFinish(board);
  assertEquals(actual, true);
});

Deno.test(
  "Spiel ist nicht fertig, wenn noch Zahlen vorhanden sind",
  function () {
    const board = [1, 2, 3];
    const actual = isGameFinish(board);
    assertEquals(actual, false);
  },
);

Deno.test("Prüfen ob Zug möglich ist: Es gibt eine Lösung", function () {
  const board = [1,2,5];
  const actual = hasPossibleMove(board, 6);
  assertEquals(actual, true);
})

Deno.test("Prüfen ob Zug möglich ist: Es gibt keine Lösung mehr", function () {
  const board = [1,2,5];
  const actual = hasPossibleMove(board, 10);
  assertEquals(actual, false);
})

Deno.test("Das Board wird als Text dargestellt", function () {
  const board = [1,3,4];
  const actual = renderBoard(board);
  assertEquals(actual, "1 [x] 3 4 [x] [x] [x] [x] [x]");
})