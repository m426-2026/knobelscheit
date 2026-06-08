import { assertEquals } from "@std/assert";
import { rollDie, rollDice, diceSum } from "./dice.ts";


// -------------- rollDie -------------- //

Deno.test("rollDie gibt einen ganzzahligen Wert zurück", () => {
    const result = rollDie();
    assertEquals(Number.isInteger(result), true);
}) 

Deno.test("rollDie liegt immer zwischen 1 und 6", () => {
    for (let i = 0; i < 1000; i++) {
        const result = rollDie();
        assertEquals(
            result >= 1 && result <= 6,
            true,
            'Ungültiger Würfelwert: ${result}',
        );
    }
})

Deno.test("rollDie erzeugt verschiedene Werte", () => {
    const values = new Set<number>();
    for (let i = 0; i < 200; i++) values.add(rollDie());
    assertEquals(values.size >= 3, true, "Würfel scheint nicht zufällig zu sein");
})


// -------------- rollDice -------------- //

Deno.test("rollDice gibt ein Tupel mit zwei Werten zurück", () => {
    const result = rollDice();
    assertEquals(result.length, 2);
});

Deno.test("rollDice: Beider Werte zwischen 1 und 6", () => {
    for (let i = 0; i < 500; i++)   {
        const [d1, d2] = rollDice();
        assertEquals(d1 >= 1 && d1 <= 6, true, `Würfel 1 ungültig: ${d1}` );
        assertEquals(d2 >= 1 && d1 <= 6, true, `Würfel 2 ungültig: ${d2}` );
    }
});

Deno.test("beide Würfel sind ganzzahlig", () => {
    const [d1, d2] = rollDice();
    assertEquals(Number.isInteger(d1), true);
    assertEquals(Number.isInteger(d2), true);
});


// -------------- diceSum -------------- //

Deno.test("dicesum: 1 + 1 = 2", () => {
    assertEquals(diceSum([1, 1]), 2);
});

Deno.test("dicesum: 6 + 6 = 12", () => {
    assertEquals(diceSum([6, 6]), 12);
});

Deno.test("dicesum: 3 + 4 = 7", () => {
    assertEquals(diceSum([3, 4]), 7);
});

Deno.test("diceSum liegt immer zwischen 2 und 12", () => {
    for (let i = 0; i < 500; i++) {
        const sum = diceSum(rollDice());
        assertEquals(sum >= 2 && sum <= 12, true, `Ungültige Summe: ${sum}`);
    }
})
