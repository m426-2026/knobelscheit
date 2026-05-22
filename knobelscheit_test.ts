import { assertEquals } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("Startanzeige", () => {
  const knobelscheit = new Knobelscheit();
  const anzeige = knobelscheit.anzeige();
  assertEquals(anzeige.length, 9 + 8); // 9 Zahlen + 8 Leerzeichen
  assertEquals(anzeige, "1 2 3 4 5 6 7 8 9");
});

Deno.test("Gueltiges Umklappen", () => {
  const knobelscheit = new Knobelscheit();
  assertEquals(knobelscheit.umklappen([2, 3], 5), true);
  assertEquals(knobelscheit.anzeige(), "1 X X 4 5 6 7 8 9");
});

Deno.test("Ungueltiges Umklappen", () => {
  const knobelscheit = new Knobelscheit();
  assertEquals(knobelscheit.umklappen([2, 3], 6), false);
  assertEquals(knobelscheit.anzeige(), "1 2 3 4 5 6 7 8 9");
});

Deno.test("Spielende", () => {
  const knobelscheit = new Knobelscheit();
  for (let i = 1; i <= 9; i++) knobelscheit.umklappen([i], i);
  assertEquals(knobelscheit.beendet(), true);
});

Deno.test("Take Result from Cubes", () => {
  // Arrange
  let sum = 0;
  const knobelscheit = new Knobelscheit();

  // Act
  sum = knobelscheit.getCubeSum();

  // Assert
  assertEquals(sum >= 2 && sum <= 12, true);
});
