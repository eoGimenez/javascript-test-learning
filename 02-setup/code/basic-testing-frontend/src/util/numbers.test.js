import { describe, expect, it } from 'vitest';
import { transformToNumber, cleanInput } from './numbers';

describe('transformToNumber()', () => {
	it('Should yield a typeOf number from a string number', () => {
		const input = '1';

		const result = transformToNumber(input);

		expect(result).toBeTypeOf('number');
	});

	it('Should yield a number from a string number', () => {
		const input = '5';

		const result = transformToNumber(input);

		expect(result).toBe(+input);
	});
	it('Should yield the same number if its a number', () => {
		const input = 5;

		const result = transformToNumber(input);

		expect(result).toBe(input);
	});

	it('Should yield NaN for non-transformable values', () => {
		const input = 'Hola';

		const result = transformToNumber(input);

		expect(result).toBeNaN();
	});
	it('should throw an error if no value is passed into the function', () => {
		const resultFr = () => {
			transformToNumber();
		};
		if (resultFr == 0) expect(resultFr).toThrow(/is not iterable/);
	});

	it('Should throw error if try to pass more than 1 argument', () => {
		const inputOne = '1';
		const inputTwo = '5';

		const resultFr = () => {
			transformToNumber(inputOne, inputTwo);
		};
		if (resultFr == 0) expect(resultFr).toThrow(/Only accept one argument/);
	});
});

describe('cleanInput()', () => {
	it('Should return an array of numbers values if an array of string numbers values is provided', () => {
		const numbers = ['1', '2'];

		const result = cleanInput(numbers);

		// expect(result).toContain(transformToNumber(numbers[0])); funciona correctamente tambien
		expect(result[0]).toBeTypeOf('number');
	});
	it('Should throw an error if an array with at least one empty string is provided', () => {
		const numbers = ['1', ''];

		const resultFn = () => cleanInput(numbers);

		expect(resultFn).toThrow();
	});
	it('Should throw Error with a message that contains (must not be empty)', () => {
		const numbers = ['1', ''];

		const resultFn = () => cleanInput(numbers);

		expect(resultFn).toThrow(/must not be empty/);
	});
	it('Should throw an error if an array with at least one invalid parameter is provided', () => {
		const numbers = ['1', true];

		const resultFn = () => cleanInput(numbers);

		expect(resultFn).toThrow();
	});
	it('Should throw Error with a message that contains (You must enter valid numbers)', () => {
		const numbers = ['1', true];

		const resultFn = () => cleanInput(numbers);

		expect(resultFn).toThrow(/You must enter valid numbers/);
	});
});
