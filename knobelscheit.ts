import { Wuerfel } from "./wuerfel.ts";

export class Knobelscheit {
  private umgeklappt = new Set<number>();

  public anzeige(): string {
    const felder: string[] = [];
    for (let i = 1; i <= 9; i++) {
      felder.push(this.umgeklappt.has(i) ? "X" : i.toString());
    }
    return felder.join(" ");
  }

  beendet(): boolean {
    return this.umgeklappt.size === 9;
  }

  umklappen(zahlen: number[], summe: number): boolean {
    if (zahlen.length === 0) return false;

    const unique = [...new Set(zahlen)];
    if (unique.length !== zahlen.length) return false;

    for (const n of unique) {
      if (!Number.isInteger(n) || n < 1 || n > 9 || this.umgeklappt.has(n)) {
        return false;
      }
    }
    const s = unique.reduce((acc, n) => acc + n, 0);
    if (s !== summe) return false;

    for (const n of unique) this.umgeklappt.add(n);
    return true;
  }

  getCubeSum(): number {
    return Wuerfel.throw().reduce((acc, n) => acc + n, 0);
  }
}
