export function rollDice() {
    return Math.floor(Math.random()*6+1)
}

export function rollTwoDice(remainingNumbers: number[]) {
    let numer1 = 0;
    let numer2 = 0;
    
    do {
        numer1 = rollDice()
        numer2 = rollDice()
    }while(!remainingNumbers.includes((numer1+numer2)))
    
    const sum = numer1 + numer2
    return {
        one: numer1,
        two: numer2,
        sum:sum
    }
}
