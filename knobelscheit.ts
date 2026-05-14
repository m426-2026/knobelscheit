export const notANumber: string = 'Input is not a number, try again.'
export const numberNotAvailable: string = 'Number is not available, try again.'

export class Knobelscheit {
	public availableNumbers: Set<number>
	public usedNumbers: Set<number>
	public numbersInPlay: Set<number>
	constructor() {
		this.availableNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
		this.usedNumbers = new Set()
		this.numbersInPlay = new Set()
	}

	public validateInput(input: string): string {
		const number = Number(input)
		if (Number.isNaN(number)) {
			return notANumber
		}
		if (!this.availableNumbers.has(number)) {
			return numberNotAvailable
		}
		this.numbersInPlay.add(number)
		return this.formatNumbersInPlay()
	}

	public useNumbers(): boolean {
		this.numbersInPlay.forEach((value) => {
			this.availableNumbers.delete(value)
			this.usedNumbers.add(value)
		})

		this.numbersInPlay.clear()

		return this.checkState()
	}

	public getStateAsString(): string {
		let output = 'Used numbers:'
		this.usedNumbers.forEach((value) => (output += ' ' + value))

		output += '\nAvailable numbers:'
		this.availableNumbers.forEach((value) => (output += ' ' + value))

		return output
	}

	private checkState(): boolean {
		return this.availableNumbers.size == 0
	}

	private formatNumbersInPlay(): string {
		let output = 'Current numbers in use:'
		this.numbersInPlay.forEach((value) => (output += ' ' + value))

		return output
	}
}
