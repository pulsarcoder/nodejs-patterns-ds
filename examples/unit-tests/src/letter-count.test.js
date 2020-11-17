import { expect } from 'chai';
import { getLetterCount, getLetterCountv2, getLetterCountv3 } from './letter-count';

describe("letter count - basic functionality", () => {
    it("returns an empty object if parameter is passed as empty string", () => {
        const expected = {};
        const actual = getLetterCount("");
        expect(actual).to.deep.equal(expected);
    })

    it("returns count of 1 for unique letters in string", () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCount("cat");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual no of times each letter repeated in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // abdullah
        const actual = getLetterCount("abdullah");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual count letter without case sensitive in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // AbduLlah
        const actual = getLetterCount("AbduLlah");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual letter count by ignoring spaces in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // AbduLlah
        const actual = getLetterCount("Abd uLl ah");
        expect(actual).to.deep.equal(expected);
    })
})

describe("lettercount - time complexity", () => {
    it("returns an empty object if parameter is passed as empty string", () => {
        const expected = {};
        const actual = getLetterCountv2("");
        expect(actual).to.deep.equal(expected);
    })

    it("returns count 1 for each unique letter in string", () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCountv2("cat");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual no of times each letter repeated in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // abdullah
        const actual = getLetterCountv2("abdullah");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual count letter without case sensitive in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // AbduLlah
        const actual = getLetterCountv2("AbduLlah");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual letter count by ignoring spaces in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // AbduLlah
        const actual = getLetterCountv2("Abd uLl ah");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual count as 1 for single letter string", () => {
        const expected = { a: 1 };
        const actual = getLetterCountv2("a");
        expect(actual).to.deep.eq(expected);
    })

    it("returns the actual count for single letter repeated in full string", () => {
        const expected = { a: 5 };
        const actual = getLetterCountv2("aaaaa");
        expect(actual).to.deep.eq(expected);
    })

})


describe("letter count - using reduce", () => {
    it("returns an empty object if parameter is passed as empty string", () => {
        const expected = {};
        const actual = getLetterCountv3("");
        expect(actual).to.deep.equal(expected);
    })

    it("returns count of 1 for unique letters in string", () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCountv3("cat");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual no of times each letter repeated in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // abdullah
        const actual = getLetterCountv3("abdullah");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual count letter without case sensitive in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // AbduLlah
        const actual = getLetterCountv3("AbduLlah");
        expect(actual).to.deep.equal(expected);
    })

    it("returns the actual letter count by ignoring spaces in string", () => {
        const expected = { a: 2, b: 1, d: 1, u: 1, l: 2, h: 1 }; // AbduLlah
        const actual = getLetterCountv3("Abd uLl ah");
        expect(actual).to.deep.equal(expected);
    })
})