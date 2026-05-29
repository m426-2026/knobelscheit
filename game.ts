import { Knobelscheit, numbersInUseString, validCombination } from './knobelscheit.ts'

let wantsToPlay = true

console.log('\nLets play Knobelscheit!')

while (wantsToPlay) {
	const knobel = new Knobelscheit()

	while (!knobel.checkGameState()) {
		console.log('\nThrowing your die...')
		const rollResult = knobel.rollDie()
		console.log(rollResult)

		console.log('\nWhich numbers do you want to remove?')
		console.log(knobel.getStateAsString())

		let numbersRemoved = false
		while (!numbersRemoved) {
			const userInput = prompt('\nChoose a number (or press enter if you want to roll again):')
			if (userInput == '') break

			const validation = knobel.validateInput(userInput)
			console.log(validation)
			numbersRemoved = validation === validCombination + '\n' + numbersInUseString
		}
	}
	console.log('You won in ' + knobel.rollCount + ' rolls!')
	wantsToPlay = prompt('\nDo you want to play another? y/n') == 'y'
}
