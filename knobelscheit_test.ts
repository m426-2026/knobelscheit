import { assertEquals } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("Knobelscheit: alle Zahlen sind vorhanden",() => {
    const k = new Knobelscheit();

    assertEquals(k.zahlen, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test("Knobelscheit: prüft Zahl 5 ist vorhanden",() => {
    const k = new Knobelscheit();

    assertEquals(k.istOffen(5), true);
});

Deno.test("Knobelscheit: nimmt Zahl 5 raus",() => {
    const k = new Knobelscheit();

    k.rausnehmen(5);

    assertEquals(k.istOffen(5), false);
});