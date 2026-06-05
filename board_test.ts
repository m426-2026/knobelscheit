import {assertEquals} from "@std/assert";
import {Board} from "./board.ts";

Deno.test("Sind alle Zahlen noch verfügbar", () => {
    
    //Arrange
    const board = new Board();

    //Act
    const availableNumbers: number[] = board.getAvailableNumbers();
    //Assert
    assertEquals(availableNumbers, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
})

Deno.test("Zahl kann umgeklapt werden.", () => {
    //Arrange
    const board = new Board();

    //Act
    board.flipNumber([3]);

    //Assert
    assertEquals(board.getAvailableNumbers(), [1, 2, 4, 5, 6, 7, 8, 9])
})

Deno.test("Falsche Zahl flippen", () => {

    //Arrange
    const board = new Board();

    board.flipNumber([3]);
    board.flipNumber([3]);

    //Assert
    assertEquals(board.getAvailableNumbers(), [1, 2, 4, 5, 6, 7, 8, 9])

})

Deno.test("Geflippte Zahlen anzeigen", () => {
    //Arrange
    const board = new Board();

    //Act
    board.flipNumber([3])

    //Assert
    assertEquals(board.getFlippedNumbers(), [3]);
})

Deno.test("Summe der ausgewählten Zahlen berechnen", () => {

    //Arrange
    const board = new Board();

    //Act
    const result = board.sumNumbers([3, 4]);

    //Assert
    assertEquals(result, 7);
})

Deno.test("Zahlen bei passender Summe flippen", () => {
    
    //Arrange
    const board = new Board();

    //Act
    board.flipNumbersIfSumMatches([3, 4], 7);

    //Assert
    assertEquals(board.getAvailableNumbers(), [1,2,5,6,7,8,9]);

})

Deno.test("Zahlen bei falscher Summe nicht flippen", () => {

    //Arrange
    const board = new Board();

    //Act
    board.flipNumbersIfSumMatches([3, 4], 8)

    //Assert
    assertEquals(board.getAvailableNumbers(), [1,2,3,4,5,6,7,8,9]);
})

Deno.test("Spiel ist am Anfang nicht fertig", () => {

    //Arrange
    const board = new Board();

    //Act
    const result = board.isFinished();

    //Assert
    assertEquals(result, false);
})

Deno.test("Spiel ist fertig wenn alle Zahlen geflippt sind", () => {

    //Arrange
    const board = new Board();

    //Act
    board.flipNumber([1,2,3,4,5,6,7,8,9]);

    //Assert
    assertEquals(board.isFinished(), true);
})