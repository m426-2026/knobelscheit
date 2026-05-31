import { assertEquals, assert } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("New Game: All numbers are open", () => {
    const game = new Knobelscheit();
    const open = game.getOpenNumbers();
    assertEquals(open, [1,2,3,4,5,6,7,8,9]);
});

Deno.test("New Game: no number is flipped", () => {
    const game = new Knobelscheit();
    const flipped = game.getFlippedNumbers();
    assertEquals(flipped, []);
});

Deno.test("Is move valid, number gets flipped", () => {
    const game = new Knobelscheit();
    assertEquals(game.isMoveValid([9]), true);
    assertEquals(game.isMoveValid([0]), false);
    assertEquals(game.isMoveValid([10]), false);
});

Deno.test("flip: correct move, numbers flip", () => {
    const game = new Knobelscheit();
    game.flip([3,6], 9);
    assertEquals(game.isFlipped(3), true);
    assertEquals(game.isFlipped(6), true);
    assertEquals(game.isFlipped(9), false);
});

Deno.test("Flipped: after flip updated open numbers", () => {
    const game = new Knobelscheit();
    game.flip([2,4], 6);
    const openNumbers = game.getOpenNumbers();
    assertEquals(openNumbers, [1,3,5,6,7,8,9])
});

Deno.test("Player can't continue", () => {
    const game = new Knobelscheit();
    game.flip([1], 1);
    game.flip([2], 2);
    game.flip([3], 3);
    game.flip([4], 4);
    game.flip([5], 5);
    game.flip([6], 6);
    game.flip([7], 7);
    game.flip([8], 8);
    game.flip([9], 9);
    assertEquals(game.isGameOver(), true);
});