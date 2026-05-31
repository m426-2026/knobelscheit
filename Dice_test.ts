import {assert} from "@std/assert"
import { Dice } from "./Dice.ts";
import { DicePair } from "./Dice.ts";

Deno.test("Dice.roll returns a number between 1 and 6", () => {
    const dice = new Dice();

    
    for ( let i = 0; i < 10; i++){
    const value = dice.roll();

    assert(value >= 1);
    assert(value <= 6);
    }
});

Deno.test("DicePair.roll returns two dice value between 1 and 6", () => {

    const dicePair = new DicePair();

    for( let i = 0; i < 10; i++){
        const [first, second] = dicePair.roll();

        assert(first >= 1);
        assert(first <= 6);

        assert(second >= 1);
        assert(second <= 6);
    }
});