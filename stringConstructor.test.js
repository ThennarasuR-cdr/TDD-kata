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

    it('should return the value when a string with two numbers is constructed', () => {
        const string = '2,3';

        const result = add(string);

        expect(result).toBe(5);
    });

    it('should return the value when a string with multiple numbers is constructed', () => {
        const string = '2,3,4,5';

        const result = add(string);

        expect(result).toBe(14);
    });

    it('should return the value when a string with two digit numbers is constructed', () => {
        const string = '12,13';

        const result = add(string);

        expect(result).toBe(25);
    });
});