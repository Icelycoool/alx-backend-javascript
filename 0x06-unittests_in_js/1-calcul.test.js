const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
    it('should return the sum of two numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });

    it('should return the difference of two numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });

    it('should return the quotient of two numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 12, 3), 4);
    });

    it('should throw an error for division by zero', () => {
        assert.throws(() => calculateNumber('DIVIDE', 10, 0), Error);
    });

    it('should throw an error for unsupported operation', () => {
        assert.throws(() => calculateNumber('ADD', 3, 2), Error);
    });
})