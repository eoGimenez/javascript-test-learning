import { it, expect, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation.js';

describe('validateStringNotEmpty()', () => {
	it('Should throw Error when an empty string is is provided', () => {
		const input = '';

		const resultFn = () => {
			validateStringNotEmpty(input);
		};

		expect(resultFn).toThrow();
	});
	it('Should throw Error when string of blonks is provided', () => {
		const input = '            ';

		const resultFn = () => {
			validateStringNotEmpty(input);
		};

		expect(resultFn).toThrow();
	});
	it('Should throw Error if any other value than string is provided', () => {
		const inputOne = 1;
		const inputTwo = false;
		const inputThree = {};

		const validateInputOne = () => validateStringNotEmpty(inputOne);
		const validateinputTwo = () => validateStringNotEmpty(inputTwo);
		const validateinputThree = () => validateStringNotEmpty(inputThree);

		expect(validateInputOne).toThrow();
		expect(validateinputTwo).toThrow();
		expect(validateinputThree).toThrow();
	});
	it('Should throw Error with a message that contains (must not be empty)', () => {
		const input = '';

		const resultFn = () => {
			validateStringNotEmpty(input);
		};

		expect(resultFn).toThrow(/must not be empty/);
	});
});

describe('validateNumber()', () => {
	it('Should throw Error when an NaN is provided', () => {
		const input = NaN;

		const resultFn = () => {
			validateNumber(input);
		};

		expect(resultFn).toThrow();
	});
	it('Should throw Error with a message that contains (Invalid number input)', () => {
		const input = NaN;

		const resultFn = () => {
			validateNumber(input);
		};

		expect(resultFn).toThrow(/Invalid number input./);
	});

	it('Should throw Error when a string number is provided', () => {
		const input = '1';

		const resultFn = () => validateNumber(input);

		expect(resultFn).toThrow();
	});
});
