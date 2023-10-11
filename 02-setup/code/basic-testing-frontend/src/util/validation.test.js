import { it, expect } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation.js';

it('Should throw Error when an empty string is is provided', () => {
	const input = '';

	const resultFr = () => {
		validateStringNotEmpty(input);
	};

	expect(resultFr).toThrow();
});
it('Should throw Error when string of blonks is provided', () => {
	const input = '            ';

	const resultFr = () => {
		validateStringNotEmpty(input);
	};

	expect(resultFr).toThrow();
});
it('Should throw Error with a message that contains (must not be empty)', () => {
	const input = '';

	const resultFr = () => {
		validateStringNotEmpty(input);
	};

	expect(resultFr).toThrow(/must not be empty/);
});

it('Should throw Error when an NaN is provided', () => {
	const input = NaN;

	const resultFr = () => {
		validateNumber(input);
	};

	expect(resultFr).toThrow();
});
it('Should throw Error with a message that contains (Invalid number input)', () => {
	const input = NaN;

	const resultFr = () => {
		validateNumber(input);
	};

	expect(resultFr).toThrow(/Invalid number input./);
});

it('Should throw Error when a string number is provided', () => {
	const input = '1';

	const resultFr = () => validateNumber(input);

	expect(resultFr).toThrow();
});
