import { assertEquals } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";

// ---------------------------------------------------------------------------
// Initialer Zustand
// ---------------------------------------------------------------------------

Deno.test("Alle 9 Zahlen sind verfügbar", () => {
  const board = new Knobelscheit();
  assertEquals(board.getAvailable(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test("keine zahl ist umgeklappt", () => {
  const board = new Knobelscheit();
  assertEquals(board.getFlipped(), []);
});

Deno.test("Neu: Spiel ist nicht beendet", () => {
  const board = new Knobelscheit();
  assertEquals(board.isComplete(), false);
});

Deno.test("Neu: isFlipped ist für alle Zahlen false", () => {
  const board = new Knobelscheit();
  for (let n = 1; n <= 9; n++) {
    assertEquals(board.isFlipped(n), false);
  }
});

// ---------------------------------------------------------------------------
// canFlip – gültige Fälle
// ---------------------------------------------------------------------------

Deno.test("canFlip: einzelne Zahl gleich der Augensumme", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([7], 7), true);
});

Deno.test("canFlip: zwei Zahlen, deren Summe passt", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([3, 4], 7), true);
});

Deno.test("canFlip: drei Zahlen, deren Summe passt", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([1, 2, 4], 7), true);
});

Deno.test("canFlip: Augensumme 2 mit [2]", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([2], 2), true);
});

Deno.test("canFlip: Augensumme 12 mit [3, 9]", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([3, 9], 12), true);
});

// ---------------------------------------------------------------------------
// canFlip – ungültige Fälle
// ---------------------------------------------------------------------------

Deno.test("canFlip: leere Liste ist ungültig", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([], 7), false);
});

Deno.test("canFlip: Summe stimmt nicht überein", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([2, 4], 7), false);
});

Deno.test("canFlip: Duplikate sind ungültig", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([3, 3], 6), false);
});

Deno.test("canFlip: Zahl 0 ist ungültig", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([0, 7], 7), false);
});

Deno.test("canFlip: Zahl 10 ist ungültig", () => {
  const board = new Knobelscheit();
  assertEquals(board.canFlip([10], 10), false);
});

Deno.test(
  "canFlip: bereits umgeklappte Zahl darf nicht nochmals gewählt werden",
  () => {
    const board = new Knobelscheit();
    board.flip([5], 5);
    assertEquals(board.canFlip([5], 5), false);
  },
);

Deno.test("canFlip: Kombination mit umgeklappter Zahl ist ungültig", () => {
  const board = new Knobelscheit();
  board.flip([3], 3);
  assertEquals(board.canFlip([3, 4], 7), false);
});

// ---------------------------------------------------------------------------
// flip – Zustandsänderung
// ---------------------------------------------------------------------------

Deno.test("flip: gibt true zurück bei gültigem Zug", () => {
  const board = new Knobelscheit();
  assertEquals(board.flip([7], 7), true);
});

Deno.test("flip: gibt false zurück bei ungültigem Zug", () => {
  const board = new Knobelscheit();
  assertEquals(board.flip([3, 3], 6), false);
});

Deno.test("flip: umgeklappte Zahl ist danach nicht mehr verfügbar", () => {
  const board = new Knobelscheit();
  board.flip([5], 5);
  assertEquals(board.getAvailable().includes(5), false);
  assertEquals(board.isFlipped(5), true);
});

Deno.test("flip: mehrere Zahlen werden korrekt umgeklappt", () => {
  const board = new Knobelscheit();
  board.flip([2, 5], 7);
  assertEquals(board.isFlipped(2), true);
  assertEquals(board.isFlipped(5), true);
  assertEquals(board.getAvailable(), [1, 3, 4, 6, 7, 8, 9]);
});

Deno.test("flip: ungültiger Zug ändert den Zustand nicht", () => {
  const board = new Knobelscheit();
  board.flip([3, 3], 6);
  assertEquals(board.getFlipped(), []);
});

// ---------------------------------------------------------------------------
// isComplete
// ---------------------------------------------------------------------------

Deno.test("isComplete: false solange Zahlen übrig sind", () => {
  const board = new Knobelscheit();
  board.flip([1, 2, 3], 6);
  assertEquals(board.isComplete(), false);
});

Deno.test("isComplete: true wenn alle 9 Zahlen umgeklappt sind", () => {
  const board = new Knobelscheit();
  for (let n = 1; n <= 9; n++) board.flip([n], n);
  assertEquals(board.isComplete(), true);
});

// ---------------------------------------------------------------------------
// getDisplay
// ---------------------------------------------------------------------------

Deno.test("getDisplay: anfangs keine Klammern", () => {
  const board = new Knobelscheit();
  const display = board.getDisplay();
  for (let n = 1; n <= 9; n++) {
    assertEquals(display.includes(`[${n}]`), false);
    assertEquals(display.includes(`${n}`), true);
  }
});

Deno.test("getDisplay: umgeklappte Zahlen in Klammern", () => {
  const board = new Knobelscheit();
  board.flip([3, 4], 7);
  const display = board.getDisplay();
  assertEquals(display.includes("[3]"), true);
  assertEquals(display.includes("[4]"), true);
  assertEquals(display.includes("[1]"), false);
});
