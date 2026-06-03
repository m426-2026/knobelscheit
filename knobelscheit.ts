export class knobelscheit {
    unumgeklappt: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    umgeklappt: number[] = [];

    umklappen(zahl: number) : void {
        this.umgeklappt.push(zahl);
        this.unumgeklappt.splice(zahl)
    }
}