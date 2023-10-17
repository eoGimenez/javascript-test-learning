import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

// configuramos el modulo o el path al modulo a mmoched, o sea si quiero hacer mock de mis modulos, paso path sino directamente el third party
vi.mock('fs'); // mock del modulo fs
// ahora el test no creara el archivo evitando side effects de producción
vi.mock('path', () => {
	// aqui vamos a checkear que llamamos correctamente el metodo join() del modulo 'path'
	return {
		default: {
			join: (...args) => {
				return args[args.length - 1];
			},
		},
	};
});

it('Should execute the writeFile method', () => {
	const data = 'testeando el dato';
	const fileName = 'data.txt';

	writeData(data, fileName); // ejecutamos la funcion con el mock
	// expect(writeData(data, fileName)).resolves.toBeUndefined();
	// expect(fs.writeFile).toBeCalled(); <<< y miramos si el metodo del modulo fue llamado
	expect(fs.writeFile).toBeCalledWith(fileName, data);
});

it('Should yield a promise that resolves to no values if called correctly', () => {
	const data = 'testeando el dato';
	const fileName = 'data.txt';

	writeData(data, fileName);
	expect(writeData(data, fileName)).resolves.toBeUndefined();
});
