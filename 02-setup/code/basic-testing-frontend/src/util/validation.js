export function validateStringNotEmpty(value) {
	if (typeof value == 'string') {
		if (value.trim().length === 0) {
			throw new Error('Invalid input - must not be empty.');
		}
	} else throw new Error('Invalid input - You must enter valid numbers.');
}

export function validateNumber(number) {
	if (isNaN(number) || typeof number !== 'number') {
		throw new Error('Invalid number input.');
	}
}
