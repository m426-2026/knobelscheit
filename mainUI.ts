import { assertEquals } from "@std/assert";
import { wuerfelnZusammen, wuerfelwurfeln } from "./wuerfelfunktion.ts";
import { zahlenErstellen, umgeklappt, gewinnfunktion } from "./brettfunktion.ts";


console.log("Welcome to Knobelspiel!");

const zahlen = zahlenErstellen();
console.log("Zahlen auf dem Brett: ", zahlen);
const wuerfelwuerfeln = wuerfelwurfeln();
console.log("Würfelwurf: ", wuerfelwuerfeln);
 let benutzerEIngabe = prompt("Bitte geben sie eine Zahl die sie runter werfen");








