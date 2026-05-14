import { Dice } from './dice.ts'

export const notANumber: string = 'Input is not a number, try again.'
export const numberNotAvailable: string = 'Number is not available, try again.'
export const validCombination: string = 'Valid combination, numbers removed.'
export const rollExceeded: string = 'You exceeded the roll, try again.'
export const chooseMoreNumbers: string = 'Choose more numbers.'
export const numbersInUseString: string = 'Current numbers in use:'

export class Knobelscheit {
	public availableNumbers: Set<number>
	public usedNumbers: Set<number>
	public numbersInPlay: Set<number>
	public dice1: Dice
	public dice2: Dice
	public rollCount: number = 0

	constructor() {
		this.availableNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
		this.usedNumbers = new Set()
		this.numbersInPlay = new Set()
		this.dice1 = new Dice()
		this.dice2 = new Dice()
	}

	public validateInput(input: string | null): string {
		const number = Number(input)
		if (Number.isNaN(number)) {
			return notANumber
		}

		if (!this.availableNumbers.has(number)) {
			return numberNotAvailable
		}
		this.numbersInPlay.add(number)
		return this.checkCurrentPlay() + '\n' + this.formatNumbersInPlay()
	}

	public useNumbers(): boolean {
		this.numbersInPlay.forEach((value) => {
			this.availableNumbers.delete(value)
			this.usedNumbers.add(value)
		})

		this.numbersInPlay.clear()

		return this.checkGameState()
	}

	public getStateAsString(): string {
		let output = 'Used numbers:'
		this.usedNumbers.forEach((value) => (output += ' ' + value))

		output += '\nAvailable numbers:'
		this.availableNumbers.forEach((value) => (output += ' ' + value))

		return output
	}

	private checkCurrentPlay(): string {
		const roll = this.dice1.number + this.dice2.number
		let myValue = 0

		this.numbersInPlay.forEach((value) => (myValue += value))
		if (myValue < roll) {
			return chooseMoreNumbers
		}
		if (myValue > roll) {
			this.numbersInPlay.clear()
			return rollExceeded
		}
		this.useNumbers()
		return validCombination
	}

	public checkGameState(): boolean {
		return this.availableNumbers.size == 0
	}

	public checkRoundState(): boolean {
		return this.numbersInPlay.size == 0
	}

	private formatNumbersInPlay(): string {
		let output = numbersInUseString
		this.numbersInPlay.forEach((value) => (output += ' ' + value))

		return output
	}

	public rollDie(): string {
		this.rollCount++
		this.dice1.roll()
		this.dice2.roll()

		return 'Dice values: ' + this.dice1.number + ' and ' + this.dice2.number
	}
}
