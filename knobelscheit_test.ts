import { assertFalse } from "@std/assert/false";
import { assertEquals } from "@std/assert/equals";
import { Knobelscheit } from "./knobelscheit.ts";
import { assert } from "node:console";

Deno.test("startvalues", () => {
    const game = new Knobelscheit();
    assertEquals(game.numberBlocks, [1,2,3,4,5,6,7,8,9]);
});

Deno.test("isGameStillRunning", () => {
    const game = new Knobelscheit();
    game.removeNumber(5);
    assertFalse(game.isGameStillRunning())
 
});

Deno.test("removeNumber and is numberStillIn", () => {
    const game = new Knobelscheit();
    assert(game.numberStillIn(2))
 
    game.removeNumber(3)
    assertFalse(game.numberStillIn(3))
})

Deno.test("Dice roll number between 1 and 6", () => {
    const game = new Knobelscheit();
    game.rollDiceRound();

    assertEquals(game.rounds, 1);
    assert(game.dice1 >= 1 && game.dice1 <= 6);
    assert(game.dice2 >= 1 && game.dice2 <= 6);
    assert(game.dice1 + game.dice2 <= 12);
});