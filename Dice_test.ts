import {assert} from "@std/assert"
import { Dice } from "./Dice.ts";

Deno.test("Dice.roll returns a number between 1 and 6", () => {
    const dice = new Dice();

    
    for ( let i = 0; i < 10; i++){
    const value = dice.roll();

    assert(value >= 1);
    assert(value <= 6);
    }
});