import { assertGreaterOrEqual } from "@std/assert/greater-or-equal";
import { assertLessOrEqual } from "@std/assert/less-or-equal";
import { roll, rollTwice } from "./dice.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("Dice roll between 1 and 6.", () => {
  for (let i = 0; i < 100; i++) {
    const result: number = roll();

    assertGreaterOrEqual(result, 1);
    assertLessOrEqual(result, 6);
  }
});

Deno.test("Rolled number is integer.", () => {
  for (let i = 0; i < 100; i++) {
    const result: number = roll();

    const rounded = Math.round(result);

    assertEquals(result, rounded);
  }
});

Deno.test("Roll with 2 dice.", () => {
  for (let i = 0; i < 100; i++) {
    const result: number = rollTwice();

    assertGreaterOrEqual(result, 2);
    assertLessOrEqual(result, 12);

    const rounded = Math.round(result);

    assertEquals(result, rounded);
  }
});
