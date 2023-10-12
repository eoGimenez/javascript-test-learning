import { describe, expect, it } from 'vitest';
import { yieldResult } from './output';

describe('yieldResult()', () => {
	it('Should yield a string, not matters wich values is provided', () => {
		const resultOne = 5;
		const resultTwo = '5';
		const resultThree = false;

		const resultTextOne = yieldResult(resultOne);
		const resultTextTwo = yieldResult(resultTwo);
		const resultTextThree = yieldResult(resultThree);

		expect(resultTextOne).toBeTypeOf('string');
		expect(resultTextTwo).toBeTypeOf('string');
		expect(resultTextThree).toBeTypeOf('string');
	});

	it('Should yield a string that contains the calculation result if a numbers is provided', () => {
		const result = 5;

		const resultText = yieldResult(result);

		expect(resultText).toContain(result.toString());
	});

	it('Should return an empty string if "no-calc" is provided', () => {
		const result = 'no-calc';

		const resultText = yieldResult(result);

		expect(resultText).toBe('');
	});

	it('Should yield a string that contains "Invalid" if "invalid" is provided', () => {
		const result = 'invalid';

		const resultText = yieldResult(result);

		expect(resultText).toContain('Invalid');
	});
});
