export class Würfel {
    number: number = 0;

    public roll(): number {
        this.number = Math.ceil(Math.random() * 6)
        return this.number
    }
}