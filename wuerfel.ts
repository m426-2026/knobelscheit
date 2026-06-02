export class Wuerfel {
    public ergebnis = 0;

    public werfen() {
        this.ergebnis = Math.floor(Math.random() * 6) + 1;
    }
}