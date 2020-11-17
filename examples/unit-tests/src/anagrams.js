import { getLetterCount } from "./letter-count";

export const isAnagram = (left, right) => {
    const leftLetterCount = getLetterCount(left);
    const rightLetterCount = getLetterCount(right);
    const leftLetters = Object.keys(leftLetterCount);
    const rightLetters = Object.keys(rightLetterCount);

    if(leftLetters.length !== rightLetters.length) {
        return false;
    } else {
        return Object.keys(leftLetterCount)
                .filter(ch => rightLetterCount[ch] === leftLetterCount[ch]).length === rightLetters.length;
    }
}