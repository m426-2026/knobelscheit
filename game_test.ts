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

Deno.test("Eine Zahl kann umgeklappt werden", () => {
    const board = new Board();
    const success = board.flipNumbers([7], 7);

    assertEquals(success, true);
    assertEquals(board.getOpenNumbers(), [1, 2, 3, 4, 5, 6, 8, 9]);
});

Deno.test("Mehrere Zahlen können umgeklappt werden", () => {
    const board = new Board();
    const success = board.flipNumbers([3, 4], 7);

    assertEquals(success, true);
    assertEquals(board.getOpenNumbers(), [1, 2, 5, 6, 7, 8, 9]);
});

Deno.test("Falsche Summe wird abgelehnt", () => {
    const board = new Board();
    const success = board.flipNumbers([3, 4], 8);

    assertEquals(success, false);
    assertEquals(board.getOpenNumbers(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});