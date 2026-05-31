import { assert, assertEquals, assertFalse } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts"

Deno.test("Knobelscheit: alle 9 Kacheln oben", () => {
  const brett = new Knobelscheit();
  assertEquals(brett.getUpTiles(), [1,2,3,4,5,6,7,8,9]);
});

Deno.test("Knobelscheit: Spiel ist anfangs nicht beendet", () => {
  const brett = new Knobelscheit();
  assertFalse(brett.isComplete());
});

Deno.test("Knobelscheit: flip entfernt eine Kachel ", () => {
  const brett = new Knobelscheit();
  brett.flip([5]);
  assertEquals(brett.getUpTiles(), [1,2,3,4,6,7,8,9]);
});

Deno.test("Knobelscheit: flip entfernt mehrere Kachel ", () => {
  const brett = new Knobelscheit();
  brett.flip([1, 3]);
  assertEquals(brett.getUpTiles(), [2,4,5,6,7,8,9]);
});

Deno.test("Knobelscheit: flip auf bereits umgeklappte Kachel gibt false ", () => {
  const brett = new Knobelscheit();
  brett.flip([5]);
  assertFalse(brett.flip([5]));
});

Deno.test("Knobelscheit: isComplete wenn alle Kacheln flipped sind", () => {
  const brett = new Knobelscheit();
  brett.flip([1,2,3,4,5,6,7,8,9]);
  assert(brett.isComplete());
});

Deno.test("Knobelscheit: getCombinations enthält 7", () => {
  const brett = new Knobelscheit();
  const kombis = brett.getCombinations(7);
  assert(kombis.some((k) => k.length === 1 && k[0] === 7));
});

Deno.test("Knobelscheit: getCombinations enthält 3 4", () => {
  const brett = new Knobelscheit();
  const kombis = brett.getCombinations(7);
  assert(kombis.some((k) => k.length === 2 && k[0] === 3 && k[1] === 4));
});

Deno.test("Knobelscheit: getCombinations enthält 1 2 4", () => {
  const brett = new Knobelscheit();
  const kombis = brett.getCombinations(7);
  assert(kombis.some((k) => k.includes(1) && k.includes(2) && k.includes(4)));
});

Deno.test("Knobelscheit: nach flip 7 fehlt 7 in getCombinations 7", () => {
  const brett = new Knobelscheit();
  brett.flip([7]);
  const kombis = brett.getCombinations(7);
  assertFalse(kombis.some((k) => k.length === 1 && k[0] === 7));
});

Deno.test("Knobelscheit: hasValidMoves false wenn alle kacheln weg", () => {
  const brett = new Knobelscheit();
  brett.flip([1, 2, 3, 4, 6, 7, 8, 9]);
  assertFalse(brett.hasValidMoves(7));
});
