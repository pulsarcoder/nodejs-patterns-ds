const palindrome = (arr, first, last, result) => {
    console.log(arr[first], arr[last - 1]);
    if (first < last && result) {
        // const mid = parseInt((first + last) / 2, 10);
        return palindrome(arr, first + 1, last - 1, arr[first] === arr[last - 1]);
    }
    return result;
}
const str = 'fdfdfdfdf';
const array = str.split('');
console.log('palindrome of ', str, ' is => ', palindrome(array, 0, array.length, true));
