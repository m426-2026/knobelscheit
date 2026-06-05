import {assert} from "@std/assert";
import { rollDie, rollDice, sumDice} from "./dice.ts";

Deno.test("Prüft ob gewürfelte Zahl zwischen 1-6 ist.", () => {
    
    //Arrange / Act
    const result = rollDie();

    //Assert
    assert(result >= 1 && result <= 6); 

})

Deno.test("Zwei Würfel würfeln", () => {
    
    const result = rollDice();

    assert(result.length == 2)
})

Deno.test("Summe von 2 Würfeln", () => {
    //Arrange
    const dice = [3,4];

    //Act
    const result = sumDice(dice);

    assert(result == 7)
})