const add = require('./stringConstructor.js');

describe('string constructor', () => {
    it('should return 0 when empty string is constructed', () => {
        const string = '';

        const result = add(string);

        expect(result).toBe(0);
    });

    it('should return the value when a string of length 1 is constructed', () => {
        const string = '2';

        const result = add(string);

        expect(result).toBe(2);
    });
});