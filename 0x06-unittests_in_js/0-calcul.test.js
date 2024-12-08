const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber", function () {
    it("should return the sum of two numbers rounded to the nearest integer", function () {
        assert.strictEqual(calculateNumber(2.5, 3.7), 7);
    });

    it("should return the sum of two negative numbers rounded to the nearest integer", function () {
        assert.strictEqual(calculateNumber(-2.5, -3.7), -6);
    });

    it("should return the sum of two positive numbers rounded to the nearest integer", function () {
        assert.strictEqual(calculateNumber(2, 3), 5);
    });

    it("should return the sum of two numbers with a decimal part rounded to the nearest integer", function () {
        assert.strictEqual(calculateNumber(2.2, 3.3), 5);
    });
});
