const DELIMITER_POSITION = 2;
const DELIMITER_INDICATOR = '//';
const SUBSTRING_START = 4;
const MULTIPLY = '*';
const COMMA = ',';
const DEFAULT_DELIMITER = '\n';

const PARITY = {
    ODD: "odd",
    EVEN: "even"
}

const calculate = (string, itemsToBeCalculated) => {
    if(string.length===0){
        return 0;
    }

    const customDelimiter = extractCustomDelimiter(string);
    const stringToConstruct = extractStringToConstruct(string);
    const numbers = extractNumbersFromString(stringToConstruct, customDelimiter, itemsToBeCalculated);

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

const parityIndexMap = {
    [PARITY.ODD]:1,
    [PARITY.EVEN]:0
}

const extractNumbersFromString = (string, delimiter, itemsToBeCalculated) => {
    const numbers =  string
        .replaceAll(delimiter, COMMA)
        .split(COMMA)
        .map(str => +str);

    if(!itemsToBeCalculated){
        return numbers;
    }

    return numbers.filter((_,index)=>{
        return index%2===parityIndexMap[itemsToBeCalculated];
    });
}

const validateNegativeNumbers = (numbers) =>{
    const negativeNumbers = numbers
    .filter(number => number < 0);

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

module.exports = {
    PARITY,
    calculate
};