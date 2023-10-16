import { describe, it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe.concurrent('generateToken()', () => {
	it('Should generate a token value', (done) => {
		const userEmail = 'a@a.com';

		generateToken(userEmail, (err, token) => {
			// usando try/catch, podemos ver que error recivimos si falla
			try {
				expect(token).toBeDefined();
				done(); // de esta forma el test espera la función asíncrona.
			} catch (err) {
				done(err);
			}

			// si queremos comparar el valor que devuelve hay que usar try/catch:
			// try {
			// 	expect(token).toBe(2);
			// 	done();
			// } catch (err) {
			// 	done(err);
			// }
			// así comparamos que valor recivimos de la función asíncrona
		});
	});
});

describe.concurrent('generateTokenPromise()', () => {
	it('Should generate a token value', () => {
		const userEmail = 'a@a.com';

		expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
	});
	it('Should generate a token value, usando Async/await', async () => {
		const userEmail = 'a@a.com';

		const token = await generateTokenPromise(userEmail);
		expect(token).toBeDefined();
	});
});
