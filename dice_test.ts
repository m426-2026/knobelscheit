import { assertEquals, assert } from "@std/assert";
import { Dice } from "./dice.ts";

Deno.test("rollDice returns number between 1 and 6", () => {
    const dice = new Dice();
    for (let i = 0; i < 10; i++) {
        const result = dice.rollDice();
        assert(result >= 1 && result <= 6, `expected 1-6, number = ${result}`);
    }
});

Deno.test("diceSum returns correct number", () => {
    const dice = new Dice();

    assertEquals(dice.diceSum(1, 1), 2);
    assertEquals(dice.diceSum(6, 4), 10);
    assertEquals(dice.diceSum(3, 5), 8);
});

Deno.test("diceSum returns number between 1 and 12", () => {
    const dice = new Dice();

    assertEquals(dice.checkSumoverflow(14), false);
    assertEquals(dice.checkSumoverflow(1), false);
    assertEquals(dice.checkSumoverflow(7), true);
});