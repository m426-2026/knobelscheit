import { assert, assertEquals } from "@std/assert";
import { Knobelscheit  } from './knobelscheit.ts'

Deno.test('Initalwerte vorhanden', () => {
    const game = new Knobelscheit();
    assertEquals(game.remainingNumbers(), [1, 2, 3, 4, 5, 6, 7, 8, 9])
    assertEquals(game.alreadyFlippedNumbers(), [])
    assertEquals(game.gameOver(), false)

});

Deno.test('Korekte Werte umflippen wenn die Summe passt', () => {
    const game = new Knobelscheit();
    const flips = game.flip([3, 6], 9);
    assertEquals(flips, true)

    assertEquals(game.remainingNumbers(), [1, 2, 4, 5, 7, 8, 9])
});

Deno.test('Schon geflipte werte können nicht mehr geflipt werden', () => {
    const game = new Knobelscheit();
    assert(game.flip([2,4],6));
    assert(!game.flip([3,3],6));
});

Deno.test('Invalide Werte', () => {
    const game = new Knobelscheit();
    assert(!game.flip([1, 7],9));
});