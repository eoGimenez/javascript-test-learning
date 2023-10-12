import { getNumbersValues } from './src/parser.js';
import { calculateNumbersInputs } from './src/math.js';
import { outputResult, yieldResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
	event.preventDefault();
	const numbersExtrcted = getNumbersValues(form);

	let result = calculateNumbersInputs(numbersExtrcted);

	let resultText = yieldResult(result);

	outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
