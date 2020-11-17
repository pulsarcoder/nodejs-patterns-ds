const swap = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}
// bubbleSorting
const sortArr = (arr, counter) => {
    console.log('counter');
    if (counter === arr.length - 1) {
        return arr;
    }
    let swapped = false;
    for (let i = counter + 1; i < arr.length; i++) {
        console.log('counter');
        if (arr[counter] > arr[i]) {
            swap(arr, counter, i);
            swapped = true;
        }
    }
    return !swapped ? arr : sortArr(arr, counter + 1);
}

// console.log(sortArr([8, 7, 6, 5, 4, 3, 2, 1], 0)); // O(n^2)

// quick sorting

const quicksort = (arr, first, last) => {
    console.log('first, last => ', first, last);
    if (first < last) {
        const pivotIdx = partition(arr, first, last);
        // console.log('pivot index => ', pivotIdx);
        quicksort(arr, first, pivotIdx - 1);
        quicksort(arr, pivotIdx + 1, last);
    }
    return arr;
}

const partition = (arr, first, last) => {
    //console.log('partition first, last ', first, last);
    const pivot = arr[last]; // best is to pick random index instead of last
    let i = first;
    for (let j = first; j <= last; j++) {
        //console.log('arr[i], arr[j] => ', arr[i], arr[j]);
        if (arr[i] > arr[j]) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, last);
    return i; // index of pivot
}
const array = [8, 7, 6, 5, 4, 3, 2, 1];
// console.log(quicksort(array, 0, array.length - 1));

const findMax = (arr, max, counter) => { // O(n)
    console.log('counter => ', counter, max);
    if (counter === arr.length - 1) {
        return max;
    }
    console.log('arr[counter] > arr[counter + 1]', arr[counter], arr[counter + 1]);
    if (arr[counter] < arr[counter + 1]) {
        max = arr[counter + 1];
    }
    return findMax(arr, max, counter + 1);
}

const checkRecursion = (counter, loopOf = 'first') => {
    if (counter < 5) {
        console.log('counter of loop => ', counter, loopOf);
        checkRecursion(counter + 1, 'first');
        console.log('counter in unwind first => ', counter);
        checkRecursion(counter + 1, 'second');
        console.log('counter in unwind second => ', counter);
        // checkRecursion(counter + 1);
        // console.log('counter in unwind third => ', counter);
    } else {
        console.log('end')
    }
}

/**
 * Recursion method stack of checkRecursion
 * 
 * 0 -> counter = 0
 * 1 -> counter = 1
 * 2 -> counter = 2
 * 3 -> counter = 3
 * 4 -> counter = 4 ----------------> base case
 * unwind counter 3 first
 * 4 -> counter = 4 ----------------> base case -> second recur
 * unwind counter 3 second -> 3 unwind is over
 * unwind counter 2 first
 * 3 -> counter = 3 second
 * 4 -> counter = 4 first ----------------> base case
 * unwind counter 3 first
 * 4 -> counter = 4 second ----------------> base case
 * 
 * 
 */

checkRecursion(0);

// console.log('maximum is => ', findMax([2,3,5,1,6,9,10], -1, 0));