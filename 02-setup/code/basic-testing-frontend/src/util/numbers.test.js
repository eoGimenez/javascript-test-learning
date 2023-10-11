import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('Should yield a typeOf number from a string number', () => {
	const input = '1';

	const result = transformToNumber(input);

	expect(result).toBeTypeOf('number');
});

it('Should yield a number from a string number', () => {
	const input = "5";

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
