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

const add = () => {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
};

const subtract = () => {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
};

const multiply = () => {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
};

const divide = () => {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
