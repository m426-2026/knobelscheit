import {assert} from @std/assert;
import {würfelEinmal} from ./würfel.ts;

Deno.test("würfelEinmal gibt eine Zahl zwischen 1 und 6 zurück", () => {
    const wurf = würfelEinmal();
  
    assert(wurf >= 1);
    assert(wurf <= 6);
});

Deno.test("würfelZweimal gibt eine Zahl zwischen 2 und 12 zurück", () => {
    const wurfsumme = würfelZweimal();
    assert(wurf >= 2);
    assert(wurf <= 12);
});