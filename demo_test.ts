import { assertEquals, assertLessOrEqual } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { wuerfeln } from "./wuerfeln.ts";
import { assertGreaterOrEqual } from "@std/assert";
import { Spielbrett } from "./spielbrett.ts";
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

Deno.test ("start status", () => {
  let b = new Spielbrett();
  assertEquals(b.getroffene(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test ("zug akzeptiert", () => {
  let b = new Spielbrett();
  assertEquals (b.macheZug([4, 5], 9), true);
  assertEquals (b.getroffene(), [1, 2, 3, 6, 7, 8, 9]);
});

Deno.test("falscher zug", () => {
  let b = new Spielbrett();
  assertEquals (b.macheZug([4, 6], 9), false);
  b.macheZug([1], 1);
  assertEquals(b.macheZug([1], 1), false);
});