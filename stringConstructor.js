const DELIMITTER_POSITION = 2;
const SUBSTRING_START = 4;

module.exports = (string) => {
    if(string.length===0){
        return 0;
    }

    if(string.length===1){
        return +string;
    }

    let customDelimitter = '\n';
    let stringToConstruct = string;

    if(string.startsWith('//')){
        customDelimitter=string[DELIMITTER_POSITION];
        stringToConstruct=string.substring(SUBSTRING_START);
    }

    const numbers = stringToConstruct
            .replaceAll(customDelimitter,',')
            .split(',')
            .map(str=>+str);

    const negativeNumber = numbers.find(number=>number<0);

    if(negativeNumber){
        throw new Error(`negative numbers not allowed ${negativeNumber}`)
    }

    return numbers.reduce((acc,curr)=>{
                return acc+curr;
            });
}
