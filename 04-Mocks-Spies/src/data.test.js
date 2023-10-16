import { describe, expect, it, vi } from 'vitest';
import { generateReportData, storeData } from './data';

describe.concurrent('generateReportData()', () => {

    // Ejemplo de Spies:
	it('Should execute logFn() if its provided', () => {
        // con el objeto vi, y su metodo fn() creamos una funcion vacia que almacena si es usada,
        // es el espia que pasaremos como "spy" y luego miramos si en la funcion principal fue llamada
		const logger = vi.fn();

		generateReportData(logger);

		expect(logger).toBeCalled();
	});

});

// describe.concurrent('storeData()', () => {});
