import { assert, assertEquals, assertFalse } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("zu Beginn sind alle Zahlen von 1-9 offen", () => {

    const knobelscheit = new Knobelscheit();

    assertEquals(knobelscheit.offeneZahlen(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

});

Deno.test("eine Zahl wird umgeklappt wenn sie der Augensumme entspricht", () => {

    const knobelscheit = new Knobelscheit();

    const erfolg = knobelscheit.umklappen([9], 9);

    assert(erfolg);
    assertEquals(knobelscheit.offeneZahlen(), [1, 2, 3, 4, 5, 6, 7, 8]);
});
Deno.test("mehrere Zahlen werden umgeklappt wenn die Summe der Augensumme entspricht", () => {

    const knobelscheit = new Knobelscheit();

    const erfolg = knobelscheit.umklappen([4, 5], 9);

    assert(erfolg);
    assertEquals(knobelscheit.offeneZahlen(), [1, 2, 3, 6, 7, 8, 9]);
});
Deno.test("mehrere Zahlen werden nicht umgeklappt wenn die Summe nicht der Augensumme entspricht", () => {

    const knobelscheit = new Knobelscheit();

    const erfolg = knobelscheit.umklappen([4, 5], 8);

    assertFalse(erfolg);
    assertEquals(knobelscheit.offeneZahlen(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

});
Deno.test("eine bereits umgeklappte Zahl wird nicht nochmals umgeklappt", () => {

    const knobelscheit = new Knobelscheit();
    knobelscheit.umklappen([9], 9);

    assertFalse(knobelscheit.umklappen([9], 9))

});
Deno.test("leere Array ist ungültig", () => {

    const knobelscheit = new Knobelscheit();
    const erfolg = knobelscheit.umklappen([], 9);

    assertFalse(erfolg)

});

Deno.test("hatGueltigenZug gibt true bei richtigen Kombinationen", () => {

    const knobelscheit = new Knobelscheit();

    assert(knobelscheit.hatGueltigenZug(2));
    assert(knobelscheit.hatGueltigenZug(9));
    assert(knobelscheit.hatGueltigenZug(7));
});

Deno.test("wenn eine Zahl offen ist und keinen gültigen Zug mehr gibt ist das Spiel blockiert", () => {

    const knobelscheit = new Knobelscheit();

    for (const zahl of [2, 3, 4, 5, 6, 7, 8, 9]) knobelscheit.umklappen([zahl], zahl);

    assertEquals(knobelscheit.offeneZahlen(), [1]);

    for (let augensumme = 2; augensumme <= 12; augensumme++){
        assertFalse(knobelscheit.hatGueltigenZug(augensumme))
    }

    assert(knobelscheit.istBlockiert());
})


Deno.test("wenn alle Zahlen umgeklappt sind, dann ist das Spiel fertig", () => {

    const knobelscheit = new Knobelscheit();

    for (const zahl of [1, 2, 3, 4, 5, 6, 7, 8, 9]) knobelscheit.umklappen([zahl], zahl);

    assert(knobelscheit.istFertig());
    assertEquals(knobelscheit.offeneZahlen(), [])

});
