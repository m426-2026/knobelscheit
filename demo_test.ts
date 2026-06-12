import { assertEquals, assertLessOrEqual } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { wuerfeln } from "./wuerfeln.ts";
import { assertGreaterOrEqual } from "@std/assert";

Deno.test("3 + 5 = 8", function addTest() {
  // Arrange
  const a = 3;
  const b = 5;

  // Act
  const actual = formattedAddition(a, b);

  // Assert
  assertEquals(actual, "3 + 5 = 8");
});

Deno.test("3 + -5 = -2", function addTest() {
  // Given
  const a = 3;
  const b = -5;

  // When
  const actual = formattedAddition(a, b);

  // Then
  assertEquals(actual, "3 + -5 = -2");
});


Deno.test("wuerfel test 1-6", () => {
  for (let i = 0; i < 50; i++){
    let result = wuerfeln();
    assertGreaterOrEqual(result, 1);
    assertLessOrEqual(result, 6);
  }
});