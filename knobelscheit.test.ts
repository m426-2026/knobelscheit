import { assert, assertEquals } from '@std/assert'
import { Knobelscheit } from './knobelscheit.ts'

const numbersToUse = new Set([1, 2, 3])
const allNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])

Deno.test('KNOBEL: validateInput needs to be a number between 1-9', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	const validCheck = knobel.validateInput('3')
	const checkOutOfRange = knobel.validateInput('4440')
	const checkWrongInput = knobel.validateInput('asd')

	// Assert
	assert(validCheck)
	assert(checkOutOfRange)
	assert(checkWrongInput)
})

Deno.test('KNOBEL: validateInput needs to be a number inside of knobel.availableNumbers', () => {
	// Arrange
	const numberToUse = 3
	const knobel = new Knobelscheit()

	// Act
	knobel.useNumbers(new Set([numberToUse]))
	const validCheck = knobel.validateInput('4')
	const numberCheck = knobel.validateInput(String(numberToUse))

	// Assert
	assert(validCheck)
	assert(!numberCheck)
})

Deno.test('KNOBEL: useNumbers moves the correct numbers', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	knobel.useNumbers(numbersToUse)

	// Assert
	assertEquals(knobel.usedNumbers, numbersToUse)
	assertEquals(knobel.availableNumbers, new Set([4, 5, 6, 7, 8, 9]))
})

Deno.test('KNOBEL: getState returns the formatted string (no change)', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Assert
	assertEquals(knobel.getState(), 'Used numbers:\nAvailable numbers: 1 2 3 4 5 6 7 8 9')
})

Deno.test('KNOBEL: getState returns the formatted string', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	knobel.useNumbers(numbersToUse)

	// Assert
	assertEquals(knobel.getState(), 'Used numbers: 1 2 3\nAvailable numbers: 4 5 6 7 8 9')
})

Deno.test('KNOBEL: checkState makes useNumber return false when availableNumbers not empty', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	const check = knobel.useNumbers(numbersToUse)

	// Assert
	assert(!check)
})

Deno.test('KNOBEL: checkState makes useNumber return true when availableNumbers empty', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	const check = knobel.useNumbers(allNumbers)

	// Assert
	assert(check)
})
