import { assertEquals } from "@std/assert";
import { Wuerfel } from "./wuerfel.ts";

Deno.test("Throw results in range from 2 to 12", () => {
  // Arrange
  let sum = 0;

  // Act
  const results = Wuerfel.throw();
  sum = results[0] + results[1];

  // Assert
  assertEquals(sum >= 2 && sum <= 12, true);
});
