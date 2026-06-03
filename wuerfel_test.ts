import { assert, assertEquals } from "@std/assert";
import { Wuerfel } from "./wuerfel.ts";

Deno.test("Zudallswert von 0 gibt die Augenzahl 1", () => {

    const wuerfel = new Wuerfel(() => 0);

    const augenzahl = wuerfel.wuerfeln();

    assertEquals(augenzahl, 1)

});

Deno.test("Zufallswert nahe an 1 ergibt Augenzahl 6", () => {

    const wuerfel = new Wuerfel(() => 0.999);

    const augenzahl = wuerfel.wuerfeln();

    assertEquals(augenzahl, 6)

});

Deno.test("Zufallswert 0.5 ergibt Augenzahl 4", () => {

    const wuerfel = new Wuerfel(() => 0.5);

    const augenzahl = wuerfel.wuerfeln();

    assertEquals(augenzahl, 4)

});

Deno.test("echtes Würfeln gibt Augenzahl zwischen 1 und 6", () => {

    const wuerfel = new Wuerfel();

    for (let i = 0; i < 1000; i++)
    {
        const augenzahl = wuerfel.wuerfeln();
        assert(
            augenzahl >= 1 && augenzahl <= 6
        );
    }
});