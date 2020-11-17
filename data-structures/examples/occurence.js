const array = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9];

const firstOccurrence = (arr, first, last, k, foundIndex) => {
    if (first < last) {
        const mid = parseInt((first + last) / 2, 10);
        if (arr[mid] === k) {
            foundIndex = mid;
            return firstOccurrence(arr, first, mid - 1, k, foundIndex);
        } else if (arr[mid] > k) {
            return firstOccurrence(arr, first, mid - 1, k, foundIndex);
        }
        return firstOccurrence(arr, mid + 1, last, k, foundIndex);
    }
    return foundIndex;
};

const lastOccurrence = (arr, first, last, k, foundIndex) => {
    if (first < last) {
        const mid = parseInt((first + last) / 2, 10);
        if (arr[mid] === k) {
            foundIndex = mid;
            return lastOccurrence(arr, mid + 1, last, k, foundIndex);
        } else if (arr[mid] > k) {
            return lastOccurrence(arr, first, mid - 1, k, foundIndex);
        }
        return lastOccurrence(arr, mid + 1, last, k, foundIndex);
    }
    return foundIndex;
}

console.log('first occurrence of 3 is ',firstOccurrence(array, 0, array.length, 3, -1));
console.log('last occurrence of 3 is ', lastOccurrence(array, 0, array.length, 9, -1));

const occursKTimes = (arr, first, last, k, foundTimes) => {
    if (first < last) {
        const mid = parseInt((first + last) / 2, 10);
        console.log('middle element => ', arr[mid], mid);
        if (arr[mid] === k) {
            console.log('foundTimes => ', foundTimes);
            return occursKTimes(arr, first, mid - 1, k, foundTimes + 1);
        }
        if (arr[mid] > k) {
            return occursKTimes(arr, first, mid - 1, k, foundTimes);
        }
        return occursKTimes(arr, mid + 1, last, k, foundTimes);
    }
    return foundTimes;
}
console.log('occurs no of times ', occursKTimes(array, 0, array.length, 3, 0));

