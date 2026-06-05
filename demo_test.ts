import { assertEquals } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { GameBoard } from "./gameboard.ts";
import { Dice } from "./dice.ts";

Deno.test("GameBoard initial state is all false", () => {
  const board = new GameBoard();
  assertEquals(board.getState(), [
    false, false, false,
    false, false, false,
    false, false, false
  ]);
});

Deno.test("flipNumbers flips correct positions", () => {
  const board = new GameBoard();

  board.flipNumbers([1, 3, 5]);

  const state = board.getState();

  assertEquals(state[0], true);
  assertEquals(state[2], true);
  assertEquals(state[4], true);
});

Deno.test("isGameWon returns true when all flipped", () => {
  const board = new GameBoard();

  board.flipNumbers([1,2,3,4,5,6,7,8,9]);

  assertEquals(board.isGameWon(), true);
});

Deno.test("invalid numbers are ignored", () => {
  const board = new GameBoard();

  board.flipNumbers([0, 10, -3, 2]);

  const state = board.getState();

  assertEquals(state[1], true); 
});

Deno.test("canFlip validates sum correctly", () => {
  const board = new GameBoard();

  const result = board.canFlip([1, 2, 3], 6);

  assertEquals(result, true);
});

Deno.test("dice roll is between 1 and 6", () => {
  const dice = new Dice();

  for (let i = 0; i < 50; i++) {
    const roll = dice.roll();
    assertEquals(roll >= 1 && roll <= 6, true);
  }
});

Deno.test("rollTwo returns two values", () => {
  const dice = new Dice();

  const [a, b] = dice.rollTwo();

  assertEquals(typeof a, "number");
  assertEquals(typeof b, "number");
});

