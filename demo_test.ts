import { assert, assertEquals } from "@std/assert";
import { rollDie, rollDice, diceSum, Knobelscheit, parseInput } from "./demo.ts";


Deno.test("rollDie gibt eine Zahl zwischen 1 und 6 zurück", () => {
  for (let i = 0; i < 100; i++) {
    const result = rollDie();

    assert(result >= 1);
    assert(result <= 6);
    assert(Number.isInteger(result));
  }
});

Deno.test("rollDie gibt zwei Würfel zurück", () => {
  const dice = rollDice();
  assertEquals(dice.length, 2);
  assert(dice[0] >= 1);
  assert(dice[0] <= 6);
  assert(dice[1] >= 1);
  assert(dice[1] <= 6);
});

Deno.test("diceSum berechnet Augensumme korrekt", () => {
  const result = diceSum([3, 4]);
  assertEquals(result, 7);
});

Deno.test("Knobelscheit startet mit allen offenen Zahlen", () => {
  const game = new Knobelscheit();
  assertEquals(game.getNumbers(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assertEquals(game.getOpenNumbers(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assertEquals(game.getFlippedNumbers(), []);
});

Deno.test("Eine Zahl kann umgeklappt werden", () => {
  const game = new Knobelscheit();
  const result = game.flip([9], 9);

  assertEquals(result, true);
  assertEquals(game.getFlippedNumbers(), [9]);
});

Deno.test("Mehere Zahlen können umgeklappt werden", () => {
  const game = new Knobelscheit();
  const result = game.flip([3, 6], 9);
  assertEquals(result, true);
  assertEquals(game.getFlippedNumbers(), [3, 6]
  )
});

Deno.test("Falsche Summe ist ungültig", () => {
  const game = new Knobelscheit();
  assertEquals(game.flip([2, 5], 10), false);
});

Deno.test("Umgekehrte Zahlen ungültig", () => {
  const game = new Knobelscheit();
  game.flip([9], 9);
  assertEquals(game.flip([9], 9), false);
});

Deno.test("doppelte Zahlen ungültig", () => {
  const game = new Knobelscheit();
  assertEquals(game.flip([4, 4], 8), false);
});

Deno.test("Ungültige Zahlen ablehnen", () => {
  const game = new Knobelscheit();
  assertEquals(game.flip([11], 11), false);
});

Deno.test("parseInput wandelt Eingabe in Zahlen um", () => {
  assertEquals(parseInput("3 6"), [3, 6]);
});

Deno.test("Spiel beenden funktioniert", () => {
  const game = new Knobelscheit();
  game.flip([1,2,3,4,5,6,7,8,9], 45);
  assertEquals(game.isFinished(), true);
});

Deno.test("x für umgeklappte Zahlen", () => {
  const game = new Knobelscheit();
  game.flip([3,6], 9);
  assertEquals(game.toString(), "1 2 X 4 5 X 7 8 9");
});