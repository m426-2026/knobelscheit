import {assert, assertEquals} from "@std/assert";
import {Dice, Board} from "./game.ts";

Deno.test("Dice rollt eine Zahl zwischen 1 und 6", () => {
    const dice = new Dice();
    for (let i = 0; i < 100; i++) {
        const roll = dice.roll();
        assert(roll >= 1);
        assert(roll <= 6);
    }
});

Deno.test("Board startet mit Zahlen 1 bis 9", () => {
        const board = new Board();
        assertEquals(board.getOpenNumbers(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
})

