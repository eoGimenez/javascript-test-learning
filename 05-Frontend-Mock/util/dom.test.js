import fs from 'fs';
import path from 'path';

import { beforeEach, expect, it, vi } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlPath = path.join(process.cwd(), 'index.html');
const htmlDocumentConten = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
	document.body.innerHTML = '';
	document.write(htmlDocumentConten);
});

it('Should add an error paragraph to the id="errors" element', () => {
	showError('test');

	const errorsEl = document.getElementById('errors');
	const errorPh = errorsEl.firstElementChild;
	expect(errorPh).not.toBeNull();
});
it('Sould not contain an error paragraph initially', () => {
	const errorsEl = document.getElementById('errors');
	const errorPh = errorsEl.firstElementChild;
	expect(errorPh).toBeNull();
});
it('Should output the provided message in the error parragraph', () => {
	const errorTest = 'test';
	showError(errorTest);

	const errorsEl = document.getElementById('errors');
	const errorPh = errorsEl.firstElementChild;
	expect(errorPh.textContent).toBe(errorTest);
});
