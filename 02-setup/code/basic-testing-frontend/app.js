import { getNumbersValues } from './src/parser.js';
import { calculateNumbersInputs } from './src/util/numbers.js';
import { validateResult } from './src/util/validation.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
	event.preventDefault();
	const numbersExtrcted = getNumbersValues(form);

	let result = calculateNumbersInputs(numbersExtrcted);

	let resultText = validateResult(result);

	output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
