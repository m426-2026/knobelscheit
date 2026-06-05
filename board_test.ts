import { assertEquals } from "@std/assert";
import { Board } from "./board.ts";

Deno.test("Board starts with number 1 to 9", () =>  {

    const board = new Board();
    assertEquals(board.getRemaining(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test("flip equals sum", () => {
    const board = new Board();
    const win = board.flip([3, 4], 7);
    assertEquals(win, true);


});

Deno.test("flip doesnt equal sum", () => {
    const board = new Board();
    const win = board.flip([3, 4], 4);
    assertEquals(win, false);

});

Deno.test("Game is over", () => {
    const board = new Board();
    board.flip([9], 9);
    board.flip([8], 8);
    board.flip([7], 7);
    board.flip([6], 6);
    board.flip([5], 5);
    board.flip([4], 4);
    board.flip([3], 3);
    board.flip([2], 2);
    board.flip([1], 1);
    assertEquals(board.isGameOver(), true);
});