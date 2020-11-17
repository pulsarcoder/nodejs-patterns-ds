const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const permute = (arr, currentIndex) => {
    console.log('permute arr, currentIndex', arr.join(''), currentIndex);
    if (arr.length - 1 === currentIndex) {
        console.log('base case closes, permutation is => ', arr.join(''));
    } else {
        for (let start = currentIndex; start < arr.length; start++) {
            console.log('start, currentIndex => ', start, currentIndex);
            swap(arr, currentIndex, start);
            console.log('swapped array => ', arr.join(''));
            permute(arr, currentIndex + 1);
            swap(arr, currentIndex, start);
            console.log('swapped array => ', arr.join(''));
        }
    }
}

// permute([1, 2, 3], 0)

/** 
 * Tree representation of permute method with arr [1, 2, 3], currentIndex = 0
 * 
 * f([1,2,3], 0) => start, currentIndex => 0, 0 => swap(arr, 0, 0)
 * <- f([1,2,3], 1) => start, currentIndex => 1, 1 => swap(arr, 1, 1)
 *    <- f([1,2,3], 2) => start, currentIndex => 2, 2 => swap(arr, 2, 2)
 *         base case stop -> print array 123
 * <- f([1,2,3], 1) => start, currentIndex => 2, 1 => swap(arr, 2, 1) => 132
 *    <- f([1,2,3], 2) => start, currentIndex => 2, 2 => 
 *
 */

const callMeAgain = (i, n) => {
    console.log('hey im recursive method repeated i => ', i);
    if (i === n - 1) {
        console.log('im end');
    } else {
        for (let start = i; start < n; start++) {
            console.log('start, i => ', start, i);
            callMeAgain(i + 1, n);
        }
    }
}

// callMeAgain(0, 3);

const permuteCustom = (arr) => {
    // swapping of items in arr is the trick and backtracking the swapped arr to its original form
    // swap the last two digits
    // backtrack to original form
    // swap the 
}

/**
 * 1234 => counter = 3 => arr.length - 1, if counter = 3 => dont swap
 * 1243 => swap counter, counter - 1
 * => backtrack 1234
 * 1324 => counter = 2 => swap counter, counter - 1
 * 1342 => swap => arr.length - 1, arr.length - 2
 * => backtrack 1324
 * => backtrack 1234
 * 1432 => counter = 1 => swap counter, 
 * 1423
 * => backtrack 1432
 * => baccktrack 1234
 * 2134
 * 2143
 * => backtrack 2134
 * => backtrack 1234
 * 3214
 * 3241
 * => backtrack 3214
 * => backtrack 1234
 * 
 */

const permuteUsingFact = (arr, counter) => {
    if (counter === arr.length) {
        return;
    }
    for (let i = counter; i < arr.length; i++) {
        swap(arr, counter, i);
        console.log('wind => ', arr.join(''), counter, i);
        permuteUsingFact(arr, counter + 1);
        swap(arr, counter, i);
        console.log("unwind => ", arr.join(''), counter, i);
    }
}

permuteUsingFact([1,2,3,4], 0);