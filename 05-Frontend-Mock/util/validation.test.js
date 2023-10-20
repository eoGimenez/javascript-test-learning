import { it, vi, expect } from 'vitest';
import { validateNotEmpty } from './validation';
import { ValidationError } from './errors';

const testErrorMessage = 'Error - Should provide a valid string value';
it('Should throw an error if an empty string is provided', () => {
	const testText = '';

	const validationFn = () => {
		validateNotEmpty(testText, testErrorMessage);
	};

	expect(validationFn).toThrow();
});
it('Should throw an error if an empty string is provided', () => {
	const testText = '          ';

	const validationFn = () => {
		validateNotEmpty(testText, testErrorMessage);
	};

	expect(validationFn).toThrow();
});
it('Should throw an error if an empty string with the error provided', () => {
	const testText = '          ';

	const validationFn = () => {
		validateNotEmpty(testText, testErrorMessage);
	};

	expect(validationFn).toThrow(testErrorMessage);
});

