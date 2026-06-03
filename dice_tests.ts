import { assertGreaterOrEqual, assertLessOrEqual } from "@std/assert";
import { rolldice } from "./dice.ts";

Deno.test("Würfel im richtigen bereich", () => {

const roll = rolldice();

assertGreaterOrEqual(roll, 2);
assertLessOrEqual(roll, 12);

});
