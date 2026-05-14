export class Knobelscheit {
	public availableNumbers: Set<number>
	public usedNumbers: Set<number>
	constructor() {
		this.availableNumbers = new Set()
		this.usedNumbers = new Set()
	}

	public validateInput(input: string): boolean {
		return false
	}

	public useNumbers(numbers: Set<number>): boolean {
		return false
	}

	public getState(): string {
		return ''
	}

	private checkState(): boolean {
		return false
	}
}
