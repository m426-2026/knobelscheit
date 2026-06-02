import { assertEquals } from "@std/assert/equals";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("Spiel startet mit 9 aufgedeckten Zahlen", () => {
    const spiel = new Knobelscheit();
    assertEquals(spiel.offeneZahlen, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test("Zahl umdrehen entfernt sie aus offenen Zahlen", () => {
    const spiel = new Knobelscheit();
    spiel.umdrehen([3]);
    assertEquals(spiel.offeneZahlen, [1, 2, 4, 5, 6, 7, 8, 9]);
});

Deno.test("Wuerfelsumme 7 [5, 2], gibt true zurueck", () => {
    const spiel = new Knobelscheit();
    assertEquals(spiel.istGueltigerZug([2, 5], 7), true);
});

Deno.test("Wuerfelsumme 7 [4, 2], gibt false zurueck", () => {
    const spiel = new Knobelscheit();
    assertEquals(spiel.istGueltigerZug([2, 4], 7), false);
});

Deno.test("istGewonnen gibt false bei neuem Spiel", () => {
    const spiel = new Knobelscheit();
    assertEquals(spiel.istGewonnen(), false);
});

Deno.test("istGewonnen gibt true wenn alle Zahlen umgedreht sind", () => {
    const spiel = new Knobelscheit();
    spiel.umdrehen([1, 2, 3, 4, 5, 6, 7, 8, 9])
    assertEquals(spiel.istGewonnen(), true);
});

Deno.test("zugMoeglich gibt false wenn kein Zug moeglich", () => {
    const spiel = new Knobelscheit();
    spiel.umdrehen([1, 2, 3, 4, 5, 6]);
    assertEquals(spiel.zugMoeglich(4), false);
});

Deno.test("zugMoeglich gibt true wenn Zug moeglich", () => {
    const spiel = new Knobelscheit();
    spiel.umdrehen([1, 2, 3, 4, 5, 6]);
    assertEquals(spiel.zugMoeglich(8), true);
});