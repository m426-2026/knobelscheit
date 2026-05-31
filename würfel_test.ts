import { assertEquals } from "@std/assert";
import { Würfel } from "./würfel.ts";

Deno.test("Würfel: Zahl von 1 - 6",() => {
    const value = new Würfel();

    value.roll();

    assertEquals(value.number >= 1 && value.number <= 6, true);
});

Deno.test("Würfel: Zahl von 2 - 12",() => {
    const value1 = new Würfel();
    const value2 = new Würfel();

    value1.roll();
    value2.roll();

    const summe = value1.number + value2.number;

    assertEquals(summe >= 2 && summe <= 12, true);
});