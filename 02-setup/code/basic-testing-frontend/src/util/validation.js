export function validateStringNotEmpty(value) {
	if (value.trim().length === 0) {
		throw new Error('Invalid input - must not be empty.');
	}
}

export function validateNumber(number) {
	if (isNaN(number) || typeof number !== 'number') {
		throw new Error('Invalid number input.');
	}
}

export function validateResult(result) {
	let resultText = '';

	if (result === 'invalid') {
		resultText = 'Invalid input. You must enter valid numbers.';
	} else if (result !== 'no-calc') {
		resultText = 'Result: ' + result;
	}
	return resultText;
}
