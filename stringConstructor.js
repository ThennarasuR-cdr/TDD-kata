const DELIMITER_POSITION = 2;
const DELIMITER_INDICATOR = '//';
const SUBSTRING_START = 4;
const MULTIPLY = '*';
const COMMA = ',';
const DEFAULT_DELIMITER = '\n';

module.exports = (string) => {
    if(string.length===0){
        return 0;
    }

    const customDelimiter = extractCustomDelimiter(string);
    const stringToConstruct = extractStringToConstruct(string);
    const numbers = extractNumbersFromString(stringToConstruct, customDelimiter);

    validateNegativeNumbers(numbers);

    return customDelimiter===MULTIPLY
        ? multiplyNumbers(numbers)  
        : addNumbers(numbers);
}

const extractCustomDelimiter = (string) => {
    if (string.startsWith(DELIMITER_INDICATOR)) {
        return string[DELIMITER_POSITION];
    }

    return DEFAULT_DELIMITER;
}

const extractStringToConstruct = (string) => {
    if (string.startsWith(DELIMITER_INDICATOR)) {
        return string.substring(SUBSTRING_START);
    }

    return string;
}

const extractNumbersFromString = (string, delimiter) => {
    return string
        .replaceAll(delimiter, COMMA)
        .split(COMMA)
        .map(str => +str);
}

const validateNegativeNumbers = (numbers) =>{
    const negativeNumbers = numbers.filter(number => number < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(COMMA)}`);
    }
}

const addNumbers = (numbers) => numbers.reduce((acc, curr) => {
    return acc + curr;
});

const multiplyNumbers = (numbers) => numbers.reduce((acc, curr) => {
    return acc * curr;
});