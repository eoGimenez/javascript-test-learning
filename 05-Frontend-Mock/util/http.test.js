import { expect, it, vi } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = { keyResponse: 'response test fetch' };

const testFetch = vi.fn((url, options) => {
	return new Promise((resolve, reject) => {
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
	const testData = { key: 'test' };

	return expect(sendDataRequest(testData)).resolves.toBe(testResponseData);
});
