import { it, expect } from 'vitest';
import writeData from './io';

it('Should execute the writeFile method', () => {
	const data = 'testeando el dato';
	const datafile = 'data.txt';

	expect(writeData(data, datafile)).resolves.toBeUndefined();
});
