export class Knobelscheit {
  offeneZahlen: number[];

  constructor() {
    this.offeneZahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  umdrehen(zahlen: number[]) {
    this.offeneZahlen = this.offeneZahlen.filter((zahl) =>
      !zahlen.includes(zahl)
    );
  }

  istGueltigerZug(zahlen: number[], wuerfelSumme: number): boolean {
    const alleOffen = zahlen.every((zahl) => this.offeneZahlen.includes(zahl));
    const summe = zahlen.reduce((a, b) => a + b, 0);
    return alleOffen && summe === wuerfelSumme;
  }

  istGewonnen(): boolean {
    return this.offeneZahlen.length === 0;
  }

  private kannErreichen(zahlen: number[], ziel: number, i: number): boolean {
    if (ziel === 0) return true;
    if (i >= zahlen.length || ziel < 0) return false;
    return this.kannErreichen(zahlen, ziel - zahlen[i], i + 1) || this.kannErreichen(zahlen, ziel, i + 1);
  }

  zugMoeglich(wuerfelSumme: number): boolean {
    return this.kannErreichen(this.offeneZahlen, wuerfelSumme, 0)
  }
}
