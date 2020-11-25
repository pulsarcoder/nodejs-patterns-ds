import { expect } from 'chai';
import pallindrome from './pallindrome';

describe("Pallindrome - basic functionality", () => {
    it("should return true for palindrome string", () => {
        const actual = pallindrome("eye");
        expect(actual).to.be.eq(true);
    })

    it("should return true for pallindrome string by ignoring special characters", () => {
        const actual = pallindrome("_eye");
        expect(actual).to.be.eq(true);
    })

    it("should return true for pallindrome string by ignoring space in it", () => {
        const actual = pallindrome("race car");
        expect(actual).to.be.eq(true);
    })
})