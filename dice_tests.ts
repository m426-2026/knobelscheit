import { assertGreaterOrEqual, assertLessOrEqual } from "@std/assert";
import { rolldice } from "./dice.ts";

Deno.test("würfe im richtigen Bereich", () => {

    // Act
    const roll = rolldice();

  assertGreaterOrEqual(roll, 2);
  assertLessOrEqual(roll, 12);
});