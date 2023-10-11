import { expect, it } from 'vitest';
import { add } from './math.js';

it('should summarize all number values in an array', () => {
	const numbers = [1, 4];

	const result = add(numbers);

	const expectedResult = numbers.reduce((a, b) => a + b, 0);
	expect(result).toBe(expectedResult);
});

it('result yield a negative', () => {
	const numbers = [1, -3];

	const result = add(numbers);

	const expectedResult = numbers.reduce((a, b) => a + b, 0);
	expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
	const inputs = [1, 'invalid number', 5];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
	const inputs = ['1', '3'];

	const result = add(inputs);

	const expectedResult = inputs.reduce((a, b) => +a + +b, 0);
	expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
	const inputs = [];

	const result = add(inputs);

	expect(result).toBe(0);
	// expect(result).not.toBe(0); cuando buscamos que no de el resultado, tal como si leyeramos
});

it('should throw an error if no value is passed into the function', () => {
	const resultFr = () => {
		add();
	};
    // con la exprecion regular define que tipo de error espera.
	expect(resultFr).toThrow(/is not iterable/); 
});

it('should throw an error if provided with multiples arguments instead of an array', () => {
	const inputOne = 1;
	const inputTwo = 5;

	const resultFr = () => {
		add(inputOne, inputTwo);
	};

	expect(resultFr).toThrow(/is not iterable/);
});
