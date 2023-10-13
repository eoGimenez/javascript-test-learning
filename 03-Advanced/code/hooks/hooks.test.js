import { it, expect } from 'vitest';

import { User } from './hooks';

it('Should update the email', () => {
	const testEmail = 'test@test.com';
	const newTestEmail = 'test2@test.com';

	const user = new User(testEmail);
	user.updateEmail(newTestEmail);

	expect(user.email).toBe(newTestEmail);
});

it('Should have an email property', () => {
	const testEmail = 'test@test.com';

	const user = new User(testEmail);

	expect(user).toHaveProperty('email');
});

it('Should store the provided email value', () => {
	const testEmail = 'test@test.com';

	const user = new User(testEmail);

	expect(user.email).toBe(testEmail);
});

it('Should clear the email', () => {
	const testEmail = 'test@test.com';

	const user = new User(testEmail);
	user.clearEmail();

	expect(user.email).toBe('');
});

it('Should still have an email property after clearing the email', () => {
	const testEmail = 'test@test.com';

	const user = new User(testEmail);
	user.clearEmail();

	expect(user).toHaveProperty('email');
});
it('Should have an empty email property after clearing the email', () => {
	const testEmail = 'test@test.com';

	const user = new User(testEmail);
	user.clearEmail();

	expect(user.email).toBe('');
});
