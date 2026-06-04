import { assert } from "@std/assert";
import { Dice } from "./dice.ts";

Deno.test("Dice roll number between 1 and 6", () => {
    const dice = new Dice();
    const roll = dice.roll();
    assert(roll >= 1 && roll <= 6);
});