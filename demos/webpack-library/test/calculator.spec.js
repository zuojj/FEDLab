/* global describe, it, before */

import chai from 'chai';
import Calculator from '../dist/calculator.js';

chai.expect();

const expect = chai.expect;

let calculator;

describe('Given an instance of my Calculator library', () => {
    before(() => {
        calculator = new Calculator();
    });
    describe('add(1,2) ', () => {
        it('should return the 3', () => {
            expect(calculator.add(1, 2)).to.be.equal(3);
        });
    });
    describe('subtract(1,2) ', () => {
        it('should return the -1', () => {
            expect(calculator.subtract(1, 2)).to.be.equal(-1);
        });
    });
    describe('multiply(1,2) ', () => {
        it('should return the 2', () => {
            expect(calculator.multiply(1, 2)).to.be.equal(2);
        });
    });
    describe('divide(1,2) ', () => {
        it('should return the 0.5', () => {
            expect(calculator.divide(1, 2)).to.be.equal(0.5);
        });
    });
});