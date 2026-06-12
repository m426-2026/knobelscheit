export class Spielbrett {
    private zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    public getOffene(): number[] {
        return this.zahlen;
    }
}