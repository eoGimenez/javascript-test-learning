import { expect, it } from 'vitest';
import { add } from './math.js';

it('should summarize all number values in an array', () => {
	const numbers = [1, 4];

	const result = add(numbers);

	const expectedResult = numbers.reduce((a, b) => a + b, 0);
	expect(result).toBe(expectedResult);
});

it('result should be negative', () => {
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

it('should yield a number', () => {
	const inputs = ['1', '3'];

	const result = add(inputs);

	const expectedResult = inputs.reduce((a, b) => +a + +b, 0);
	expect(result).toBe(expectedResult);
});
