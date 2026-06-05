import { wuerfelwurfeln } from "./wuerfelfunktion";

export function zahlenErstellen() : number[]{

return [1, 2, 3, 4, 5, 6, 7, 8, 9];

}

export function umgeklappt(zahlenErstellen : number[], wuerfelnZusammen : number ) : number[]{



 const arrayNachSumme = zahlenErstellen.toSpliced(wuerfelnZusammen, 1);

 return arrayNachSumme;

}  

export function gewinnfunktion() : boolean{

    if (zahlenErstellen.length === 0){
        console.log("You won! :)")
        return true;
    }
    else {
        console.log("Keep going!")
        return false;
    }




}

<<<<<<< HEAD
=======
export function umgeklappteZahlenNachSumme(umgeklappt : number[], wuerfelnZusammen : number, wuerfelwuerfeln : number, wuerfelwurfeln2 : number ) : number[]{

    if (umgeklappt.includes[wuerfelnZusammen], true)
        

}
>>>>>>> 884dd63864595025f5439d3b8f9ada02797017fa
