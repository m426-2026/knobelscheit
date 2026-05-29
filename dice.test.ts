import { assert } from '@std/assert'
import { Dice } from './dice.ts'

Deno.test('DICE: roll dice between 1 and 6', function roll() {
	// Arrange
	const dice = new Dice()

	// Act
	const actual = dice.roll()

	// Assert
	const isValid = actual > 0 && actual < 7
	assert(isValid)
})
