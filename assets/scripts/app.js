/** @format */

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserInputNumber = () => {
	return parseInt(userInput.value);
};

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber} `;
	// console.log('calcDescription',calcDescription)
	outputResult(currentResult, calcDescription);
};

const writeToLog = (operator, initialResult, enteredNumber, currentResult) => {
	const logEntry = {
		operation: operator,
		prevResult: initialResult,
		number: enteredNumber,
		result: currentResult,
	};
	logEntries.push(logEntry);
	console.log('logEntries', logEntries);
};

const calculateresult = (calculationType) => {
	const enteredNumber = getUserInputNumber();
	if (
		(calculationType !== 'ADD' &&
			calculationType !== 'SUBTRACT' &&
			calculationType !== 'MULTIPLY' &&
			calculationType !== 'DIVIDE') ||
		!enteredNumber
	) {
		return;
	}

	const initialResult = currentResult;
	if (calculationType === 'ADD') {
		currentResult += enteredNumber;
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber;
		mathOperator = '-';
	} else if (calculationType === 'MULTIPLY') {
		currentResult *= enteredNumber;
		mathOperator = '*';
	} else if (calculationType === 'DIVIDE') {
		currentResult /= enteredNumber;
		mathOperator = '/';
	}

	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

const add = () => {
	calculateresult('ADD');
};

const subtract = () => {
	calculateresult('SUBTRACT');
};

const multiply = () => {
	calculateresult('MULTIPLY');
};

const divide = () => {
	calculateresult('DIVIDE');
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
