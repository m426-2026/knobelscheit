export class knobelscheit {
    unumgeklappt: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    umgeklappt: number[] = [];

    umklappen(zahl: number) : void 
    {
        this.umgeklappt.push(zahl);
        this.unumgeklappt[zahl] = 0;
    }

    istgewonnen() : boolean
    {
        if(this.unumgeklappt.every(zahl => zahl === 0))
            return true
        return false
    }

    istverloren() : boolean
    {
        if(JSON.stringify(this.unumgeklappt) == JSON.stringify([0, 1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0]))
            return true
        return false
    }

    istfrei(zahl: number) : boolean
    {
        if(this.unumgeklappt.includes(zahl))
            return true
        return false
    }
}