import { describe, expect, it } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
	const testTitel = 'test title';
	const testContent = 'test content';

	const testFormData = {
		title: testTitel,
		content: testContent,

		get(key) {
			return this[key];
		},
	};

	it('Should extract the "title" and "content" from the provided form data', () => {
		const data = extractPostData(testFormData);

		expect(data.title).toBe(testTitel);
		expect(data.content).toBe(testContent);
	});
});
