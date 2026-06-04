export class Wuerfel{
    constructor( private readonly zufall: () => number = Math.random) {}

    wuerfeln() : number {
        return Math.floor(this.zufall() * 6) + 1;
    }
}