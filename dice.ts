export class Dice {
	number: number = 0
	constructor() {}

	public roll(): number {
		this.number = Math.ceil(Math.random() * 6)
		return this.number
	}
}
