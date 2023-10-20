import { beforeEach, describe, expect, it } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
	const testStatusCode = 404;
	const testMessage = 'Not Found';
	const testData = { key: '01-02-' };

	let errorInstance;

	beforeEach(() => {
		errorInstance = new HttpError(testStatusCode, testMessage, testData);
	});

	it('Should yield an instance of the class "HttpError" with property "statusCode"', () => {
		expect(errorInstance).toHaveProperty('statusCode');
	});
	it('Should yield an instance of the class "HttpError" with property "message"', () => {
		expect(errorInstance).toHaveProperty('message');
	});
	it('Should yield an instance of the class "HttpError" with property "data"', () => {
		expect(errorInstance).toHaveProperty('data');
	});

	it('Should return the correct values of "statusCode" of the instance', () => {
		expect(errorInstance.statusCode).toBe(testStatusCode);
	});
	it('Should return the correct values of "message" of the instance', () => {
		expect(errorInstance.message).toBe(testMessage);
	});
	it('Should return the correct values of "data" of the instance', () => {
		expect(errorInstance.data).toBe(testData);
	});
	it('Should contain undefined as data if no "data" is provided', () => {
		errorInstance = new HttpError(testStatusCode, testMessage);

		expect(errorInstance.data).toBeUndefined();
	});
});

describe('class ValidationError', () => {
	const testValidationMessage = "It's ok";
	let validationErrorInstance;

	beforeEach(() => {
		validationErrorInstance = new ValidationError(testValidationMessage);
	});

	it('Should yield an instance of the class "ValidationError" with the property "message"', () => {
		expect(validationErrorInstance).toHaveProperty('message');
	});
	it('Should return the correct value of "message" of the instance', () => {
		expect(validationErrorInstance.message).toBe(testValidationMessage);
	});
});
