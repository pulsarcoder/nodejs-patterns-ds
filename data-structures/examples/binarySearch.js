/**
 * Binary Search
 * 
 * Consider the input array is sorted
 * 
 * 1. Compare x wth the mid element
 * 2. if x matches with middle element we return mid index;
 * 3. Else if x > mid element we recur the right array elements
 * 4. Else if x < mid element we recur the left array elements
 */

const binarySearch = (arr, value, left, right) => { // O(log n)
    if (arr[arr.length - 1] < value)
        return -1;
    console.log('value, left, right => ', value, left, right);
    const mid = Math.round((left + right - 1) / 2);
    console.log('mid, arr[mid] => ', mid, arr[mid]);
    if (arr[mid] === value) {
        return mid;
    }

    if (arr[mid] < value) { // value is in right
        return binarySearch(arr, value, mid + 1, right);
    }
    if (arr[mid] > value) { // value is in left
        return binarySearch(arr, value, left, mid - 1);
    }

    return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], 18, 0, 15));