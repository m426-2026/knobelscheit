import { assertEquals } from "@std/assert";
import { Wuerfel } from "./wuerfel.ts";

Deno.test("wuerfel kann erstellt werden", () => {
    const wuerfel = new Wuerfel();
});

Deno.test("werfen gibt Zahl zwischen 1 und 6 zurueck", () => {
    const wuerfel = new Wuerfel();
    wuerfel.werfen();
    assertEquals(wuerfel.ergebnis >= 1, true);
    assertEquals(wuerfel.ergebnis <= 6, true);
});

Deno.test("zwei Wuerfel sind unabhaengig", () => {
    const wuerfel1 = new Wuerfel();
    const wuerfel2 = new Wuerfel();
    wuerfel1.werfen();
    wuerfel2.werfen();
    assertEquals(wuerfel1.ergebnis >= 1, true);
    assertEquals(wuerfel1.ergebnis <= 6, true);
    assertEquals(wuerfel2.ergebnis >= 1, true);
    assertEquals(wuerfel2.ergebnis <= 6, true);
});