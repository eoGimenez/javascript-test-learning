import { expect, it } from 'vitest';
import { add } from './math.js';

it('should summarize all number values in an array', () => {
	const numbers = [1, 4];
    
	const result = add(numbers);

	const expectedResult = numbers.reduce((a, b) => a + b, 0);
	expect(result).toBe(expectedResult);
});

it('result should be: -2', () => {
	const numbers = [1, -3];

	const result = add(numbers);

	const expectedResult = numbers.reduce((a, b) => a + b, 0);
	expect(result).toBe(expectedResult);
});
