const add = require('./stringConstructor.js');

describe('string constructor', () => {
    it('should return 0 when empty string is constructed', () => {
        const string = '';

        const result = add(string);

        expect(result).toBe(0);
    });
});