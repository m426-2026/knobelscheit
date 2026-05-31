import { assertEquals } from "@std/assert";
import { diceSum, rollDice, rollDie } from "./dice.ts";

Deno.test("rollDie: random 0.0 gibt 1", () => {
  assertEquals(rollDie (()=> 0.0), 1);
});

Deno.test("rollDie: random 0.999 gibt 6", () => {
  assertEquals(rollDie (()=> 0.999), 6);
});

Deno.test("rollDie: random 0.5 gibt 4", () => {
  assertEquals(rollDie (()=> 0.5), 4);
});

Deno.test("rollDice: gibt richtige Paar zurück", () => {
    let i = 0;
    const werte = [0.0, 0.999];
    const [a, b] = rollDice(() => werte[i++]);
    assertEquals(a, 1);
    assertEquals(b, 6);

});

Deno.test("diceSum: 3 + 4 = 7", () => {
  assertEquals(diceSum([3, 4]), 7);
});

Deno.test("diceSum: 5 + 5 = 10", () => {
  assertEquals(diceSum([5, 5]), 10);
});