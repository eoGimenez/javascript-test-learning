import { beforeEach, describe, expect, it } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
	let testTitel;
	let testContent;

	let testFormData;

	beforeEach(() => {
		testTitel = 'test title';
		testContent = 'test content';
		testFormData = {
			title: testTitel,
			content: testContent,

			get(key) {
				return this[key];
			},
		};
	});

	it('Should extract the "title" and "content" from the provided form data', () => {
		const data = extractPostData(testFormData);

		expect(data.title).toBe(testTitel);
		expect(data.content).toBe(testContent);
	});

	it('Should throw an error with message (Content must not be empty!) if "content" is empty', () => {
		testContent = '';
		testFormData = {
			title: testTitel,
			content: testContent,

			get(key) {
				return this[key];
			},
		};

		const extractPostDataFn = () => {
			extractPostData(testFormData);
		};

		expect(extractPostDataFn).toThrow(/Content must not be empty!/);
	});

	it('Should throw an error if "title" was provided without an string', () => {
		testTitel = 2;
		testFormData = {
			title: testTitel,
			content: testContent,

			get(key) {
				return this[key];
			},
		};
		const extractPostDataFn = () => {
			extractPostData(testFormData);
		};
		expect(extractPostDataFn).toThrow(/The title must be an string/);
	});
});
