
       
export class Knobelscheit  {
    public remainingNumbersList: number[] = [1,2,3,4,5,6,7,8,9];
    public alreadyFlippedNumbersList: number[] = [];
    

   remainingNumbers (): number[] {
        return this.remainingNumbersList
    }   
    alreadyFlippedNumbers(): number[] { 
        return this.alreadyFlippedNumbersList
    }
    gameOver (): boolean { 

       return this.remainingNumbersList.length == 0;
        
    }
    canFlip (num: number): boolean {
        return this.remainingNumbersList.includes(num)
    }
    flip (nums: number[], sum: number): boolean {
        if (nums.length == 0){
            return false;
        }

        let total = 0;
        const usedNumbers: number[] = []

        for (const num of nums){
            if (!Number.isInteger(num)|| num < 1 || num > 9){
                return false
            }

            if (!this.canFlip(num)|| usedNumbers.includes(num)){
                return false
            }

            usedNumbers.push(num);
            total +=num;
        }

        if (total !== sum){
            return false;
        }

        for (const num of nums){
            this.alreadyFlippedNumbersList.push(num);
            this.remainingNumbersList = this.remainingNumbersList.filter((value) => value !== num);
        }

        return true
    }



}


