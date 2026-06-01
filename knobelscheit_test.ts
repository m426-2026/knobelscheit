import { assertEquals } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";


// -------------- rollDie -------------- //

Deno.test("Alle 9 Zahlen sind verfügbar", () => {
    const board = new Knobelscheit();
    assertEquals(board.getAvailable(), [1, 2, 3, 4, 5, 6, 7, 8, 9])
});

Deno.test("keine zahl ist umgeklappt", () => {
    const board = new Knobelscheit();
    assertEquals(board.getFlipped(), [])
});