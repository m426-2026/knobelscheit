import { assert, assertEquals } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("Beginnen mit allen 9 Zahlen", () => {
  const brett = new Knobelscheit();
  assertEquals(brett.getActive(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test("canFlip: aktive zahlen können umgeklappt werden", () => {
  const brett = new Knobelscheit();
  assert(brett.canFlip([1, 2, 3]));
});

Deno.test("canFlip: umgeklappte Zahlen können nicht erneut umgeklappt werden", () => {
    const brett = new Knobelscheit();
    brett.flip([1]);
    assert(!brett.canFlip([1]));
})

Deno.test("flip: Zahlen werden markiert als umgeklappt", () =>{
    const brett = new Knobelscheit();
    brett.flip([1, 2]);
    assertEquals(brett.getActive(), [3, 4, 5, 6, 7, 8, 9]);
})

Deno.test("isWon: gibt false zurück wenn noch zahlen aktiv sind", () => {
    const brett = new Knobelscheit();
    assert(!brett.isWon())
})

Deno.test("isWon: gibt true zurüc wenn alle zahlen umgeklappt sind", () => {
    const brett = new Knobelscheit();
    brett.flip([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert(brett.isWon())
})

Deno.test("findCombinations: findet Einzelzahl als kombination", () =>{
    const brett = new Knobelscheit
    const result = brett.findCombinations(5);
    assert(result.some((k) => JSON.stringify(k) === JSON.stringify([5])))
}) 

Deno.test("findCombinations: findet kombination aus zwei Zahlen", () =>{
    const brett = new Knobelscheit
    const result = brett.findCombinations(6);
    assert(result.some((k) => JSON.stringify(k) === JSON.stringify([2,4])))
})

Deno.test("findCombination: findet mehrere kombinationen für eine Zahl", () =>{
    const brett = new Knobelscheit
    const result = brett.findCombinations(7);
    assert(result.length > 1)
})

Deno.test("findCombination: findet keine kombinationen für eine Zahl", () =>{
    const brett = new Knobelscheit
    brett.flip([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const result = brett.findCombinations(3);
    assertEquals(result.length, 0)
})