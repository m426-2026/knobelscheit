import { assertEquals } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { wuerfelnZusammen, wuerfelwurfeln } from "./wuerfelfunktion.ts";
import { zahlenErstellen, umgeklappt, gewinnfunktion } from "./brettfunktion.ts";


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

Deno.test("Wurfel gibt Zahl 1 - 6", function(){

const gewuerfelteZahl = wuerfelwurfeln();


assertEquals(gewuerfelteZahl >= 1 && gewuerfelteZahl <= 6, true);



});

Deno.test("2 Wuerfel zusammen geben 2 - 12", function(){

  const gewuerfelteZahlZusammen = wuerfelnZusammen();

  assertEquals(gewuerfelteZahlZusammen >= 2 && gewuerfelteZahlZusammen <= 12, true);



});

Deno.test("Zahlen 1 - 9 sind vorhanden", function(){

  const zahlen = zahlenErstellen();

  assertEquals(zahlen, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(zahlen);

});

Deno.test("Zahl wird umgeklappt", function(){

 const zahlen = zahlenErstellen();
console.log(zahlen)

 const umgeklappteZahlen = umgeklappt(zahlen, 4);

 assertEquals(zahlen.includes(4), true);
 console.log(umgeklappteZahlen);


});

Deno.test("Gewinnen wenn Brett leer ist", function(){

const boolean = gewinnfunktion();

assertEquals(boolean, true);

});


Deno.test("Falls summe vorhanden, einzelne Zahlen genommen", function(){

 const zahlen = zahlenErstellen();
 console.log(zahlen)

 const umgeklappteZahlen = umgeklappt(zahlen, 4);

<<<<<<< HEAD
 /*const umgeklappteZahlenNachSumme = umgeklapptNachSumme(umgeklappteZahlen, 4);
=======
 const umgeklappteZahlenNachSumme = umgeklapptNachSumme(umgeklappteZahlen, 4);
>>>>>>> 884dd63864595025f5439d3b8f9ada02797017fa

 assertEquals(umgeklappteZahlenNachSumme.includes(4, 3, 2), true);
 console.log(umgeklappteZahlenNachSumme);

 
<<<<<<< HEAD
});
=======
});

>>>>>>> 884dd63864595025f5439d3b8f9ada02797017fa
