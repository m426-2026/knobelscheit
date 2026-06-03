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

Deno.test("spiel gewonnen", () => {

const test = new knobelscheit();
test.umklappen(1);
test.umklappen(2);
test.umklappen(3);
test.umklappen(4);
test.umklappen(5);
test.umklappen(6);
test.umklappen(7);
test.umklappen(8);
test.umklappen(9);

assertEquals(test.istgewonnen(), true);
});

Deno.test("Spiel verloren", () => {

const test = new knobelscheit();
test.umklappen(2);
test.umklappen(3);
test.umklappen(4);
test.umklappen(5);
test.umklappen(6);
test.umklappen(7);
test.umklappen(8);
test.umklappen(9);

assertEquals(test.istverloren(), true)
});