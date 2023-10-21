import { ValidationError } from './errors.js';

export function validateNotEmpty(text, errorMessage) {
	if (typeof text == 'string') {
		if (!text || text.trim().length === 0) {
			throw new ValidationError(errorMessage);
		}
	} else throw new ValidationError(errorMessage);
}
