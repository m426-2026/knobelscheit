import {  assertEquals, assert } from "@std/assert";
import { rollDice, rollTwoDice } from './dice.ts'



Deno.test(' Zahl zwischen 1-6 würfeln', () => {
    const random1 = rollDice()
    const random2 = rollDice()
    assert((random1 > 0 && random1 < 7))
    assert((random2 > 0 && random2 < 7))
});

Deno.test('2x Würfeln und Summe richtig auswerten', () => {
    const result = rollTwoDice([1,2,3,4,5,6,7,8,9]) // returns js object
    assertEquals(result.sum, (result.one + result.two))
})