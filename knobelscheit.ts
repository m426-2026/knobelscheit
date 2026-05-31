import { Würfel } from "./würfel.ts";

export class Knobelscheit {
    zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    würfel1: number = 0;
    würfel2: number = 0;

    istOffen(zahl: number): boolean {
        return this.zahlen.includes(zahl);
    }

    rausnehmen(zahl:number): void{
        this.zahlen.splice(this.zahlen.indexOf(zahl));
    }

    würfeln() {
        const würfel1 = new Würfel();
        const würfel2 = new Würfel();

        this.würfel1 = würfel1.roll();
        this.würfel2 = würfel2.roll();

        return {
            würfel1: this.würfel1,
            würfel2: this.würfel2
        }
    }

    get summe(): number {
        return this.würfel1 + this.würfel2;
    }
}