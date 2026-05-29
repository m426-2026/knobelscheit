export class Dice {
	number: number
	constructor(num?: number) {
		this.number = num ?? 0
	}

	public roll(): number {
		this.number = Math.ceil(Math.random() * 6)
		return this.number
	}
}
