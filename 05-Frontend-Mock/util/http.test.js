import { expect, it, vi } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testData = { key: 'test' };
const testResponseData = { keyResponse: 'response test fetch' };

const testFetch = vi.fn((url, options) => {
	return new Promise((resolve, reject) => {
		if (typeof options.body !== 'string') {
			return reject('Not a string.');
		}
		const testResponse = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testResponseData);
				});
			},
		};
		resolve(testResponse);
	});
});

vi.stubGlobal('fetch', testFetch);

it('Should return any available response data', () => {
	return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('Should convert the provided data to JSON before sending the request', async () => {
	let errorMessage;

	try {
		await sendDataRequest(testData);
	} catch (err) {
		errorMessage = err;
	}

	expect(errorMessage).not.toBe('Not a string.');
});

it('Should throw a HttpError in case of non-ok responses', () => {
	testFetch.mockImplementationOnce((url, options) => {
		return new Promise((resolve, reject) => {
			if (typeof options.body !== 'string') {
				return reject('Not a string.');
			}
			const testResponse = {
				ok: false,
				json() {
					return new Promise((resolve, reject) => {
						resolve(testResponseData);
					});
				},
			};
			resolve(testResponse);
		});
	});

	return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
