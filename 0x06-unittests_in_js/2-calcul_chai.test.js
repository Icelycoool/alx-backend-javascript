const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', () => {
    it('should return the sum of two numbers', () => {
        expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });

    it('should return the difference of two numbers', () => {
        expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });

    it('should return the quotient of two numbers', () => {
        expect(calculateNumber('DIVIDE', 12, 3)).to.equal(4);
    });

    it('should throw an error for division by zero', () => {
        expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
})