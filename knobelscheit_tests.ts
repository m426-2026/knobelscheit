import { assertEquals } from "@std/assert";
import { knobelscheit } from "./knobelscheit.ts";

Deno.test("arrays werden richtig erstellt", () => {

const test = new knobelscheit();

assertEquals(test.unumgeklappt, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
assertEquals(test.umgeklappt, [])

});

Deno.test("position wechsel der 9", () => {

const test = new knobelscheit();
test.umklappen(9);

assertEquals(test.unumgeklappt, [0, 1, 2, 3, 4, 5, 6, 7, 8])
assertEquals(test.umgeklappt, [9])

});