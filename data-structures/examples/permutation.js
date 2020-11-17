/**
 * Calculate permutation with recursion strategy
 */

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const permuteRecursive = (arr, counter) => {
    if (counter === arr.length) {
        console.log(arr.join(''));
        return;
    }
    for(let i = counter; i < arr.length; i++) {
        swap(arr, counter, i); // winding
        permuteRecursive(arr, counter + 1);
        swap(arr, counter, i); // unwinding to backtrack the arr
    }
}

permuteRecursive([1, 2, 3], 0);
/**
 * abc 
 * abc
 * @param {*} str 
 * @param {*} prefix 
 */
const permuteString = (str, prefix) => {
    if (str.length === 0) {
        console.log(prefix);
    } else {
        for(let i = 0; i < str.length; i++) {
            const prefix = str.substr(0, i) + str.charAt(0);
        } 
    }
}