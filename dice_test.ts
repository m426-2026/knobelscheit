import { assert } from "@std/assert";
import { roll } from "./dice.ts";

Deno.test("Dice roll returns two numbers between 1 and 6", () =>  {

    const [d1, d2] = roll();
    assert(d1 >= 1 && d1 <= 6);
    assert(d2 >= 1 && d2 <= 6);

});