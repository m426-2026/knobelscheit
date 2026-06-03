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

Deno.test("Bereits umgeklappte Zahl kann nicht nochmals umgeklappt werden", () => {
    const board = new Board();
    board.flipNumbers([3],3);
    const success = board.flipNumbers([3],3);
    assertEquals(success, false);
});

Deno.test("Doppelte Zahlen werden abgelehnt", () => {
    const board = new Board();
    const success = board.flipNumbers([3,3],6);
    assertEquals(success, false);
});

Deno.test("Spiel beendet, wenn alle Zahlen umgeklappt sind",() => {
    const board = new Board();
    board.flipNumbers([1, 2], 3);
    board.flipNumbers([3, 4], 7);
    board.flipNumbers([5, 6], 11);
    board.flipNumbers([7], 7);
    board.flipNumbers([8], 8);
    board.flipNumbers([9], 9);
    assertEquals(board.isFinished(),true);
});

Deno.test("Board erkennt mögliche Kombination",() => {
    const board = new Board();
    assertEquals(board.hasMoveFor(7), true);
});

Deno.test("Board erkennt unmögliche Kombination", () => {
    const board = new Board();
    board.flipNumbers([1, 2, 3, 4, 5, 6, 7, 8], 36);
    assertEquals(board.getOpenNumbers(), [9]);
    assertEquals(board.hasMoveFor(5), false);
});

Deno.test("Boardanzeige zeigt offene und umgeklappte Zahlen", () => {
    const board = new Board();
    board.flipNumbers([2, 5], 7);
    assertEquals(board.show(), "1 [2] 3 4 [5] 6 7 8 9");
});