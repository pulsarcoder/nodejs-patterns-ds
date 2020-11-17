export const getLetterCount = (string) => {
    const chars = Array.from(string.toLowerCase().replace(/ /g, ""));
    const letterCount = {};
    chars.forEach(c => !letterCount[c] ? letterCount[c] = 1 : letterCount[c] += 1);
    return letterCount;
}

export const getLetterCountv2 = string => {
    const chars = Array.from(string.toLowerCase().replace(/ /g, ""));
    const captureLetterCount = (chars, first, last, result) => {
        if (first < last) {
            result[chars[first]] = !result[chars[first]] ? 1 : result[chars[first]] + 1;
            result[chars[last]] = !result[chars[last]] ? 1 : result[chars[last]] + 1;
            return captureLetterCount(chars, first + 1, last - 1, result);
        }
        if (first === last) {
            result[chars[last]] = !result[chars[last]] ? 1 : result[chars[last]] + 1;
        }
        return result;
    }
    return captureLetterCount(chars, 0, chars.length - 1, {});
}

const toLowerAndTrimAndArray = func => (...args) => {
    args[0] = Array.from(args[0].toLowerCase().replace(/ /g, ""));
    return func(...args);
}

const getLetterCountUsingReduce = chars => 
    chars.reduce((acc, ch) => ({ ...acc, [ch]: !acc[ch] ? 1 : acc[ch] + 1 }), {});

export const getLetterCountv3 = toLowerAndTrimAndArray(getLetterCountUsingReduce);