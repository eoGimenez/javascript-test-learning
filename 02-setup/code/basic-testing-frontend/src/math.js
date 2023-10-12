import { cleanInput } from './util/numbers.js';

export function add(numbers) {
	let sum = 0;

	for (const number of numbers) {
		sum += +number;
	}
	return sum;
}

export function calculateNumbersInputs(numberValues) {
	let result = '';

	try {
		const numbers = cleanInput(numberValues);

		result = add(numbers).toString();
	} catch (error) {
		result = error.message;
	}
	return result;
}
