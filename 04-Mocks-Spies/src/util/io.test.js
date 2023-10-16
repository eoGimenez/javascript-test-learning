import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

// configuramos el modulo o el path al modulo a mmoched, o sea si quiero hacer mock de mis modulos, paso path sino directamente el third party
vi.mock('fs'); // mock del modulo fs
// ahora el test no creara el archivo evitando side effects de producción

it('Should execute the writeFile method', () => {
	const data = 'testeando el dato';
	const datafile = 'data.txt';

	writeData(data, datafile); // ejecutamos la funcion con el mock
	// expect(writeData(data, datafile)).resolves.toBeUndefined();
	expect(fs.writeFile).toBeCalled(); // y miramos si el metodo del modulo fue llamado
});
