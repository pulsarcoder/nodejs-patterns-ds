// import { expect } from "chai";
// import { isAnagram } from "./anagrams";

// describe("anagrams - basic functionality", () => {
//     it("returns true, if both strings are same", () => {
//         const expected = true;
//         const actual = isAnagram("test", "test");
//         expect(actual).to.be.equal(expected);
//     })

//     it("returns true for anagrams string", () => {
//         const expected = true;
//         const actual = isAnagram("listen", "silent");
//         expect(actual).to.be.equal(expected);
//     })

//     it("returns false when either of strings have different letters", () => {
//         const expected = false;
//         const actual = isAnagram("elbow", "belows");
//         expect(actual).to.be.eq(expected);

//         const expected2 = false;
//         const actual2 = isAnagram("elbows", "below");
//         expect(actual2).to.be.eq(expected2);
//     })

//     it("returns true when string having spaces in it", () => {
//         const expected = true;
//         const actual = isAnagram("conversation", "voices rant on");
//         expect(actual).to.be.eq(expected);
//     })

//     it("returns true even though the string have different case letters", () => {
//         const expected = true;
//         const actual = isAnagram("STATE", "taste");
//         expect(actual).to.be.eq(expected);
//     })
// })