/**
 * f(hello)
 *  -> f(ello)
 *      -> f(llo)
 *          -> f(lo)
 *              -> f(o)
 *                  -> f("")
 *                      -> base case reached, now unwinding starts or stack pop will happen for each fn call
 *                  -> f("") + ""
 *              -> o
 *          -> ol
 *      -> oll
 *   -> olle
 * -> olleh
 * @param str 
 */
const reverseString = str => {
    console.log(str)
    return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

const swap = (str, firstIdx, secondIdx) => {
    const temp = str[firstIdx];
    str[firstIdx] = str[secondIdx];
    str[secondIdx] = temp;
}
let counter = 0;
const reverseStr = (str) => {
    const n = str.length, charArr = str.split("");

    for (let i = 0; i < n / 2; i++) {
        counter++;
        swap(charArr, i, n - i - 1);
    }
    return charArr.join("");
}
let counter3 = 0;
const reverseStrRec = (str, start, end) => { // O((n - 1) / 2)
    if (start >= end - 1) {
        return str.join(''); // O(n)
    }
    counter3++;
    swap(str, start, end); // O(1)
    return reverseStrRec(str, start + 1, end - 1);
}

// const isPalindrome = (str)

console.log(reverseStrRec(Array.from("hellow"), 0, "hellow".length), counter3);
console.log(reverseStr("hellow"), counter);
