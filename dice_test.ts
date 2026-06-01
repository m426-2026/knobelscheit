import { assert } from "@std/assert";
import { Dice } from "./dice.ts";

for(let i = 0; i <= 10; i++){
    Deno.test("Dice between 1 and 6", function addTest() {
        // Arrange
        const dice = new Dice();

        // Act
        const roll1 = dice.roll();

        // Assert
        assert(roll1 <= 6);
        assert(roll1 >= 1);
    })
}