export class Knobelscheit{
    private readonly offen = new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    offeneZahlen() : number[] {
        return [...this.offen].sort((a, b) => a - b)
    }

    kannUmklappen(zahlen: number[], augensumme: number) : boolean {
        if(zahlen.length === 0) return false;
        if(new Set(zahlen).size !== zahlen.length) return false;
        if(!zahlen.every((zahl) => this.offen.has(zahl))) return false
        return summe(zahlen) === augensumme
    }

    umklappen(zahlen: number[], augensumme: number) : boolean {
        if(!this.kannUmklappen(zahlen, augensumme))
            return false;
        for(const zahl of zahlen) 
            this.offen.delete(zahl)
        return true
    }

    hatGueltigenZug(augensumme: number) : boolean {
        const offen = this.offeneZahlen()

        const erreichbar = (index: number, rest: number) : boolean => {
            if(rest === 0) return true;
            if(rest < 0 || index >= offen.length) return false;

            return erreichbar(index + 1, rest  - offen[index]) || erreichbar(index + 1, rest)
        };

        return augensumme >= 1 && erreichbar(0, augensumme);
    }
}

function summe(zahlen: number[]) : number{
    return zahlen.reduce((total, zahl) => total + zahl, 0);
}