const testUtils = require('./testUtils');
const fizzbuzz = require('./fizzbuzz');

const {
    describe,
    it,
    expect
} = testUtils

describe('fizzbuzz', () => {
    it('returns the number passed to it', () => {
        expect(fizzbuzz(2)).toBe(1);
        expect(fizzbuzz(2)).toBe(2);
    })
    it('returns fizz if divisible by 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
        expect(fizzbuzz(6)).toBe('fizz');
    })
    it('returns buzz if divisible by 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
        expect(fizzbuzz(10)).toBe('buzz');
    })
    it('returns fizzbuzz if divisible by 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
        expect(fizzbuzz(30)).toBe('fizzbuzz');
    })
    it('returns fizzbuzz if divisible by 5', () => {
        expect(fizzbuzz(15)).notToBe('fart');
        expect(fizzbuzz(30)).notToBe('house');
    })
})