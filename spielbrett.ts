export class Spielbrett {
    private zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    public getroffene(): number[] {
        return this.zahlen;
    } 
    public macheZug(auswahl1: number[], summe: number): boolean {
        let tempSum = 0;
        for (let num of auswahl1) {
            tempSum += num;
        }
        if (tempSum !== summe) return false;

        let allesDa = auswahl1.every(x => this.zahlen.includes(x));
        if (!allesDa) return false;

        this.zahlen = this.zahlen.filter(x => !auswahl1.includes(x)); 
        return true;
    }

    public isGameOver(): boolean {
        return this.zahlen.length === 0;
    }
}