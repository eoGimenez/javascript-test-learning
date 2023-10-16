import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';
import { User } from './hooks';

let user;
const testEmail = 'test@test.com';
// let user = new User(testEmail) <<< su eligieramos el afterEach()

// los hooks de inicialización:
beforeAll(() => {
	console.log('BeforeAll()');
});

beforeEach(() => {
	user = new User(testEmail);
});

afterAll(() => {
	console.log('BeforeAll()');
});

afterEach(() => {
	// user = new User(testEmail); <<< Tambien funciona, aunque asi,
	// tendriamos que inicializar "user" en global o en beforeAll() para el primer test
	console.log('BeforeEach()');
});

it.concurrent('Should update the email', () => {
	const newTestEmail = 'test2@test.com';

	user.updateEmail(newTestEmail);

	expect(user.email).toBe(newTestEmail);
});

it.concurrent('Should have an email property', () => {
	expect(user).toHaveProperty('email');
});

it.concurrent('Should store the provided email value', () => {
	expect(user.email).toBe(testEmail);
});

it.concurrent('Should clear the email', () => {
	user.clearEmail();

	expect(user.email).toBe('');
});

it.concurrent('Should still have an email property after clearing the email', () => {
	user.clearEmail();

	expect(user).toHaveProperty('email');
});
it.concurrent('Should have an empty email property after clearing the email', () => {
	user.clearEmail();

	expect(user.email).toBe('');
});
