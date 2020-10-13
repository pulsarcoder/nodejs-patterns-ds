const reverseString = str => {
    console.log(str)
    return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

const swap = (str, firstIdx, secondIdx) => {
    const temp = str[firstIdx];
    str[firstIdx] = str[secondIdx];
    str[secondIdx] = temp;
}
const reverseStr = (str) => {
    const n = str.length, charArr = str.split("");

    for (let i =0; i < n / 2; i++) {
        swap(charArr, i, n - i - 1);
    }
    return charArr.join("");
}

console.log(reverseStr("hello"));
