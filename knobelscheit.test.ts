import { assert, assertEquals } from '@std/assert'
import { Knobelscheit, notANumber, numberNotAvailable } from './knobelscheit.ts'

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
	assertEquals(validCheck, 'Current numbers in use: 3')
	assertEquals(checkOutOfRange, numberNotAvailable)
	assertEquals(checkWrongInput, notANumber)
})

Deno.test('KNOBEL: validateInput needs to be a number inside of knobel.availableNumbers', () => {
	// Arrange
	const numberToUse = 3
	const knobel = new Knobelscheit()

	// Act
	knobel.validateInput(String(numberToUse))
	knobel.useNumbers()
	const validCheck = knobel.validateInput('4')
	const invalidCheck = knobel.validateInput(String(numberToUse))

	// Assert
	assertEquals(validCheck, 'Current numbers in use: 4')
	assertEquals(invalidCheck, numberNotAvailable)
})

Deno.test('KNOBEL: useNumbers moves the correct numbers', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	numbersToUse.forEach((value) => knobel.validateInput(String(value)))
	knobel.useNumbers()

	// Assert
	assertEquals(knobel.usedNumbers, numbersToUse)
	assertEquals(knobel.availableNumbers, new Set([4, 5, 6, 7, 8, 9]))
})

Deno.test('KNOBEL: checkState makes useNumber return false when availableNumbers not empty', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	numbersToUse.forEach((value) => knobel.validateInput(String(value)))
	const check = knobel.useNumbers()

	// Assert
	assert(!check)
})

Deno.test('KNOBEL: checkState makes useNumber return true when availableNumbers empty', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	allNumbers.forEach((value) => knobel.validateInput(String(value)))
	const check = knobel.useNumbers()

	// Assert
	assert(check)
})

Deno.test('KNOBEL: getState returns the formatted string (no change)', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Assert
	assertEquals(knobel.getStateAsString(), 'Used numbers:\nAvailable numbers: 1 2 3 4 5 6 7 8 9')
})

Deno.test('KNOBEL: getState returns the formatted string', () => {
	// Arrange
	const knobel = new Knobelscheit()

	// Act
	numbersToUse.forEach((value) => knobel.validateInput(String(value)))
	knobel.useNumbers()

	// Assert
	assertEquals(knobel.getStateAsString(), 'Used numbers: 1 2 3\nAvailable numbers: 4 5 6 7 8 9')
})
