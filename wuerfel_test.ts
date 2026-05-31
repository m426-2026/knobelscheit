import { assert } from "@std/assert";
import { roll, rollTwo } from "./wuerfel.ts";

Deno.test("roll gibt eine zahl zwischen 1 - 6 zurück", () => {
  for (let i = 0; i < 100; i++) {
    const result = roll();

    assert(result >= 1 && result <= 6);
  }
});

Deno.test("rollTwo gibt eine Zahl von 2-12 zurück", () => {
  for (let i = 0; i < 100; i++) {
    const result = rollTwo();
    assert(result >= 2 && result <= 12);
  }
});
