import { assert, assertEquals } from '@std/assert'
import {
	chooseMoreNumbers,
	Knobelscheit,
	notANumber,
	numberNotAvailable,
	numbersInUseString,
	rollExceeded,
	validCombination,
} from './knobelscheit.ts'

const numbersToUse = new Set([1, 2, 3])
const allNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])

Deno.test('KNOBEL: validateInput returns different string, based on currentPlay', () => {
	// Arrange
	const num1 = 1
	const num2 = 3
	const knobel = new Knobelscheit(num1, num2)

	// Act
	const bigInput = knobel.validateInput('5')
	const smallInput = knobel.validateInput(String(num1))
	const perfectInput = knobel.validateInput(String(num2))

	// Assert
	assertEquals(bigInput, rollExceeded + '\n' + numbersInUseString)
	assertEquals(smallInput, chooseMoreNumbers + '\n' + numbersInUseString + ' ' + num1)
	assertEquals(perfectInput, validCombination + '\n' + numbersInUseString)
})

Deno.test('KNOBEL: validateInput returns "notANumber" if not a number', () => {
	// Arrange
	const knobel = new Knobelscheit(1, 3)

	// Act
	const checkOutOfRange = knobel.validateInput('4440')
	const checkWrongInput = knobel.validateInput('asd')
	// Assert
	assertEquals(checkOutOfRange, numberNotAvailable)
	assertEquals(checkWrongInput, notANumber)
})

Deno.test('KNOBEL: validateInput returns "numberNotAvailable" if not inside of availableNumbers', () => {
	// Arrange
	const numberToUse = 3
	const knobel = new Knobelscheit(1, 2)

	// Act
	knobel.validateInput(String(numberToUse))
	knobel.useNumbers()
	const invalidCheck = knobel.validateInput(String(numberToUse))

	// Assert
	assertEquals(invalidCheck, numberNotAvailable)
})

Deno.test('KNOBEL: useNumbers moves the correct numbers', () => {
	// Arrange
	const knobel = new Knobelscheit(4, 5)

	// Act
	numbersToUse.forEach((value) => knobel.validateInput(String(value)))
	knobel.useNumbers()

	// Assert
	assertEquals(knobel.usedNumbers, numbersToUse)
	assertEquals(knobel.availableNumbers, new Set([4, 5, 6, 7, 8, 9]))
})

Deno.test('KNOBEL: checkState makes useNumber return false when availableNumbers not empty', () => {
	// Arrange
	const knobel = new Knobelscheit(2, 3)

	// Act
	numbersToUse.forEach((value) => knobel.validateInput(String(value)))
	const check = knobel.useNumbers()

	// Assert
	assert(!check)
})

Deno.test('KNOBEL: checkState makes useNumber return true when availableNumbers empty', () => {
	// Arrange
	const knobel = new Knobelscheit(40, 5)

	// Act
	allNumbers.forEach((value) => knobel.validateInput(String(value)))
	const check = knobel.useNumbers()

	// Assert
	assert(check)
})

Deno.test('KNOBEL: getState returns the formatted string (no change)', () => {
	// Arrange
	const knobel = new Knobelscheit(5, 4)

	// Assert
	assertEquals(knobel.getStateAsString(), 'Used numbers:\nAvailable numbers: 1 2 3 4 5 6 7 8 9')
})

Deno.test('KNOBEL: getState returns the formatted string', () => {
	// Arrange
	const knobel = new Knobelscheit(5, 6)

	// Act
	numbersToUse.forEach((value) => knobel.validateInput(String(value)))
	knobel.useNumbers()

	// Assert
	assertEquals(knobel.getStateAsString(), 'Used numbers: 1 2 3\nAvailable numbers: 4 5 6 7 8 9')
})

Deno.test('KNOBEL: checkRoundState checks if round is finished', () => {
	// Arrange
	const knobel = new Knobelscheit(40, 5)

	// Act
	allNumbers.forEach((value) => knobel.validateInput(String(value)))
	knobel.useNumbers()

	// Assert
	assert(knobel.checkRoundState())
})

Deno.test('KNOBEL: rollDice rolls the die (how to test random numbers haha?) and returns correct values', () => {
	// Arrange
	const knobel = new Knobelscheit()

	const check = knobel.rollDie()

	const dice1Value = knobel.dice1.number
	const dice2Value = knobel.dice2.number

	const realString = 'Dice values: ' + dice1Value + ' and ' + dice2Value
	// Assert
	assertEquals(check, realString)
})
