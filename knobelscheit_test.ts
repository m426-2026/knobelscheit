import {assertEquals} from @std/assert;
import {istFertig, ZahlenUmklappen, neuesSpiel} from ./knobelscheit.ts;

Deno.test("neusSpiel startet mit den Zahlen 1 bis 9", () => {
    
    assertEquals(neuesSpiel(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test("ZahlenUmklappen entrfernt offene Zahl", () => {
    const offenZahlen = neuesSpiel();
    const neueOffeneZahlen = ZahlenUmklappen(offenZahlen, [4, 5], 9);
    assertEquals(neueOffeneZahlen, [1, 2, 3, 6, 7, 8, 9]);
});